/**
 * Reusable request guard utilities for API routes.
 *
 * Provides:
 *  - IP extraction (Vercel-aware)
 *  - Body size enforcement
 *  - Content-type enforcement
 *  - Rate-limit response helper
 *  - Safe error response helper (never leaks internals)
 *  - Secret/bearer auth check for internal endpoints
 */

import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, type RateLimitConfig } from "./rateLimit";

// ── IP extraction ─────────────────────────────────────────────────────────

/**
 * Extract the real client IP, respecting Vercel's forwarded headers.
 * Falls back to "unknown" — never throws.
 */
export function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

// ── Body size guard ───────────────────────────────────────────────────────

const DEFAULT_MAX_BODY_BYTES = 16_384; // 16 KB

/**
 * Read and parse the request body, enforcing a maximum byte size.
 * Returns a typed result — never throws.
 */
export async function readJsonBody<T = unknown>(
  req: NextRequest,
  maxBytes = DEFAULT_MAX_BODY_BYTES,
): Promise<{ ok: true; data: T } | { ok: false; status: number; error: string }> {
  const contentLength = req.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > maxBytes) {
    return { ok: false, status: 413, error: "Payload too large." };
  }

  let text: string;
  try {
    // Clone so the body can be read once
    const clone = req.clone();
    text = await clone.text();
  } catch {
    return { ok: false, status: 400, error: "Could not read request body." };
  }

  if (text.length > maxBytes) {
    return { ok: false, status: 413, error: "Payload too large." };
  }

  try {
    return { ok: true, data: JSON.parse(text) as T };
  } catch {
    return { ok: false, status: 422, error: "Invalid JSON." };
  }
}

// ── Content-type guard ────────────────────────────────────────────────────

/**
 * Returns an error response if the request Content-Type is not
 * application/json.  Pass null to skip the check.
 */
export function requireJsonContentType(
  req: NextRequest,
): NextResponse | null {
  const ct = req.headers.get("content-type") ?? "";
  if (!ct.includes("application/json")) {
    return NextResponse.json(
      { error: "Content-Type must be application/json." },
      { status: 415 },
    );
  }
  return null;
}

// ── Rate-limit helper ─────────────────────────────────────────────────────

/**
 * Apply a rate limit for the given IP.  Returns a 429 NextResponse if the
 * limit is exceeded, or null if the request is allowed.
 */
export function applyRateLimit(
  config: RateLimitConfig,
  ip: string,
): NextResponse | null {
  const result = checkRateLimit(config, ip);
  if (!result.allowed) {
    console.warn(
      `[security/rate-limit] blocked namespace=${config.namespace} ip=${ip} retryAfter=${result.retryAfterSec}s`,
    );
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(result.retryAfterSec),
          "X-RateLimit-Limit": String(config.max),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.ceil(result.resetAt / 1000)),
        },
      },
    );
  }
  return null;
}

// ── Auth guard for internal/admin endpoints ───────────────────────────────

/**
 * Validate a Bearer token or a query-string secret against
 * the INTERNAL_API_SECRET env var.
 *
 * Usage:
 *   const denied = requireInternalSecret(req);
 *   if (denied) return denied;
 */
export function requireInternalSecret(req: NextRequest): NextResponse | null {
  const secret = process.env.INTERNAL_API_SECRET;
  if (!secret) {
    // Secret not configured — block all access in production, allow in dev
    if (process.env.NODE_ENV === "production") {
      console.warn("[security/auth] INTERNAL_API_SECRET not set — blocking request");
      return NextResponse.json({ error: "Not found." }, { status: 404 });
    }
    return null;
  }

  const authHeader = req.headers.get("authorization") ?? "";
  const bearerToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  const querySecret = new URL(req.url).searchParams.get("secret") ?? "";

  if (bearerToken !== secret && querySecret !== secret) {
    console.warn("[security/auth] invalid secret on internal endpoint");
    // Return 404 to avoid leaking that the endpoint exists
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  return null;
}

// ── Safe error response ───────────────────────────────────────────────────

/**
 * Return a safe 500 response.  In development the real message is included;
 * in production only a generic message is returned.
 */
export function internalError(err: unknown, context: string): NextResponse {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`[security/internal-error] context=${context}`, msg);
  const body =
    process.env.NODE_ENV === "development"
      ? { error: `Internal server error: ${msg}` }
      : { error: "Internal server error." };
  return NextResponse.json(body, { status: 500 });
}

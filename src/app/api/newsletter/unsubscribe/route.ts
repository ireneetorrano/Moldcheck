import { NextRequest, NextResponse } from "next/server";
import { unsubscribeByToken } from "@backend/newsletter/service";
import {
  getClientIp,
  readJsonBody,
  requireJsonContentType,
  applyRateLimit,
  internalError,
} from "@/lib/security/requestGuard";
import { LIMITS } from "@/lib/security/rateLimit";

// Token format: UUID v4 (36 chars) — reject anything else immediately
const TOKEN_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function POST(req: NextRequest) {
  // 1. Rate limit — 10 per IP per 60 s
  const ip = getClientIp(req);
  const limited = applyRateLimit(LIMITS.unsubscribe, ip);
  if (limited) return limited;

  // 2. Content-type
  const ctError = requireJsonContentType(req);
  if (ctError) return ctError;

  // 3. Body size + JSON parse (max 1 KB — only a token field)
  const bodyResult = await readJsonBody<{ token?: unknown }>(req, 1_024);
  if (!bodyResult.ok) {
    return NextResponse.json({ error: bodyResult.error }, { status: bodyResult.status });
  }

  // 4. Token validation
  const token =
    typeof bodyResult.data.token === "string" ? bodyResult.data.token.trim() : "";
  if (!token) {
    return NextResponse.json({ error: "Token is required." }, { status: 400 });
  }
  if (!TOKEN_RE.test(token)) {
    return NextResponse.json({ error: "Invalid token format." }, { status: 400 });
  }

  // 5. Process
  try {
    const result = await unsubscribeByToken(token);
    return NextResponse.json({ status: result.status });
  } catch (err) {
    return internalError(err, "newsletter/unsubscribe");
  }
}

export function GET() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PUT() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function DELETE() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PATCH() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }

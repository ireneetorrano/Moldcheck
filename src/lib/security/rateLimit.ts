/**
 * Edge-compatible sliding-window rate limiter.
 *
 * Uses an in-process LRU-style Map as the backing store — suitable for
 * single-instance deployments and local dev.  On Vercel (serverless /
 * edge), each invocation may be a fresh isolate, so limits are per-instance.
 * For true cross-instance limiting wire RATE_LIMIT_KV_URL to a Redis/Upstash
 * endpoint and swap the store implementation below.
 *
 * Configuration via env vars (all optional, sensible defaults):
 *   RATE_LIMIT_CONTACT_MAX      default 5
 *   RATE_LIMIT_CONTACT_WINDOW   default 60  (seconds)
 *   RATE_LIMIT_SUBSCRIBE_MAX    default 5
 *   RATE_LIMIT_SUBSCRIBE_WINDOW default 60
 *   RATE_LIMIT_UNSUBSCRIBE_MAX  default 10
 *   RATE_LIMIT_UNSUBSCRIBE_WINDOW default 60
 *   RATE_LIMIT_CALCULATOR_MAX   default 20
 *   RATE_LIMIT_CALCULATOR_WINDOW default 60
 *   RATE_LIMIT_SEARCH_MAX       default 30
 *   RATE_LIMIT_SEARCH_WINDOW    default 60
 */

interface WindowEntry {
  count: number;
  resetAt: number; // unix ms
}

// Simple bounded map — evict oldest when over cap to avoid unbounded growth
const MAX_ENTRIES = 10_000;
const store = new Map<string, WindowEntry>();

function evictIfNeeded() {
  if (store.size >= MAX_ENTRIES) {
    // Delete the first (oldest) entry
    const firstKey = store.keys().next().value;
    if (firstKey !== undefined) store.delete(firstKey);
  }
}

function getEnvInt(key: string, fallback: number): number {
  const v = process.env[key];
  if (!v) return fallback;
  const n = parseInt(v, 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

export interface RateLimitConfig {
  /** Unique namespace for this limiter (e.g. "contact") */
  namespace: string;
  /** Max requests allowed in the window */
  max: number;
  /** Window size in seconds */
  windowSec: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number; // unix ms
  retryAfterSec: number;
}

/**
 * Check and increment the rate limit counter for a given key.
 * The key is typically an IP address, optionally combined with a secondary
 * identifier (e.g. email hash) for tighter per-user limits.
 */
export function checkRateLimit(
  config: RateLimitConfig,
  key: string,
): RateLimitResult {
  const storeKey = `${config.namespace}:${key}`;
  const now = Date.now();
  const windowMs = config.windowSec * 1000;

  let entry = store.get(storeKey);

  if (!entry || now >= entry.resetAt) {
    // New window
    evictIfNeeded();
    entry = { count: 1, resetAt: now + windowMs };
    store.set(storeKey, entry);
    return {
      allowed: true,
      remaining: config.max - 1,
      resetAt: entry.resetAt,
      retryAfterSec: 0,
    };
  }

  entry.count += 1;
  store.set(storeKey, entry);

  const allowed = entry.count <= config.max;
  const remaining = Math.max(0, config.max - entry.count);
  const retryAfterSec = allowed ? 0 : Math.ceil((entry.resetAt - now) / 1000);

  return { allowed, remaining, resetAt: entry.resetAt, retryAfterSec };
}

// ── Pre-configured limiters ───────────────────────────────────────────────

export const LIMITS = {
  contact: {
    namespace: "contact",
    max: getEnvInt("RATE_LIMIT_CONTACT_MAX", 5),
    windowSec: getEnvInt("RATE_LIMIT_CONTACT_WINDOW", 60),
  },
  subscribe: {
    namespace: "subscribe",
    max: getEnvInt("RATE_LIMIT_SUBSCRIBE_MAX", 5),
    windowSec: getEnvInt("RATE_LIMIT_SUBSCRIBE_WINDOW", 60),
  },
  unsubscribe: {
    namespace: "unsubscribe",
    max: getEnvInt("RATE_LIMIT_UNSUBSCRIBE_MAX", 10),
    windowSec: getEnvInt("RATE_LIMIT_UNSUBSCRIBE_WINDOW", 60),
  },
  calculator: {
    namespace: "calculator",
    max: getEnvInt("RATE_LIMIT_CALCULATOR_MAX", 20),
    windowSec: getEnvInt("RATE_LIMIT_CALCULATOR_WINDOW", 60),
  },
  search: {
    namespace: "search",
    max: getEnvInt("RATE_LIMIT_SEARCH_MAX", 30),
    windowSec: getEnvInt("RATE_LIMIT_SEARCH_WINDOW", 60),
  },
} satisfies Record<string, RateLimitConfig>;

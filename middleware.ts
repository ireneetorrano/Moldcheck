import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/lib/i18n/routing";
import { MIDDLEWARE_SECURITY_HEADERS } from "@/lib/security/headers";

// ── Bot / scanner path blocklist ──────────────────────────────────────────
// Paths that bots commonly probe and that should never reach the app.
// Matched as exact path or prefix.  Returns 404 cheaply without rendering.
const BOT_PATH_PREFIXES = [
  "/wp-admin",
  "/wp-login",
  "/wp-content",
  "/wp-includes",
  "/admin",
  "/phpmyadmin",
  "/pma",
  "/.env",
  "/.git",
  "/config",
  "/xmlrpc",
  "/cgi-bin",
  "/shell",
  "/eval",
  "/boaform",
  "/GponForm",
];

const BOT_PATH_EXACT = new Set([
  "/index.php",
  "/admin.php",
  "/login.php",
  "/setup.php",
  "/install.php",
  "/readme.html",
  "/license.txt",
  "/web.config",
]);

function isBotPath(pathname: string): boolean {
  const lower = pathname.toLowerCase();
  if (BOT_PATH_EXACT.has(lower)) return true;
  return BOT_PATH_PREFIXES.some((p) => lower.startsWith(p));
}

// ── Security header helper ────────────────────────────────────────────────

function addSecurityHeaders(res: NextResponse): NextResponse {
  for (const [key, value] of Object.entries(MIDDLEWARE_SECURITY_HEADERS)) {
    res.headers.set(key, value);
  }
  return res;
}

// ── next-intl middleware (handles locale routing) ─────────────────────────

const intlMiddleware = createMiddleware(routing);

// ── Main middleware ───────────────────────────────────────────────────────

export default function middleware(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;

  // 1. Reject known bot/scanner paths cheaply — before any rendering
  if (isBotPath(pathname)) {
    console.info(`[middleware] bot path rejected: ${pathname}`);
    return addSecurityHeaders(
      new NextResponse(null, { status: 404 }),
    );
  }

  // 2. Run next-intl locale routing
  const res = intlMiddleware(req) as NextResponse;

  // 3. Add security headers to every response
  addSecurityHeaders(res);

  return res;
}

export const config = {
  // Match all paths except Next.js internals and static files
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icons/|img/|flags/|checklists/).*)",
  ],
};

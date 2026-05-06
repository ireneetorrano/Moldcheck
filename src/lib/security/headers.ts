/**
 * Security headers for MoldCheck.pt
 *
 * Applied via next.config.ts (static headers) and middleware (dynamic).
 * CSP is intentionally permissive for the inline styles/scripts that
 * Next.js and next-intl require — tighten further once a nonce strategy
 * is in place.
 */

export interface SecurityHeader {
  key: string;
  value: string;
}

/**
 * Headers applied to every response via next.config.ts headers().
 * These are static and do not require middleware.
 */
export const STATIC_SECURITY_HEADERS: SecurityHeader[] = [
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },

  // Disallow framing from other origins
  { key: "X-Frame-Options", value: "SAMEORIGIN" },

  // Minimal referrer leakage
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Disable browser features not used by the app
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },

  // HSTS — only effective over HTTPS; safe to set, ignored over HTTP
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // CSP — allows Next.js inline scripts/styles, Vercel analytics, and
  // the Sanity CDN for images.  'unsafe-inline' for styles is required
  // by Next.js CSS-in-JS; remove once a nonce strategy is implemented.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: self + Next.js inline bootstrap + Vercel analytics + Google Analytics
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com",
      // Styles: self + inline (required by Next.js)
      "style-src 'self' 'unsafe-inline'",
      // Images: self + data URIs + Sanity CDN + any HTTPS source for user-uploaded images
      "img-src 'self' data: https://cdn.sanity.io https:",
      // Fonts: self
      "font-src 'self'",
      // Connections: self + Supabase + Resend + Brevo + Vercel analytics + Google Analytics
      "connect-src 'self' https://*.supabase.co https://api.resend.com https://api.brevo.com https://vitals.vercel-insights.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
      // Frames: none
      "frame-src 'none'",
      // Objects: none
      "object-src 'none'",
      // Base URI: self only
      "base-uri 'self'",
      // Form actions: self only
      "form-action 'self'",
      // Upgrade insecure requests in production
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

/**
 * Headers added by middleware on every response (can be dynamic).
 * Must include CSP because middleware responses take precedence over
 * next.config.ts static headers — the static headers never reach
 * responses that pass through the intl middleware.
 */
export const MIDDLEWARE_SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Content-Security-Policy": [
    "default-src 'self'",
    // Scripts: self + Next.js inline bootstrap + Vercel analytics + Google Analytics
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com",
    // Styles: self + inline (required by Next.js)
    "style-src 'self' 'unsafe-inline'",
    // Images: self + data URIs + Sanity CDN + GA pixel + GTM
    "img-src 'self' data: https://cdn.sanity.io https://www.google-analytics.com https://www.googletagmanager.com https:",
    // Fonts: self
    "font-src 'self'",
    // Connections: self + Supabase + Resend + Brevo + Vercel analytics + Google Analytics
    "connect-src 'self' https://*.supabase.co https://api.resend.com https://api.brevo.com https://vitals.vercel-insights.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
    // Frames: none
    "frame-src 'none'",
    // Objects: none
    "object-src 'none'",
    // Base URI: self only
    "base-uri 'self'",
    // Form actions: self only
    "form-action 'self'",
    // Upgrade insecure requests in production
    "upgrade-insecure-requests",
  ].join("; "),
};

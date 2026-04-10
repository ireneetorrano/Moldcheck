import { NextRequest, NextResponse } from "next/server";
import {
  getClientIp,
  readJsonBody,
  requireJsonContentType,
  applyRateLimit,
} from "@/lib/security/requestGuard";
import { checkRateLimit } from "@/lib/security/rateLimit";

// Checkout gets a tighter limit — 3 attempts per IP per 60 s
const CHECKOUT_LIMIT = {
  namespace: "checkout",
  max: parseInt(process.env.RATE_LIMIT_CHECKOUT_MAX ?? "3", 10),
  windowSec: parseInt(process.env.RATE_LIMIT_CHECKOUT_WINDOW ?? "60", 10),
};

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const rl = checkRateLimit(CHECKOUT_LIMIT, ip);
  if (!rl.allowed) {
    return new NextResponse(
      JSON.stringify({ error: "Too many requests." }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(rl.retryAfterSec),
        },
      },
    );
  }

  const ctError = requireJsonContentType(req);
  if (ctError) return ctError;

  const bodyResult = await readJsonBody(req, 8_192);
  if (!bodyResult.ok) {
    return NextResponse.json({ error: bodyResult.error }, { status: bodyResult.status });
  }

  // TODO: implement checkout logic (Stripe PaymentIntent, etc.)
  return NextResponse.json({ error: "Checkout not yet configured." }, { status: 503 });
}

export function GET() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PUT() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function DELETE() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }

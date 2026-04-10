import { NextRequest, NextResponse } from "next/server";
import { requireInternalSecret } from "@/lib/security/requestGuard";

/**
 * Stripe webhook endpoint.
 *
 * In production, Stripe signs every webhook with a secret.
 * Set STRIPE_WEBHOOK_SECRET and verify the signature here before
 * processing any event.  Until Stripe is fully wired, this endpoint
 * is protected by INTERNAL_API_SECRET as a minimum guard.
 *
 * TODO: replace requireInternalSecret with Stripe signature verification
 * using the `stripe` SDK's `webhooks.constructEvent()`.
 */
export async function POST(req: NextRequest) {
  // Temporary guard — replace with Stripe signature check when live
  const stripeSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (stripeSecret) {
    const sig = req.headers.get("stripe-signature") ?? "";
    if (!sig) {
      console.warn("[webhooks/stripe] missing stripe-signature header");
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }
    // TODO: verify sig with stripe.webhooks.constructEvent(body, sig, stripeSecret)
  } else {
    // No Stripe secret configured — fall back to internal secret guard
    const denied = requireInternalSecret(req);
    if (denied) return denied;
  }

  // TODO: parse and handle Stripe events here
  return NextResponse.json({ received: true });
}

export function GET() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PUT() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function DELETE() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }

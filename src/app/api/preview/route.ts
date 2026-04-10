import { NextRequest, NextResponse } from "next/server";
import { requireInternalSecret } from "@/lib/security/requestGuard";

/**
 * Sanity preview endpoint — requires INTERNAL_API_SECRET.
 */
export async function GET(req: NextRequest) {
  const denied = requireInternalSecret(req);
  if (denied) return denied;

  return NextResponse.json({ ok: true });
}

export function POST() { return new NextResponse(null, { status: 405, headers: { Allow: "GET" } }); }
export function PUT() { return new NextResponse(null, { status: 405, headers: { Allow: "GET" } }); }
export function DELETE() { return new NextResponse(null, { status: 405, headers: { Allow: "GET" } }); }

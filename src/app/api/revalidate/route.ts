import { NextRequest, NextResponse } from "next/server";
import { requireInternalSecret } from "@/lib/security/requestGuard";

/**
 * Internal revalidation endpoint — requires INTERNAL_API_SECRET.
 * Called by Sanity webhooks or CI to purge Next.js cache.
 */
export async function POST(req: NextRequest) {
  const denied = requireInternalSecret(req);
  if (denied) return denied;

  // TODO: add revalidatePath / revalidateTag calls here as needed
  return NextResponse.json({ revalidated: true });
}

export function GET() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PUT() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function DELETE() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PATCH() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }

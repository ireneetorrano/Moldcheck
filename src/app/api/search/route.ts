import { NextRequest, NextResponse } from "next/server";
import { getClientIp, applyRateLimit } from "@/lib/security/requestGuard";
import { LIMITS } from "@/lib/security/rateLimit";

export async function GET(req: NextRequest) {
  // Rate limit search — 30 per IP per 60 s
  const ip = getClientIp(req);
  const limited = applyRateLimit(LIMITS.search, ip);
  if (limited) return limited;

  // Validate query param — reject empty or oversized queries
  const q = new URL(req.url).searchParams.get("q") ?? "";
  if (q.length > 200) {
    return NextResponse.json({ error: "Query too long." }, { status: 400 });
  }

  // TODO: implement real search logic here
  return NextResponse.json({ results: [] });
}

export function POST() { return new NextResponse(null, { status: 405, headers: { Allow: "GET" } }); }
export function PUT() { return new NextResponse(null, { status: 405, headers: { Allow: "GET" } }); }
export function DELETE() { return new NextResponse(null, { status: 405, headers: { Allow: "GET" } }); }

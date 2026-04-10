import { NextRequest, NextResponse } from "next/server";
import { handleNewsletterSubscribe } from "@backend/newsletter/service";
import {
  getClientIp,
  readJsonBody,
  requireJsonContentType,
  applyRateLimit,
} from "@/lib/security/requestGuard";
import { LIMITS } from "@/lib/security/rateLimit";

export async function POST(req: NextRequest) {
  // 1. Rate limit — 5 subscriptions per IP per 60 s
  const ip = getClientIp(req);
  const limited = applyRateLimit(LIMITS.subscribe, ip);
  if (limited) return limited;

  // 2. Content-type
  const ctError = requireJsonContentType(req);
  if (ctError) return ctError;

  // 3. Body size + JSON parse (max 4 KB)
  const bodyResult = await readJsonBody(req, 4_096);
  if (!bodyResult.ok) {
    return NextResponse.json({ error: bodyResult.error }, { status: bodyResult.status });
  }

  // 4. Delegate to service
  const result = await handleNewsletterSubscribe(bodyResult.data);

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error, ...(result.field ? { field: result.field } : {}) },
      { status: result.httpStatus },
    );
  }

  return NextResponse.json({ status: result.status });
}

export function GET() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PUT() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function DELETE() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PATCH() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }

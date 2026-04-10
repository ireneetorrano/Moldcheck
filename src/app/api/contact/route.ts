import { NextRequest, NextResponse } from "next/server";
import { handleContactSubmission } from "@backend/contact/service";
import {
  getClientIp,
  readJsonBody,
  requireJsonContentType,
  applyRateLimit,
} from "@/lib/security/requestGuard";
import { LIMITS } from "@/lib/security/rateLimit";

export async function POST(req: NextRequest) {
  // 1. Rate limit — 5 submissions per IP per 60 s (configurable via env)
  const ip = getClientIp(req);
  const limited = applyRateLimit(LIMITS.contact, ip);
  if (limited) return limited;

  // 2. Content-type
  const ctError = requireJsonContentType(req);
  if (ctError) return ctError;

  // 3. Body size + JSON parse (max 8 KB for a contact form)
  const bodyResult = await readJsonBody<Record<string, unknown>>(req, 8_192);
  if (!bodyResult.ok) {
    return NextResponse.json({ error: bodyResult.error }, { status: bodyResult.status });
  }

  // 4. Delegate to service (validation, DB, email)
  const result = await handleContactSubmission(bodyResult.data);

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error, ...(result.fields ? { fields: result.fields } : {}) },
      { status: result.status },
    );
  }

  return NextResponse.json({ ok: true });
}

export function GET() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PUT() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function DELETE() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PATCH() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }

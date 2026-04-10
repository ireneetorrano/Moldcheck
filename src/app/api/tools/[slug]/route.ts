import { NextRequest, NextResponse } from "next/server";
import {
  getClientIp,
  readJsonBody,
  requireJsonContentType,
  applyRateLimit,
} from "@/lib/security/requestGuard";
import { LIMITS } from "@/lib/security/rateLimit";

// Slug allowlist — only known tool slugs are accepted
const VALID_SLUGS = new Set(["humidity-calculator", "risk-calculator"]);

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  // Reject unknown tool slugs immediately
  if (!VALID_SLUGS.has(slug)) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  // Rate limit — reuse calculator limit
  const ip = getClientIp(req);
  const limited = applyRateLimit(LIMITS.calculator, ip);
  if (limited) return limited;

  // Content-type + body size
  const ctError = requireJsonContentType(req);
  if (ctError) return ctError;

  const bodyResult = await readJsonBody(req, 4_096);
  if (!bodyResult.ok) {
    return NextResponse.json({ error: bodyResult.error }, { status: bodyResult.status });
  }

  // TODO: implement tool-specific logic here
  return NextResponse.json({ ok: true });
}

export function GET() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PUT() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function DELETE() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }

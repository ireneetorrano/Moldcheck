import { NextRequest, NextResponse } from "next/server";
import { handleCalculatorCompleted } from "@backend/calculator/service";
import { upsertContact, applyTag } from "@/lib/brevo/client";
import { BrevoError } from "@/lib/brevo/types";
import { isActiveLocale } from "@/config/locales";
import type { CalculatorCompletedResponse } from "@/features/newsletter/types";
import {
  getClientIp,
  readJsonBody,
  requireJsonContentType,
  applyRateLimit,
  internalError,
} from "@/lib/security/requestGuard";
import { LIMITS } from "@/lib/security/rateLimit";

export async function POST(req: NextRequest) {
  // 1. Rate limit — 20 per IP per 60 s
  const ip = getClientIp(req);
  const limited = applyRateLimit(LIMITS.calculator, ip);
  if (limited) return limited;

  // 2. Content-type
  const ctError = requireJsonContentType(req);
  if (ctError) return ctError;

  // 3. Body size + JSON parse (max 4 KB)
  const bodyResult = await readJsonBody<Record<string, unknown>>(req, 4_096);
  if (!bodyResult.ok) {
    return NextResponse.json({ error: bodyResult.error }, { status: bodyResult.status });
  }

  const body = bodyResult.data;
  const result = await handleCalculatorCompleted(body);

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.httpStatus });
  }

  // Brevo integration
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email) {
    return NextResponse.json({ error: "Invalid email." }, { status: 422 });
  }
  const safeLocale = isActiveLocale(String(body.locale)) ? (body.locale as string) : "pt";

  try {
    await upsertContact({
      email,
      locale: safeLocale as never,
      riskScore: body.riskScore as number,
    });
    await applyTag(email, "calculator_completed");
    return NextResponse.json<CalculatorCompletedResponse>({ ok: true });
  } catch (err) {
    if (err instanceof BrevoError && err.statusCode === 409) {
      return NextResponse.json<CalculatorCompletedResponse>({ ok: true, duplicate: true });
    }
    return internalError(err, "calculator-completed/brevo");
  }
}

export function GET() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PUT() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function DELETE() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PATCH() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }

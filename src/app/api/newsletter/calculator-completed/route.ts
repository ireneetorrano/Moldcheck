import { NextRequest, NextResponse } from "next/server";
import { handleCalculatorCompleted } from "@backend/calculator/service";
import { upsertContact, applyTag } from "@/lib/brevo/client";
import { BrevoError } from "@/lib/brevo/types";
import { isActiveLocale } from "@/config/locales";
import type { CalculatorCompletedResponse } from "@/features/newsletter/types";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 422 });
  }

  const result = await handleCalculatorCompleted(body);

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.httpStatus });
  }

  // Brevo integration (legacy — will move to service in a future refactor)
  const raw = body as Record<string, unknown>;
  const email = (raw.email as string).trim();
  const safeLocale = isActiveLocale(String(raw.locale)) ? (raw.locale as string) : "pt";

  try {
    await upsertContact({
      email,
      locale: safeLocale as never,
      riskScore: raw.riskScore as number,
    });
    await applyTag(email, "calculator_completed");
    return NextResponse.json<CalculatorCompletedResponse>({ ok: true });
  } catch (err) {
    if (err instanceof BrevoError && err.statusCode === 409) {
      return NextResponse.json<CalculatorCompletedResponse>({ ok: true, duplicate: true });
    }
    console.error("[calculator-completed] Brevo error:", err);
    return NextResponse.json({ error: "ESP error" }, { status: 500 });
  }
}

export function GET() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PUT() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function DELETE() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }
export function PATCH() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }

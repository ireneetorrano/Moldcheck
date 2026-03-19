import { NextRequest, NextResponse } from "next/server";
import { handleContactSubmission } from "@backend/contact/service";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = await handleContactSubmission(body as Record<string, unknown>);

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

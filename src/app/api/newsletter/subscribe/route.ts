import { NextRequest, NextResponse } from "next/server";
import { handleNewsletterSubscribe } from "@backend/newsletter/service";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = await handleNewsletterSubscribe(body);

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error, ...(result.field ? { field: result.field } : {}) },
      { status: result.httpStatus },
    );
  }

  return NextResponse.json({ status: result.status });
}

export function GET() { return new NextResponse(null, { status: 405, headers: { Allow: "POST" } }); }

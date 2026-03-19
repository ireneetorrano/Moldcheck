import { NextRequest, NextResponse } from "next/server";
import { unsubscribeByToken } from "@backend/newsletter/service";

export async function POST(req: NextRequest) {
  let body: { token?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const token = typeof body.token === "string" ? body.token.trim() : "";
  if (!token) {
    return NextResponse.json({ error: "Token is required." }, { status: 400 });
  }

  try {
    const result = await unsubscribeByToken(token);
    return NextResponse.json({ status: result.status });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[newsletter/unsubscribe]", msg);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export function GET() {
  return new NextResponse(null, { status: 405, headers: { Allow: "POST" } });
}

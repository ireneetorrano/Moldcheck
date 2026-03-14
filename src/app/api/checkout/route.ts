import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "Checkout scaffold not configured." }, { status: 503 });
}

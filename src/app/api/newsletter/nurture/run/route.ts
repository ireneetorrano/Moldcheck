import { NextRequest, NextResponse } from "next/server";
import { getDueSubscribers, advanceNurtureStep, logNurtureSend, backfillMissingTokens } from "@backend/newsletter/nurture-supabase";
import { sendNurtureEmail, nextSendDate } from "@backend/newsletter/nurture";
import type { NewsletterLocale } from "@backend/newsletter/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  // Protect with a shared secret
  const secret = process.env.NURTURE_RUN_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "NURTURE_RUN_SECRET not configured" }, { status: 500 });
  }
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const subscribers = await getDueSubscribers();
  const results: Array<{ id: string; step: number; status: string }> = [];

  // Backfill any subscribers missing an unsubscribe token before processing
  await backfillMissingTokens().catch((e) =>
    console.warn("[nurture/run] backfillMissingTokens (non-fatal):", e)
  );

  for (const sub of subscribers) {
    const nextStep = sub.nurture_step + 1; // step to send now
    if (nextStep < 1 || nextStep > 6) continue;

    const locale = (sub.locale_preference ?? "en") as NewsletterLocale;

    try {
      const { messageId, subject } = await sendNurtureEmail({
        email: sub.email,
        locale,
        step: nextStep,
        unsubscribeToken: sub.unsubscribe_token,
      });

      const nextDate = nextSendDate(nextStep); // null after step 6
      await advanceNurtureStep(sub.id, nextStep, nextDate);

      await logNurtureSend({
        subscriberId: sub.id,
        emailNumber: nextStep,
        locale,
        subject,
        status: "sent",
        providerMessageId: messageId,
      });

      results.push({ id: sub.id, step: nextStep, status: "sent" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`[nurture/run] failed for subscriber ${sub.id}:`, msg);

      await logNurtureSend({
        subscriberId: sub.id,
        emailNumber: nextStep,
        locale,
        subject: `[error] step ${nextStep}`,
        status: "error",
        providerMessageId: null,
      }).catch(() => {});

      results.push({ id: sub.id, step: nextStep, status: "error" });
    }
  }

  return NextResponse.json({ processed: results.length, results });
}

// Allow GET for easy manual testing with curl (still requires auth)
export async function GET(req: NextRequest) {
  return POST(req);
}

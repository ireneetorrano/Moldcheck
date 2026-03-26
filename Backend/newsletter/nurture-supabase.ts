import { createClient } from "@supabase/supabase-js";
import { requireEnv } from "@backend/shared/env";

function db() {
  return createClient(requireEnv("NEXT_PUBLIC_SUPABASE_URL"), requireEnv("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: { persistSession: false },
  });
}

export interface NurtureSubscriber {
  id: string;
  email: string;
  locale_preference: string;
  nurture_step: number;
  unsubscribe_token: string | null;
}

/** Fetch subscribers due for their next nurture email */
export async function getDueSubscribers(): Promise<NurtureSubscriber[]> {
  const { data, error } = await db()
    .from("newsletter_subscribers")
    .select("id, email, locale_preference, nurture_step, unsubscribe_token")
    .eq("is_subscribed", true)
    .eq("nurture_status", "active")
    .eq("inspection_booked", false)
    .lte("nurture_next_send_at", new Date().toISOString())
    .not("nurture_next_send_at", "is", null)
    .not("unsubscribe_token", "is", null) // require token for one-click unsubscribe
    .lt("nurture_step", 6);

  if (error) throw new Error(`getDueSubscribers: ${error.message}`);
  return data ?? [];
}

/** Advance a subscriber to the next step (or mark completed after step 6) */
export async function advanceNurtureStep(
  id: string,
  nextStep: number,
  nextSendAt: Date | null,
): Promise<void> {
  const now = new Date().toISOString();
  const { error } = await db()
    .from("newsletter_subscribers")
    .update({
      nurture_step: nextStep,
      nurture_last_sent_at: now,
      nurture_next_send_at: nextSendAt ? nextSendAt.toISOString() : null,
      nurture_status: nextSendAt ? "active" : "completed",
      updated_at: now,
    })
    .eq("id", id);

  if (error) throw new Error(`advanceNurtureStep: ${error.message}`);
}

/** Initialise nurture on a new subscriber (step=1, next send = now + 3 days) */
export async function initNurture(emailNorm: string): Promise<void> {
  const now = new Date();
  const nextSend = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
  const { error } = await db()
    .from("newsletter_subscribers")
    .update({
      nurture_status: "active",
      nurture_step: 1,
      nurture_next_send_at: nextSend.toISOString(),
      nurture_last_sent_at: now.toISOString(),
      updated_at: now.toISOString(),
    })
    .eq("email_norm", emailNorm)
    .eq("nurture_step", 0); // only if not already started

  if (error) throw new Error(`initNurture: ${error.message}`);
}

/** Log a sent nurture email */
export async function logNurtureSend(opts: {
  subscriberId: string;
  emailNumber: number;
  locale: string;
  subject: string;
  status: string;
  providerMessageId?: string | null;
}): Promise<void> {
  const { error } = await db()
    .from("newsletter_nurture_log")
    .insert({
      subscriber_id: opts.subscriberId,
      email_number: opts.emailNumber,
      locale: opts.locale,
      subject: opts.subject,
      sent_at: new Date().toISOString(),
      status: opts.status,
      provider_message_id: opts.providerMessageId ?? null,
    });

  if (error) throw new Error(`logNurtureSend: ${error.message}`);
}

/**
 * Backfill unsubscribe_token for any active subscribers that are missing one.
 * Called at the start of each nurture run so no subscriber is permanently skipped.
 */
export async function backfillMissingTokens(): Promise<number> {
  const { randomBytes } = await import("crypto");
  const { data, error } = await db()
    .from("newsletter_subscribers")
    .select("id")
    .eq("is_subscribed", true)
    .is("unsubscribe_token", null);

  if (error) throw new Error(`backfillMissingTokens select: ${error.message}`);
  if (!data || data.length === 0) return 0;

  for (const row of data) {
    const token = randomBytes(32).toString("hex");
    await db()
      .from("newsletter_subscribers")
      .update({ unsubscribe_token: token, updated_at: new Date().toISOString() })
      .eq("id", row.id);
  }
  return data.length;
}

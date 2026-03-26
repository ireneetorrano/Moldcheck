import { createClient } from "@supabase/supabase-js";
import { requireEnv } from "@backend/shared/env";
import { generateUnsubscribeToken } from "./unsubscribe";
import type { NewsletterValidated } from "./schema";

function getServiceClient() {
  const url = requireEnv("NEXT_PUBLIC_SUPABASE_URL");
  const key = requireEnv("SUPABASE_SERVICE_ROLE_KEY");
  return createClient(url, key, { auth: { persistSession: false } });
}

export type UpsertResult =
  | { status: "subscribed"; email: string; unsubscribeToken: string }
  | { status: "resubscribed"; email: string; unsubscribeToken: string }
  | { status: "already_subscribed" };

export async function upsertNewsletterSubscriber(
  data: NewsletterValidated,
): Promise<UpsertResult> {
  const supabase = getServiceClient();
  const now = new Date().toISOString();

  const { data: existing, error: selectError } = await supabase
    .from("newsletter_subscribers")
    .select("id, is_subscribed, unsubscribe_token")
    .eq("email_norm", data.emailNorm)
    .maybeSingle();

  if (selectError) throw new Error(`Supabase select failed: ${selectError.message}`);

  if (existing) {
    if (existing.is_subscribed) {
      // Already active — just refresh timestamps, do NOT restart nurture
      const { error: updateError } = await supabase
        .from("newsletter_subscribers")
        .update({ last_submission_at: now, locale_preference: data.locale, updated_at: now })
        .eq("id", existing.id);
      if (updateError) throw new Error(`Supabase update failed: ${updateError.message}`);
      return { status: "already_subscribed" };
    }

    // Previously unsubscribed — allow resubscribe
    // Preserve existing token if present; generate a new one only if missing
    const token = existing.unsubscribe_token ?? generateUnsubscribeToken();
    const { data: updated, error: updateError } = await supabase
      .from("newsletter_subscribers")
      .update({
        is_subscribed: true,
        unsubscribed_at: null,
        locale_preference: data.locale,
        updated_at: now,
        last_submission_at: now,
        unsubscribe_token: token,
        nurture_step: 0,        // reset nurture so initNurture can start fresh
        nurture_status: "active",
        nurture_next_send_at: null,
        nurture_last_sent_at: null,
      })
      .eq("id", existing.id)
      .select("email")
      .single();
    if (updateError) throw new Error(`Supabase update failed: ${updateError.message}`);
    return { status: "resubscribed", email: updated.email, unsubscribeToken: token };
  }

  // New subscriber — include nurture fields
  const token = generateUnsubscribeToken();
  const { data: inserted, error: insertError } = await supabase
    .from("newsletter_subscribers")
    .insert({
      email: data.email,
      email_norm: data.emailNorm,
      locale_preference: data.locale,
      checklist_locale: data.locale,
      source_page: data.sourcePage,
      consent_accepted: true,
      is_subscribed: true,
      unsubscribe_token: token,
      subscribed_at: now,
      updated_at: now,
      last_submission_at: now,
      nurture_status: "active",
      nurture_step: 0,
    })
    .select("email")
    .single();

  if (insertError) throw new Error(`Supabase insert failed: ${insertError.message}`);
  return { status: "subscribed", email: inserted.email, unsubscribeToken: token };
}

export async function markChecklistSent(emailNorm: string): Promise<void> {
  const supabase = getServiceClient();
  const now = new Date().toISOString();

  const { error } = await supabase
    .from("newsletter_subscribers")
    .update({ checklist_sent_at: now, updated_at: now })
    .eq("email_norm", emailNorm);

  if (error) throw new Error(`Supabase markChecklistSent failed: ${error.message}`);
}

export async function getUnsubscribeToken(emailNorm: string): Promise<string | null> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("newsletter_subscribers")
    .select("unsubscribe_token")
    .eq("email_norm", emailNorm)
    .maybeSingle();
  if (error) throw new Error(`Supabase getUnsubscribeToken failed: ${error.message}`);
  return data?.unsubscribe_token ?? null;
}

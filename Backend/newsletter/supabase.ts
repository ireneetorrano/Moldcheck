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
  | { status: "subscribed"; email: string }
  | { status: "resubscribed"; email: string }
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
      // Already active — just refresh timestamps
      const { error: updateError } = await supabase
        .from("newsletter_subscribers")
        .update({ last_submission_at: now, locale_preference: data.locale, updated_at: now })
        .eq("id", existing.id);
      if (updateError) throw new Error(`Supabase update failed: ${updateError.message}`);
      return { status: "already_subscribed" };
    }

    // Previously unsubscribed — allow resubscribe
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
      })
      .eq("id", existing.id)
      .select("email")
      .single();
    if (updateError) throw new Error(`Supabase update failed: ${updateError.message}`);
    return { status: "resubscribed", email: updated.email };
  }

  // New subscriber
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
    })
    .select("email")
    .single();

  if (insertError) throw new Error(`Supabase insert failed: ${insertError.message}`);
  return { status: "subscribed", email: inserted.email };
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

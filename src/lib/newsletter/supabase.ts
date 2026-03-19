import { createClient } from "@supabase/supabase-js";
import type { NewsletterValidated } from "./schema";

function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env vars not configured");
  return createClient(url, key, { auth: { persistSession: false } });
}

export type UpsertResult =
  | { status: "subscribed" }
  | { status: "already_subscribed" };

export async function upsertNewsletterSubscriber(
  data: NewsletterValidated,
): Promise<UpsertResult> {
  const supabase = getServiceClient();
  const now = new Date().toISOString();

  // Check for existing subscriber by normalised email
  const { data: existing, error: selectError } = await supabase
    .from("newsletter_subscribers")
    .select("id, locale_preference")
    .eq("email_norm", data.emailNorm)
    .maybeSingle();

  if (selectError) {
    throw new Error(`Supabase select failed: ${selectError.message}`);
  }

  if (existing) {
    // Already subscribed — update last_submission_at and optionally locale
    const { error: updateError } = await supabase
      .from("newsletter_subscribers")
      .update({
        last_submission_at: now,
        locale_preference: data.locale,
        updated_at: now,
      })
      .eq("id", existing.id);

    if (updateError) {
      throw new Error(`Supabase update failed: ${updateError.message}`);
    }

    return { status: "already_subscribed" };
  }

  // New subscriber — insert row
  const { error: insertError } = await supabase
    .from("newsletter_subscribers")
    .insert({
      email: data.email,
      email_norm: data.emailNorm,
      locale_preference: data.locale,
      checklist_locale: data.locale,
      source_page: data.sourcePage,
      consent_accepted: true,
      subscribed_at: now,
      updated_at: now,
      last_submission_at: now,
    });

  if (insertError) {
    throw new Error(`Supabase insert failed: ${insertError.message}`);
  }

  return { status: "subscribed" };
}

export async function markChecklistSent(emailNorm: string): Promise<void> {
  const supabase = getServiceClient();
  const now = new Date().toISOString();

  const { error } = await supabase
    .from("newsletter_subscribers")
    .update({ checklist_sent_at: now, updated_at: now })
    .eq("email_norm", emailNorm);

  if (error) {
    throw new Error(`Supabase markChecklistSent failed: ${error.message}`);
  }
}

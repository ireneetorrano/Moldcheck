import { createClient } from "@supabase/supabase-js";
import { requireEnv } from "@backend/shared/env";
import { randomBytes } from "crypto";

function getServiceClient() {
  const url = requireEnv("NEXT_PUBLIC_SUPABASE_URL");
  const key = requireEnv("SUPABASE_SERVICE_ROLE_KEY");
  return createClient(url, key, { auth: { persistSession: false } });
}

export function generateUnsubscribeToken(): string {
  return randomBytes(32).toString("hex");
}

export type UnsubscribeResult =
  | { status: "unsubscribed" }
  | { status: "already_unsubscribed" }
  | { status: "invalid_token" };

export async function unsubscribeByToken(token: string): Promise<UnsubscribeResult> {
  const supabase = getServiceClient();
  const now = new Date().toISOString();

  const { data: subscriber, error: selectError } = await supabase
    .from("newsletter_subscribers")
    .select("id, is_subscribed")
    .eq("unsubscribe_token", token)
    .maybeSingle();

  if (selectError) throw new Error(`Supabase select failed: ${selectError.message}`);
  if (!subscriber) return { status: "invalid_token" };
  if (!subscriber.is_subscribed) return { status: "already_unsubscribed" };

  const { error: updateError } = await supabase
    .from("newsletter_subscribers")
    .update({
      is_subscribed: false,
      unsubscribed_at: now,
      updated_at: now,
    })
    .eq("id", subscriber.id);

  if (updateError) throw new Error(`Supabase update failed: ${updateError.message}`);
  return { status: "unsubscribed" };
}

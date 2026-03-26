import { validateNewsletterPayload, type NewsletterPayload } from "./schema";
import { upsertNewsletterSubscriber } from "./supabase";
import { initNurture } from "./nurture-supabase";
import { sendNurtureEmail } from "./nurture";
import { unsubscribeByToken } from "./unsubscribe";
import { checkEnvPresence } from "@backend/shared/env";
import type { NewsletterLocale } from "./schema";

export { unsubscribeByToken };

const REQUIRED_ENV = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
];

const DEV = process.env.NODE_ENV !== "production";

function log(...args: unknown[]) {
  console.log("[newsletter/service]", ...args);
}

export type SubscribeResult =
  | { ok: true; status: "subscribed" | "resubscribed" | "already_subscribed" }
  | { ok: false; httpStatus: number; error: string; field?: string };

export async function handleNewsletterSubscribe(
  body: unknown,
): Promise<SubscribeResult> {
  log("── request received ──────────────────────────────");

  const { ok: envOk, missing } = checkEnvPresence(REQUIRED_ENV);
  log("env vars present:", Object.fromEntries(REQUIRED_ENV.map((k) => [k, !!process.env[k]])));
  if (!envOk) {
    const msg = `Missing env vars: ${missing.join(", ")}`;
    log("ERROR:", msg);
    return { ok: false, httpStatus: 500, error: DEV ? msg : "Internal server error" };
  }

  const result = validateNewsletterPayload(body as NewsletterPayload);
  if (!result.ok) {
    log("validation failed:", result.error);
    return { ok: false, httpStatus: 422, error: result.error.message, field: result.error.field };
  }

  const { data } = result;
  log("validated — email:", data.email, "locale:", data.locale);

  let upsert: Awaited<ReturnType<typeof upsertNewsletterSubscriber>>;
  try {
    log("upserting subscriber...");
    upsert = await upsertNewsletterSubscriber(data);
    log("upsert result:", upsert.status);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    log("ERROR in upsert:", msg);
    return { ok: false, httpStatus: 500, error: DEV ? `Supabase error: ${msg}` : "Internal server error" };
  }

  if (upsert.status === "already_subscribed") {
    log("already subscribed");
    return { ok: true, status: "already_subscribed" };
  }

  // subscribed or resubscribed — token is guaranteed non-null from upsert
  const emailAddress = upsert.email;
  const unsubscribeToken = upsert.unsubscribeToken; // always a string, never null

  try {
    log("sending checklist email...");
    await sendChecklistEmail(emailAddress, data.locale as NewsletterLocale, unsubscribeToken);
    log("email sent OK");
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    log("ERROR sending email:", msg);
    return { ok: false, httpStatus: 500, error: DEV ? `Email error: ${msg}` : "Internal server error" };
  }

  try {
    await markChecklistSent(data.emailNorm);
    log("markChecklistSent OK");
  } catch (err) {
    log("WARN markChecklistSent (non-fatal):", err instanceof Error ? err.message : err);
  }

  // Kick off nurture sequence — token is guaranteed non-null
  try {
    log("sending nurture Email 1...");
    await sendNurtureEmail({
      email: emailAddress,
      locale: data.locale as NewsletterLocale,
      step: 1,
      unsubscribeToken,
    });
    await initNurture(data.emailNorm);
    log("nurture Email 1 sent, step scheduled");
  } catch (err) {
    log("WARN nurture Email 1 (non-fatal):", err instanceof Error ? err.message : err);
  }

  log("── success ───────────────────────────────────────");
  return { ok: true, status: upsert.status };
}

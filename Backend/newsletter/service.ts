import { validateNewsletterPayload, type NewsletterPayload } from "./schema";
import { upsertNewsletterSubscriber, markChecklistSent } from "./supabase";
import { sendChecklistEmail } from "./email";
import { checkEnvPresence } from "@backend/shared/env";

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
  | { ok: true; status: "subscribed" | "already_subscribed" }
  | { ok: false; httpStatus: number; error: string; field?: string };

export async function handleNewsletterSubscribe(
  body: unknown,
): Promise<SubscribeResult> {
  log("── request received ──────────────────────────────");

  // Env check
  const { ok: envOk, missing } = checkEnvPresence(REQUIRED_ENV);
  log("env vars present:", Object.fromEntries(REQUIRED_ENV.map((k) => [k, !!process.env[k]])));
  if (!envOk) {
    const msg = `Missing env vars: ${missing.join(", ")}`;
    log("ERROR:", msg);
    return { ok: false, httpStatus: 500, error: DEV ? msg : "Internal server error" };
  }

  // Validate
  const result = validateNewsletterPayload(body as NewsletterPayload);
  if (!result.ok) {
    log("validation failed:", result.error);
    return { ok: false, httpStatus: 422, error: result.error.message, field: result.error.field };
  }

  const { data } = result;
  log("validated — email:", data.email, "locale:", data.locale);

  // Supabase upsert
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

  // Send email
  try {
    log("sending checklist email...");
    await sendChecklistEmail(data.email, data.locale);
    log("email sent OK");
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    log("ERROR sending email:", msg);
    return { ok: false, httpStatus: 500, error: DEV ? `Email error: ${msg}` : "Internal server error" };
  }

  // Mark checklist sent (non-fatal)
  try {
    await markChecklistSent(data.emailNorm);
    log("markChecklistSent OK");
  } catch (err) {
    log("WARN markChecklistSent (non-fatal):", err instanceof Error ? err.message : err);
  }

  log("── success ───────────────────────────────────────");
  return { ok: true, status: "subscribed" };
}

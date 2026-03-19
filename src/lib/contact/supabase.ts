import { createClient } from "@supabase/supabase-js";

function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env vars not configured");
  return createClient(url, key, { auth: { persistSession: false } });
}

export interface ContactSubmission {
  full_name: string;
  email: string;
  country_prefix: string;
  phone_number: string;
  municipality: string;
  message: string;
  consent_accepted: boolean;
  source_page: string;
  created_at: string;
}

export async function insertContactSubmission(data: ContactSubmission): Promise<void> {
  const supabase = getServiceClient();
  const { error } = await supabase.from("contact_submissions").insert(data);
  if (error) throw new Error(`Supabase insert failed: ${error.message}`);
}

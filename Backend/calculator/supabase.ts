import { createClient } from "@supabase/supabase-js";
import { requireEnv } from "@backend/shared/env";

function getServiceClient() {
  const url = requireEnv("NEXT_PUBLIC_SUPABASE_URL");
  const key = requireEnv("SUPABASE_SERVICE_ROLE_KEY");
  return createClient(url, key, { auth: { persistSession: false } });
}

export interface CalculatorResult {
  email: string;
  locale: string;
  risk_score: number;
  created_at: string;
}

export async function insertCalculatorResult(data: CalculatorResult): Promise<void> {
  const supabase = getServiceClient();
  const { error } = await supabase.from("calculator_results").insert(data);
  if (error) throw new Error(`Supabase insert failed: ${error.message}`);
}

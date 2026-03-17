"use client";

import { useState } from "react";
import type { ActiveLocale } from "@/config/locales";
import type { CalculatorCompletedPayload, ApiErrorResponse } from "@/features/newsletter/types";

type Status = "idle" | "loading" | "success" | "error";

export function useCalculatorSubmit() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(payload: CalculatorCompletedPayload): Promise<void> {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/newsletter/calculator-completed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        return;
      }
      const data = (await res.json()) as ApiErrorResponse;
      setError(data.error ?? "Unknown error");
      setStatus("error");
    } catch {
      setError("Network error");
      setStatus("error");
    }
  }

  return { status, error, submit };
}

export type { ActiveLocale };

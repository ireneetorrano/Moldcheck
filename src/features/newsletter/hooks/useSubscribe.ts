"use client";

import { useState } from "react";
import type { ActiveLocale } from "@/config/locales";
import type { SubscribePayload, SubscribeResponse, ApiErrorResponse } from "../types";

export type SubscribeStatus = "idle" | "loading" | "subscribed" | "already_subscribed" | "error";

export function useSubscribe() {
  const [status, setStatus] = useState<SubscribeStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(payload: SubscribePayload): Promise<void> {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = (await res.json()) as SubscribeResponse;
        setStatus(data.status === "already_subscribed" ? "already_subscribed" : "subscribed");
        return;
      }

      let errorMsg = "Unknown error";
      try {
        const data = (await res.json()) as ApiErrorResponse;
        errorMsg = data.error ?? errorMsg;
      } catch { /* ignore parse failure */ }
      setError(errorMsg);
      setStatus("error");
    } catch {
      setError("Network error");
      setStatus("error");
    }
  }

  return { status, error, submit };
}

export type { ActiveLocale };

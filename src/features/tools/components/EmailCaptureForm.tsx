"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { ActiveLocale } from "@/config/locales";
import type { RiskBand } from "../types";
import { useCalculatorSubmit } from "../hooks/useCalculatorSubmit";

interface EmailCaptureFormProps {
  locale: ActiveLocale;
  score: number;
  band: RiskBand;
  onSkip: () => void;
  onSuccess: () => void;
}

export function EmailCaptureForm({ locale, score, band, onSkip, onSuccess }: EmailCaptureFormProps) {
  const t = useTranslations("Calculator");
  const { status, error, submit } = useCalculatorSubmit();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(t("errorInvalidEmail"));
      return;
    }
    setEmailError(null);
    await submit({ email, locale, riskScore: score });
    if (status !== "error") onSuccess();
  }

  if (status === "success") {
    return <p className="text-sm text-green-700">{t("emailCaptureSuccess")}</p>;
  }

  return (
    <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
      <p className="text-sm font-semibold text-gray-800">{t("emailCaptureTitle")}</p>
      <p className="mt-1 text-xs text-gray-500">{t("emailCaptureBody")}</p>

      {status === "error" && error && (
        <p className="mt-2 text-xs text-amber-700" role="alert">
          {t("emailCaptureError")}
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-3 flex flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            aria-invalid={!!emailError}
          />
          {emailError && (
            <p className="mt-1 text-xs text-red-600" role="alert">
              {emailError}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {status === "loading" ? "…" : t("emailCaptureSubmit")}
        </button>
      </form>

      <button
        type="button"
        onClick={onSkip}
        className="mt-3 text-xs text-gray-400 underline hover:text-gray-600"
      >
        {t("emailCaptureSkip")}
      </button>
    </div>
  );
}

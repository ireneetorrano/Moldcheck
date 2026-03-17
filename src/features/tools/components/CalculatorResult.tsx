"use client";

import { useTranslations } from "next-intl";
import type { ActiveLocale } from "@/config/locales";
import type { RiskBand } from "../types";
import { EmailCaptureForm } from "./EmailCaptureForm";

const BAND_COLORS: Record<RiskBand, string> = {
  low: "text-green-700 bg-green-50 border-green-200",
  medium: "text-amber-700 bg-amber-50 border-amber-200",
  high: "text-red-700 bg-red-50 border-red-200",
};

interface CalculatorResultProps {
  locale: ActiveLocale;
  score: number;
  band: RiskBand;
  onEmailCapture: () => void;
  onSkip: () => void;
  emailCaptured: boolean;
}

export function CalculatorResult({
  locale,
  score,
  band,
  onEmailCapture,
  onSkip,
  emailCaptured,
}: CalculatorResultProps) {
  const t = useTranslations("Calculator");

  const bandLabelKey = `resultBand${band.charAt(0).toUpperCase()}${band.slice(1)}` as
    | "resultBandLow"
    | "resultBandMedium"
    | "resultBandHigh";

  const bandDescKey = `resultBand${band.charAt(0).toUpperCase()}${band.slice(1)}Desc` as
    | "resultBandLowDesc"
    | "resultBandMediumDesc"
    | "resultBandHighDesc";

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">{t("resultTitle")}</h2>

      <div className={`rounded-lg border p-5 ${BAND_COLORS[band]}`}>
        <p className="text-2xl font-bold">
          {score} <span className="text-base font-normal">/ 100</span>
        </p>
        <p className="mt-1 text-sm font-semibold">{t(bandLabelKey)}</p>
        <p className="mt-2 text-sm">{t(bandDescKey)}</p>
      </div>

      {!emailCaptured && (
        <EmailCaptureForm
          locale={locale}
          score={score}
          band={band}
          onSuccess={onEmailCapture}
          onSkip={onSkip}
        />
      )}
    </div>
  );
}

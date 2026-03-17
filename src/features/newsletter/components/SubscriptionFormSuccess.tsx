"use client";

import { useTranslations } from "next-intl";

export function SubscriptionFormSuccess() {
  const t = useTranslations("Newsletter");
  return (
    <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
      <p className="text-lg font-semibold text-green-800">{t("successTitle")}</p>
      <p className="mt-2 text-sm text-green-700">{t("successBody")}</p>
    </div>
  );
}

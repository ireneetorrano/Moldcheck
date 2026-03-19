"use client";

import { useTranslations } from "next-intl";

export function SubscriptionFormSuccess() {
  const t = useTranslations("Newsletter");
  return (
    <div className="sub-form__result sub-form__result--success" role="status">
      <p className="sub-form__result-title">{t("successTitle")}</p>
      <p className="sub-form__result-body">{t("successBody")}</p>
    </div>
  );
}

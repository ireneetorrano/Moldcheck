"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { ActiveLocale } from "@/config/locales";

type State = "confirm" | "loading" | "success" | "already" | "invalid" | "error";

interface Props {
  locale: ActiveLocale;
  token: string;
}

export function UnsubscribePage({ token }: Props) {
  const t = useTranslations("Unsubscribe");
  const [state, setState] = useState<State>(token ? "confirm" : "invalid");

  async function handleConfirm() {
    setState("loading");
    try {
      const res = await fetch("/api/newsletter/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const json = await res.json();
      if (!res.ok) {
        setState("error");
        return;
      }
      if (json.status === "unsubscribed") setState("success");
      else if (json.status === "already_unsubscribed") setState("already");
      else if (json.status === "invalid_token") setState("invalid");
      else setState("error");
    } catch {
      setState("error");
    }
  }

  return (
    <main className="unsubscribe-page">
      <div className="unsubscribe-page__card">
        {state === "confirm" && (
          <>
            <h1 className="unsubscribe-page__heading">{t("heading")}</h1>
            <p className="unsubscribe-page__body">{t("body")}</p>
            <button
              className="unsubscribe-page__btn"
              onClick={handleConfirm}
            >
              {t("confirmButton")}
            </button>
          </>
        )}

        {state === "loading" && (
          <p className="unsubscribe-page__body unsubscribe-page__body--muted">…</p>
        )}

        {state === "success" && (
          <>
            <h1 className="unsubscribe-page__heading">{t("successTitle")}</h1>
            <p className="unsubscribe-page__body">{t("successBody")}</p>
          </>
        )}

        {state === "already" && (
          <p className="unsubscribe-page__body">{t("alreadyUnsubscribed")}</p>
        )}

        {(state === "invalid" || state === "error") && (
          <p className="unsubscribe-page__body">{t("invalidToken")}</p>
        )}
      </div>
    </main>
  );
}

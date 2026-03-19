import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { isActiveLocale, type ActiveLocale } from "@/config/locales";
import { notFound } from "next/navigation";
import { UnsubscribePage } from "@/features/newsletter/components/UnsubscribePage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isActiveLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: "Unsubscribe" });
  return { title: t("pageTitle"), robots: { index: false, follow: false } };
}

export default async function NewsletterUnsubscribePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { locale } = await params;
  if (!isActiveLocale(locale)) notFound();
  const { token } = await searchParams;

  return <UnsubscribePage locale={locale as ActiveLocale} token={token ?? ""} />;
}

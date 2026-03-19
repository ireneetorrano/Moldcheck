import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { isActiveLocale, type ActiveLocale } from "@/config/locales";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollReset } from "@/components/layout/ScrollReset";
import { BackToTop } from "@/components/layout/BackToTop";
import { ReloadRedirect } from "@/components/layout/ReloadRedirect";

const localeSiteTitle: Record<ActiveLocale, string> = {
  pt: "MoldCheck — Informação Independente sobre Bolor em Portugal",
  en: "MoldCheck — Independent Information on Mold and Damp in Portugal",
  fr: "MoldCheck — Information Indépendante sur les Moisissures au Portugal",
  de: "MoldCheck — Unabhängige Informationen über Schimmel in Portugal",
  nl: "MoldCheck — Onafhankelijke Informatie over Schimmel in Portugal",
  it: "MoldCheck — Informazione Indipendente sulla Muffa in Portogallo",
  es: "MoldCheck — Información Independiente sobre Moho en Portugal",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isActiveLocale(locale)) return {};
  return {
    title: {
      default: localeSiteTitle[locale],
      template: `%s — MoldCheck`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isActiveLocale(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale as ActiveLocale} messages={messages}>
      <div className="app-shell">
        <ScrollReset />
        <ReloadRedirect locale={locale} />
        <SiteHeader locale={locale as ActiveLocale} />
        {children}
        <SiteFooter locale={locale as ActiveLocale} />
        <BackToTop />
      </div>
    </NextIntlClientProvider>
  );
}

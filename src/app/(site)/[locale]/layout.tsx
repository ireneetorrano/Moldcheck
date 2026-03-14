import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { isActiveLocale, type ActiveLocale } from "@/config/locales";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

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
        <SiteHeader locale={locale as ActiveLocale} />
        {children}
        <SiteFooter locale={locale as ActiveLocale} />
      </div>
    </NextIntlClientProvider>
  );
}

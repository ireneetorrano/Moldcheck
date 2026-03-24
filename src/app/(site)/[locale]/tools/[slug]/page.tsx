import type { Metadata } from "next";
import type { ActiveLocale } from "@/config/locales";
import { HumidityCalculator } from "@/features/tools/components/HumidityCalculator";
import { PlaceholderPage } from "@/features/content/components/PlaceholderPage";
import { getCalcI18n } from "@/features/tools/lib/i18n";

interface ToolDetailPageProps {
  params: Promise<{ locale: ActiveLocale; slug: string }>;
}

export async function generateMetadata({ params }: ToolDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (slug !== "humidity-risk-calculator") return {};
  const i18n = getCalcI18n(locale);
  return {
    title: i18n.pageTitle,
    description: i18n.pageMeta,
  };
}

export default async function ToolDetailPage({ params }: ToolDetailPageProps) {
  const { locale, slug } = await params;

  if (slug === "humidity-risk-calculator") {
    return (
      <main className="calc-page">
        <HumidityCalculator locale={locale} startDirect />
      </main>
    );
  }

  return <PlaceholderPage eyebrow="Tool" title="Tool detail" description="Tool detail scaffold." />;
}

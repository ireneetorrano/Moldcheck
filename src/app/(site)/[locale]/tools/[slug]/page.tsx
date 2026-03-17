import type { ActiveLocale } from "@/config/locales";
import { HumidityCalculator } from "@/features/tools/components/HumidityCalculator";
import { PlaceholderPage } from "@/features/content/components/PlaceholderPage";

interface ToolDetailPageProps {
  params: Promise<{ locale: ActiveLocale; slug: string }>;
}

export default async function ToolDetailPage({ params }: ToolDetailPageProps) {
  const { locale, slug } = await params;

  if (slug === "humidity-risk-calculator") {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <HumidityCalculator locale={locale} />
      </main>
    );
  }

  return <PlaceholderPage eyebrow="Tool" title="Tool detail" description="Tool detail scaffold." />;
}

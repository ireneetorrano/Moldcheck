import type { ActiveLocale } from "@/config/locales";
import { GlobalPageBlocks } from "@/features/content/components/GlobalPageBlocks";
import { buildGlobalPageMetadata, getGlobalPageContent } from "@/lib/sanity/pages";
import { PageShell } from "@/components/shared/PageShell";
import { SubscriptionForm } from "@/features/newsletter/components/SubscriptionForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  return buildGlobalPageMetadata(locale, "tools");
}

export default async function ToolsPage({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  const page = await getGlobalPageContent(locale, "tools");
  return (
    <>
      <PageShell eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <GlobalPageBlocks page={page} />
      <section className="mx-auto max-w-md px-4 py-12">
        <SubscriptionForm locale={locale} />
      </section>
    </>
  );
}

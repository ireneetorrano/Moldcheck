import type { ActiveLocale } from "@/config/locales";
import { GlobalPageBlocks } from "@/features/content/components/GlobalPageBlocks";
import { buildGlobalPageMetadata, getGlobalPageContent } from "@/lib/sanity/pages";
import { PageShell } from "@/components/shared/PageShell";

export async function generateMetadata({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  return buildGlobalPageMetadata(locale, "privacy");
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  const page = await getGlobalPageContent(locale, "privacy");
  return (
    <>
      <PageShell eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <GlobalPageBlocks page={page} />
    </>
  );
}

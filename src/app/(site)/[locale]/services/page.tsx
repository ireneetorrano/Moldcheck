import type { ActiveLocale } from "@/config/locales";
import { GlobalPageBlocks } from "@/features/content/components/GlobalPageBlocks";
import { getGlobalPageContent } from "@/lib/sanity/pages";
import { PageShell } from "@/components/shared/PageShell";

export default async function ServicesPage({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  const page = await getGlobalPageContent(locale, "services");
  return (
    <>
      <PageShell eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <GlobalPageBlocks page={page} />
    </>
  );
}

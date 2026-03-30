import type { ActiveLocale } from "@/config/locales";
import { buildGlobalPageMetadata, getGlobalPageContent } from "@/lib/sanity/pages";
import { LegalPageLayout } from "@/features/content/components/LegalPageLayout";

export async function generateMetadata({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  return buildGlobalPageMetadata(locale, "privacy");
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  const page = await getGlobalPageContent(locale, "privacy");
  return <LegalPageLayout page={page} />;
}

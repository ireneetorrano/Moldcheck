import { redirect } from "next/navigation";
import { getLocalizedArticlePath } from "@/config/routeMap";
import { a4PortugalSlugs } from "@/features/content/data/articles/a4-portugal";
import type { ActiveLocale } from "@/config/locales";

export default async function PortugalDetailPage({
  params,
}: {
  params: Promise<{ locale: ActiveLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  // Always redirect to the canonical articles route
  const correctSlug = a4PortugalSlugs[locale] ?? slug;
  redirect(getLocalizedArticlePath(locale, correctSlug));
}

import type { ActiveLocale } from "@/config/locales";
import { isActiveLocale } from "@/config/locales";
import { notFound } from "next/navigation";
import { GlobalPageBlocks } from "@/features/content/components/GlobalPageBlocks";
import { buildGlobalPageMetadata, getGlobalPageContent } from "@/lib/sanity/pages";
import { TrustBar } from "@/components/layout/TrustBar";
import { HomeProblemSection } from "@/features/home/components/HomeProblemSection";
import { HomeConflictSection } from "@/features/home/components/HomeConflictSection";
import { HomeFeaturedSection } from "@/features/home/components/HomeFeaturedSection";
import { HomeNextStepsSection } from "@/features/home/components/HomeNextStepsSection";
import { HomeAboutSection } from "@/features/home/components/HomeAboutSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isActiveLocale(locale)) return {};
  return buildGlobalPageMetadata(locale, "home");
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isActiveLocale(locale)) notFound();
  const activeLocale = locale as ActiveLocale;
  const page = await getGlobalPageContent(activeLocale, "home");

  return (
    <>
      <div className="home-hero-group">
        <section className={`home-hero home-hero--${activeLocale}`}>
          <div className="home-hero__center">
            {page.eyebrow ? <p className="home-hero__eyebrow">{page.eyebrow}</p> : null}
            <h1 className="home-hero__title">{page.heroTitle ?? page.title}</h1>
            {page.heroBody ? <p className="home-hero__body">{page.heroBody}</p> : null}
            <div className="home-hero__actions">
              {page.heroPrimaryCtaLabel && page.heroPrimaryCtaHref ? (
                <a href={page.heroPrimaryCtaHref} className="hero-cta hero-cta--primary">{page.heroPrimaryCtaLabel}</a>
              ) : null}
              {page.heroSecondaryCtaLabel && page.heroSecondaryCtaHref ? (
                <a href={page.heroSecondaryCtaHref} className="hero-cta hero-cta--ghost">{page.heroSecondaryCtaLabel}</a>
              ) : null}
            </div>
          </div>
        </section>
        {page.trustBarText ? (
          <TrustBar text={page.trustBarText} />
        ) : null}
      </div>
      <HomeProblemSection locale={activeLocale} />
      <HomeConflictSection locale={activeLocale} />
      <HomeFeaturedSection locale={activeLocale} />
      <HomeNextStepsSection locale={activeLocale} />
      <HomeAboutSection locale={activeLocale} />
      <GlobalPageBlocks page={page} disclosureVariant="homepage" />
    </>
  );
}

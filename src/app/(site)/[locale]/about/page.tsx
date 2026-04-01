import type { ActiveLocale } from "@/config/locales";
import { isActiveLocale } from "@/config/locales";
import { notFound } from "next/navigation";
import { getAboutContent } from "@/features/content/data/aboutContent";
import { buildGlobalPageMetadata } from "@/lib/sanity/pages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isActiveLocale(locale)) return {};
  return buildGlobalPageMetadata(locale, "about");
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isActiveLocale(locale)) notFound();
  const c = getAboutContent(locale as ActiveLocale);
  const behindParagraphs = c.behindBody.split("\n\n").filter(Boolean);

  return (
    <div className="about-page">
      {/* ── Hero intro block ─────────────────────────────────────────────── */}
      <section className="about-hero">
        <div className="about-hero__inner">
          <p className="about-hero__eyebrow">{c.eyebrow}</p>
          <h1 className="about-hero__title">{c.title}</h1>
          <p className="about-hero__description">{c.description}</p>
        </div>
      </section>

      {/* ── Intro paragraphs ─────────────────────────────────────────────── */}
      <section className="about-intro">
        <div className="about-intro__inner">
          <p className="about-intro__eyebrow">{c.introEyebrow}</p>
          <div className="about-intro__body">
            {c.introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is behind this ───────────────────────────────────────────── */}
      <section className="about-behind">
        <div className="about-behind__inner">
          <hr className="about-behind__rule" />
          <p className="about-behind__eyebrow">{c.behindEyebrow}</p>
          <h2 className="about-behind__title">{c.behindTitle}</h2>
          <div className="about-behind__body">
            {behindParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

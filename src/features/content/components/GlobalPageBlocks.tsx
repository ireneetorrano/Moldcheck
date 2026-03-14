import { DisclosureBlock } from "@/components/shared/DisclosureBlock";
import type { GlobalPageCard, GlobalPageContent, GlobalPageSection } from "@/types/content";
import { PortableTextBlocks } from "@/features/content/components/PortableTextBlocks";

function TextParagraphs({ text }: { text: string }) {
  return (
    <>
      {text
        .split("\n\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
    </>
  );
}

function CardLink({ card }: { card: GlobalPageCard }) {
  if (!card.ctaLabel || !card.ctaHref) {
    return null;
  }

  return (
    <a
      href={card.ctaHref}
      className="services-cta"
      target={card.openInNewTab ? "_blank" : undefined}
      rel={card.openInNewTab ? "noreferrer" : undefined}
    >
      {card.ctaLabel}
    </a>
  );
}

function GlobalCards({
  cards,
  layout = "utility",
}: {
  cards: GlobalPageCard[];
  layout?: "grid" | "utility";
}) {
  const className = layout === "grid" ? "editorial-grid" : "utility-grid";

  return (
    <div className={className}>
      {cards.map((card) => (
        <article
          key={`${card.title}-${card.eyebrow ?? "card"}`}
          className={`editorial-card${card.tone === "featured" ? " editorial-card--featured" : ""}${card.tone === "warning" ? " editorial-card--warning" : ""}`}
        >
          {card.eyebrow ? <p className="editorial-card__label">{card.eyebrow}</p> : null}
          <h3>{card.title}</h3>
          <div className="editorial-card__body">
            <TextParagraphs text={card.body} />
          </div>
          {card.ctaLabel && card.ctaHref ? (
            <div className="editorial-card__actions">
              <CardLink card={card} />
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function GlobalSection({ section }: { section: GlobalPageSection }) {
  const headingClassName =
    section.tone === "band" ? "section-band global-section__heading" : "info-stack global-section__heading";

  return (
    <section className="home-section">
      <div className={headingClassName}>
        {section.eyebrow ? <p className="page-shell__eyebrow">{section.eyebrow}</p> : null}
        <h2>{section.title}</h2>
        {section.description ? <p>{section.description}</p> : null}
      </div>
      <GlobalCards cards={section.cards} layout={section.layout} />
    </section>
  );
}

export function GlobalPageBlocks({
  page,
  disclosureVariant = "article",
}: {
  page: GlobalPageContent;
  disclosureVariant?: "homepage" | "article" | "checkout";
}) {
  return (
    <>
      {page.body?.length ? <PortableTextBlocks blocks={page.body} /> : null}
      {page.introCards?.length ? <GlobalCards cards={page.introCards} layout={page.introLayout} /> : null}
      {page.sections.map((section) => (
        <GlobalSection key={`${section.title}-${section.eyebrow ?? "section"}`} section={section} />
      ))}
      {page.disclosureTitle && page.disclosureText ? (
        <DisclosureBlock
          variant={disclosureVariant}
          title={page.disclosureTitle}
          text={page.disclosureText}
        />
      ) : null}
      {page.footerNote ? <p className="accent-note">{page.footerNote}</p> : null}
    </>
  );
}

import type { GlobalPageContent, GlobalPageSection, GlobalPageCard } from "@/types/content";

// ── Section card rendered as a prose block ────────────────────────────────────

function LegalCard({ card }: { card: GlobalPageCard }) {
  const paragraphs = card.body
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="legal-card">
      {card.eyebrow && <p className="legal-card__eyebrow">{card.eyebrow}</p>}
      <h3 className="legal-card__title">{card.title}</h3>
      <div className="legal-card__body">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      {card.ctaLabel && card.ctaHref && (
        <a
          href={card.ctaHref}
          className="legal-card__link"
          target={card.openInNewTab ? "_blank" : undefined}
          rel={card.openInNewTab ? "noreferrer" : undefined}
        >
          {card.ctaLabel} →
        </a>
      )}
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

function LegalSection({ section }: { section: GlobalPageSection }) {
  return (
    <section className="legal-section">
      <h2 className="legal-section__title">{section.title}</h2>
      <div className="legal-section__cards">
        {section.cards.map((card, i) => (
          <LegalCard key={i} card={card} />
        ))}
      </div>
    </section>
  );
}

// ── Main layout ───────────────────────────────────────────────────────────────

export function LegalPageLayout({ page }: { page: GlobalPageContent }) {
  return (
    <div className="legal-page">
      {/* Page header */}
      <header className="legal-page__header">
        {page.eyebrow && <p className="legal-page__eyebrow">{page.eyebrow}</p>}
        <h1 className="legal-page__title">{page.title}</h1>
        {page.description && <p className="legal-page__description">{page.description}</p>}
      </header>

      {/* Intro cards (e.g. "Who we are" for privacy) */}
      {page.introCards?.length ? (
        <div className="legal-intro">
          {page.introCards.map((card, i) => (
            <LegalCard key={i} card={card} />
          ))}
        </div>
      ) : null}

      {/* Main sections */}
      <div className="legal-body">
        {page.sections.map((section, i) => (
          <LegalSection key={i} section={section} />
        ))}
      </div>

      {/* Disclosure / independence note */}
      {page.disclosureTitle && page.disclosureText && (
        <aside className="legal-disclosure">
          <p className="legal-disclosure__title">{page.disclosureTitle}</p>
          <p className="legal-disclosure__text">{page.disclosureText}</p>
        </aside>
      )}

      {page.footerNote && (
        <p className="legal-footer-note">{page.footerNote}</p>
      )}
    </div>
  );
}

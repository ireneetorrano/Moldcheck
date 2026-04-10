import type { ActiveLocale } from "@/config/locales";
import { getServicesContent } from "@/features/content/data/servicesContent";
import { buildGlobalPageMetadata } from "@/lib/sanity/pages";
import { getGlobalPath } from "@/lib/routing/paths";

export async function generateMetadata({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  return buildGlobalPageMetadata(locale, "services");
}

// SVG icons for equipment list
function IconHygrometer() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v10" /><circle cx="12" cy="17" r="5" /><path d="M12 14v3" />
    </svg>
  );
}
function IconMoisture() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C6 9 4 13 4 16a8 8 0 0 0 16 0c0-3-2-7-8-14z" />
    </svg>
  );
}
function IconCamera() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" /><circle cx="12" cy="14" r="3" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
function IconSample() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6v11l3 4H6l3-4V3z" /><path d="M9 14h6" />
    </svg>
  );
}

const equipmentIcons = [IconHygrometer, IconMoisture, IconCamera, IconSample];

function parseEquipmentItems(body: string): string[] {
  const parts = body.split("\n\n").filter(Boolean);
  return parts.slice(1, 5);
}

function parseClosingText(body: string): string[] {
  const parts = body.split("\n\n").filter(Boolean);
  return parts.slice(5);
}

// Extract price from card body — last \n\n-separated chunk that starts with a price indicator
function extractPrice(body: string): { description: string; price: string } {
  const idx = body.lastIndexOf("\n\n");
  if (idx === -1) return { description: body, price: "" };
  const last = body.slice(idx + 2);
  // Only treat as price if it looks like a price line
  if (/[€$£]|[Pp]rice|[Pp]reis|[Pp]rix|[Pp]reço|[Pp]rezzo|[Pp]rijs|[Pp]recio/.test(last)) {
    return { description: body.slice(0, idx), price: last };
  }
  return { description: body, price: "" };
}

// Level label = text before " — " in eyebrow
function getLevelLabel(eyebrow: string): string {
  return eyebrow.split(" — ")[0] ?? eyebrow;
}

// Level title = text after " — " in eyebrow
function getLevelTitle(eyebrow: string): string {
  const parts = eyebrow.split(" — ");
  return parts.slice(1).join(" — ");
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  const c = getServicesContent(locale);
  const contactHref = getGlobalPath(locale, "contact");

  const equipmentItems = parseEquipmentItems(c.howItWorksBody);
  const closingParagraphs = parseClosingText(c.howItWorksBody);
  const introSentence = c.howItWorksBody.split("\n\n")[0] ?? "";

  const tiers = [
    { cards: c.tier1Cards },
    { cards: c.tier2Cards },
    { cards: c.tier3Cards },
    { cards: c.tier4Cards },
  ];

  const bookingCard = c.bookingCards[0];
  const contactCard = c.bookingCards[1];

  return (
    <div className="services-page">

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="services-hero">
        <div className="services-hero__inner">
          <p className="services-hero__eyebrow">{c.eyebrow}</p>
          <h1 className="services-hero__title">{c.title}</h1>
          <p className="services-hero__description">{c.description}</p>
        </div>
      </section>

      {/* ── 2. What does independent mean ───────────────────────────────── */}
      <section className="services-independent">
        <div className="services-independent__inner">
          <h2 className="services-independent__title">{c.independentTitle}</h2>
          {c.independentParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ── 3. How it works (dark band) ─────────────────────────────────── */}
      <section className="services-how">
        <div className="services-how__inner">
          <h2 className="services-how__title">{c.howItWorksTitle}</h2>
          <p className="services-how__intro">{introSentence}</p>
          <ul className="services-how__equipment" role="list">
            {equipmentItems.map((item, i) => {
              const Icon = equipmentIcons[i] ?? IconSample;
              const [label, ...rest] = item.split(" — ");
              return (
                <li key={i} className="services-how__equipment-item">
                  <span className="services-how__equipment-icon"><Icon /></span>
                  <span>
                    <strong>{label}</strong>
                    {rest.length > 0 && <> — {rest.join(" — ")}</>}
                  </span>
                </li>
              );
            })}
          </ul>
          {closingParagraphs.map((p, i) => (
            <p key={i} className="services-how__closing">{p}</p>
          ))}
        </div>
      </section>

      {/* ── 4. Service levels ───────────────────────────────────────────── */}
      <section className="services-levels">
        <div className="services-levels__inner">
          {tiers.map(({ cards }, ti) => {
            if (!cards.length) return null;
            const levelLabel = getLevelLabel(cards[0].eyebrow ?? "");
            const levelTitle = getLevelTitle(cards[0].eyebrow ?? "");
            return (
              <div key={ti} className="services-level">
                <div className="services-level__header">
                  <p className="services-level__eyebrow">{levelLabel}</p>
                  {levelTitle && <h2 className="services-level__title">{levelTitle}</h2>}
                  <hr className="services-level__rule" />
                </div>
                <div className="services-level__grid">
                  {cards.map((card, ci) => {
                    const { description, price } = extractPrice(card.body ?? "");
                    return (
                      <div key={ci} className={`services-card${card.tone === "warning" ? " services-card--warning" : ""}`}>
                        <h3 className="services-card__title">{card.title}</h3>
                        <p className="services-card__description">{description}</p>
                        {price && <p className="services-card__price">{price}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 5. CTA block ────────────────────────────────────────────────── */}
      <section className="services-cta-block">
        <div className="services-cta-block__inner">
          {bookingCard && (
            <div className="services-cta-block__col">
              <p className="services-cta-block__eyebrow">{bookingCard.eyebrow}</p>
              <h2 className="services-cta-block__title">{bookingCard.title}</h2>
              <p className="services-cta-block__body">{bookingCard.body}</p>
              <a
                href={bookingCard.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="services-cta-block__btn services-cta-block__btn--primary"
              >
                {bookingCard.ctaLabel}
              </a>
            </div>
          )}
          {contactCard && (
            <div className="services-cta-block__col">
              <p className="services-cta-block__eyebrow">{contactCard.eyebrow}</p>
              <h2 className="services-cta-block__title">{contactCard.title}</h2>
              <p className="services-cta-block__body">{contactCard.body}</p>
              <a href={contactHref} className="services-cta-block__btn services-cta-block__btn--ghost">
                {contactCard.ctaLabel}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── 6. Coverage + Pricing ───────────────────────────────────────── */}
      <section className="services-footer-info">
        <div className="services-footer-info__inner">
          <div className="services-footer-info__block">
            <h3 className="services-footer-info__title">{c.coverageTitle}</h3>
            <p className="services-footer-info__body">{c.coverageBody}</p>
          </div>
          <div className="services-footer-info__block">
            <h3 className="services-footer-info__title">{c.pricingTitle}</h3>
            <p className="services-footer-info__body">{c.pricingBody}</p>
          </div>
        </div>
      </section>

    </div>
  );
}

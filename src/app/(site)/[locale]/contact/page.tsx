import type { ActiveLocale } from "@/config/locales";
import { ContactForm } from "@/features/contact/ContactForm";
import { getContactContent } from "@/features/contact/contactContent";
import { getGlobalPath } from "@/lib/routing/paths";

export async function generateMetadata({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  const c = getContactContent(locale);
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `https://moldcheck.pt${getGlobalPath(locale, "contact")}`,
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: ActiveLocale }> }) {
  const { locale } = await params;
  const c = getContactContent(locale);
  const sourcePage = getGlobalPath(locale, "contact");
  const privacyHref = getGlobalPath(locale, "privacy");

  return (
    <div className="contact-page">
      <div className="contact-page__inner">
        {/* Header */}
        <header className="contact-page__header">
          <p className="contact-page__eyebrow">{c.eyebrow}</p>
          <h1 className="contact-page__title">{c.title}</h1>
          <p className="contact-page__description">{c.description}</p>
        </header>

        {/* Two-column layout */}
        <div className="contact-page__body">
          {/* Left: form */}
          <div className="contact-page__form-col">
            <ContactForm sourcePage={sourcePage} content={c} privacyHref={privacyHref} />
          </div>

          {/* Right: info cards */}
          <aside className="contact-page__info-col">
            <div className="contact-info-card">
              <div className="contact-info-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
              </div>
              <div>
                <p className="contact-info-card__label">{c.emailLabel}</p>
                <a href="mailto:info@moldcheck.pt" className="contact-info-card__value">info@moldcheck.pt</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="contact-info-card__label">{c.phoneLabel}</p>
                <a href="tel:+351308801808" className="contact-info-card__value">+351 308 801 808</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="contact-info-card__label">{c.responseLabel}</p>
                <p className="contact-info-card__value">{c.responseValue}</p>
              </div>
            </div>

            <div className="contact-info-note">
              <p>{c.note}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

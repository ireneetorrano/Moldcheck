import type { ActiveLocale } from "@/config/locales";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { PrimaryNav } from "@/components/navigation/PrimaryNav";

export function SiteHeader({ locale }: { locale: ActiveLocale }) {
  return (
    <header className="site-header-shell">
      <div className="site-header">
        <div className="site-header__inner">
          <a href={`/${locale}`} className="site-logo" aria-label="MoldCheck.pt">
            <span className="site-logo__mark" />
            <span className="site-logo__wordmark">MoldCheck.pt</span>
          </a>
          <PrimaryNav locale={locale} />
          <div className="site-header__actions">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}

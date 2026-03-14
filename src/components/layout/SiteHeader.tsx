import Image from "next/image";
import type { ActiveLocale } from "@/config/locales";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { PrimaryNav } from "@/components/navigation/PrimaryNav";

export function SiteHeader({ locale }: { locale: ActiveLocale }) {
  return (
    <header className="site-header-shell">
      <div className="site-header">
        <div className="site-header__inner">
          <a href={`/${locale}`} className="site-logo" aria-label="MoldCheck.pt">
            <Image
              src="/img/logo.png"
              alt="MoldCheck.pt"
              width={220}
              height={52}
              className="site-logo__image"
              priority
            />
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

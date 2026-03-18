import Image from "next/image";
import type { ActiveLocale } from "@/config/locales";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { PrimaryNav } from "@/components/navigation/PrimaryNav";
import { MobileNav } from "@/components/navigation/MobileNav";

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

          {/* Desktop nav — hidden on mobile */}
          <PrimaryNav locale={locale} />
          <div className="site-header__actions">
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile hamburger + drawer — hidden on desktop */}
          <MobileNav locale={locale} />
        </div>
      </div>
    </header>
  );
}

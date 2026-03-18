"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * On a hard reload from any page other than the homepage, redirects to /{locale}.
 */
export function ReloadRedirect({ locale }: { locale: string }) {
  const router = useRouter();

  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const isReload = nav?.type === "reload";
    const path = window.location.pathname;
    const isHome = path === `/${locale}` || path === `/${locale}/`;

    if (isReload && !isHome) {
      router.replace(`/${locale}`);
    }
  }, []);

  return null;
}

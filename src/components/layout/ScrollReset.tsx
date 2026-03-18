"use client";

import { useEffect } from "react";

/**
 * Hands scroll restoration back to the browser for back/forward navigation,
 * and only scrolls to top on genuine fresh page loads (type === "navigate").
 */
export function ScrollReset() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Let the browser restore scroll position on back/forward.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "auto";
    }

    // Only force scroll-to-top on a fresh navigation, not on back/forward.
    const navEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming | undefined;

    if (navEntry?.type === "navigate") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return null;
}

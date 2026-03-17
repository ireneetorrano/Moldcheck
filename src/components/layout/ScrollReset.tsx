"use client";

import { useEffect } from "react";

/**
 * Disables browser scroll restoration and forces the page to the top on every
 * mount — including hard reloads — so the hero is always the first thing seen.
 */
export function ScrollReset() {
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return null;
}

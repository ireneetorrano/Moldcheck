"use client";

import { createContext, useContext } from "react";
import type { ActiveLocale } from "@/config/locales";

// Maps each locale to the translated slug for the current article.
// null means we're not on an article page.
type ArticleLocaleMap = Record<ActiveLocale, string> | null;

export const ArticleLocaleContext = createContext<ArticleLocaleMap>(null);

export function useArticleLocaleMap() {
  return useContext(ArticleLocaleContext);
}

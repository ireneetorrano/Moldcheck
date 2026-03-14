import { defaultLocale } from "@/config/locales";

export const siteConfig = {
  name: "MoldCheck.pt",
  legalEntity: "FAIRBANK Group",
  defaultLocale,
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? "https://moldcheck.pt",
  editorialEmail: "info@moldcheck.pt",
  contactEmail: "info@moldcheck.pt",
};

// TODO(CONFIG): Confirm production domain and non-www redirect at platform level.

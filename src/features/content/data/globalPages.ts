import type { ActiveLocale } from "@/config/locales";
import { siteConfig } from "@/config/site";
import type { GlobalPageContent, GlobalPageKey } from "@/types/content";
import { getAboutFallbackContent } from "@/features/content/data/aboutContent";
import { getHomeFallbackContent } from "@/features/content/data/homeContent";
import { getPrivacyFallbackContent } from "@/features/content/data/privacyContent";
import { getServicesFallbackContent } from "@/features/content/data/servicesContent";

function buildGlobalPageDefaults(locale: ActiveLocale): Record<GlobalPageKey, GlobalPageContent> {
  return {
    home: getHomeFallbackContent(locale),
    about: getAboutFallbackContent(locale),
    services: getServicesFallbackContent(locale),
    privacy: getPrivacyFallbackContent(locale),
    contact: {
      pageKey: "contact",
      language: locale,
      translationGroup: "contact",
      title: "Contact",
      eyebrow: "Editorial and operational contact",
      description:
        "This page is prepared for a calm split between editorial contact, professional enquiries and redirects to external operational booking when needed.",
      introLayout: "utility",
      introCards: [
        {
          eyebrow: "Editorial",
          title: "General and editorial enquiries",
          body: `Prepared for ${siteConfig.contactEmail} and a lightweight multilingual contact form.`,
          ctaLabel: "Contact editorial team",
          ctaHref: `mailto:${siteConfig.contactEmail}`,
        },
        {
          eyebrow: "Operations",
          title: "Inspection bookings should move to the right channel",
          body: "Prepared for restrained handoff messaging to InspectOS when a booking request is appropriate.",
        },
      ],
      sections: [],
    },
    tools: {
      pageKey: "tools",
      language: locale,
      translationGroup: "tools",
      title: "Tools",
      eyebrow: "Editorial utilities",
      description:
        "Interactive tools should behave like rigorous editorial utilities: calm, precise and supportive of informed decisions.",
      introLayout: "utility",
      introCards: [
        {
          eyebrow: "Risk assessment",
          title: "Room-by-room evaluator",
          body: "Prepared for a structured household risk tool with editorial framing and result bands.",
        },
        {
          eyebrow: "Humidity logging",
          title: "Monitoring utility",
          body: "Prepared for instrument-based tracking and seasonal monitoring workflows.",
        },
        {
          eyebrow: "Lab selection",
          title: "Testing helper",
          body: "Prepared for choosing between inspection, air sampling, ERMI and HERTSMI-2.",
        },
      ],
      sections: [],
      disclosureTitle: "Utilities should remain publication-first",
      disclosureText:
        "Tools are here to organise evidence and explain thresholds. They should not behave like lead traps or panic funnels.",
    },
    shop: {
      pageKey: "shop",
      language: locale,
      translationGroup: "shop",
      title: "Shop",
      eyebrow: "Editorial commerce layer",
      description:
        "Inspections, laboratory workflows and digital resources can live inside the same publication system without turning the site into a sales landing page.",
      introLayout: "utility",
      introCards: [
        {
          eyebrow: "Commercial layer",
          title: "Calm options before checkout",
          body:
            "The shop should feel like a careful extension of the publication: clear options, restrained emphasis and visible independence before payment.",
        },
      ],
      sections: [],
      disclosureTitle: "Commercial layer, editorial tone",
      disclosureText:
        "The shop should feel like a careful extension of the publication: clear options, restrained emphasis and visible independence before payment.",
    },
  };
}

export function getDefaultGlobalPageContent(locale: ActiveLocale, pageKey: GlobalPageKey) {
  return buildGlobalPageDefaults(locale)[pageKey];
}

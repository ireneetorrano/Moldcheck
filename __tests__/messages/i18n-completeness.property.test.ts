// Feature: newsletter-checklist-humidity-tool, Property 10: i18n key completeness

/**
 * Validates: Requirements 6.3
 *
 * Property 10: i18n key completeness
 * For every required key in the Newsletter and Calculator namespaces,
 * that key must be present in all 7 locale message files.
 */

import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import * as fs from "fs";
import * as path from "path";

const LOCALES = ["pt", "en", "fr", "de", "nl", "it", "es"] as const;

const NEWSLETTER_KEYS = [
  "emailLabel",
  "emailPlaceholder",
  "consentLabel",
  "submitButton",
  "successTitle",
  "successBody",
  "errorGeneric",
  "errorInvalidEmail",
  "errorConsentRequired",
] as const;

const CALCULATOR_KEYS = [
  "title",
  "startButton",
  "nextButton",
  "backButton",
  "submitButton",
  "resultTitle",
  "resultBandLow",
  "resultBandMedium",
  "resultBandHigh",
  "resultScoreLabel",
  "emailCaptureTitle",
  "emailCaptureSkip",
  "errorRequired",
  "errorInvalidEmail",
  "q_room_type_label",
  "q_room_type_opt_bedroom",
  "q_room_type_opt_bathroom",
  "q_room_type_opt_kitchen",
  "q_room_type_opt_living",
  "q_room_type_opt_basement",
  "q_condensation_label",
  "q_condensation_opt_never",
  "q_condensation_opt_sometimes",
  "q_condensation_opt_often",
  "q_condensation_opt_always",
  "q_ventilation_label",
  "q_ventilation_opt_good",
  "q_ventilation_opt_moderate",
  "q_ventilation_opt_poor",
  "q_water_damage_label",
  "q_water_damage_opt_none",
  "q_water_damage_opt_past",
  "q_water_damage_opt_current",
  "q_climate_zone_label",
  "q_climate_zone_opt_dry",
  "q_climate_zone_opt_temperate",
  "q_climate_zone_opt_humid",
  "q_visible_mold_label",
  "q_visible_mold_opt_none",
  "q_visible_mold_opt_small",
  "q_visible_mold_opt_large",
] as const;

type LocaleMessages = Record<string, Record<string, string>>;

function loadLocaleMessages(locale: string): LocaleMessages {
  const filePath = path.resolve(
    __dirname,
    "../../src/messages",
    `${locale}.json`
  );
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as LocaleMessages;
}

const localeData: Record<string, LocaleMessages> = {};
for (const locale of LOCALES) {
  localeData[locale] = loadLocaleMessages(locale);
}

describe("Property 10: i18n key completeness", () => {
  it("every required Newsletter key is present in all 7 locale files", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...NEWSLETTER_KEYS),
        (key) => {
          for (const locale of LOCALES) {
            const messages = localeData[locale];
            expect(
              messages["Newsletter"],
              `Locale "${locale}" is missing the "Newsletter" namespace`
            ).toBeDefined();
            expect(
              messages["Newsletter"][key],
              `Locale "${locale}" is missing Newsletter key "${key}"`
            ).toBeDefined();
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it("every required Calculator key is present in all 7 locale files", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...CALCULATOR_KEYS),
        (key) => {
          for (const locale of LOCALES) {
            const messages = localeData[locale];
            expect(
              messages["Calculator"],
              `Locale "${locale}" is missing the "Calculator" namespace`
            ).toBeDefined();
            expect(
              messages["Calculator"][key],
              `Locale "${locale}" is missing Calculator key "${key}"`
            ).toBeDefined();
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});

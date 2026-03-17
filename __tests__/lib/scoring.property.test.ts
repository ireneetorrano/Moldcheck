// Feature: newsletter-checklist-humidity-tool, Property 5: Risk Score bounds invariant

import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { computeScore } from "../../src/features/tools/lib/scoring";
import { QUESTIONS } from "../../src/features/tools/lib/questions";
import type { Answers } from "../../src/features/tools/types";

/**
 * Validates: Requirements 3.3
 *
 * Property 5: Risk Score bounds invariant
 * For any complete set of answers to the calculator questionnaire
 * (all required questions answered), the computed Risk Score must be
 * an integer in the closed interval [0, 100].
 */
describe("Property 5: Risk Score bounds invariant", () => {
  it("computeScore always returns an integer in [0, 100] for any valid answer set", () => {
    // Build an fc.record shape where each question id maps to one of its valid option values
    const answersArb = fc.record(
      Object.fromEntries(
        QUESTIONS.map((q) => [
          q.id,
          fc.constantFrom(...q.options.map((o) => o.value)),
        ])
      )
    ) as fc.Arbitrary<Answers>;

    fc.assert(
      fc.property(answersArb, (answers) => {
        const score = computeScore(answers, QUESTIONS);

        // Must be an integer
        expect(Number.isInteger(score)).toBe(true);

        // Must be within [0, 100]
        expect(score).toBeGreaterThanOrEqual(0);
        expect(score).toBeLessThanOrEqual(100);
      }),
      { numRuns: 100 }
    );
  });
});

// Feature: newsletter-checklist-humidity-tool, Property 6: Risk band assignment exhaustiveness

import { getBand } from "../../src/features/tools/lib/scoring";
import type { RiskBand } from "../../src/features/tools/types";

/**
 * Validates: Requirements 3.4
 *
 * Property 6: Risk band assignment exhaustiveness
 * For any integer score in [0, 100], getBand must return exactly one of
 * "low" (0–33), "medium" (34–66), or "high" (67–100), with no gaps or overlaps.
 */
describe("Property 6: Risk band assignment exhaustiveness", () => {
  const VALID_BANDS: RiskBand[] = ["low", "medium", "high"];

  it("getBand returns exactly one of 'low', 'medium', 'high' for every integer in [0, 100]", () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 100 }), (score) => {
        const band = getBand(score);

        // Must be one of the three valid bands — no other value allowed
        expect(VALID_BANDS).toContain(band);

        // No gaps: every score maps to exactly one band
        // Low: 0–33, Medium: 34–66, High: 67–100
        if (score <= 33) {
          expect(band).toBe("low");
        } else if (score <= 66) {
          expect(band).toBe("medium");
        } else {
          expect(band).toBe("high");
        }
      }),
      { numRuns: 100 }
    );
  });
});

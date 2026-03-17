// Feature: newsletter-checklist-humidity-tool, Property 9: Calculator API correctness

/**
 * Validates: Requirements 4.1, 4.2, 4.3
 *
 * Property 9: Calculator API correctness
 * For any valid calculator-completed payload (valid email, supported locale,
 * score in [0, 100]), calling the Calculator API must result in the contact
 * being upserted in Brevo with the `calculator_completed` tag applied and
 * both the score and locale stored in the contact attributes.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import * as fc from "fast-check";
import { activeLocales } from "../../src/config/locales";

// Mock the Brevo client before importing the route
vi.mock("../../src/lib/brevo/client", () => ({
  upsertContact: vi.fn().mockResolvedValue(undefined),
  applyTag: vi.fn().mockResolvedValue(undefined),
}));

// Mock the validation lib so hcaptcha never fires in tests
vi.mock("../../src/lib/validation", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/lib/validation")>();
  return {
    ...actual,
    verifyHcaptcha: vi.fn().mockResolvedValue(true),
  };
});

import { upsertContact, applyTag } from "../../src/lib/brevo/client";
import { POST } from "../../src/app/api/newsletter/calculator-completed/route";

const mockedUpsertContact = vi.mocked(upsertContact);
const mockedApplyTag = vi.mocked(applyTag);

function makeRequest(body: unknown): Request {
  return new Request("http://localhost/api/newsletter/calculator-completed", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("Property 9: Calculator API correctness", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Ensure hCaptcha is not enabled during tests
    delete process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;
  });

  it("upsertContact and applyTag are called correctly for every valid payload", async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.emailAddress(),
        fc.integer({ min: 0, max: 100 }),
        fc.constantFrom(...activeLocales),
        async (email, riskScore, locale) => {
          vi.clearAllMocks();

          const req = makeRequest({ email, locale, riskScore });
          const res = await POST(req as never);

          expect(res.status).toBe(200);

          // upsertContact must be called once with email, locale, AND riskScore
          expect(mockedUpsertContact).toHaveBeenCalledOnce();
          expect(mockedUpsertContact).toHaveBeenCalledWith({
            email: email.trim(),
            locale,
            riskScore,
          });

          // applyTag must be called once with the trimmed email and "calculator_completed"
          expect(mockedApplyTag).toHaveBeenCalledOnce();
          expect(mockedApplyTag).toHaveBeenCalledWith(
            email.trim(),
            "calculator_completed"
          );
        }
      ),
      { numRuns: 100 }
    );
  });
});

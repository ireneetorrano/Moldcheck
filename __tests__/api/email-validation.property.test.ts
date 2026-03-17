// Feature: newsletter-checklist-humidity-tool, Property 2: Invalid email rejection

/**
 * Validates: Requirements 5.1, 5.2
 *
 * Property 2: Invalid email rejection
 * For any string that does not conform to RFC 5322 email format, both the
 * Subscribe API and the Calculator API must reject the request without
 * forwarding to Brevo, returning an HTTP 422 response.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import * as fc from "fast-check";

// Mock the Brevo client before importing the routes
vi.mock("../../src/lib/brevo/client", () => ({
  upsertContact: vi.fn().mockResolvedValue(undefined),
  applyTag: vi.fn().mockResolvedValue(undefined),
}));

// Mock validation so hcaptcha never fires in tests
vi.mock("../../src/lib/validation", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/lib/validation")>();
  return {
    ...actual,
    verifyHcaptcha: vi.fn().mockResolvedValue(true),
  };
});

import { upsertContact, applyTag } from "../../src/lib/brevo/client";
import { POST as subscribePost } from "../../src/app/api/newsletter/subscribe/route";
import { POST as calculatorPost } from "../../src/app/api/newsletter/calculator-completed/route";

const mockedUpsertContact = vi.mocked(upsertContact);
const mockedApplyTag = vi.mocked(applyTag);

/**
 * The same regex used by isValidEmail (applied after trim).
 * We use it here to ensure our generated "invalid" strings are truly invalid
 * even after trimming (since the route calls email.trim() before validating).
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Arbitrary that generates strings guaranteed NOT to be valid emails.
 * Covers the main invalid cases:
 *   1. Strings with no "@" at all
 *   2. Strings with "@" but no "." in the domain part (e.g. "user@nodot")
 * A final .filter() ensures the trimmed value also fails the regex.
 */
const invalidEmailArbitrary = fc
  .oneof(
    // No "@" symbol at all
    fc.string().filter((s) => !s.includes("@")),
    // Has "@" but domain part has no "." — e.g. "user@nodot"
    fc
      .tuple(
        fc.string({ minLength: 1 }).filter((s) => !s.includes("@") && !/\s/.test(s)),
        fc
          .string({ minLength: 1 })
          .filter((s) => !s.includes("@") && !s.includes(".") && !/\s/.test(s)),
      )
      .map(([local, domain]) => `${local}@${domain}`),
  )
  .filter((s) => !EMAIL_REGEX.test(s.trim()));

function makeSubscribeRequest(email: unknown): Request {
  return new Request("http://localhost/api/newsletter/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, locale: "pt", gdprConsent: true }),
  });
}

function makeCalculatorRequest(email: unknown): Request {
  return new Request("http://localhost/api/newsletter/calculator-completed", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, locale: "pt", riskScore: 50 }),
  });
}

describe("Property 2: Invalid email rejection", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;
  });

  it("Subscribe API returns 422 and does not call Brevo for any invalid email", async () => {
    await fc.assert(
      fc.asyncProperty(invalidEmailArbitrary, async (invalidEmail) => {
        vi.clearAllMocks();

        const req = makeSubscribeRequest(invalidEmail);
        const res = await subscribePost(req as never);

        expect(res.status).toBe(422);
        expect(mockedUpsertContact).not.toHaveBeenCalled();
        expect(mockedApplyTag).not.toHaveBeenCalled();
      }),
      { numRuns: 100 },
    );
  });

  it("Calculator API returns 422 and does not call Brevo for any invalid email", async () => {
    await fc.assert(
      fc.asyncProperty(invalidEmailArbitrary, async (invalidEmail) => {
        vi.clearAllMocks();

        const req = makeCalculatorRequest(invalidEmail);
        const res = await calculatorPost(req as never);

        expect(res.status).toBe(422);
        expect(mockedUpsertContact).not.toHaveBeenCalled();
        expect(mockedApplyTag).not.toHaveBeenCalled();
      }),
      { numRuns: 100 },
    );
  });
});

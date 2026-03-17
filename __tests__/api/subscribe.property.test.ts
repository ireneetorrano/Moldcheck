// Feature: newsletter-checklist-humidity-tool, Property 1: Subscribe API correctness

/**
 * Validates: Requirements 1.2, 1.6, 1.7
 *
 * Property 1: Subscribe API correctness
 * For any valid subscribe payload (valid RFC 5322 email, supported locale,
 * gdprConsent: true), calling the Subscribe API must result in the contact
 * being upserted in Brevo with the `checklist_download` tag applied and the
 * locale stored in the contact attributes.
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
import { POST } from "../../src/app/api/newsletter/subscribe/route";

const mockedUpsertContact = vi.mocked(upsertContact);
const mockedApplyTag = vi.mocked(applyTag);

function makeRequest(body: unknown): Request {
  return new Request("http://localhost/api/newsletter/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("Property 1: Subscribe API correctness", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Ensure hCaptcha is not enabled during tests
    delete process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;
  });

  it("upsertContact and applyTag are called for every valid payload", async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.emailAddress(),
        fc.constantFrom(...activeLocales),
        async (email, locale) => {
          vi.clearAllMocks();

          const req = makeRequest({ email, locale, gdprConsent: true });
          const res = await POST(req as never);

          expect(res.status).toBe(200);

          // upsertContact must be called once with the trimmed email and locale
          expect(mockedUpsertContact).toHaveBeenCalledOnce();
          expect(mockedUpsertContact).toHaveBeenCalledWith({
            email: email.trim(),
            locale,
          });

          // applyTag must be called once with the trimmed email and "checklist_download"
          expect(mockedApplyTag).toHaveBeenCalledOnce();
          expect(mockedApplyTag).toHaveBeenCalledWith(
            email.trim(),
            "checklist_download"
          );
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Feature: newsletter-checklist-humidity-tool, Property 3: GDPR consent enforcement

/**
 * Validates: Requirements 5.3
 *
 * Property 3: GDPR consent enforcement
 * For any subscribe request payload where gdprConsent is absent, false, null,
 * undefined, 0, "", or any non-true value, the Subscribe API must return HTTP 422
 * and must not call the Brevo client.
 */

describe("Property 3: GDPR consent enforcement", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;
  });

  it("returns HTTP 422 and does not call Brevo for any non-true consent value", async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.anything().filter((v) => v !== true),
        async (gdprConsent) => {
          vi.clearAllMocks();

          const req = makeRequest({
            email: "test@example.com",
            locale: "pt",
            gdprConsent,
          });
          const res = await POST(req as never);

          expect(res.status).toBe(422);
          expect(mockedUpsertContact).not.toHaveBeenCalled();
          expect(mockedApplyTag).not.toHaveBeenCalled();
        }
      ),
      { numRuns: 100 }
    );
  });
});

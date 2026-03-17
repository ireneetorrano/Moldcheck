/**
 * Unit tests for Calculator API
 * Validates: Requirements 4.9
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { BrevoError } from "../../src/lib/brevo/types";

// Mock the Brevo client before importing the route
vi.mock("../../src/lib/brevo/client", () => ({
  upsertContact: vi.fn().mockResolvedValue(undefined),
  applyTag: vi.fn().mockResolvedValue(undefined),
}));

// Mock validation lib to skip hCaptcha
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

const validPayload = { email: "test@example.com", locale: "pt", riskScore: 50 };

describe("Calculator API — unit tests", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;
  });

  // Req 4.9: duplicate contact returns 200 with duplicate: true
  describe("duplicate contact handling", () => {
    it("returns 200 with duplicate: true when upsertContact throws BrevoError 409", async () => {
      mockedUpsertContact.mockRejectedValueOnce(
        new BrevoError("Contact already exists", 409),
      );

      const res = await POST(makeRequest(validPayload) as never);
      const body = await res.json();

      expect(res.status).toBe(200);
      expect(body).toEqual({ ok: true, duplicate: true });
    });

    it("returns 200 with duplicate: true when applyTag throws BrevoError 409", async () => {
      mockedApplyTag.mockRejectedValueOnce(
        new BrevoError("Contact already in list", 409),
      );

      const res = await POST(makeRequest(validPayload) as never);
      const body = await res.json();

      expect(res.status).toBe(200);
      expect(body).toEqual({ ok: true, duplicate: true });
    });

    it("returns 500 for non-409 Brevo errors", async () => {
      mockedUpsertContact.mockRejectedValueOnce(
        new BrevoError("Service unavailable", 503),
      );

      const res = await POST(makeRequest(validPayload) as never);
      const body = await res.json();

      expect(res.status).toBe(500);
      expect(body.code).toBe("ESP_ERROR");
    });
  });
});

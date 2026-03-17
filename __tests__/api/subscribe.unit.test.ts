/**
 * Unit tests for Subscribe API
 * Validates: Requirements 1.10, 5.6
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { BrevoError } from "../../src/lib/brevo/types";

// Mock the Brevo client before importing the route
vi.mock("../../src/lib/brevo/client", () => ({
  upsertContact: vi.fn().mockResolvedValue(undefined),
  applyTag: vi.fn().mockResolvedValue(undefined),
}));

// Mock the validation lib to control hCaptcha verification
vi.mock("../../src/lib/validation", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/lib/validation")>();
  return {
    ...actual,
    verifyHcaptcha: vi.fn().mockResolvedValue(true),
  };
});

import { upsertContact, applyTag } from "../../src/lib/brevo/client";
import { verifyHcaptcha } from "../../src/lib/validation";
import { POST } from "../../src/app/api/newsletter/subscribe/route";

const mockedUpsertContact = vi.mocked(upsertContact);
const mockedApplyTag = vi.mocked(applyTag);
const mockedVerifyHcaptcha = vi.mocked(verifyHcaptcha);

function makeRequest(body: unknown): Request {
  return new Request("http://localhost/api/newsletter/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("Subscribe API — unit tests", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;
    delete process.env.HCAPTCHA_SECRET_KEY;
  });

  afterEach(() => {
    delete process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;
    delete process.env.HCAPTCHA_SECRET_KEY;
  });

  // Req 1.10: duplicate contact returns 200 with duplicate: true
  describe("duplicate contact handling", () => {
    it("returns 200 with duplicate: true when upsertContact throws BrevoError 409", async () => {
      mockedUpsertContact.mockRejectedValueOnce(
        new BrevoError("Contact already exists", 409)
      );

      const req = makeRequest({
        email: "existing@example.com",
        locale: "pt",
        gdprConsent: true,
      });

      const res = await POST(req as never);
      const body = await res.json();

      expect(res.status).toBe(200);
      expect(body).toEqual({ ok: true, duplicate: true });
    });

    it("returns 200 with duplicate: true when applyTag throws BrevoError 409", async () => {
      mockedApplyTag.mockRejectedValueOnce(
        new BrevoError("Contact already in list", 409)
      );

      const req = makeRequest({
        email: "existing@example.com",
        locale: "en",
        gdprConsent: true,
      });

      const res = await POST(req as never);
      const body = await res.json();

      expect(res.status).toBe(200);
      expect(body).toEqual({ ok: true, duplicate: true });
    });

    it("returns 500 for non-409 Brevo errors", async () => {
      mockedUpsertContact.mockRejectedValueOnce(
        new BrevoError("Service unavailable", 503)
      );

      const req = makeRequest({
        email: "user@example.com",
        locale: "pt",
        gdprConsent: true,
      });

      const res = await POST(req as never);
      const body = await res.json();

      expect(res.status).toBe(500);
      expect(body.code).toBe("ESP_ERROR");
    });
  });

  // Req 5.6: hCaptcha verification
  describe("hCaptcha verification", () => {
    it("rejects request without captcha token when NEXT_PUBLIC_HCAPTCHA_SITE_KEY is set", async () => {
      process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY = "test-site-key";

      const req = makeRequest({
        email: "user@example.com",
        locale: "pt",
        gdprConsent: true,
        // no hcaptchaToken
      });

      const res = await POST(req as never);
      const body = await res.json();

      expect(res.status).toBe(422);
      expect(body.code).toBe("CAPTCHA_ERROR");
      expect(mockedUpsertContact).not.toHaveBeenCalled();
    });

    it("rejects request with empty string captcha token when captcha is enabled", async () => {
      process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY = "test-site-key";

      const req = makeRequest({
        email: "user@example.com",
        locale: "pt",
        gdprConsent: true,
        hcaptchaToken: "",
      });

      const res = await POST(req as never);
      const body = await res.json();

      expect(res.status).toBe(422);
      expect(body.code).toBe("CAPTCHA_ERROR");
      expect(mockedUpsertContact).not.toHaveBeenCalled();
    });

    it("rejects request when captcha token fails verification", async () => {
      process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY = "test-site-key";
      mockedVerifyHcaptcha.mockResolvedValueOnce(false);

      const req = makeRequest({
        email: "user@example.com",
        locale: "pt",
        gdprConsent: true,
        hcaptchaToken: "invalid-token",
      });

      const res = await POST(req as never);
      const body = await res.json();

      expect(res.status).toBe(422);
      expect(body.code).toBe("CAPTCHA_ERROR");
      expect(mockedUpsertContact).not.toHaveBeenCalled();
    });

    it("accepts request with valid captcha token when captcha is enabled", async () => {
      process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY = "test-site-key";
      mockedVerifyHcaptcha.mockResolvedValueOnce(true);

      const req = makeRequest({
        email: "user@example.com",
        locale: "pt",
        gdprConsent: true,
        hcaptchaToken: "valid-token",
      });

      const res = await POST(req as never);
      const body = await res.json();

      expect(res.status).toBe(200);
      expect(body).toEqual({ ok: true });
      expect(mockedVerifyHcaptcha).toHaveBeenCalledWith("valid-token");
      expect(mockedUpsertContact).toHaveBeenCalledOnce();
    });

    it("skips captcha verification when NEXT_PUBLIC_HCAPTCHA_SITE_KEY is not set", async () => {
      // No NEXT_PUBLIC_HCAPTCHA_SITE_KEY set
      const req = makeRequest({
        email: "user@example.com",
        locale: "pt",
        gdprConsent: true,
        // no hcaptchaToken — should be fine without captcha enabled
      });

      const res = await POST(req as never);
      const body = await res.json();

      expect(res.status).toBe(200);
      expect(body).toEqual({ ok: true });
      expect(mockedVerifyHcaptcha).not.toHaveBeenCalled();
    });
  });
});

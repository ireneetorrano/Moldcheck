// Feature: newsletter-checklist-humidity-tool, Property 4: HTTP method restriction

/**
 * Validates: Requirements 5.4, 5.5
 *
 * Property 4: HTTP method restriction
 * For any HTTP method other than POST sent to either /api/newsletter/subscribe
 * or /api/newsletter/calculator-completed, the API must return HTTP 405.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import * as fc from "fast-check";

// Mock Brevo client so no real network calls happen
vi.mock("../../src/lib/brevo/client", () => ({
  upsertContact: vi.fn().mockResolvedValue(undefined),
  applyTag: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("../../src/lib/validation", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/lib/validation")>();
  return {
    ...actual,
    verifyHcaptcha: vi.fn().mockResolvedValue(true),
  };
});

import {
  GET as subscribeGET,
  PUT as subscribePUT,
  DELETE as subscribeDELETE,
  PATCH as subscribePATCH,
} from "../../src/app/api/newsletter/subscribe/route";

import {
  GET as calcGET,
  PUT as calcPUT,
  DELETE as calcDELETE,
  PATCH as calcPATCH,
} from "../../src/app/api/newsletter/calculator-completed/route";

// Map method name → handler for each route
const subscribeHandlers: Record<string, () => Response | Promise<Response>> = {
  GET: subscribeGET,
  PUT: subscribePUT,
  DELETE: subscribeDELETE,
  PATCH: subscribePATCH,
};

const calcHandlers: Record<string, () => Response | Promise<Response>> = {
  GET: calcGET,
  PUT: calcPUT,
  DELETE: calcDELETE,
  PATCH: calcPATCH,
};

describe("Property 4: HTTP method restriction", () => {
  beforeEach(() => {
    delete process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;
  });

  it("subscribe route returns 405 for GET, PUT, DELETE, PATCH, HEAD", async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom("GET", "PUT", "DELETE", "PATCH", "HEAD"),
        async (method) => {
          // HEAD is handled by Next.js via GET; we call GET handler for HEAD
          const handlerKey = method === "HEAD" ? "GET" : method;
          const handler = subscribeHandlers[handlerKey];
          const res = await handler();
          expect(res.status).toBe(405);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("calculator-completed route returns 405 for GET, PUT, DELETE, PATCH, HEAD", async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom("GET", "PUT", "DELETE", "PATCH", "HEAD"),
        async (method) => {
          const handlerKey = method === "HEAD" ? "GET" : method;
          const handler = calcHandlers[handlerKey];
          const res = await handler();
          expect(res.status).toBe(405);
        }
      ),
      { numRuns: 100 }
    );
  });
});

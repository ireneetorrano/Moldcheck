# Implementation Plan: Newsletter Checklist & Humidity Risk Calculator

## Overview

Implement the newsletter subscription flow (Brevo upsert + `checklist_download` tag) and the Humidity Risk Calculator tool (`/[locale]/tools/humidity-risk-calculator`) with optional post-result email capture (`calculator_completed` tag). All UI is fully multilingual across 7 locales.

## Tasks

- [x] 1. Environment setup — env vars and Brevo client library
  - [x] 1.1 Add `BREVO_API_KEY`, `NEXT_PUBLIC_HCAPTCHA_SITE_KEY`, and `HCAPTCHA_SECRET_KEY` entries to `.env.local.example` (or equivalent env template) with inline comments
    - _Requirements: 5.6_
  - [x] 1.2 Create `src/lib/brevo/types.ts` — define `BrevoContact`, `BrevoTag`, and `BrevoError` types
    - _Requirements: 1.2, 4.1_
  - [x] 1.3 Create `src/lib/brevo/client.ts` — implement `upsertContact(contact: BrevoContact): Promise<void>` and `applyTag(email: string, tag: BrevoTag): Promise<void>` using the Brevo REST API (`PUT /contacts`); wrap all calls in try/catch and re-throw typed `BrevoError`
    - _Requirements: 1.2, 1.6, 1.7, 4.1, 4.2, 4.3_

- [x] 2. i18n message keys for all 7 locales
  - [x] 2.1 Add `Newsletter` and `Calculator` namespace keys (all keys listed in the design's i18n section) to `src/messages/pt.json` with Portuguese translations
    - _Requirements: 6.1, 6.2, 6.3_
  - [x] 2.2 Add the same keys to `src/messages/en.json`, `src/messages/fr.json`, `src/messages/de.json`, `src/messages/nl.json`, `src/messages/it.json`, and `src/messages/es.json` with appropriate translations
    - _Requirements: 6.3_
  - [x] 2.3 Write property test for i18n key completeness (Property 10)
    - **Property 10: i18n key completeness**
    - For every required key in the `Newsletter` and `Calculator` namespaces, assert it is present in all 7 locale files
    - Test file: `__tests__/messages/i18n-completeness.property.test.ts`
    - **Validates: Requirements 6.3**

- [x] 3. Newsletter subscription API route
  - [x] 3.1 Create `src/features/newsletter/types.ts` — define `SubscribePayload`, `SubscribeResponse`, `CalculatorCompletedPayload`, and `ApiErrorResponse` interfaces
    - _Requirements: 1.2, 4.1_
  - [x] 3.2 Create `src/app/api/newsletter/subscribe/route.ts` — `POST` handler that validates email (RFC 5322), checks `gdprConsent === true`, optionally verifies hCaptcha token, calls `upsertContact` + `applyTag("checklist_download")`, returns 200/422/405/500 per the error-handling table
    - _Requirements: 1.2, 1.6, 1.7, 1.9, 1.10, 5.1, 5.3, 5.4, 5.6_
  - [x] 3.3 Write property test for Subscribe API correctness (Property 1)
    - **Property 1: Subscribe API correctness**
    - Use `fc.emailAddress()` and `fc.constantFrom(...activeLocales)`; assert upsert + tag called for every valid payload
    - Test file: `__tests__/api/subscribe.property.test.ts`
    - **Validates: Requirements 1.2, 1.6, 1.7**
  - [x] 3.4 Write property test for invalid email rejection (Property 2)
    - **Property 2: Invalid email rejection**
    - Use `fc.string()` filtered to non-RFC5322 strings; assert HTTP 422 returned without calling Brevo
    - Test file: `__tests__/api/email-validation.property.test.ts`
    - **Validates: Requirements 5.1, 5.2**
  - [x] 3.5 Write property test for GDPR consent enforcement (Property 3)
    - **Property 3: GDPR consent enforcement**
    - Use `fc.anything()` for the consent field (excluding `true`); assert HTTP 422 and no Brevo call
    - Test file: `__tests__/api/subscribe.property.test.ts`
    - **Validates: Requirements 5.3**
  - [x] 3.6 Write property test for HTTP method restriction (Property 4)
    - **Property 4: HTTP method restriction**
    - Use `fc.constantFrom("GET","PUT","DELETE","PATCH","HEAD")`; assert HTTP 405 for both API routes
    - Test file: `__tests__/api/methods.property.test.ts`
    - **Validates: Requirements 5.4, 5.5**
  - [x] 3.7 Write unit tests for Subscribe API
    - Test: returns 200 with `duplicate: true` for already-tagged contact (Req 1.10)
    - Test: renders hCaptcha widget when `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` is set (Req 5.6)
    - Test: rejects request without captcha token when captcha is enabled (Req 5.6)
    - Test file: `__tests__/api/subscribe.unit.test.ts`
    - _Requirements: 1.10, 5.6_

- [x] 4. Newsletter subscription form component
  - [x] 4.1 Create `src/features/newsletter/hooks/useSubscribe.ts` — async hook that POSTs to `/api/newsletter/subscribe` and returns `{ status, error, submit }`
    - _Requirements: 1.2, 1.8, 1.9_
  - [x] 4.2 Create `src/features/newsletter/components/SubscriptionFormSuccess.tsx` — localised success state component using `Newsletter.successTitle` and `Newsletter.successBody` keys
    - _Requirements: 1.8_
  - [x] 4.3 Create `src/features/newsletter/components/SubscriptionForm.tsx` — email input + GDPR consent checkbox + optional hCaptcha widget + submit button; uses `useSubscribe`; shows inline validation errors and success/error states; sources all strings from `Newsletter` namespace via `useTranslations`
    - _Requirements: 1.1, 1.3, 1.4, 1.5, 1.8, 1.9, 5.6, 6.1_
  - [x] 4.4 Write unit tests for SubscriptionForm
    - Test: renders email input, consent checkbox, and submit button
    - Test: submit button disabled when consent unchecked (Req 1.4)
    - Test: shows success state after successful API response (Req 1.8)
    - Test: shows error banner on HTTP 500 (Req 1.9)
    - Test file: `__tests__/features/SubscriptionForm.unit.test.tsx`
    - _Requirements: 1.4, 1.8, 1.9_

- [x] 5. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Humidity Risk Calculator — questions data and scoring library
  - [x] 6.1 Create `src/features/tools/lib/questions.ts` — define the `Question[]` array with all 6 questions (`q_room_type`, `q_condensation`, `q_ventilation`, `q_water_damage`, `q_climate_zone`, `q_visible_mold`), their `AnswerOption[]` arrays with `scoreContribution` values, and `weight` values that sum to 1.0
    - _Requirements: 3.2, 3.3_
  - [x] 6.2 Create `src/features/tools/lib/scoring.ts` — implement `computeScore(answers: Answers, questions: Question[]): number` (weighted sum × 100, rounded to integer) and `getBand(score: number): RiskBand`
    - _Requirements: 3.3, 3.4_
  - [x] 6.3 Create `src/features/tools/types.ts` — define `CalculatorPhase`, `CalculatorState`, `Question`, `AnswerOption`, `Answers`, and `RiskBand` types
    - _Requirements: 3.3, 3.4_
  - [x] 6.4 Write property test for Risk Score bounds invariant (Property 5)
    - **Property 5: Risk Score bounds invariant**
    - Use `fc.record(...)` over all question answer options; assert `computeScore` always returns integer in [0, 100]
    - Test file: `__tests__/lib/scoring.property.test.ts`
    - **Validates: Requirements 3.3**
  - [x] 6.5 Write property test for Risk band assignment exhaustiveness (Property 6)
    - **Property 6: Risk band assignment exhaustiveness**
    - Use `fc.integer({ min: 0, max: 100 })`; assert `getBand` returns exactly one of `"low"`, `"medium"`, `"high"` with no gaps or overlaps
    - Test file: `__tests__/lib/scoring.property.test.ts`
    - **Validates: Requirements 3.4**

- [x] 7. Humidity Risk Calculator — React components
  - [x] 7.1 Create `src/features/tools/components/CalculatorStep.tsx` — renders a single question (single-choice radio group or numeric scale input) with localised label and answer options; accepts `question`, `value`, `onChange`, and `error` props
    - _Requirements: 3.2, 3.5, 3.7_
  - [x] 7.2 Create `src/features/tools/hooks/useCalculatorSubmit.ts` — async hook that POSTs to `/api/newsletter/calculator-completed` and returns `{ status, error, submit }`
    - _Requirements: 4.1, 4.8_
  - [x] 7.3 Create `src/features/tools/components/EmailCaptureForm.tsx` — optional post-result email form; on API error shows non-blocking localised notice while keeping result visible; uses `useCalculatorSubmit`
    - _Requirements: 4.1, 4.8, 6.2_
  - [x] 7.4 Create `src/features/tools/components/CalculatorResult.tsx` — displays Risk Score, localised band label, and band-appropriate recommendation text; renders `<EmailCaptureForm>` below the result
    - _Requirements: 3.4, 3.5, 4.8_
  - [x] 7.5 Create `src/features/tools/components/HumidityCalculator.tsx` — orchestrator component implementing the state machine (`idle → step(n) → result → email_capture/submitted/skipped`); handles back-navigation with answer preservation; validates required steps before advancing; sources all strings from `Calculator` namespace
    - _Requirements: 3.1, 3.2, 3.5, 3.6, 3.7, 3.8_
  - [x] 7.6 Write property test for answer preservation on back-navigation (Property 7)
    - **Property 7: Answer preservation on back-navigation**
    - Use `fc.array(fc.record(...))` of answer sequences; assert answers are identical after back + forward navigation
    - Test file: `__tests__/features/calculator.property.test.ts`
    - **Validates: Requirements 3.6**
  - [x] 7.7 Write property test for required-step validation blocks progression (Property 8)
    - **Property 8: Required-step validation blocks progression**
    - Use `fc.integer({ min: 0, max: stepCount - 1 })`; assert step index unchanged and error shown when required question unanswered
    - Test file: `__tests__/features/calculator.property.test.ts`
    - **Validates: Requirements 3.7**
  - [x] 7.8 Write unit tests for HumidityCalculator
    - Test: renders without email input and reaches result state (Req 3.8)
    - Test: renders for each of the 7 locales (Req 3.1)
    - Test file: `__tests__/features/HumidityCalculator.unit.test.tsx`
    - _Requirements: 3.1, 3.8_
  - [x] 7.9 Write unit tests for EmailCaptureForm
    - Test: shows non-blocking error while keeping result visible (Req 4.8)
    - Test file: `__tests__/features/EmailCaptureForm.unit.test.tsx`
    - _Requirements: 4.8_

- [x] 8. Calculator API route
  - [x] 8.1 Create `src/app/api/newsletter/calculator-completed/route.ts` — `POST` handler that validates email (RFC 5322) and `riskScore` (integer 0–100), optionally verifies hCaptcha, calls `upsertContact` (with `RISK_SCORE` and `LOCALE` attributes) + `applyTag("calculator_completed")`, returns 200/422/405/500 per the error-handling table
    - _Requirements: 4.1, 4.2, 4.3, 4.8, 4.9, 5.2, 5.5_
  - [x] 8.2 Write property test for Calculator API correctness (Property 9)
    - **Property 9: Calculator API correctness**
    - Use `fc.emailAddress()`, `fc.integer({ min: 0, max: 100 })`, `fc.constantFrom(...activeLocales)`; assert upsert called with score + locale and `calculator_completed` tag applied
    - Test file: `__tests__/api/calculator-completed.property.test.ts`
    - **Validates: Requirements 4.1, 4.2, 4.3**
  - [x] 8.3 Write unit tests for Calculator API
    - Test: returns 200 with `duplicate: true` for already-tagged contact (Req 4.9)
    - Test file: `__tests__/api/calculator-completed.unit.test.ts`
    - _Requirements: 4.9_

- [x] 9. Tool page integration — slug-based routing
  - [x] 9.1 Update `src/app/(site)/[locale]/tools/[slug]/page.tsx` to detect `slug === "humidity-risk-calculator"` and render `<HumidityCalculator locale={locale} />`; pass `locale` from the route params; keep the existing placeholder for other slugs
    - _Requirements: 3.1_
  - [x] 9.2 Embed `<SubscriptionForm>` as a section on `src/app/(site)/[locale]/tools/page.tsx` (tools index) so the newsletter CTA is visible from the tools landing page
    - _Requirements: 1.1_

- [x] 10. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Property tests use fast-check with `{ numRuns: 100 }` and must include the comment tag `// Feature: newsletter-checklist-humidity-tool, Property N: <property_text>`
- Unit tests and property tests are complementary — both are needed for full coverage
- Brevo automations (Email Sequence 1 and 2) are configured in the Brevo dashboard, not in code

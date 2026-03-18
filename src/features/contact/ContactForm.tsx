"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { validateContactForm, hasErrors, type ContactFormData, type ContactFormErrors } from "@/lib/contact/schema";
import { countryPrefixes } from "./countryPrefixes";
import type { ContactContent } from "./contactContent";

const EMPTY: ContactFormData = {
  fullName: "",
  email: "",
  countryPrefix: "+351",
  phoneNumber: "",
  municipality: "",
  message: "",
  consentAccepted: false,
};

interface Props {
  sourcePage: string;
  content: ContactContent;
  privacyHref: string;
}

export function ContactForm({ sourcePage, content, privacyHref }: Props) {
  const [fields, setFields] = useState<ContactFormData>(EMPTY);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function set(key: keyof ContactFormData, value: string | boolean) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof ContactFormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as keyof ContactFormErrors];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validateContactForm(fields, content);
    if (hasErrors(errs)) { setErrors(errs); return; }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, honeypot, sourcePage }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({})) as { fields?: ContactFormErrors };
        if (data.fields) setErrors(data.fields);
        setStatus("error");
        return;
      }
      setStatus("success");
      setFields(EMPTY);
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="contact-form__success-title">{content.successTitle}</p>
        <p className="contact-form__success-body">{content.successBody}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
      />

      <div className="contact-form__row">
        <Field label={content.labelFullName} error={errors.fullName} required>
          <input
            type="text"
            className={`contact-form__input${errors.fullName ? " is-error" : ""}`}
            value={fields.fullName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => set("fullName", e.target.value)}
            maxLength={50}
            autoComplete="name"
            placeholder={content.placeholderFullName}
          />
        </Field>

        <Field label={content.labelEmail} error={errors.email} required>
          <input
            type="email"
            className={`contact-form__input${errors.email ? " is-error" : ""}`}
            value={fields.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => set("email", e.target.value)}
            autoComplete="email"
            placeholder={content.placeholderEmail}
          />
        </Field>
      </div>

      <div className="contact-form__row">
        <Field label={content.labelPrefix} error={errors.countryPrefix} required>
          <select
            className={`contact-form__select${errors.countryPrefix ? " is-error" : ""}`}
            value={fields.countryPrefix}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => set("countryPrefix", e.target.value)}
          >
            {countryPrefixes.map((c) => (
              <option key={c.code} value={c.prefix || c.code}>
                {c.prefix ? `${c.prefix} ${c.label}` : c.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label={content.labelPhone} error={errors.phoneNumber} required>
          <input
            type="tel"
            className={`contact-form__input${errors.phoneNumber ? " is-error" : ""}`}
            value={fields.phoneNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => set("phoneNumber", e.target.value)}
            autoComplete="tel-national"
            placeholder={content.placeholderPhone}
          />
        </Field>
      </div>

      <Field label={content.labelMunicipality} error={errors.municipality} required>
        <input
          type="text"
          className={`contact-form__input${errors.municipality ? " is-error" : ""}`}
          value={fields.municipality}
          onChange={(e: ChangeEvent<HTMLInputElement>) => set("municipality", e.target.value)}
          maxLength={100}
          placeholder={content.placeholderMunicipality}
        />
      </Field>

      <Field label={content.labelMessage} error={errors.message} required>
        <textarea
          className={`contact-form__textarea${errors.message ? " is-error" : ""}`}
          value={fields.message}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => set("message", e.target.value)}
          maxLength={500}
          rows={5}
          placeholder={content.placeholderMessage}
        />
        <span className="contact-form__char-count">{fields.message.length}/500</span>
      </Field>

      <div className="contact-form__consent">
        <label className="contact-form__consent-label">
          <input
            type="checkbox"
            className="contact-form__checkbox"
            checked={fields.consentAccepted}
            onChange={(e: ChangeEvent<HTMLInputElement>) => set("consentAccepted", e.target.checked)}
          />
          <span>
            {content.consentText}
            <a href={privacyHref} className="contact-form__consent-link">
              {content.consentLinkText}
            </a>
            .
          </span>
        </label>
        {errors.consentAccepted && <p className="contact-form__error">{errors.consentAccepted}</p>}
      </div>

      {status === "error" && (
        <p className="contact-form__submit-error">{content.submitError}</p>
      )}

      <button
        type="submit"
        className="contact-form__submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? content.sendingLabel : content.submitLabel}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="contact-form__field">
      <label className="contact-form__label">
        {label}
        {required && <span className="contact-form__required" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <p className="contact-form__error">{error}</p>}
    </div>
  );
}

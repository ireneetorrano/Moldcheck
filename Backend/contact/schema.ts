/** Contact form validation schema — used on both client and server */

export interface ContactFormData {
  fullName: string;
  email: string;
  countryPrefix: string;
  phoneNumber: string;
  municipality: string;
  message: string;
  consentAccepted: boolean;
  honeypot?: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  countryPrefix?: string;
  phoneNumber?: string;
  municipality?: string;
  message?: string;
  consentAccepted?: string;
}

export interface ContactErrorMessages {
  errFullNameRequired: string;
  errFullNameMax: string;
  errEmailRequired: string;
  errEmailInvalid: string;
  errPrefixRequired: string;
  errPhoneRequired: string;
  errPhoneDigits: string;
  errPhoneLength: string;
  errMunicipalityRequired: string;
  errMunicipalityMax: string;
  errMessageRequired: string;
  errMessageMax: string;
  errConsentRequired: string;
}

const DEFAULT_MESSAGES: ContactErrorMessages = {
  errFullNameRequired: "Name is required.",
  errFullNameMax: "Maximum 50 characters.",
  errEmailRequired: "Email is required.",
  errEmailInvalid: "Please enter a valid email.",
  errPrefixRequired: "Please select a prefix.",
  errPhoneRequired: "Phone is required.",
  errPhoneDigits: "Only digits are allowed.",
  errPhoneLength: "Invalid phone length.",
  errMunicipalityRequired: "Municipality is required.",
  errMunicipalityMax: "Maximum 100 characters.",
  errMessageRequired: "Message is required.",
  errMessageMax: "Maximum 500 characters.",
  errConsentRequired: "You must accept the privacy policy.",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DIGITS_RE = /^\d+$/;

export function validateContactForm(
  data: ContactFormData,
  msgs: ContactErrorMessages = DEFAULT_MESSAGES,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const fullName = data.fullName?.trim() ?? "";
  if (!fullName) errors.fullName = msgs.errFullNameRequired;
  else if (fullName.length > 50) errors.fullName = msgs.errFullNameMax;

  const email = data.email?.trim() ?? "";
  if (!email) errors.email = msgs.errEmailRequired;
  else if (!EMAIL_RE.test(email)) errors.email = msgs.errEmailInvalid;

  if (!data.countryPrefix?.trim()) errors.countryPrefix = msgs.errPrefixRequired;

  const phone = (data.phoneNumber ?? "").replace(/\s+/g, "");
  if (!phone) errors.phoneNumber = msgs.errPhoneRequired;
  else if (!DIGITS_RE.test(phone)) errors.phoneNumber = msgs.errPhoneDigits;
  else if (phone.length < 6 || phone.length > 15) errors.phoneNumber = msgs.errPhoneLength;

  const municipality = data.municipality?.trim() ?? "";
  if (!municipality) errors.municipality = msgs.errMunicipalityRequired;
  else if (municipality.length > 100) errors.municipality = msgs.errMunicipalityMax;

  const message = data.message?.trim() ?? "";
  if (!message) errors.message = msgs.errMessageRequired;
  else if (message.length > 500) errors.message = msgs.errMessageMax;

  if (!data.consentAccepted) errors.consentAccepted = msgs.errConsentRequired;

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

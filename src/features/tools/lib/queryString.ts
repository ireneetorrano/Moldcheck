import type { Answers } from "../types";

const PARAM_KEY = "calc";

export function encodeAnswers(answers: Answers): string {
  try {
    return btoa(JSON.stringify(answers));
  } catch {
    return "";
  }
}

export function decodeAnswers(encoded: string): Answers | null {
  try {
    const decoded = JSON.parse(atob(encoded));
    if (typeof decoded === "object" && decoded !== null) {
      return decoded as Answers;
    }
    return null;
  } catch {
    return null;
  }
}

export function buildShareUrl(answers: Answers): string {
  if (typeof window === "undefined") return "";
  const url = new URL(window.location.href);
  url.searchParams.set(PARAM_KEY, encodeAnswers(answers));
  return url.toString();
}

export function readAnswersFromUrl(): Answers | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get(PARAM_KEY);
  if (!encoded) return null;
  return decodeAnswers(encoded);
}

const STORAGE_KEY = "mc_calc_state";

export function saveToStorage(answers: Answers, score: number) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ answers, score, ts: Date.now() })
    );
  } catch {
    // storage may be unavailable
  }
}

export function loadFromStorage(): { answers: Answers; score: number } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.answers && typeof parsed.score === "number") {
      return { answers: parsed.answers, score: parsed.score };
    }
    return null;
  } catch {
    return null;
  }
}

export function clearStorage() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // storage may be unavailable
  }
}

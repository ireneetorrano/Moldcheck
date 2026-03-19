/** Shared utility helpers */

/** HTML-escape a string for safe use in email templates */
export function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

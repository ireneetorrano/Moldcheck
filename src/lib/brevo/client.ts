import { BrevoContact, BrevoError, BrevoTag } from "./types";

const BREVO_API_BASE = "https://api.brevo.com/v3";

function getApiKey(): string {
  const key = process.env.BREVO_API_KEY;
  if (!key) throw new BrevoError("BREVO_API_KEY is not set", 500);
  return key;
}

async function brevoFetch(path: string, body: unknown): Promise<void> {
  const res = await fetch(`${BREVO_API_BASE}${path}`, {
    method: "POST",
    headers: {
      "api-key": getApiKey(),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    let responseBody: unknown;
    try {
      responseBody = await res.json();
    } catch {
      responseBody = null;
    }
    throw new BrevoError(`Brevo API error: ${res.status}`, res.status, responseBody);
  }
}

/**
 * Upserts a contact in Brevo. Uses createOrUpdateContact (POST /contacts)
 * which is idempotent — safe to call multiple times for the same email.
 */
export async function upsertContact(contact: BrevoContact): Promise<void> {
  const attributes: Record<string, unknown> = {
    LOCALE: contact.locale,
  };
  if (contact.riskScore !== undefined) {
    attributes.RISK_SCORE = contact.riskScore;
  }

  try {
    await brevoFetch("/contacts", {
      email: contact.email,
      attributes,
      updateEnabled: true,
    });
  } catch (err) {
    if (err instanceof BrevoError) throw err;
    throw new BrevoError("Unexpected error calling Brevo upsertContact", 500, err);
  }
}

/**
 * Applies a tag to an existing Brevo contact by adding them to a list
 * identified by the tag name. Tags are implemented as Brevo lists.
 * The list IDs are resolved from env vars.
 */
export async function applyTag(email: string, tag: BrevoTag): Promise<void> {
  const listIdEnvKey = `BREVO_LIST_ID_${tag.toUpperCase()}`;
  const listIdRaw = process.env[listIdEnvKey];

  // If no list ID configured, fall back to using contact attributes as tags
  if (!listIdRaw) {
    try {
      await brevoFetch("/contacts", {
        email,
        attributes: { [tag.toUpperCase()]: true },
        updateEnabled: true,
      });
    } catch (err) {
      if (err instanceof BrevoError) throw err;
      throw new BrevoError("Unexpected error applying tag via attribute", 500, err);
    }
    return;
  }

  const listId = parseInt(listIdRaw, 10);
  try {
    await brevoFetch("/contacts/lists/addContactsToList", {
      emails: [email],
      listId,
    });
  } catch (err) {
    if (err instanceof BrevoError) throw err;
    throw new BrevoError("Unexpected error calling Brevo applyTag", 500, err);
  }
}

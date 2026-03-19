"use client";

import { useState } from "react";

// ── Heading → slug (same algorithm as ArticleBody) ────────────────────────
function toId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// ── Room icons ────────────────────────────────────────────────────────────
const ROOM_ICONS: Record<string, string> = {
  // bathroom keywords
  bathroom: "🚿", "salle de bain": "🚿", "casa de banho": "🚿",
  badezimmer: "🚿", badkamer: "🚿", bagno: "🚿", baño: "🚿",
  // kitchen
  kitchen: "🍳", cuisine: "🍳", cozinha: "🍳",
  küche: "🍳", keuken: "🍳", cucina: "🍳", cocina: "🍳",
  // bedroom
  bedroom: "🛏", chambre: "🛏", quarto: "🛏",
  schlafzimmer: "🛏", slaapkamer: "🛏", "camera da letto": "🛏", dormitorio: "🛏",
  // living room
  "living room": "🛋", salon: "🛋", "sala de estar": "🛋",
  wohnzimmer: "🛋", woonkamer: "🛋", soggiorno: "🛋", salón: "🛋",
  // basement/garage
  basement: "🏚", cave: "🏚", garagem: "🏚",
  keller: "🏚", kelder: "🏚", cantina: "🏚", sótano: "🏚",
  // generic fallback
  default: "🏠",
};

function getRoomIcon(label: string): string {
  const lower = label.toLowerCase();
  for (const [key, icon] of Object.entries(ROOM_ICONS)) {
    if (key !== "default" && lower.includes(key)) return icon;
  }
  return ROOM_ICONS.default;
}

// ── Section detection helpers ─────────────────────────────────────────────
// These heading prefixes identify A5-specific rich sections across all locales
const TABLE_HEADING_PREFIXES = [
  "tabela:", "tableau :", "tabelle:", "tabel:", "tabella:", "tabla:",
  "location-to-probable-cause", // en heading text
];
const CHECKLIST_HEADING_PREFIXES = [
  "checklist de 20", "20-point checklist", "20-punkte-checkliste",
  "20-punten checklist", "checklist di 20", "lista de verificación de 20",
];
const ROOM_HEADING_PREFIXES = [
  "inspecção divisão", "room-by-room inspection", "inspection pièce",
  "zimmer-für-zimmer", "kamer-voor-kamer", "ispezione stanza",
  "inspección habitación",
];

function matchesPrefix(heading: string, prefixes: string[]): boolean {
  const lower = heading.toLowerCase();
  return prefixes.some((p) => lower.includes(p));
}

// ── Table row parser: "Location — Cause." ─────────────────────────────────
function parseTableRows(paragraphs: string[]): Array<{ location: string; cause: string }> {
  const rows: Array<{ location: string; cause: string }> = [];
  for (const p of paragraphs) {
    // Separator can be " — ", " → ", " - "
    const sep = p.includes(" — ") ? " — " : p.includes(" → ") ? " → " : null;
    if (!sep) break; // stop at next heading or non-table paragraph
    const idx = p.indexOf(sep);
    rows.push({ location: p.slice(0, idx).trim(), cause: p.slice(idx + sep.length).trim() });
  }
  return rows;
}

// ── Checklist group parser ────────────────────────────────────────────────
interface CheckGroup {
  label: string;
  items: string[];
}

function parseChecklistGroups(paragraphs: string[]): CheckGroup[] {
  const groups: CheckGroup[] = [];
  for (const p of paragraphs) {
    if (p.startsWith("## ")) break;
    // Each paragraph is "GroupLabel: (1) item (2) item ..."
    const colonIdx = p.indexOf(":");
    if (colonIdx === -1) continue;
    const label = p.slice(0, colonIdx).trim();
    const rest = p.slice(colonIdx + 1).trim();
    // Split on "(N)" pattern
    const items = rest
      .split(/\(\d+\)/)
      .map((s) => s.trim())
      .filter(Boolean);
    groups.push({ label, items });
  }
  return groups;
}

// ── Room block parser ─────────────────────────────────────────────────────
interface RoomBlock {
  name: string;
  body: string;
}

function parseRoomBlocks(paragraphs: string[]): RoomBlock[] {
  const rooms: RoomBlock[] = [];
  for (const p of paragraphs) {
    if (p.startsWith("## ")) break;
    const colonIdx = p.indexOf(":");
    if (colonIdx === -1) continue;
    const name = p.slice(0, colonIdx).trim();
    const body = p.slice(colonIdx + 1).trim();
    rooms.push({ name, body });
  }
  return rooms;
}

// ── Rich components ───────────────────────────────────────────────────────

function LocationTable({ rows }: { rows: Array<{ location: string; cause: string }> }) {
  return (
    <div className="a5-table-wrap">
      <table className="a5-table">
        <thead>
          <tr>
            <th className="a5-table__th a5-table__th--loc">Localização / Location</th>
            <th className="a5-table__th a5-table__th--cause">Causa provável / Probable cause</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="a5-table__row">
              <td className="a5-table__td a5-table__td--loc">{row.location}</td>
              <td className="a5-table__td a5-table__td--cause">{row.cause}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChecklistSection({ groups }: { groups: CheckGroup[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (key: string) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="a5-checklist">
      {groups.map((group, gi) => (
        <div key={gi} className="a5-checklist__group">
          <p className="a5-checklist__group-label">{group.label}</p>
          <ul className="a5-checklist__list">
            {group.items.map((item, ii) => {
              const key = `${gi}-${ii}`;
              const done = !!checked[key];
              return (
                <li key={ii} className={`a5-checklist__item${done ? " a5-checklist__item--done" : ""}`}>
                  <button
                    type="button"
                    className={`a5-checklist__box${done ? " a5-checklist__box--checked" : ""}`}
                    aria-checked={done}
                    role="checkbox"
                    onClick={() => toggle(key)}
                    aria-label={item}
                  >
                    {done && (
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                        <path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  <span className="a5-checklist__text">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

function RoomSection({ rooms }: { rooms: RoomBlock[] }) {
  return (
    <div className="a5-rooms">
      {rooms.map((room, i) => (
        <div key={i} className="a5-room">
          <div className="a5-room__icon" aria-hidden="true">
            {getRoomIcon(room.name)}
          </div>
          <div className="a5-room__content">
            <p className="a5-room__name">{room.name}</p>
            <p className="a5-room__body">{room.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main A5 body renderer ─────────────────────────────────────────────────

export function A5ArticleBody({ paragraphs }: { paragraphs: string[] }) {
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < paragraphs.length) {
    const para = paragraphs[i];

    if (para.startsWith("## ")) {
      const headingText = para.slice(3);
      const id = toId(headingText);

      if (matchesPrefix(headingText, TABLE_HEADING_PREFIXES)) {
        // Collect table rows (non-heading paragraphs that follow)
        const rowParas: string[] = [];
        let j = i + 1;
        while (j < paragraphs.length && !paragraphs[j].startsWith("## ")) {
          rowParas.push(paragraphs[j]);
          j++;
        }
        const rows = parseTableRows(rowParas);
        elements.push(
          <h2 key={`h-${i}`} id={id} className="article-page__h2">{headingText}</h2>
        );
        elements.push(<LocationTable key={`table-${i}`} rows={rows} />);
        i = j;
        continue;
      }

      if (matchesPrefix(headingText, CHECKLIST_HEADING_PREFIXES)) {
        const checkParas: string[] = [];
        let j = i + 1;
        while (j < paragraphs.length && !paragraphs[j].startsWith("## ")) {
          checkParas.push(paragraphs[j]);
          j++;
        }
        const groups = parseChecklistGroups(checkParas);
        elements.push(
          <h2 key={`h-${i}`} id={id} className="article-page__h2">{headingText}</h2>
        );
        elements.push(<ChecklistSection key={`check-${i}`} groups={groups} />);
        i = j;
        continue;
      }

      if (matchesPrefix(headingText, ROOM_HEADING_PREFIXES)) {
        const roomParas: string[] = [];
        let j = i + 1;
        while (j < paragraphs.length && !paragraphs[j].startsWith("## ")) {
          roomParas.push(paragraphs[j]);
          j++;
        }
        const rooms = parseRoomBlocks(roomParas);
        elements.push(
          <h2 key={`h-${i}`} id={id} className="article-page__h2">{headingText}</h2>
        );
        elements.push(<RoomSection key={`rooms-${i}`} rooms={rooms} />);
        i = j;
        continue;
      }

      // Standard heading
      elements.push(
        <h2 key={`h-${i}`} id={id} className="article-page__h2">{headingText}</h2>
      );
      i++;
      continue;
    }

    // Standard paragraph
    elements.push(
      <p key={i} className="article-page__para">{para}</p>
    );
    i++;
  }

  return <>{elements}</>;
}

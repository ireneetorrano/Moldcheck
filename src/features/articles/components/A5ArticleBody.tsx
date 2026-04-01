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
  "location-to-probable-cause", // en old heading
  "location maps to cause",     // en new heading
  "o padrão de localização",    // pt 3-col table
  "la localisation indique",    // fr new heading
  "der standort zeigt",         // de new heading
  "de locatie wijst",           // nl new heading
  "tabla de diagnóstico",       // es diagnostic table
  "leggere i risultati",        // it diagnostic table
];
const ASSESSMENT_HEADING_PREFIXES = [
  "how to interpret what you found",
  "comment interpréter ce que vous avez trouvé",
  "so interpretieren sie ihre befunde",
  "hoe u uw bevindingen interpreteert",
  "niveles de actuación",       // es assessment levels
];
const CHECKLIST_HEADING_PREFIXES = [
  "checklist de 20", "20-point checklist", "20-punkte-checkliste",
  "20-punten checklist", "checklist di 20", "lista de verificación de 20",
];
const ROOM_HEADING_PREFIXES: string[] = [
  // kept for any future old-style rooms; currently unused
];
// All locales use checklist-style room rendering
const ROOM_CHECKLIST_HEADING_PREFIXES = [
  "inspección habitación",        // es
  "stanza per stanza",            // it
  "room-by-room inspection",      // en
  "inspecção divisão a divisão",  // pt
  "inspection pièce par pièce",   // fr
  "zimmer-für-zimmer-inspektion", // de
  "kamer-voor-kamer inspectie",   // nl
];
const HYGRO_HEADING_PREFIXES = [
  "herramienta fundamental",    // es hygrometer reference table
  "strumento fondamentale",     // it hygrometer reference table
];
const BULLETS_HEADING_PREFIXES = [
  "quand appeler un professionnel",
  "wann ein fachmann gerufen werden sollte",
  "wanneer een professional te bellen",
  "cuándo llamar",              // es professional section
  "quando chiamare",            // it professional section
];

function matchesPrefix(heading: string, prefixes: string[]): boolean {
  const lower = heading.toLowerCase();
  return prefixes.some((p) => lower.includes(p));
}

// ── Table row parser ──────────────────────────────────────────────────────
// Supports:
//   2-col: "Location → Cause"  or  "Location — Cause"
//   3-col: "Location | Cause | Action"
//   Headers line: "HEADERS: Col1 | Col2 | Col3"
interface TableRow {
  location: string;
  cause: string;
  action?: string;
}

interface TableData {
  headers: string[];
  rows: TableRow[];
}

function parseTableRows(paragraphs: string[]): TableData {
  const rows: TableRow[] = [];
  let headers: string[] = [];
  for (const p of paragraphs) {
    if (p.startsWith("## ")) break;
    if (p.startsWith("HEADERS:")) {
      headers = p.slice(8).split("|").map((s) => s.trim());
      continue;
    }
    if (p.includes(" | ")) {
      const parts = p.split(" | ").map((s) => s.trim());
      if (parts.length >= 2) {
        rows.push({ location: parts[0], cause: parts[1], action: parts[2] });
      }
      continue;
    }
    const sep = p.includes(" → ") ? " → " : p.includes(" — ") ? " — " : null;
    if (!sep) {
      if (rows.length > 0) break;
      continue;
    }
    const idx = p.indexOf(sep);
    rows.push({ location: p.slice(0, idx).trim(), cause: p.slice(idx + sep.length).trim() });
  }
  return { headers, rows };
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

// ── Assessment level parser ───────────────────────────────────────────────
// Each paragraph: "Level N — Label: body text"
interface AssessLevel {
  level: number;
  label: string;
  body: string;
}

function parseAssessmentLevels(paragraphs: string[]): AssessLevel[] {
  const levels: AssessLevel[] = [];
  for (const p of paragraphs) {
    if (p.startsWith("## ")) break;
    // Matches "Level N — Label: body" (EN), "Niveau N — Label: body" (FR/NL), "Stufe N — Label: body" (DE), "Nivel N — Label: body" (ES)
    const m = p.match(/^(?:Level|Niveau|Stufe|Nivel)\s+(\d+)\s*[—–-]\s*([^:]+):\s*(.+)$/s);
    if (m) {
      levels.push({ level: Number(m[1]), label: m[2].trim(), body: m[3].trim() });
    }
  }
  return levels;
}

// ── Assessment scale component ────────────────────────────────────────────
const LEVEL_COLORS = ["#2e7d32", "#f57c00", "#c62828", "#6a1b9a"] as const;

function AssessmentScale({ levels }: { levels: AssessLevel[] }) {
  return (
    <div className="a5-assess">
      {levels.map((lv) => (
        <div
          key={lv.level}
          className="a5-assess__level"
          style={{ borderLeftColor: LEVEL_COLORS[(lv.level - 1) % LEVEL_COLORS.length] }}
        >
          <p className="a5-assess__badge" style={{ color: LEVEL_COLORS[(lv.level - 1) % LEVEL_COLORS.length] }}>
            Level {lv.level} — {lv.label}
          </p>
          <p className="a5-assess__body">{lv.body}</p>
        </div>
      ))}
    </div>
  );
}

// ── Rich components ───────────────────────────────────────────────────────

function LocationTable({ headers, rows }: { headers: string[]; rows: TableRow[] }) {
  const hasAction = rows.some((r) => r.action !== undefined);
  const h0 = headers[0] ?? "Location";
  const h1 = headers[1] ?? "Cause";
  const h2 = headers[2] ?? "Action";
  return (
    <div className="a5-table-wrap">
      <table className="a5-table">
        <thead>
          <tr>
            <th className="a5-table__th a5-table__th--loc">{h0}</th>
            <th className="a5-table__th a5-table__th--cause">{h1}</th>
            {hasAction && <th className="a5-table__th a5-table__th--action">{h2}</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="a5-table__row">
              <td className="a5-table__td a5-table__td--loc">{row.location}</td>
              <td className="a5-table__td a5-table__td--cause">{row.cause}</td>
              {hasAction && <td className="a5-table__td a5-table__td--action">{row.action}</td>}
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

function BulletSection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <ul className="a5-bullets">
      {paragraphs
        .filter((p) => p.startsWith("• "))
        .map((p, i) => (
          <li key={i} className="a5-bullets__item">{p.slice(2)}</li>
        ))}
    </ul>
  );
}

// ── Hygrometer reference table (ES) ──────────────────────────────────────
interface HygroRow { hr: string; meaning: string; }

function parseHygroRows(paragraphs: string[]): { intro: string[]; subheading: string; headers: string[]; rows: HygroRow[] } {
  const intro: string[] = [];
  let subheading = "";
  let headers: string[] = [];
  const rows: HygroRow[] = [];
  for (const p of paragraphs) {
    if (p.startsWith("## ")) break;
    if (p.startsWith("HEADERS:")) {
      headers = p.slice(8).split("|").map((s) => s.trim());
      continue;
    }
    if (p.includes(" | ")) {
      const parts = p.split(" | ").map((s) => s.trim());
      if (parts.length >= 2) rows.push({ hr: parts[0], meaning: parts[1] });
      continue;
    }
    if (p.endsWith(":") && p.length < 40) { subheading = p; continue; }
    intro.push(p);
  }
  return { intro, subheading, headers, rows };
}

function HygroTable({ intro, subheading, headers, rows }: { intro: string[]; subheading: string; headers: string[]; rows: HygroRow[] }) {
  const h0 = headers[0] ?? "Relative humidity";
  const h1 = headers[1] ?? "Meaning";
  return (
    <div className="a5-hygro">
      {intro.map((p, i) => <p key={i} className="article-page__para">{p}</p>)}
      {subheading && <p className="a5-hygro__subheading">{subheading}</p>}
      <div className="a5-table-wrap">
        <table className="a5-table">
          <thead>
            <tr>
              <th className="a5-table__th a5-table__th--loc">{h0}</th>
              <th className="a5-table__th a5-table__th--cause">{h1}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="a5-table__row">
                <td className="a5-table__td a5-table__td--loc">{row.hr}</td>
                <td className="a5-table__td a5-table__td--cause">{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Room checklist renderer (ES) ──────────────────────────────────────────
interface RoomChecklistBlock {
  name: string;
  description: string;
  subheading: string;
  items: Array<{ bold: string; rest: string }>;
}

function parseRoomChecklist(paragraphs: string[]): RoomChecklistBlock[] {
  const rooms: RoomChecklistBlock[] = [];
  let current: RoomChecklistBlock | null = null;
  for (const p of paragraphs) {
    if (p.startsWith("## ")) break;
    if (p.startsWith("□ ")) {
      if (!current) continue;
      const inner = p.slice(2).trim();
      const boldMatch = inner.match(/^\*\*(.+?)\*\*(?:\s*[—–-]\s*(.+))?$/s);
      if (boldMatch) {
        current.items.push({ bold: boldMatch[1], rest: boldMatch[2]?.trim() ?? "" });
      } else {
        current.items.push({ bold: inner, rest: "" });
      }
      continue;
    }
    if (p.endsWith(":") && p.length < 30) {
      if (current) current.subheading = p;
      continue;
    }
    const colonIdx = p.indexOf(": ");
    if (colonIdx !== -1 && colonIdx < 30) {
      if (current) rooms.push(current);
      current = { name: p.slice(0, colonIdx).trim(), description: p.slice(colonIdx + 2).trim(), subheading: "", items: [] };
    }
  }
  if (current) rooms.push(current);
  return rooms;
}

function RoomChecklistSection({ rooms }: { rooms: RoomChecklistBlock[] }) {
  return (
    <div className="a5-rooms">
      {rooms.map((room, i) => (
        <div key={i} className="a5-room a5-room--checklist">
          <div className="a5-room__icon" aria-hidden="true">{getRoomIcon(room.name)}</div>
          <div className="a5-room__content">
            <p className="a5-room__name">{room.name}</p>
            <p className="a5-room__body">{room.description}</p>
            {room.subheading && <p className="a5-room__subheading">{room.subheading}</p>}
            <ul className="a5-room__checklist">
              {room.items.map((item, j) => (
                <li key={j} className="a5-room__check-item">
                  <span className="a5-room__check-box" aria-hidden="true">□</span>
                  <span className="a5-room__check-text">
                    <strong>{item.bold}</strong>
                    {item.rest && <> — {item.rest}</>}
                  </span>
                </li>
              ))}
            </ul>
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
        const { headers, rows } = parseTableRows(rowParas);
        elements.push(
          <h2 key={`h-${i}`} id={id} className="article-page__h2">{headingText}</h2>
        );
        elements.push(<LocationTable key={`table-${i}`} headers={headers} rows={rows} />);
        i = j;
        continue;
      }

      if (matchesPrefix(headingText, ASSESSMENT_HEADING_PREFIXES)) {
        const assessParas: string[] = [];
        let j = i + 1;
        while (j < paragraphs.length && !paragraphs[j].startsWith("## ")) {
          assessParas.push(paragraphs[j]);
          j++;
        }
        const levels = parseAssessmentLevels(assessParas);
        elements.push(
          <h2 key={`h-${i}`} id={id} className="article-page__h2">{headingText}</h2>
        );
        elements.push(<AssessmentScale key={`assess-${i}`} levels={levels} />);
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

      if (matchesPrefix(headingText, ROOM_CHECKLIST_HEADING_PREFIXES)) {
        const rcParas: string[] = [];
        let j = i + 1;
        while (j < paragraphs.length && !paragraphs[j].startsWith("## ")) {
          rcParas.push(paragraphs[j]);
          j++;
        }
        const rooms = parseRoomChecklist(rcParas);
        elements.push(
          <h2 key={`h-${i}`} id={id} className="article-page__h2">{headingText}</h2>
        );
        elements.push(<RoomChecklistSection key={`rc-${i}`} rooms={rooms} />);
        i = j;
        continue;
      }

      if (matchesPrefix(headingText, HYGRO_HEADING_PREFIXES)) {
        const hygroParas: string[] = [];
        let j = i + 1;
        while (j < paragraphs.length && !paragraphs[j].startsWith("## ")) {
          hygroParas.push(paragraphs[j]);
          j++;
        }
        const { intro, subheading, headers, rows } = parseHygroRows(hygroParas);
        elements.push(
          <h2 key={`h-${i}`} id={id} className="article-page__h2">{headingText}</h2>
        );
        elements.push(<HygroTable key={`hygro-${i}`} intro={intro} subheading={subheading} headers={headers} rows={rows} />);
        i = j;
        continue;
      }

      if (matchesPrefix(headingText, BULLETS_HEADING_PREFIXES)) {
        const bulletParas: string[] = [];
        let j = i + 1;
        while (j < paragraphs.length && !paragraphs[j].startsWith("## ")) {
          bulletParas.push(paragraphs[j]);
          j++;
        }
        elements.push(
          <h2 key={`h-${i}`} id={id} className="article-page__h2">{headingText}</h2>
        );
        elements.push(<BulletSection key={`bullets-${i}`} paragraphs={bulletParas} />);
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

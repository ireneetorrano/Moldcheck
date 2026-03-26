(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/articles/context/ArticleLocaleContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleLocaleContext",
    ()=>ArticleLocaleContext,
    "useArticleLocaleMap",
    ()=>useArticleLocaleMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const ArticleLocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useArticleLocaleMap() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ArticleLocaleContext);
}
_s(useArticleLocaleMap, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/articles/components/A5ArticleBody.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A5ArticleBody",
    ()=>A5ArticleBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// ── Heading → slug (same algorithm as ArticleBody) ────────────────────────
function toId(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-");
}
// ── Room icons ────────────────────────────────────────────────────────────
const ROOM_ICONS = {
    // bathroom keywords
    bathroom: "🚿",
    "salle de bain": "🚿",
    "casa de banho": "🚿",
    badezimmer: "🚿",
    badkamer: "🚿",
    bagno: "🚿",
    baño: "🚿",
    // kitchen
    kitchen: "🍳",
    cuisine: "🍳",
    cozinha: "🍳",
    küche: "🍳",
    keuken: "🍳",
    cucina: "🍳",
    cocina: "🍳",
    // bedroom
    bedroom: "🛏",
    chambre: "🛏",
    quarto: "🛏",
    schlafzimmer: "🛏",
    slaapkamer: "🛏",
    "camera da letto": "🛏",
    dormitorio: "🛏",
    // living room
    "living room": "🛋",
    salon: "🛋",
    "sala de estar": "🛋",
    wohnzimmer: "🛋",
    woonkamer: "🛋",
    soggiorno: "🛋",
    salón: "🛋",
    // basement/garage
    basement: "🏚",
    cave: "🏚",
    garagem: "🏚",
    keller: "🏚",
    kelder: "🏚",
    cantina: "🏚",
    sótano: "🏚",
    // generic fallback
    default: "🏠"
};
function getRoomIcon(label) {
    const lower = label.toLowerCase();
    for (const [key, icon] of Object.entries(ROOM_ICONS)){
        if (key !== "default" && lower.includes(key)) return icon;
    }
    return ROOM_ICONS.default;
}
// ── Section detection helpers ─────────────────────────────────────────────
// These heading prefixes identify A5-specific rich sections across all locales
const TABLE_HEADING_PREFIXES = [
    "tabela:",
    "tableau :",
    "tabelle:",
    "tabel:",
    "tabella:",
    "tabla:",
    "location-to-probable-cause"
];
const CHECKLIST_HEADING_PREFIXES = [
    "checklist de 20",
    "20-point checklist",
    "20-punkte-checkliste",
    "20-punten checklist",
    "checklist di 20",
    "lista de verificación de 20"
];
const ROOM_HEADING_PREFIXES = [
    "inspecção divisão",
    "room-by-room inspection",
    "inspection pièce",
    "zimmer-für-zimmer",
    "kamer-voor-kamer",
    "ispezione stanza",
    "inspección habitación"
];
function matchesPrefix(heading, prefixes) {
    const lower = heading.toLowerCase();
    return prefixes.some((p)=>lower.includes(p));
}
// ── Table row parser: "Location — Cause." ─────────────────────────────────
function parseTableRows(paragraphs) {
    const rows = [];
    for (const p of paragraphs){
        // Separator can be " — ", " → ", " - "
        const sep = p.includes(" — ") ? " — " : p.includes(" → ") ? " → " : null;
        if (!sep) break; // stop at next heading or non-table paragraph
        const idx = p.indexOf(sep);
        rows.push({
            location: p.slice(0, idx).trim(),
            cause: p.slice(idx + sep.length).trim()
        });
    }
    return rows;
}
function parseChecklistGroups(paragraphs) {
    const groups = [];
    for (const p of paragraphs){
        if (p.startsWith("## ")) break;
        // Each paragraph is "GroupLabel: (1) item (2) item ..."
        const colonIdx = p.indexOf(":");
        if (colonIdx === -1) continue;
        const label = p.slice(0, colonIdx).trim();
        const rest = p.slice(colonIdx + 1).trim();
        // Split on "(N)" pattern
        const items = rest.split(/\(\d+\)/).map((s)=>s.trim()).filter(Boolean);
        groups.push({
            label,
            items
        });
    }
    return groups;
}
function parseRoomBlocks(paragraphs) {
    const rooms = [];
    for (const p of paragraphs){
        if (p.startsWith("## ")) break;
        const colonIdx = p.indexOf(":");
        if (colonIdx === -1) continue;
        const name = p.slice(0, colonIdx).trim();
        const body = p.slice(colonIdx + 1).trim();
        rooms.push({
            name,
            body
        });
    }
    return rooms;
}
// ── Rich components ───────────────────────────────────────────────────────
function LocationTable(param) {
    let { rows } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "a5-table-wrap",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "a5-table",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "a5-table__th a5-table__th--loc",
                                children: "Localização / Location"
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "a5-table__th a5-table__th--cause",
                                children: "Causa provável / Probable cause"
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "a5-table__row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "a5-table__td a5-table__td--loc",
                                    children: row.location
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "a5-table__td a5-table__td--cause",
                                    children: row.cause
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
            lineNumber: 126,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_c = LocationTable;
function ChecklistSection(param) {
    let { groups } = param;
    _s();
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const toggle = (key)=>setChecked((prev)=>({
                ...prev,
                [key]: !prev[key]
            }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "a5-checklist",
        children: groups.map((group, gi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a5-checklist__group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a5-checklist__group-label",
                        children: group.label
                    }, void 0, false, {
                        fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "a5-checklist__list",
                        children: group.items.map((item, ii)=>{
                            const key = "".concat(gi, "-").concat(ii);
                            const done = !!checked[key];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "a5-checklist__item".concat(done ? " a5-checklist__item--done" : ""),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "a5-checklist__box".concat(done ? " a5-checklist__box--checked" : ""),
                                        "aria-checked": done,
                                        role: "checkbox",
                                        onClick: ()=>toggle(key),
                                        "aria-label": item,
                                        children: done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "11",
                                            height: "9",
                                            viewBox: "0 0 11 9",
                                            fill: "none",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1 4.5L4 7.5L10 1",
                                                stroke: "white",
                                                strokeWidth: "1.8",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                                                lineNumber: 172,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                                            lineNumber: 171,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                                        lineNumber: 162,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "a5-checklist__text",
                                        children: item
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                                        lineNumber: 176,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, ii, true, {
                                fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                                lineNumber: 161,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this)
                ]
            }, gi, true, {
                fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s(ChecklistSection, "UCha2KrtrlCAL36XRpPRh6whbt8=");
_c1 = ChecklistSection;
function RoomSection(param) {
    let { rooms } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "a5-rooms",
        children: rooms.map((room, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a5-room",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "a5-room__icon",
                        "aria-hidden": "true",
                        children: getRoomIcon(room.name)
                    }, void 0, false, {
                        fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "a5-room__content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a5-room__name",
                                children: room.name
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a5-room__body",
                                children: room.body
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_c2 = RoomSection;
function A5ArticleBody(param) {
    let { paragraphs } = param;
    const elements = [];
    let i = 0;
    while(i < paragraphs.length){
        const para = paragraphs[i];
        if (para.startsWith("## ")) {
            const headingText = para.slice(3);
            const id = toId(headingText);
            if (matchesPrefix(headingText, TABLE_HEADING_PREFIXES)) {
                // Collect table rows (non-heading paragraphs that follow)
                const rowParas = [];
                let j = i + 1;
                while(j < paragraphs.length && !paragraphs[j].startsWith("## ")){
                    rowParas.push(paragraphs[j]);
                    j++;
                }
                const rows = parseTableRows(rowParas);
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: id,
                    className: "article-page__h2",
                    children: headingText
                }, "h-".concat(i), false, {
                    fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                    lineNumber: 228,
                    columnNumber: 11
                }, this));
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocationTable, {
                    rows: rows
                }, "table-".concat(i), false, {
                    fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                    lineNumber: 230,
                    columnNumber: 23
                }, this));
                i = j;
                continue;
            }
            if (matchesPrefix(headingText, CHECKLIST_HEADING_PREFIXES)) {
                const checkParas = [];
                let j = i + 1;
                while(j < paragraphs.length && !paragraphs[j].startsWith("## ")){
                    checkParas.push(paragraphs[j]);
                    j++;
                }
                const groups = parseChecklistGroups(checkParas);
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: id,
                    className: "article-page__h2",
                    children: headingText
                }, "h-".concat(i), false, {
                    fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                    lineNumber: 244,
                    columnNumber: 11
                }, this));
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChecklistSection, {
                    groups: groups
                }, "check-".concat(i), false, {
                    fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                    lineNumber: 246,
                    columnNumber: 23
                }, this));
                i = j;
                continue;
            }
            if (matchesPrefix(headingText, ROOM_HEADING_PREFIXES)) {
                const roomParas = [];
                let j = i + 1;
                while(j < paragraphs.length && !paragraphs[j].startsWith("## ")){
                    roomParas.push(paragraphs[j]);
                    j++;
                }
                const rooms = parseRoomBlocks(roomParas);
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: id,
                    className: "article-page__h2",
                    children: headingText
                }, "h-".concat(i), false, {
                    fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                    lineNumber: 260,
                    columnNumber: 11
                }, this));
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoomSection, {
                    rooms: rooms
                }, "rooms-".concat(i), false, {
                    fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                    lineNumber: 262,
                    columnNumber: 23
                }, this));
                i = j;
                continue;
            }
            // Standard heading
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: id,
                className: "article-page__h2",
                children: headingText
            }, "h-".concat(i), false, {
                fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
                lineNumber: 269,
                columnNumber: 9
            }, this));
            i++;
            continue;
        }
        // Standard paragraph
        elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "article-page__para",
            children: para
        }, i, false, {
            fileName: "[project]/src/features/articles/components/A5ArticleBody.tsx",
            lineNumber: 277,
            columnNumber: 7
        }, this));
        i++;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: elements
    }, void 0, false);
}
_c3 = A5ArticleBody;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "LocationTable");
__turbopack_context__.k.register(_c1, "ChecklistSection");
__turbopack_context__.k.register(_c2, "RoomSection");
__turbopack_context__.k.register(_c3, "A5ArticleBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/articles/components/A1ArticleBody.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A1ArticleBody",
    ()=>A1ArticleBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
// ── Heading → slug (same algorithm as ArticleBody) ────────────────────────
function toId(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-");
}
const IT_TABLE_HEADERS = [
    "Caratteristica",
    "Cladosporium",
    "Alternaria",
    "Aspergillus niger",
    "Stachybotrys"
];
const IT_TABLE_ROWS = [
    {
        characteristic: "Colore",
        cladosporium: "Verde oliva / nero",
        alternaria: "Verde scuro / nero",
        aspergillusNiger: "Nero con alone bianco",
        stachybotrys: "Nero verdastro / gelatinoso"
    },
    {
        characteristic: "Texture",
        cladosporium: "Polverosa",
        alternaria: "Polverosa",
        aspergillusNiger: "Granulosa",
        stachybotrys: "Lucida / appiccicosa"
    },
    {
        characteristic: "Substrato tipico",
        cladosporium: "Superfici lisce, silicone",
        alternaria: "Pareti, tendaggi",
        aspergillusNiger: "Piastrelle, fughe",
        stachybotrys: "Cartongesso, legno, carta"
    },
    {
        characteristic: "Odore",
        cladosporium: "Lieve / terroso",
        alternaria: "Lieve",
        aspergillusNiger: "Lieve",
        stachybotrys: "Muschio forte / fermentato"
    },
    {
        characteristic: "Umidità richiesta",
        cladosporium: "Condensa intermittente",
        alternaria: "Umidità elevata",
        aspergillusNiger: "Condensa",
        stachybotrys: "Bagnatura cronica"
    }
];
const ES_TABLE_HEADERS = [
    "Característica",
    "Cladosporium",
    "Alternaria",
    "Aspergillus niger",
    "Stachybotrys"
];
const ES_TABLE_ROWS = [
    {
        characteristic: "Color",
        cladosporium: "Verde oliva / negro",
        alternaria: "Verde oscuro / negro",
        aspergillusNiger: "Negro con halo blanco",
        stachybotrys: "Negro verdoso / gelatinoso"
    },
    {
        characteristic: "Textura",
        cladosporium: "Pulverulenta",
        alternaria: "Pulverulenta",
        aspergillusNiger: "Granulosa",
        stachybotrys: "Brillante / pegajosa"
    },
    {
        characteristic: "Sustrato típico",
        cladosporium: "Superficies lisas, silicona",
        alternaria: "Paredes, textiles",
        aspergillusNiger: "Azulejos, juntas",
        stachybotrys: "Paneles de yeso, madera, papel"
    },
    {
        characteristic: "Olor",
        cladosporium: "Suave / terroso",
        alternaria: "Suave",
        aspergillusNiger: "Suave",
        stachybotrys: "Fuerte musgo / fermentado"
    },
    {
        characteristic: "Humedad necesaria",
        cladosporium: "Condensación intermitente",
        alternaria: "Humedad elevada",
        aspergillusNiger: "Condensación",
        stachybotrys: "Encharcamiento crónico"
    }
];
function SpeciesTable(param) {
    let { headers, rows } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "a1-species-table-wrap",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "a1-species-table",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: headers.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "a1-species-table__th".concat(i === 0 ? " a1-species-table__th--first" : ""),
                                children: h
                            }, i, false, {
                                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "a1-species-table__row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "a1-species-table__td a1-species-table__td--label",
                                    children: row.characteristic
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "a1-species-table__td",
                                    children: row.cladosporium
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "a1-species-table__td",
                                    children: row.alternaria
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "a1-species-table__td",
                                    children: row.aspergillusNiger
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "a1-species-table__td a1-species-table__td--stachybotrys",
                                    children: row.stachybotrys
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = SpeciesTable;
// ── PT assessment subsections ─────────────────────────────────────────────
const PT_ASSESS_CARDS = [
    {
        emoji: "🔍",
        title: "Textura",
        body: "Pulverulenta ou seca sugere Cladosporium, Aspergillus, ou Penicillium. Brilhante, viscosa, ou de aspecto gelatinoso sugere Stachybotrys activo."
    },
    {
        emoji: "📍",
        title: "Localização",
        body: "Superfícies de condensação (caixilhos, cantos de tecto, vidros) favorecem Cladosporium. Materiais celulósicos encharcados (pladur, papel de parede molhado, madeira com humidade severa) favorecem Stachybotrys e Chaetomium."
    },
    {
        emoji: "👃",
        title: "Odor",
        body: "O cheiro a mofo é causado por MVOCs — compostos orgânicos voláteis microbianos. A presença de cheiro a mofo forte sem bolor visível é um sinal de alerta de contaminação oculta. O Stachybotrys tem um odor característico descrito como húmido e terroso, distinto do cheiro mais ácido de algumas espécies de Penicillium."
    },
    {
        emoji: "💧",
        title: "Condições de humidade necessárias",
        body: "Se a humidade na divisão é elevada mas não extrema (60 a 75%), a espécie presente é provavelmente Cladosporium, Penicillium, ou Aspergillus. Se houve dano por água severo — infiltração prolongada, inundação, materiais encharcados — o risco de Stachybotrys ou Chaetomium é real."
    }
];
const PT_ASSESS_OPTIONS = [
    {
        title: "Amostragem de superfície ou material",
        body: "Raspagem ou tape lift enviados para laboratório para análise microscópica e/ou cultura. Identifica espécies presentes na superfície amostrada."
    },
    {
        title: "Análise de poeira acumulada por MSqPCR",
        body: "Colheita de poeira acumulada com cassete de vácuo ou pano de microfibras, enviada para laboratório com capacidade de análise por PCR quantitativo. Detecta DNA de espécies específicas, incluindo Stachybotrys e Chaetomium, mesmo quando os esporos não estão no ar. O ERMI (Environmental Relative Moldiness Index) e o HERTSMI-2 são sistemas de pontuação desenvolvidos com base nesta metodologia."
    },
    {
        title: "Amostragem de ar com análise laboratorial",
        body: "Útil para quantificar a exposição actual por via aérea, mas com as limitações já descritas para espécies de esporos pesados."
    }
];
function AssessCardsPT() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "a1-assess",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a1-assess__intro",
                children: "Dado tudo o que foi descrito, o que pode fazer um proprietário ou inquilino com uma mancha escura na parede?"
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a1-assess__subtitle",
                children: "Observação visual — o que procurar:"
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a1-assess__cards",
                children: PT_ASSESS_CARDS.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "a1-assess__card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "a1-assess__card-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "a1-assess__card-emoji",
                                        "aria-hidden": "true",
                                        children: card.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "a1-assess__card-title",
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a1-assess__card-body",
                                children: card.body
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a1-assess__subtitle a1-assess__subtitle--sep",
                children: "Quando a observação visual não chega:"
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a1-assess__text",
                children: "Se suspeita de Stachybotrys ou Chaetomium com base nas condições acima descritas, a identificação requer análise laboratorial. As opções disponíveis:"
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a1-assess__options",
                children: PT_ASSESS_OPTIONS.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "a1-assess__option",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a1-assess__option-title",
                                children: opt.title
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a1-assess__option-body",
                                children: opt.body
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c1 = AssessCardsPT;
// ── EN assessment subsections ─────────────────────────────────────────────
const EN_ASSESS_CARDS = [
    {
        emoji: "🔍",
        title: "Texture",
        body: "Powdery or dry suggests Cladosporium, Aspergillus, or Penicillium. Shiny, slimy, or gelatinous appearance suggests active Stachybotrys."
    },
    {
        emoji: "📍",
        title: "Location",
        body: "Condensation surfaces (window frames, ceiling corners, glass) favour Cladosporium. Cellulosic materials with severe moisture history (waterlogged plasterboard, soaked wallpaper, wet timber) favour Stachybotrys and Chaetomium."
    },
    {
        emoji: "👃",
        title: "Smell",
        body: "The musty smell of mold is caused by MVOCs — microbial volatile organic compounds. A strong musty smell without visible mold is a warning sign of concealed contamination. Stachybotrys has a characteristic smell described as heavy and earthy, distinct from the more acidic smell of some Penicillium species."
    },
    {
        emoji: "💧",
        title: "Moisture conditions required",
        body: "If room humidity is elevated but not extreme (60–75%), the species present is most likely Cladosporium, Penicillium, or Aspergillus. If there has been severe water damage — prolonged infiltration, flooding, materials that have been waterlogged — the risk of Stachybotrys or Chaetomium is real."
    }
];
const EN_ASSESS_OPTIONS = [
    {
        title: "Surface or material sampling",
        body: "Scraping or tape lift sent to a laboratory for microscopic analysis and/or culture. Identifies species present on the sampled surface."
    },
    {
        title: "Settled dust MSqPCR analysis",
        body: "Dust collected with a vacuum cassette or microfibre cloth, sent to a laboratory with quantitative PCR capacity. Detects DNA of specific species, including Stachybotrys and Chaetomium, even when spores are not airborne. The ERMI (Environmental Relative Moldiness Index) and HERTSMI-2 are scoring systems developed on this methodology."
    },
    {
        title: "Air sampling with laboratory analysis",
        body: "Useful for quantifying current airborne exposure, but with the limitations already described for heavy-spore species."
    }
];
function AssessCardsEN() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "a1-assess",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a1-assess__subtitle",
                children: "Visual observation — what to look for:"
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a1-assess__cards",
                children: EN_ASSESS_CARDS.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "a1-assess__card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "a1-assess__card-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "a1-assess__card-emoji",
                                        "aria-hidden": "true",
                                        children: card.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "a1-assess__card-title",
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a1-assess__card-body",
                                children: card.body
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a1-assess__subtitle a1-assess__subtitle--sep",
                children: "When visual observation is not enough:"
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a1-assess__text",
                children: "If you suspect Stachybotrys or Chaetomium based on the conditions described above, species identification requires laboratory analysis. Available options:"
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a1-assess__options",
                children: EN_ASSESS_OPTIONS.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "a1-assess__option",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a1-assess__option-title",
                                children: opt.title
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a1-assess__option-body",
                                children: opt.body
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
_c2 = AssessCardsEN;
function A1ArticleBody(param) {
    let { paragraphs } = param;
    const elements = [];
    for(let i = 0; i < paragraphs.length; i++){
        const para = paragraphs[i];
        // Special marker: PT assessment subsections
        if (para === "##A1_ASSESS_PT") {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssessCardsPT, {}, "assess-pt-".concat(i), false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 218,
                columnNumber: 21
            }, this));
            continue;
        }
        // Special marker: EN assessment subsections
        if (para === "##A1_ASSESS_EN") {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssessCardsEN, {}, "assess-en-".concat(i), false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 224,
                columnNumber: 21
            }, this));
            continue;
        }
        // Special marker: IT species table
        if (para === "##A1_TABLE_IT") {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpeciesTable, {
                headers: IT_TABLE_HEADERS,
                rows: IT_TABLE_ROWS
            }, "table-it-".concat(i), false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 230,
                columnNumber: 21
            }, this));
            continue;
        }
        // Special marker: ES species table
        if (para === "##A1_TABLE_ES") {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpeciesTable, {
                headers: ES_TABLE_HEADERS,
                rows: ES_TABLE_ROWS
            }, "table-es-".concat(i), false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 236,
                columnNumber: 21
            }, this));
            continue;
        }
        // Standard ## heading
        if (para.startsWith("## ")) {
            const text = para.slice(3);
            const id = toId(text);
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: id,
                className: "article-page__h2",
                children: text
            }, "h-".concat(i), false, {
                fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, this));
            continue;
        }
        // Standard paragraph
        elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "article-page__para",
            children: para
        }, i, false, {
            fileName: "[project]/src/features/articles/components/A1ArticleBody.tsx",
            lineNumber: 254,
            columnNumber: 7
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: elements
    }, void 0, false);
}
_c3 = A1ArticleBody;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SpeciesTable");
__turbopack_context__.k.register(_c1, "AssessCardsPT");
__turbopack_context__.k.register(_c2, "AssessCardsEN");
__turbopack_context__.k.register(_c3, "A1ArticleBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/articles/components/ArticlePageClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticlePageClient",
    ()=>ArticlePageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$context$2f$ArticleLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/articles/context/ArticleLocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$components$2f$A5ArticleBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/articles/components/A5ArticleBody.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$components$2f$A1ArticleBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/articles/components/A1ArticleBody.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Render body paragraphs for standard articles (A4 etc.)
function ArticleBody(param) {
    let { paragraphs } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: paragraphs.map((para, i)=>{
            if (para.startsWith("## ")) {
                const text = para.slice(3);
                const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-");
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: id,
                    className: "article-page__h2",
                    children: text
                }, i, false, {
                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "article-page__para",
                children: para
            }, i, false, {
                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                lineNumber: 49,
                columnNumber: 11
            }, this);
        })
    }, void 0, false);
}
_c = ArticleBody;
// Single accordion FAQ item
function FaqItem(param) {
    let { question, answer } = param;
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "faq-item".concat(open ? " faq-item--open" : ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "faq-item__trigger",
                "aria-expanded": open,
                onClick: ()=>setOpen((v)=>!v),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "faq-item__question",
                        children: question
                    }, void 0, false, {
                        fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "faq-item__arrow",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 6l4 4 4-4",
                                stroke: "currentColor",
                                strokeWidth: "1.6",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "faq-item__answer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: answer
                }, void 0, false, {
                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(FaqItem, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c1 = FaqItem;
function ArticlePageClient(param) {
    let { locale, content, sectionLabel, tocTitle, tocItems, slugsByLocale, articleKey, uiLabels } = param;
    _s1();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tocVisible, setTocVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const articleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Show TOC after scrolling ~200px into the article
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticlePageClient.useEffect": ()=>{
            const onScroll = {
                "ArticlePageClient.useEffect.onScroll": ()=>setTocVisible(window.scrollY > 200)
            }["ArticlePageClient.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "ArticlePageClient.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["ArticlePageClient.useEffect"];
        }
    }["ArticlePageClient.useEffect"], []);
    // Section spy: pick the topmost heading that has passed the 25% viewport mark
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticlePageClient.useEffect": ()=>{
            const ids = tocItems.map({
                "ArticlePageClient.useEffect.ids": (t)=>t.id
            }["ArticlePageClient.useEffect.ids"]);
            const update = {
                "ArticlePageClient.useEffect.update": ()=>{
                    const viewH = window.innerHeight;
                    const threshold = viewH * 0.25;
                    let best = "";
                    for (const id of ids){
                        const el = document.getElementById(id);
                        if (!el) continue;
                        const top = el.getBoundingClientRect().top;
                        if (top <= threshold) best = id;
                    }
                    setActiveId(best);
                }
            }["ArticlePageClient.useEffect.update"];
            window.addEventListener("scroll", update, {
                passive: true
            });
            update(); // run once on mount
            return ({
                "ArticlePageClient.useEffect": ()=>window.removeEventListener("scroll", update)
            })["ArticlePageClient.useEffect"];
        }
    }["ArticlePageClient.useEffect"], [
        tocItems
    ]);
    const scrollTo = (id)=>{
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    const isA5 = articleKey === "a5-mold-risk-guide";
    const isA1 = articleKey === "a1-black-mold";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$context$2f$ArticleLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArticleLocaleContext"].Provider, {
        value: slugsByLocale,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "article-layout",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: "article-toc".concat(tocVisible ? " article-toc--visible" : ""),
                    "aria-label": tocTitle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "article-toc__title",
                            children: tocTitle
                        }, void 0, false, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "article-toc__list",
                                children: tocItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "article-toc__item".concat(activeId === item.id ? " is-active" : ""),
                                            onClick: ()=>scrollTo(item.id),
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "article-page",
                    ref: articleRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "article-page__header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "article-page__eyebrow",
                                    children: sectionLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "article-page__title",
                                    children: content.title
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "article-page__byline",
                                    children: content.byline
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "article-page__body",
                            children: isA5 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$components$2f$A5ArticleBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A5ArticleBody"], {
                                paragraphs: content.body
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                lineNumber: 171,
                                columnNumber: 17
                            }, this) : isA1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$components$2f$A1ArticleBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A1ArticleBody"], {
                                paragraphs: content.body
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                lineNumber: 173,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleBody, {
                                paragraphs: content.body
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                lineNumber: 174,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "article-page__disclosure",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "article-page__disclosure-label",
                                    children: uiLabels.disclosure
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: content.disclosure
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "sources",
                            className: "article-page__sources",
                            "aria-label": uiLabels.sources,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "article-page__section-heading",
                                    children: uiLabels.sources
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "article-page__sources-list",
                                    children: content.sources.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: src.label
                                        }, i, false, {
                                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "faq",
                            className: "article-page__faq",
                            "aria-label": uiLabels.faq,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "faq-accordion",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "article-page__section-heading faq-accordion__heading",
                                        children: uiLabels.faq
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    content.faq.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                                            question: item.question,
                                            answer: item.answer
                                        }, i, false, {
                                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
            lineNumber: 138,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s1(ArticlePageClient, "kNR7f9cQ+guXYWiH4Iqv/Hchabg=");
_c2 = ArticlePageClient;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ArticleBody");
__turbopack_context__.k.register(_c1, "FaqItem");
__turbopack_context__.k.register(_c2, "ArticlePageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_features_articles_c2afb98b._.js.map
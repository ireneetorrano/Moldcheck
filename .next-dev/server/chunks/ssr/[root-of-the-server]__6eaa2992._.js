module.exports = [
"[project]/.next-internal/server/app/(site)/[locale]/editorial-policy/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(site)/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(site)/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/shared/DisclosureBlock.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DisclosureBlock",
    ()=>DisclosureBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function DisclosureBlock({ title, text, variant = "article" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `disclosure-block disclosure-block--${variant}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/shared/DisclosureBlock.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/shared/DisclosureBlock.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/DisclosureBlock.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/content/components/PortableTextBlocks.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortableTextBlocks",
    ()=>PortableTextBlocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function getBlockText(block) {
    return block.children?.map((child)=>child.text).join("") ?? "";
}
function PortableTextBlocks({ blocks }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "article-content",
        children: blocks.map((block)=>{
            const text = getBlockText(block);
            if (!text) {
                return null;
            }
            if (block.style === "h2") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: text
                }, block._key ?? text, false, {
                    fileName: "[project]/src/features/content/components/PortableTextBlocks.tsx",
                    lineNumber: 18,
                    columnNumber: 18
                }, this);
            }
            if (block.style === "h3") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: text
                }, block._key ?? text, false, {
                    fileName: "[project]/src/features/content/components/PortableTextBlocks.tsx",
                    lineNumber: 22,
                    columnNumber: 18
                }, this);
            }
            if (block.style === "blockquote") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                    children: text
                }, block._key ?? text, false, {
                    fileName: "[project]/src/features/content/components/PortableTextBlocks.tsx",
                    lineNumber: 26,
                    columnNumber: 18
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: text
            }, block._key ?? text, false, {
                fileName: "[project]/src/features/content/components/PortableTextBlocks.tsx",
                lineNumber: 29,
                columnNumber: 16
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/features/content/components/PortableTextBlocks.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/content/components/GlobalPageBlocks.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalPageBlocks",
    ()=>GlobalPageBlocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DisclosureBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/DisclosureBlock.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$components$2f$PortableTextBlocks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/components/PortableTextBlocks.tsx [app-rsc] (ecmascript)");
;
;
;
function TextParagraphs({ text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: text.split("\n\n").map((paragraph)=>paragraph.trim()).filter(Boolean).map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: paragraph
            }, paragraph, false, {
                fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                lineNumber: 13,
                columnNumber: 11
            }, this))
    }, void 0, false);
}
function CardLink({ card }) {
    if (!card.ctaLabel || !card.ctaHref) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: card.ctaHref,
        className: "services-cta",
        target: card.openInNewTab ? "_blank" : undefined,
        rel: card.openInNewTab ? "noreferrer" : undefined,
        children: card.ctaLabel
    }, void 0, false, {
        fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function GlobalCards({ cards, layout = "utility" }) {
    const className = layout === "grid" ? "editorial-grid" : "utility-grid";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: `editorial-card${card.tone === "featured" ? " editorial-card--featured" : ""}${card.tone === "warning" ? " editorial-card--warning" : ""}`,
                children: [
                    card.eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "editorial-card__label",
                        children: card.eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                        lineNumber: 52,
                        columnNumber: 27
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: card.title
                    }, void 0, false, {
                        fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "editorial-card__body",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TextParagraphs, {
                            text: card.body
                        }, void 0, false, {
                            fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    card.ctaLabel && card.ctaHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "editorial-card__actions",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CardLink, {
                            card: card
                        }, void 0, false, {
                            fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this) : null
                ]
            }, `${card.title}-${card.eyebrow ?? "card"}`, true, {
                fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function GlobalSection({ section }) {
    const headingClassName = section.tone === "band" ? "section-band global-section__heading" : "info-stack global-section__heading";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "home-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: headingClassName,
                children: [
                    section.eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "page-shell__eyebrow",
                        children: section.eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                        lineNumber: 75,
                        columnNumber: 28
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: section.title
                    }, void 0, false, {
                        fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    section.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: section.description
                    }, void 0, false, {
                        fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                        lineNumber: 77,
                        columnNumber: 32
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalCards, {
                cards: section.cards,
                layout: section.layout
            }, void 0, false, {
                fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
function GlobalPageBlocks({ page, disclosureVariant = "article" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            page.body?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$components$2f$PortableTextBlocks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PortableTextBlocks"], {
                blocks: page.body
            }, void 0, false, {
                fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                lineNumber: 93,
                columnNumber: 28
            }, this) : null,
            page.introCards?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalCards, {
                cards: page.introCards,
                layout: page.introLayout
            }, void 0, false, {
                fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                lineNumber: 94,
                columnNumber: 34
            }, this) : null,
            page.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalSection, {
                    section: section
                }, `${section.title}-${section.eyebrow ?? "section"}`, false, {
                    fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)),
            page.disclosureTitle && page.disclosureText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DisclosureBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DisclosureBlock"], {
                variant: disclosureVariant,
                title: page.disclosureTitle,
                text: page.disclosureText
            }, void 0, false, {
                fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this) : null,
            page.footerNote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "accent-note",
                children: page.footerNote
            }, void 0, false, {
                fileName: "[project]/src/features/content/components/GlobalPageBlocks.tsx",
                lineNumber: 105,
                columnNumber: 26
            }, this) : null
        ]
    }, void 0, true);
}
}),
"[project]/src/config/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [app-rsc] (ecmascript)");
;
const siteConfig = {
    name: "MoldCheck.pt",
    legalEntity: "FAIRBANK Group",
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultLocale"],
    domain: process.env.NEXT_PUBLIC_SITE_URL ?? "https://moldcheck.pt",
    editorialEmail: "info@moldcheck.pt",
    contactEmail: "info@moldcheck.pt"
}; // TODO(CONFIG): Confirm production domain and non-www redirect at platform level.
}),
"[project]/src/features/content/data/editorialPolicyContent.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEditorialPolicyContent",
    ()=>getEditorialPolicyContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/site.ts [app-rsc] (ecmascript)");
;
const editorialPolicyByLocale = {
    pt: {
        eyebrow: "Política editorial",
        title: "Como trabalhamos — e ao que nos comprometemos",
        description: "O MoldCheck.pt é uma publicação editorial independente. Esta página explica os nossos princípios editoriais, as nossas fontes, e o que nos distingue de outros recursos sobre bolor e humidade.",
        policyTitle: "Os nossos compromissos editoriais",
        policyCards: [
            {
                eyebrow: "1. Independência de tratamentos",
                title: "Sem conflito financeiro com a remediação",
                body: "MoldCheck.pt não recebe pagamentos, comissões ou qualquer forma de compensação de empresas que vendem tratamentos de humidade, produtos anti-bolor, sistemas de ventilação ou serviços de remediação.\n\nIsto não significa que o site não possa cobrar por serviços próprios ou relacionados com a sua actividade legítima, como inspecções independentes, análises laboratoriais, reservas ou recursos digitais. Significa, sim, que não aceitamos dinheiro de empresas cujo interesse comercial dependa de recomendar ou vender a remediação do problema.\n\nQuando recomendamos um produto, método ou serviço, fazemo-lo porque tem base científica ou utilidade real para o utilizador — não porque uma empresa de tratamento nos pagou para o recomendar."
            },
            {
                eyebrow: "2. Base científica",
                title: "Literatura revista por pares e normas técnicas reconhecidas",
                body: "Todo o conteúdo clínico e técnico deste site é fundamentado em literatura científica revisada por pares ou em normas técnicas reconhecidas internacionalmente. As nossas fontes primárias incluem:\n\nDiretrizes da OMS para a Qualidade do Ar Interior: Humidade e Bolor (2009)\n\nIICRC S520 — Norma para Remediação Profissional de Bolor, 4.ª edição (2024)\n\nEPA — Manual de Remediação de Bolor\n\nInstituto de Medicina — Espaços Interiores Húmidos e Saúde (2004)\n\nInvestigação publicada em revistas científicas com revisão por pares, com citação explícita"
            },
            {
                eyebrow: "3. Honestidade sobre a incerteza",
                title: "Distinguimos o que é robusto, sugestivo e ainda desconhecido",
                body: "A ciência do bolor interior está em desenvolvimento activo. Há áreas onde a evidência é robusta e estabelecida — a ligação causal entre humidade e sintomas respiratórios, por exemplo. Há áreas onde a evidência é sugestiva mas não conclusiva — o CIRS, certos efeitos neurológicos dos MVOC. E há áreas onde simplesmente não sabemos.\n\nDistinguimos estas categorias explicitamente no nosso conteúdo. Não exageramos a certeza científica para criar urgência, nem minimizamos riscos documentados para evitar alarmar."
            },
            {
                eyebrow: "4. Sem exagero de risco",
                title: "Rigor antes de medo",
                body: "O bolor em casa é um problema real com consequências documentadas para a saúde. Não é uma emergência mortal na maioria dos casos. Escrever sobre bolor com o objectivo de criar medo desproporcional — seja para vender tratamentos, seja para atrair tráfego — é uma prática que este site rejeita explicitamente."
            },
            {
                eyebrow: "5. Transparência sobre limitações",
                title: "O site não substitui avaliação médica, técnica ou laboratorial",
                body: "Este site não substitui aconselhamento médico profissional, avaliação técnica presencial, ou diagnóstico laboratorial. Em artigos sobre saúde, este aviso é apresentado de forma proeminente."
            },
            {
                eyebrow: "6. Actualização",
                title: "Compromisso de rever conteúdo relevante",
                body: "Comprometemo-nos a rever e actualizar o conteúdo quando nova evidência científica relevante for publicada. A data da última revisão é indicada em cada artigo."
            },
            {
                eyebrow: "7. Erros e correcções",
                title: "Correcções transparentes e registadas",
                body: "Se identificar um erro factual no nosso conteúdo, contacte-nos. Corrigimos com transparência — o erro original, a correcção, e a data de actualização ficam registados."
            }
        ],
        contactTitle: "Contacto",
        contactCards: [
            {
                eyebrow: "Questões editoriais",
                title: "Contacto geral",
                body: `Para questões editoriais: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Escrever para ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            },
            {
                eyebrow: "Questões de inspecção",
                title: "InspectOS",
                body: "Para questões de inspecção: através da InspectOS em inspectos.pt",
                ctaLabel: "Abrir InspectOS",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            }
        ],
        disclosureTitle: "Independência editorial",
        disclosureText: "MoldCheck.pt defende diagnóstico independente e não aceita dinheiro de empresas cujo interesse comercial depende de vender a remediação do problema."
    },
    en: {
        eyebrow: "Editorial policy",
        title: "How we work — and what we commit to",
        description: "MoldCheck.pt is an independent editorial publication. This page explains our editorial principles, our sources, and what distinguishes us from other mold and damp resources.",
        policyTitle: "Our editorial commitments",
        policyCards: [
            {
                eyebrow: "1. Independence from treatment",
                title: "No financial conflict with remediation",
                body: "MoldCheck.pt does not receive payments, commissions, or any form of compensation from companies that sell damp treatments, anti-mold products, ventilation systems, or remediation services.\n\nThis does not mean the site cannot charge for its own legitimate services or related activities, such as independent inspections, laboratory analysis, bookings, or digital resources. It means that we do not accept money from companies whose commercial interest depends on recommending or selling remediation.\n\nWhen we recommend a product, method, or service, we do so because it has scientific basis or real usefulness for the user — not because a remediation company paid us to recommend it."
            },
            {
                eyebrow: "2. Scientific basis",
                title: "Peer-reviewed literature and recognised standards",
                body: "All clinical and technical content on this site is grounded in peer-reviewed scientific literature or internationally recognised technical standards. Our primary sources include:\n\nWHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)\n\nIICRC S520 — Standard for Professional Mold Remediation, 4th edition (2024)\n\nEPA — Mold Remediation Guide\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nPeer-reviewed research with explicit citation"
            },
            {
                eyebrow: "3. Honesty about uncertainty",
                title: "We separate robust evidence from suggestive evidence",
                body: "The science of indoor mold is still actively developing. There are areas where evidence is robust and well established — the causal link between dampness and respiratory symptoms, for example. There are areas where evidence is suggestive but not conclusive — CIRS, and certain neurological effects of MVOCs. And there are areas where we simply do not know.\n\nWe distinguish these categories explicitly in our content. We do not overstate scientific certainty to create urgency, nor do we downplay documented risks to avoid alarming readers."
            },
            {
                eyebrow: "4. No risk exaggeration",
                title: "Accuracy over fear",
                body: "Residential mold is a real problem with documented health consequences. It is not a fatal emergency in most cases. Writing about mold with the objective of creating disproportionate fear — whether to sell treatments or drive traffic — is a practice this site explicitly rejects."
            },
            {
                eyebrow: "5. Transparency about limitations",
                title: "This site does not replace professional assessment",
                body: "This site does not replace professional medical advice, on-site technical assessment, or laboratory diagnosis. In health articles, this notice is displayed prominently."
            },
            {
                eyebrow: "6. Updates",
                title: "We review and update when relevant evidence changes",
                body: "We commit to reviewing and updating content when relevant new scientific evidence is published. The date of last review is indicated on each article."
            },
            {
                eyebrow: "7. Errors and corrections",
                title: "Corrections are logged transparently",
                body: "If you identify a factual error in our content, contact us. We correct transparently — the original error, the correction, and the update date are all recorded."
            }
        ],
        contactTitle: "Contact",
        contactCards: [
            {
                eyebrow: "Editorial enquiries",
                title: "General contact",
                body: `Editorial enquiries: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Email ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            },
            {
                eyebrow: "Inspection enquiries",
                title: "InspectOS",
                body: "Inspection enquiries: via InspectOS at inspectos.pt",
                ctaLabel: "Open InspectOS",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            }
        ],
        disclosureTitle: "Editorial independence",
        disclosureText: "MoldCheck.pt defends independent diagnosis and does not accept money from companies whose commercial interest depends on selling remediation."
    },
    fr: {
        eyebrow: "Politique éditoriale",
        title: "Comment nous travaillons — et à quoi nous nous engageons",
        description: "MoldCheck.pt est une publication éditoriale indépendante. Cette page explique nos principes éditoriaux, nos sources et ce qui nous distingue des autres ressources sur les moisissures et l'humidité.",
        policyTitle: "Nos engagements éditoriaux",
        policyCards: [
            {
                eyebrow: "1. Indépendance vis-à-vis des traitements",
                title: "Aucun conflit financier avec la remédiation",
                body: "MoldCheck.pt ne reçoit aucun paiement, commission ou autre forme de compensation de la part d'entreprises qui vendent des traitements contre l'humidité, des produits anti-moisissures, des systèmes de ventilation ou des services de remédiation.\n\nCela ne signifie pas que le site ne puisse pas facturer ses propres services légitimes ou des activités liées à sa mission. Cela signifie que nous n'acceptons pas d'argent d'entreprises dont l'intérêt commercial dépend de la recommandation ou de la vente de la remédiation.\n\nLorsque nous recommandons un produit, une méthode ou un service, nous le faisons parce qu'il repose sur une base scientifique ou présente une utilité réelle pour l'utilisateur."
            },
            {
                eyebrow: "2. Base scientifique",
                title: "Littérature évaluée par les pairs et normes reconnues",
                body: "Tout le contenu clinique et technique de ce site repose sur de la littérature scientifique évaluée par les pairs ou sur des normes techniques reconnues au niveau international. Nos sources principales incluent :\n\nLignes directrices de l'OMS pour la qualité de l'air intérieur : humidité et moisissures (2009)\n\nIICRC S520 — norme de remédiation professionnelle des moisissures, 4e édition (2024)\n\nEPA — guide de remédiation des moisissures\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nRecherches scientifiques publiées avec citations explicites"
            },
            {
                eyebrow: "3. Honnêteté face à l'incertitude",
                title: "Nous distinguons les niveaux de preuve",
                body: "La science des moisissures en intérieur évolue encore activement. Il existe des domaines où les preuves sont solides et bien établies. D'autres domaines reposent sur des preuves suggestives mais non concluantes. Et il y a aussi des domaines où nous ne savons tout simplement pas.\n\nNous distinguons explicitement ces catégories dans notre contenu. Nous n'exagérons pas la certitude scientifique pour créer un sentiment d'urgence, et nous ne minimisons pas les risques documentés."
            },
            {
                eyebrow: "4. Pas d'exagération du risque",
                title: "La précision avant la peur",
                body: "Les moisissures dans le logement sont un problème réel, avec des conséquences sanitaires documentées. Ce n'est pas, dans la plupart des cas, une urgence mortelle. Écrire sur les moisissures dans le but de créer une peur disproportionnée est une pratique que ce site rejette explicitement."
            },
            {
                eyebrow: "5. Transparence sur les limites",
                title: "Le site ne remplace pas une évaluation professionnelle",
                body: "Ce site ne remplace pas un avis médical professionnel, une évaluation technique sur place, ni un diagnostic de laboratoire. Dans les articles de santé, cet avertissement est affiché de manière visible."
            },
            {
                eyebrow: "6. Mises à jour",
                title: "Révision et actualisation lorsque la science évolue",
                body: "Nous nous engageons à revoir et à actualiser le contenu lorsque de nouvelles preuves scientifiques pertinentes sont publiées. La date de dernière révision est indiquée sur chaque article."
            },
            {
                eyebrow: "7. Erreurs et corrections",
                title: "Corrections transparentes et documentées",
                body: "Si vous identifiez une erreur factuelle dans notre contenu, contactez-nous. Nous corrigeons de manière transparente — l'erreur initiale, la correction et la date de mise à jour sont consignées."
            }
        ],
        contactTitle: "Contact",
        contactCards: [
            {
                eyebrow: "Questions éditoriales",
                title: "Contact général",
                body: `Questions éditoriales : ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Écrire à ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            },
            {
                eyebrow: "Questions liées aux inspections",
                title: "InspectOS",
                body: "Questions liées aux inspections : via InspectOS sur inspectos.pt",
                ctaLabel: "Ouvrir InspectOS",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            }
        ],
        disclosureTitle: "Indépendance éditoriale",
        disclosureText: "MoldCheck.pt défend le diagnostic indépendant et n'accepte pas d'argent d'entreprises dont l'intérêt commercial dépend de la vente de la remédiation."
    },
    de: {
        eyebrow: "Redaktionsrichtlinie",
        title: "Wie wir arbeiten — und wozu wir uns verpflichten",
        description: "MoldCheck.pt ist eine unabhängige redaktionelle Publikation. Diese Seite erläutert unsere redaktionellen Grundsätze, unsere Quellen und was uns von anderen Ressourcen zu Schimmel und Feuchtigkeit unterscheidet.",
        policyTitle: "Unsere redaktionellen Verpflichtungen",
        policyCards: [
            {
                eyebrow: "1. Unabhängigkeit von Behandlungen",
                title: "Kein finanzieller Interessenkonflikt mit Sanierung",
                body: "MoldCheck.pt erhält keine Zahlungen, Provisionen oder sonstige Vergütungen von Unternehmen, die Feuchtigkeitsbehandlungen, Anti-Schimmel-Produkte, Lüftungssysteme oder Sanierungsleistungen verkaufen.\n\nDas bedeutet nicht, dass die Website keine legitimen eigenen Leistungen abrechnen darf. Es bedeutet vielmehr, dass wir kein Geld von Unternehmen annehmen, deren kommerzielles Interesse davon abhängt, die Sanierung des Problems zu empfehlen oder zu verkaufen.\n\nWenn wir ein Produkt, eine Methode oder eine Dienstleistung empfehlen, tun wir das, weil dafür eine wissenschaftliche Grundlage oder ein echter Nutzen für den Nutzer besteht."
            },
            {
                eyebrow: "2. Wissenschaftliche Grundlage",
                title: "Peer-reviewte Literatur und anerkannte Standards",
                body: "Alle klinischen und technischen Inhalte dieser Website beruhen auf peer-reviewter wissenschaftlicher Literatur oder auf international anerkannten technischen Standards. Zu unseren wichtigsten Quellen gehören:\n\nWHO-Leitlinien zur Innenraumluftqualität: Feuchtigkeit und Schimmel (2009)\n\nIICRC S520 — Standard für professionelle Schimmelsanierung, 4. Ausgabe (2024)\n\nEPA — Leitfaden zur Schimmelbeseitigung\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nPeer-reviewte Forschung mit expliziten Quellenangaben"
            },
            {
                eyebrow: "3. Ehrlichkeit im Umgang mit Unsicherheit",
                title: "Wir unterscheiden klar zwischen Evidenzgraden",
                body: "Die Wissenschaft zu Schimmel in Innenräumen entwickelt sich weiterhin aktiv. Es gibt Bereiche, in denen die Evidenz solide und gut belegt ist. Es gibt Bereiche, in denen die Evidenz eher hinweisend als schlüssig ist. Und es gibt Bereiche, in denen wir es schlicht nicht wissen.\n\nWir unterscheiden diese Kategorien ausdrücklich in unseren Inhalten. Wir übertreiben wissenschaftliche Gewissheit nicht, um Dringlichkeit zu erzeugen."
            },
            {
                eyebrow: "4. Keine Risikoübertreibung",
                title: "Genauigkeit statt Angst",
                body: "Schimmel in Wohnräumen ist ein reales Problem mit dokumentierten gesundheitlichen Folgen. In den meisten Fällen ist er kein lebensbedrohlicher Notfall. Über Schimmel mit dem Ziel zu schreiben, unverhältnismäßige Angst zu erzeugen, ist eine Praxis, die diese Website ausdrücklich ablehnt."
            },
            {
                eyebrow: "5. Transparenz über Grenzen",
                title: "Die Website ersetzt keine professionelle Bewertung",
                body: "Diese Website ersetzt keine professionelle medizinische Beratung, keine technische Vor-Ort-Bewertung und keine Labordiagnostik. In Gesundheitsartikeln wird dieser Hinweis deutlich sichtbar angezeigt."
            },
            {
                eyebrow: "6. Aktualisierung",
                title: "Überprüfung und Aktualisierung bei neuen Erkenntnissen",
                body: "Wir verpflichten uns, Inhalte zu überprüfen und zu aktualisieren, wenn neue relevante wissenschaftliche Erkenntnisse veröffentlicht werden. Das Datum der letzten Überprüfung wird bei jedem Artikel angegeben."
            },
            {
                eyebrow: "7. Fehler und Korrekturen",
                title: "Korrekturen werden transparent dokumentiert",
                body: "Wenn Sie einen sachlichen Fehler in unseren Inhalten feststellen, kontaktieren Sie uns. Wir korrigieren transparent — der ursprüngliche Fehler, die Korrektur und das Aktualisierungsdatum werden dokumentiert."
            }
        ],
        contactTitle: "Kontakt",
        contactCards: [
            {
                eyebrow: "Redaktionelle Anfragen",
                title: "Allgemeiner Kontakt",
                body: `Redaktionelle Anfragen: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `An ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail} schreiben`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            },
            {
                eyebrow: "Anfragen zu Inspektionen",
                title: "InspectOS",
                body: "Anfragen zu Inspektionen: über InspectOS auf inspectos.pt",
                ctaLabel: "InspectOS öffnen",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            }
        ],
        disclosureTitle: "Redaktionelle Unabhängigkeit",
        disclosureText: "MoldCheck.pt verteidigt unabhängige Diagnose und nimmt kein Geld von Unternehmen an, deren kommerzielles Interesse vom Verkauf der Sanierung abhängt."
    },
    nl: {
        eyebrow: "Redactioneel beleid",
        title: "Hoe wij werken — en waar wij ons aan verbinden",
        description: "MoldCheck.pt is een onafhankelijke redactionele publicatie. Deze pagina legt onze redactionele principes, onze bronnen en wat ons onderscheidt van andere bronnen over schimmel en vocht uit.",
        policyTitle: "Onze redactionele verbintenissen",
        policyCards: [
            {
                eyebrow: "1. Onafhankelijkheid van behandelingen",
                title: "Geen financieel conflict met sanering",
                body: "MoldCheck.pt ontvangt geen betalingen, commissies of enige andere vorm van vergoeding van bedrijven die vochtbehandelingen, antischimmelproducten, ventilatiesystemen of saneringsdiensten verkopen.\n\nDit betekent niet dat de site geen legitieme eigen diensten in rekening kan brengen. Het betekent wél dat wij geen geld aannemen van bedrijven waarvan het commerciële belang afhangt van het aanbevelen of verkopen van sanering.\n\nWanneer wij een product, methode of dienst aanbevelen, doen wij dat omdat die een wetenschappelijke basis heeft of echt nuttig is voor de gebruiker."
            },
            {
                eyebrow: "2. Wetenschappelijke basis",
                title: "Peer-reviewed literatuur en erkende normen",
                body: "Alle klinische en technische inhoud op deze site is gebaseerd op peer-reviewed wetenschappelijke literatuur of op internationaal erkende technische normen. Onze belangrijkste bronnen zijn:\n\nWHO-richtlijnen voor binnenluchtkwaliteit: vocht en schimmel (2009)\n\nIICRC S520 — norm voor professionele schimmelsanering, 4e editie (2024)\n\nEPA — handleiding voor schimmelsanering\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nPeer-reviewed onderzoek met expliciete bronvermelding"
            },
            {
                eyebrow: "3. Eerlijkheid over onzekerheid",
                title: "Wij onderscheiden niveaus van bewijs",
                body: "De wetenschap over schimmel binnenshuis is nog volop in ontwikkeling. Er zijn gebieden waar het bewijs solide en goed onderbouwd is. Er zijn gebieden waar het bewijs suggestief maar niet conclusief is. En er zijn gebieden waar we het simpelweg niet weten.\n\nWij onderscheiden deze categorieën expliciet in onze inhoud. Wij overdrijven wetenschappelijke zekerheid niet om urgentie te creëren."
            },
            {
                eyebrow: "4. Geen risicooverdrijving",
                title: "Nauwkeurigheid boven angst",
                body: "Schimmel in huis is een reëel probleem met gedocumenteerde gezondheidseffecten. In de meeste gevallen is het geen levensbedreigende noodsituatie. Schrijven over schimmel met als doel buitensporige angst te creëren is een praktijk die deze site uitdrukkelijk afwijst."
            },
            {
                eyebrow: "5. Transparantie over beperkingen",
                title: "De site vervangt geen professionele beoordeling",
                body: "Deze site vervangt geen professioneel medisch advies, geen technische beoordeling ter plaatse en geen laboratoriumdiagnose. In gezondheidsartikelen wordt deze mededeling prominent weergegeven."
            },
            {
                eyebrow: "6. Updates",
                title: "Wij herzien en actualiseren wanneer relevant",
                body: "Wij verbinden ons ertoe inhoud te herzien en bij te werken wanneer relevante nieuwe wetenschappelijke inzichten worden gepubliceerd. De datum van de laatste herziening staat bij elk artikel vermeld."
            },
            {
                eyebrow: "7. Fouten en correcties",
                title: "Correcties worden transparant gedocumenteerd",
                body: "Als u een feitelijke fout in onze inhoud ontdekt, neem dan contact met ons op. Wij corrigeren transparant — de oorspronkelijke fout, de correctie en de datum van bijwerking worden gedocumenteerd."
            }
        ],
        contactTitle: "Contact",
        contactCards: [
            {
                eyebrow: "Redactionele vragen",
                title: "Algemeen contact",
                body: `Redactionele vragen: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `E-mail ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            },
            {
                eyebrow: "Vragen over inspecties",
                title: "InspectOS",
                body: "Vragen over inspecties: via InspectOS op inspectos.pt",
                ctaLabel: "InspectOS openen",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            }
        ],
        disclosureTitle: "Redactionele onafhankelijkheid",
        disclosureText: "MoldCheck.pt verdedigt onafhankelijke diagnose en accepteert geen geld van bedrijven waarvan het commerciële belang afhangt van het verkopen van sanering."
    },
    it: {
        eyebrow: "Politica editoriale",
        title: "Come lavoriamo — e a cosa ci impegniamo",
        description: "MoldCheck.pt è una pubblicazione editoriale indipendente. Questa pagina spiega i nostri principi editoriali, le nostre fonti e ciò che ci distingue da altre risorse su muffa e umidità.",
        policyTitle: "I nostri impegni editoriali",
        policyCards: [
            {
                eyebrow: "1. Indipendenza dai trattamenti",
                title: "Nessun conflitto finanziario con il risanamento",
                body: "MoldCheck.pt non riceve pagamenti, commissioni o qualsiasi altra forma di compensazione da aziende che vendono trattamenti contro l'umidità, prodotti antimuffa, sistemi di ventilazione o servizi di risanamento.\n\nQuesto non significa che il sito non possa addebitare i propri servizi legittimi. Significa che non accettiamo denaro da aziende il cui interesse commerciale dipende dal raccomandare o vendere il risanamento.\n\nQuando raccomandiamo un prodotto, un metodo o un servizio, lo facciamo perché ha una base scientifica o una reale utilità per l'utente."
            },
            {
                eyebrow: "2. Base scientifica",
                title: "Letteratura peer-reviewed e standard riconosciuti",
                body: "Tutti i contenuti clinici e tecnici di questo sito si basano su letteratura scientifica peer-reviewed o su standard tecnici riconosciuti a livello internazionale. Le nostre fonti principali includono:\n\nLinee guida OMS per la qualità dell'aria interna: umidità e muffe (2009)\n\nIICRC S520 — Standard per la bonifica professionale delle muffe, 4a edizione (2024)\n\nEPA — Guida alla bonifica delle muffe\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nRicerche peer-reviewed con citazione esplicita"
            },
            {
                eyebrow: "3. Onestà sull'incertezza",
                title: "Distinguiamo i livelli di evidenza",
                body: "La scienza delle muffe in ambienti interni è ancora in sviluppo attivo. Ci sono aree in cui le prove sono solide e ben consolidate. Ci sono aree in cui le prove sono suggestive ma non conclusive. E ci sono aree in cui semplicemente non sappiamo.\n\nDistinguiamo esplicitamente queste categorie nei nostri contenuti. Non sopravvalutiamo la certezza scientifica per creare urgenza."
            },
            {
                eyebrow: "4. Nessuna esagerazione del rischio",
                title: "Precisione prima della paura",
                body: "La muffa in casa è un problema reale con conseguenze documentate per la salute. Non è un'emergenza mortale nella maggior parte dei casi. Scrivere di muffa con l'obiettivo di creare paura sproporzionata è una pratica che questo sito rifiuta esplicitamente."
            },
            {
                eyebrow: "5. Trasparenza sui limiti",
                title: "Il sito non sostituisce una valutazione professionale",
                body: "Questo sito non sostituisce una consulenza medica professionale, una valutazione tecnica in loco o una diagnosi di laboratorio. Negli articoli sulla salute, questo avviso è visualizzato in modo prominente."
            },
            {
                eyebrow: "6. Aggiornamenti",
                title: "Revisione e aggiornamento quando rilevante",
                body: "Ci impegniamo a rivedere e aggiornare i contenuti quando vengono pubblicate nuove prove scientifiche rilevanti. La data dell'ultima revisione è indicata su ogni articolo."
            },
            {
                eyebrow: "7. Errori e correzioni",
                title: "Le correzioni sono documentate in modo trasparente",
                body: "Se identifichi un errore fattuale nei nostri contenuti, contattaci. Correggiamo in modo trasparente — l'errore originale, la correzione e la data di aggiornamento sono tutti registrati."
            }
        ],
        contactTitle: "Contatti",
        contactCards: [
            {
                eyebrow: "Domande editoriali",
                title: "Contatto generale",
                body: `Domande editoriali: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Scrivi a ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            },
            {
                eyebrow: "Domande sulle ispezioni",
                title: "InspectOS",
                body: "Domande sulle ispezioni: tramite InspectOS su inspectos.pt",
                ctaLabel: "Apri InspectOS",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            }
        ],
        disclosureTitle: "Indipendenza editoriale",
        disclosureText: "MoldCheck.pt difende la diagnosi indipendente e non accetta denaro da aziende il cui interesse commerciale dipende dalla vendita del risanamento."
    },
    es: {
        eyebrow: "Política editorial",
        title: "Cómo trabajamos — y a qué nos comprometemos",
        description: "MoldCheck.pt es una publicación editorial independiente. Esta página explica nuestros principios editoriales, nuestras fuentes y lo que nos distingue de otros recursos sobre moho y humedad.",
        policyTitle: "Nuestros compromisos editoriales",
        policyCards: [
            {
                eyebrow: "1. Independencia de los tratamientos",
                title: "Sin conflicto financiero con la remediación",
                body: "MoldCheck.pt no recibe pagos, comisiones ni ninguna otra forma de compensación de empresas que venden tratamientos contra la humedad, productos antimoho, sistemas de ventilación o servicios de remediación.\n\nEsto no significa que el sitio no pueda cobrar por sus propios servicios legítimos. Significa que no aceptamos dinero de empresas cuyo interés comercial depende de recomendar o vender la remediación.\n\nCuando recomendamos un producto, método o servicio, lo hacemos porque tiene base científica o utilidad real para el usuario."
            },
            {
                eyebrow: "2. Base científica",
                title: "Literatura revisada por pares y normas reconocidas",
                body: "Todo el contenido clínico y técnico de este sitio se basa en literatura científica revisada por pares o en normas técnicas reconocidas internacionalmente. Nuestras fuentes principales incluyen:\n\nDirectrices de la OMS para la calidad del aire interior: humedad y moho (2009)\n\nIICRC S520 — Norma para la remediación profesional del moho, 4.ª edición (2024)\n\nEPA — Guía de remediación del moho\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nInvestigación revisada por pares con cita explícita"
            },
            {
                eyebrow: "3. Honestidad sobre la incertidumbre",
                title: "Distinguimos los niveles de evidencia",
                body: "La ciencia del moho en interiores sigue desarrollándose activamente. Hay áreas donde la evidencia es sólida y bien establecida. Hay áreas donde la evidencia es sugestiva pero no concluyente. Y hay áreas donde simplemente no lo sabemos.\n\nDistinguimos estas categorías explícitamente en nuestro contenido. No exageramos la certeza científica para crear urgencia."
            },
            {
                eyebrow: "4. Sin exageración del riesgo",
                title: "Rigor antes que miedo",
                body: "El moho en casa es un problema real con consecuencias documentadas para la salud. No es una emergencia mortal en la mayoría de los casos. Escribir sobre moho con el objetivo de crear miedo desproporcionado es una práctica que este sitio rechaza explícitamente."
            },
            {
                eyebrow: "5. Transparencia sobre las limitaciones",
                title: "El sitio no sustituye una evaluación profesional",
                body: "Este sitio no sustituye el asesoramiento médico profesional, la evaluación técnica presencial ni el diagnóstico de laboratorio. En los artículos de salud, este aviso se muestra de forma destacada."
            },
            {
                eyebrow: "6. Actualizaciones",
                title: "Revisamos y actualizamos cuando es relevante",
                body: "Nos comprometemos a revisar y actualizar el contenido cuando se publiquen nuevas evidencias científicas relevantes. La fecha de la última revisión se indica en cada artículo."
            },
            {
                eyebrow: "7. Errores y correcciones",
                title: "Las correcciones se documentan de forma transparente",
                body: "Si identifica un error factual en nuestro contenido, contáctenos. Corregimos de forma transparente — el error original, la corrección y la fecha de actualización quedan registrados."
            }
        ],
        contactTitle: "Contacto",
        contactCards: [
            {
                eyebrow: "Consultas editoriales",
                title: "Contacto general",
                body: `Consultas editoriales: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Escribir a ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            },
            {
                eyebrow: "Consultas de inspección",
                title: "InspectOS",
                body: "Consultas de inspección: a través de InspectOS en inspectos.pt",
                ctaLabel: "Abrir InspectOS",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            }
        ],
        disclosureTitle: "Independencia editorial",
        disclosureText: "MoldCheck.pt defiende el diagnóstico independiente y no acepta dinero de empresas cuyo interés comercial depende de vender la remediación del problema."
    }
};
function getEditorialPolicyContent(locale) {
    const content = editorialPolicyByLocale[locale] ?? editorialPolicyByLocale.pt;
    return {
        pageKey: "editorialPolicy",
        language: locale,
        translationGroup: "editorial-policy",
        title: content.title,
        eyebrow: content.eyebrow,
        description: content.description,
        sections: [
            {
                title: content.policyTitle,
                tone: "band",
                layout: "utility",
                cards: content.policyCards
            },
            {
                title: content.contactTitle,
                layout: "utility",
                cards: content.contactCards
            }
        ],
        disclosureTitle: content.disclosureTitle,
        disclosureText: content.disclosureText
    };
}
}),
"[project]/src/components/shared/PageShell.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageShell",
    ()=>PageShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function PageShell({ eyebrow, title, description, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "page-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "page-shell__header",
                children: [
                    eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "page-shell__eyebrow",
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/PageShell.tsx",
                        lineNumber: 15,
                        columnNumber: 20
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/PageShell.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "page-shell__description",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/PageShell.tsx",
                        lineNumber: 17,
                        columnNumber: 24
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/PageShell.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-shell__content",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/shared/PageShell.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/PageShell.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(site)/[locale]/editorial-policy/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditorialPolicyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$components$2f$GlobalPageBlocks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/components/GlobalPageBlocks.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$editorialPolicyContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/editorialPolicyContent.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PageShell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/PageShell.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function EditorialPolicyPage({ params }) {
    const { locale } = await params;
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$editorialPolicyContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEditorialPolicyContent"])(locale);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PageShell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageShell"], {
                eyebrow: page.eyebrow,
                title: page.title,
                description: page.description
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/[locale]/editorial-policy/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$components$2f$GlobalPageBlocks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlobalPageBlocks"], {
                page: page
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/[locale]/editorial-policy/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/(site)/[locale]/editorial-policy/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(site)/[locale]/editorial-policy/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6eaa2992._.js.map
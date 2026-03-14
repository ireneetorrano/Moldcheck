module.exports = [
"[project]/.next-internal/server/app/(site)/[locale]/about/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/src/features/content/data/aboutContent.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAboutFallbackContent",
    ()=>getAboutFallbackContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/site.ts [app-rsc] (ecmascript)");
;
function paragraphsToBlocks(paragraphs) {
    return paragraphs.map((text, index)=>({
            _type: "block",
            _key: `paragraph-${index + 1}`,
            style: "normal",
            children: [
                {
                    _type: "span",
                    _key: `span-${index + 1}`,
                    text
                }
            ]
        }));
}
const aboutContentByLocale = {
    pt: {
        eyebrow: "Sobre o MoldCheck.pt",
        title: "O que é o MoldCheck.pt — e porque existe",
        description: "MoldCheck.pt existe para explicar bolor, humidade e risco em Portugal com independência editorial e base científica.",
        introParagraphs: [
            "O MoldCheck.pt nasceu de uma observação simples: Portugal tem o segundo pior problema de bolor da Europa, e não existe nenhuma fonte de informação independente para as pessoas que vivem com essa realidade.",
            "O mercado disponível oferece diagnósticos gratuitos de empresas que ganham dinheiro com os tratamentos que recomendam. Os motores de busca devolvem sobretudo conteúdo produzido por essas mesmas empresas. Os médicos raramente têm formação em medicina ambiental doméstica. E os padrões internacionais de referência — as diretrizes da OMS de 2009, a norma IICRC S520 — existem em inglês, em linguagem técnica, inacessíveis ao consumidor comum.",
            "Este site existe para preencher esse espaço."
        ],
        behindTitle: "Quem está por detrás disto",
        behindBody: "O MoldCheck.pt é uma iniciativa do FAIRBANK Group. O FAIRBANK Group opera a InspectOS, uma plataforma de inspecção independente de imóveis em Portugal.\n\nA nossa ligação comercial é com o diagnóstico independente — não com o tratamento. Um inspector independente que cobra pelo seu tempo e não recebe comissão do saneador que vai executar a obra é exactamente o modelo que este site defende. É também o modelo que a InspectOS representa.\n\nPieter Paul Castelein, fundador do FAIRBANK Group, escreveu o ensaio fundador deste site depois de descobrir a escala do problema em Portugal e perceber que não havia nenhum recurso de informação que o abordasse com honestidade.",
        policyTitle: "Como trabalhamos — e ao que nos comprometemos",
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
        eyebrow: "About MoldCheck.pt",
        title: "What MoldCheck.pt is — and why it exists",
        description: "MoldCheck.pt exists to explain mold, damp and indoor risk in Portugal with editorial independence and scientific discipline.",
        introParagraphs: [
            "MoldCheck.pt was born from a simple observation: Portugal has Europe’s second-worst mold problem, and there is no independent source of information for the people living with that reality.",
            "The market offers free diagnoses from companies that make money from the treatments they recommend. Search engines largely return content produced by those same companies. Doctors rarely have training in domestic environmental medicine. And the main international reference standards — the 2009 WHO guidelines, the IICRC S520 standard — exist in English, in technical language, and remain inaccessible to the average resident.",
            "This site exists to fill that gap."
        ],
        behindTitle: "Who is behind this",
        behindBody: "MoldCheck.pt is a FAIRBANK Group initiative. FAIRBANK Group operates InspectOS, an independent property inspection platform in Portugal.\n\nOur commercial connection is with independent diagnosis — not with treatment. An independent inspector who charges for their time and receives no commission from the remediation contractor is exactly the model this site defends. It is also the model InspectOS represents.\n\nPieter Paul Castelein, founder of FAIRBANK Group, wrote the founding essay for this site after discovering the scale of Portugal’s mold problem and finding no honest information resource that addressed it directly.",
        policyTitle: "How we work — and what we are committed to",
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
        eyebrow: "À propos de MoldCheck.pt",
        title: "Ce qu’est MoldCheck.pt — et pourquoi il existe",
        description: "MoldCheck.pt existe pour expliquer les moisissures, l’humidité et le risque intérieur au Portugal avec indépendance éditoriale et base scientifique.",
        introParagraphs: [
            "MoldCheck.pt est né d’une observation simple : le Portugal a le deuxième pire problème de moisissures en Europe, et il n’existe aucune source d’information indépendante pour les personnes qui vivent avec cette réalité.",
            "Le marché propose des diagnostics gratuits d’entreprises qui gagnent de l’argent grâce aux traitements qu’elles recommandent. Les moteurs de recherche renvoient principalement des contenus produits par ces mêmes entreprises. Les médecins ont rarement une formation en médecine environnementale domestique. Et les principales normes de référence internationales — les lignes directrices de l’OMS de 2009, la norme IICRC S520 — existent en anglais, dans un langage technique, inaccessible au résident ordinaire.",
            "Ce site existe pour combler ce manque."
        ],
        behindTitle: "Qui est derrière cela",
        behindBody: "MoldCheck.pt est une initiative du FAIRBANK Group. FAIRBANK Group exploite InspectOS, une plateforme indépendante d’inspection immobilière au Portugal.\n\nNotre lien commercial est avec le diagnostic indépendant — pas avec le traitement. Un inspecteur indépendant qui facture son temps et ne perçoit aucune commission de l’entreprise de remédiation est exactement le modèle que ce site défend. C’est aussi le modèle qu’InspectOS représente.\n\nPieter Paul Castelein, fondateur du FAIRBANK Group, a rédigé l’essai fondateur de ce site après avoir découvert l’ampleur du problème au Portugal et constaté l’absence d’une ressource honnête pour l’expliquer.",
        policyTitle: "Comment nous travaillons — et à quoi nous nous engageons",
        policyCards: [
            {
                eyebrow: "1. Indépendance vis-à-vis des traitements",
                title: "Aucun conflit financier avec la remédiation",
                body: "MoldCheck.pt ne reçoit aucun paiement, commission ou autre forme de compensation de la part d’entreprises qui vendent des traitements contre l’humidité, des produits anti-moisissures, des systèmes de ventilation ou des services de remédiation.\n\nCela ne signifie pas que le site ne puisse pas facturer ses propres services légitimes ou des activités liées à sa mission, comme les inspections indépendantes, les analyses de laboratoire, les réservations ou les ressources numériques. Cela signifie que nous n’acceptons pas d’argent d’entreprises dont l’intérêt commercial dépend de la recommandation ou de la vente de la remédiation.\n\nLorsque nous recommandons un produit, une méthode ou un service, nous le faisons parce qu’il repose sur une base scientifique ou présente une utilité réelle pour l’utilisateur — et non parce qu’une entreprise de remédiation nous a payés pour le recommander."
            },
            {
                eyebrow: "2. Base scientifique",
                title: "Littérature évaluée par les pairs et normes reconnues",
                body: "Tout le contenu clinique et technique de ce site repose sur de la littérature scientifique évaluée par les pairs ou sur des normes techniques reconnues au niveau international. Nos sources principales incluent :\n\nLignes directrices de l’OMS pour la qualité de l’air intérieur : humidité et moisissures (2009)\n\nIICRC S520 — norme de remédiation professionnelle des moisissures, 4e édition (2024)\n\nEPA — guide de remédiation des moisissures\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nRecherches scientifiques publiées avec citations explicites"
            },
            {
                eyebrow: "3. Honnêteté face à l’incertitude",
                title: "Nous distinguons les niveaux de preuve",
                body: "La science des moisissures en intérieur évolue encore activement. Il existe des domaines où les preuves sont solides et bien établies — par exemple le lien causal entre l’humidité et les symptômes respiratoires. D’autres domaines reposent sur des preuves suggestives mais non concluantes — comme le CIRS ou certains effets neurologiques des MVOC. Et il y a aussi des domaines où nous ne savons tout simplement pas.\n\nNous distinguons explicitement ces catégories dans notre contenu. Nous n’exagérons pas la certitude scientifique pour créer un sentiment d’urgence, et nous ne minimisons pas les risques documentés pour éviter d’inquiéter."
            },
            {
                eyebrow: "4. Pas d’exagération du risque",
                title: "La précision avant la peur",
                body: "Les moisissures dans le logement sont un problème réel, avec des conséquences sanitaires documentées. Ce n’est pas, dans la plupart des cas, une urgence mortelle. Écrire sur les moisissures dans le but de créer une peur disproportionnée — que ce soit pour vendre des traitements ou générer du trafic — est une pratique que ce site rejette explicitement."
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
                body: "Si vous identifiez une erreur factuelle dans notre contenu, contactez-nous. Nous corrigeons de manière transparente — l’erreur initiale, la correction et la date de mise à jour sont consignées."
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
        disclosureText: "MoldCheck.pt défend le diagnostic indépendant et n’accepte pas d’argent d’entreprises dont l’intérêt commercial dépend de la vente de la remédiation."
    },
    de: {
        eyebrow: "Über MoldCheck.pt",
        title: "Was MoldCheck.pt ist — und warum es existiert",
        description: "MoldCheck.pt erklärt Schimmel, Feuchtigkeit und Innenraumrisiken in Portugal mit redaktioneller Unabhängigkeit und wissenschaftlicher Grundlage.",
        introParagraphs: [
            "MoldCheck.pt entstand aus einer einfachen Beobachtung: Portugal hat Europas zweitschlimmstes Schimmelproblem, und es gibt keine unabhängige Informationsquelle für die Menschen, die mit dieser Realität leben.",
            "Der Markt bietet kostenlose Diagnosen von Unternehmen an, die mit den von ihnen empfohlenen Behandlungen Geld verdienen. Suchmaschinen liefern überwiegend Inhalte, die genau von diesen Unternehmen produziert wurden. Ärztinnen und Ärzte haben nur selten eine Ausbildung in häuslicher Umweltmedizin. Und die wichtigsten internationalen Referenzstandards — die WHO-Leitlinien von 2009 und der IICRC S520 — liegen auf Englisch und in technischer Sprache vor und sind für die meisten Bewohner kaum zugänglich.",
            "Diese Website existiert, um diese Lücke zu schließen."
        ],
        behindTitle: "Wer dahintersteht",
        behindBody: "MoldCheck.pt ist eine Initiative der FAIRBANK Group. Die FAIRBANK Group betreibt InspectOS, eine unabhängige Plattform für Immobilieninspektionen in Portugal.\n\nUnsere kommerzielle Verbindung liegt im unabhängigen Diagnosedienst — nicht in der Behandlung. Ein unabhängiger Inspektor, der seine Zeit berechnet und keine Provision vom Sanierungsunternehmen erhält, ist genau das Modell, für das diese Website eintritt. Genau dieses Modell verkörpert auch InspectOS.\n\nPieter Paul Castelein, Gründer der FAIRBANK Group, schrieb den Gründungsessay dieser Website, nachdem er das Ausmaß des Problems in Portugal erkannt und festgestellt hatte, dass es keine ehrliche Informationsquelle dazu gab.",
        policyTitle: "Wie wir arbeiten — und wozu wir uns verpflichten",
        policyCards: [
            {
                eyebrow: "1. Unabhängigkeit von Behandlungen",
                title: "Kein finanzieller Interessenkonflikt mit Sanierung",
                body: "MoldCheck.pt erhält keine Zahlungen, Provisionen oder sonstige Vergütungen von Unternehmen, die Feuchtigkeitsbehandlungen, Anti-Schimmel-Produkte, Lüftungssysteme oder Sanierungsleistungen verkaufen.\n\nDas bedeutet nicht, dass die Website keine legitimen eigenen Leistungen oder damit zusammenhängenden Angebote abrechnen darf, etwa unabhängige Inspektionen, Laboranalysen, Buchungen oder digitale Ressourcen. Es bedeutet vielmehr, dass wir kein Geld von Unternehmen annehmen, deren kommerzielles Interesse davon abhängt, die Sanierung des Problems zu empfehlen oder zu verkaufen.\n\nWenn wir ein Produkt, eine Methode oder eine Dienstleistung empfehlen, tun wir das, weil dafür eine wissenschaftliche Grundlage oder ein echter Nutzen für den Nutzer besteht — nicht weil uns ein Sanierungsunternehmen dafür bezahlt hat."
            },
            {
                eyebrow: "2. Wissenschaftliche Grundlage",
                title: "Peer-reviewte Literatur und anerkannte Standards",
                body: "Alle klinischen und technischen Inhalte dieser Website beruhen auf peer-reviewter wissenschaftlicher Literatur oder auf international anerkannten technischen Standards. Zu unseren wichtigsten Quellen gehören:\n\nWHO-Leitlinien zur Innenraumluftqualität: Feuchtigkeit und Schimmel (2009)\n\nIICRC S520 — Standard für professionelle Schimmelsanierung, 4. Ausgabe (2024)\n\nEPA — Leitfaden zur Schimmelbeseitigung\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nPeer-reviewte Forschung mit expliziten Quellenangaben"
            },
            {
                eyebrow: "3. Ehrlichkeit im Umgang mit Unsicherheit",
                title: "Wir unterscheiden klar zwischen Evidenzgraden",
                body: "Die Wissenschaft zu Schimmel in Innenräumen entwickelt sich weiterhin aktiv. Es gibt Bereiche, in denen die Evidenz solide und gut belegt ist — zum Beispiel der kausale Zusammenhang zwischen Feuchtigkeit und Atemwegssymptomen. Es gibt Bereiche, in denen die Evidenz eher hinweisend als schlüssig ist — etwa CIRS oder bestimmte neurologische Wirkungen von MVOCs. Und es gibt Bereiche, in denen wir es schlicht nicht wissen.\n\nWir unterscheiden diese Kategorien ausdrücklich in unseren Inhalten. Wir übertreiben wissenschaftliche Gewissheit nicht, um Dringlichkeit zu erzeugen, und wir verharmlosen dokumentierte Risiken nicht, um Leser zu beruhigen."
            },
            {
                eyebrow: "4. Keine Risikoübertreibung",
                title: "Genauigkeit statt Angst",
                body: "Schimmel in Wohnräumen ist ein reales Problem mit dokumentierten gesundheitlichen Folgen. In den meisten Fällen ist er kein lebensbedrohlicher Notfall. Über Schimmel mit dem Ziel zu schreiben, unverhältnismäßige Angst zu erzeugen — sei es, um Behandlungen zu verkaufen oder Reichweite zu generieren — ist eine Praxis, die diese Website ausdrücklich ablehnt."
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
        eyebrow: "Over MoldCheck.pt",
        title: "Wat MoldCheck.pt is — en waarom het bestaat",
        description: "MoldCheck.pt bestaat om schimmel, vocht en binnenrisico in Portugal uit te leggen met redactionele onafhankelijkheid en wetenschappelijke basis.",
        introParagraphs: [
            "MoldCheck.pt ontstond vanuit een eenvoudige observatie: Portugal heeft het op één na ergste schimmelprobleem van Europa, en er bestaat geen onafhankelijke informatiebron voor de mensen die met die realiteit leven.",
            "De markt biedt gratis diagnoses aan van bedrijven die geld verdienen met de behandelingen die ze aanbevelen. Zoekmachines tonen vooral content die door diezelfde bedrijven is geproduceerd. Artsen hebben zelden opleiding in huiselijke milieugeneeskunde. En de belangrijkste internationale referentienormen — de WHO-richtlijnen uit 2009 en de IICRC S520 — bestaan in het Engels, in technische taal, en zijn voor de gemiddelde bewoner moeilijk toegankelijk.",
            "Deze website bestaat om dat gat te vullen."
        ],
        behindTitle: "Wie hierachter zit",
        behindBody: "MoldCheck.pt is een initiatief van de FAIRBANK Group. De FAIRBANK Group beheert InspectOS, een onafhankelijk vastgoedinspectieplatform in Portugal.\n\nOnze commerciële band ligt bij onafhankelijke diagnose — niet bij behandeling. Een onafhankelijke inspecteur die betaald wordt voor zijn tijd en geen commissie ontvangt van het saneringsbedrijf is precies het model dat deze site verdedigt. Dat is ook het model dat InspectOS vertegenwoordigt.\n\nPieter Paul Castelein, oprichter van de FAIRBANK Group, schreef het oprichtingsessay van deze site nadat hij de omvang van het Portugese schimmelprobleem had ontdekt en merkte dat er geen eerlijke informatiebron bestond die dit rechtstreeks behandelde.",
        policyTitle: "Hoe wij werken — en waar wij ons aan verbinden",
        policyCards: [
            {
                eyebrow: "1. Onafhankelijkheid van behandelingen",
                title: "Geen financieel conflict met sanering",
                body: "MoldCheck.pt ontvangt geen betalingen, commissies of enige andere vorm van vergoeding van bedrijven die vochtbehandelingen, antischimmelproducten, ventilatiesystemen of saneringsdiensten verkopen.\n\nDit betekent niet dat de site geen legitieme eigen diensten of verwante activiteiten in rekening kan brengen, zoals onafhankelijke inspecties, laboratoriumanalyses, boekingen of digitale middelen. Het betekent wél dat wij geen geld aannemen van bedrijven waarvan het commerciële belang afhangt van het aanbevelen of verkopen van sanering.\n\nWanneer wij een product, methode of dienst aanbevelen, doen wij dat omdat die een wetenschappelijke basis heeft of echt nuttig is voor de gebruiker — niet omdat een saneringsbedrijf ons daarvoor heeft betaald."
            },
            {
                eyebrow: "2. Wetenschappelijke basis",
                title: "Peer-reviewed literatuur en erkende normen",
                body: "Alle klinische en technische inhoud op deze site is gebaseerd op peer-reviewed wetenschappelijke literatuur of op internationaal erkende technische normen. Onze belangrijkste bronnen zijn onder meer:\n\nWHO-richtlijnen voor binnenluchtkwaliteit: vocht en schimmel (2009)\n\nIICRC S520 — standaard voor professionele schimmelsanering, 4e editie (2024)\n\nEPA — gids voor schimmelremediatie\n\nInstitute of Medicine — Damp Indoor Spaces and Health (2004)\n\nPeer-reviewed onderzoek met expliciete bronvermelding"
            },
            {
                eyebrow: "3. Eerlijkheid over onzekerheid",
                title: "We maken verschillen in bewijs expliciet",
                body: "De wetenschap rond schimmel binnenshuis is nog volop in ontwikkeling. Er zijn gebieden waar het bewijs sterk en goed gevestigd is — bijvoorbeeld het causale verband tussen vocht en ademhalingsklachten. Er zijn ook gebieden waar het bewijs suggestief maar niet sluitend is — zoals CIRS en bepaalde neurologische effecten van MVOC’s. En er zijn gebieden waar we het simpelweg nog niet weten.\n\nWij maken dat onderscheid expliciet in onze inhoud. We overdrijven wetenschappelijke zekerheid niet om urgentie te creëren, en we bagatelliseren gedocumenteerde risico’s niet om lezers gerust te stellen."
            },
            {
                eyebrow: "4. Geen overdrijving van risico’s",
                title: "Nauwkeurigheid boven angst",
                body: "Schimmel in woningen is een reëel probleem met gedocumenteerde gevolgen voor de gezondheid. In de meeste gevallen is het geen levensbedreigende noodsituatie. Schrijven over schimmel met als doel buitensporige angst op te wekken — of dat nu is om behandelingen te verkopen of om verkeer aan te trekken — is een praktijk die deze website expliciet afwijst."
            },
            {
                eyebrow: "5. Transparantie over beperkingen",
                title: "De site vervangt geen professionele beoordeling",
                body: "Deze website vervangt geen professioneel medisch advies, technische beoordeling ter plaatse of laboratoriumdiagnose. In gezondheidsartikelen wordt deze waarschuwing duidelijk weergegeven."
            },
            {
                eyebrow: "6. Updates",
                title: "Herziening en updates bij nieuwe inzichten",
                body: "Wij verbinden ons ertoe de inhoud te herzien en bij te werken wanneer nieuwe relevante wetenschappelijke inzichten worden gepubliceerd. De datum van de laatste herziening wordt bij elk artikel vermeld."
            },
            {
                eyebrow: "7. Fouten en correcties",
                title: "Correcties worden transparant vastgelegd",
                body: "Als je een feitelijke fout in onze inhoud vaststelt, neem dan contact met ons op. Wij corrigeren transparant — de oorspronkelijke fout, de correctie en de datum van de update worden vastgelegd."
            }
        ],
        contactTitle: "Contact",
        contactCards: [
            {
                eyebrow: "Redactionele vragen",
                title: "Algemeen contact",
                body: `Redactionele vragen: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Mail naar ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            },
            {
                eyebrow: "Vragen over inspecties",
                title: "InspectOS",
                body: "Vragen over inspecties: via InspectOS op inspectos.pt",
                ctaLabel: "Open InspectOS",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            }
        ],
        disclosureTitle: "Redactionele onafhankelijkheid",
        disclosureText: "MoldCheck.pt verdedigt onafhankelijke diagnose en accepteert geen geld van bedrijven waarvan het commerciële belang afhangt van de verkoop van sanering."
    },
    it: {
        eyebrow: "Informazioni su MoldCheck.pt",
        title: "Che cos’è MoldCheck.pt — e perché esiste",
        description: "MoldCheck.pt esiste per spiegare muffa, umidità e rischio indoor in Portogallo con indipendenza editoriale e base scientifica.",
        introParagraphs: [
            "MoldCheck.pt è nato da un’osservazione semplice: il Portogallo ha il secondo peggior problema di muffa in Europa e non esiste alcuna fonte di informazione indipendente per le persone che convivono con questa realtà.",
            "Il mercato disponibile offre diagnosi gratuite da parte di aziende che guadagnano dai trattamenti che raccomandano. I motori di ricerca restituiscono soprattutto contenuti prodotti da quelle stesse aziende. I medici raramente hanno una formazione in medicina ambientale domestica. E gli standard internazionali di riferimento — le linee guida dell’OMS del 2009 e lo standard IICRC S520 — esistono in inglese, in linguaggio tecnico, poco accessibile al residente comune.",
            "Questo sito esiste per colmare quel vuoto."
        ],
        behindTitle: "Chi c’è dietro",
        behindBody: "MoldCheck.pt è un’iniziativa del FAIRBANK Group. FAIRBANK Group gestisce InspectOS, una piattaforma indipendente di ispezione immobiliare in Portogallo.\n\nIl nostro legame commerciale è con la diagnosi indipendente — non con il trattamento. Un ispettore indipendente che fa pagare il proprio tempo e non riceve commissioni dall’impresa di risanamento è esattamente il modello che questo sito difende. È anche il modello che InspectOS rappresenta.\n\nPieter Paul Castelein, fondatore del FAIRBANK Group, ha scritto il saggio fondativo di questo sito dopo aver scoperto la reale dimensione del problema della muffa in Portogallo e aver constatato che non esisteva alcuna risorsa informativa onesta che lo affrontasse in modo diretto.",
        policyTitle: "Come lavoriamo — e a che cosa ci impegniamo",
        policyCards: [
            {
                eyebrow: "1. Indipendenza dai trattamenti",
                title: "Nessun conflitto finanziario con la bonifica",
                body: "MoldCheck.pt non riceve pagamenti, commissioni o alcuna forma di compensazione da aziende che vendono trattamenti contro l’umidità, prodotti antimuffa, sistemi di ventilazione o servizi di bonifica.\n\nCiò non significa che il sito non possa addebitare servizi propri o attività legittimamente collegate alla sua missione, come ispezioni indipendenti, analisi di laboratorio, prenotazioni o risorse digitali. Significa invece che non accettiamo denaro da aziende il cui interesse commerciale dipende dal raccomandare o vendere la bonifica del problema.\n\nQuando raccomandiamo un prodotto, un metodo o un servizio, lo facciamo perché ha una base scientifica o una reale utilità per l’utente — non perché un’azienda di bonifica ci ha pagato per raccomandarlo."
            },
            {
                eyebrow: "2. Base scientifica",
                title: "Letteratura peer-reviewed e standard riconosciuti",
                body: "Tutti i contenuti clinici e tecnici di questo sito si basano su letteratura scientifica peer-reviewed o su standard tecnici riconosciuti a livello internazionale. Le nostre fonti principali includono:\n\nLinee guida dell’OMS per la qualità dell’aria interna: umidità e muffa (2009)\n\nIICRC S520 — Standard internazionale per la bonifica professionale della muffa, 4ª edizione (2024)\n\nEPA — Guida alla bonifica della muffa\n\nInstitute of Medicine — Ambienti interni umidi e salute (2004)\n\nRicerca scientifica peer-reviewed con citazione esplicita"
            },
            {
                eyebrow: "3. Onestà sull’incertezza",
                title: "Distinguiamo ciò che è solido, suggestivo e ancora incerto",
                body: "La scienza della muffa indoor è in continua evoluzione. Ci sono aree in cui le prove sono solide e consolidate — per esempio il legame causale tra umidità e sintomi respiratori. Ci sono aree in cui le prove sono suggestive ma non conclusive — come il CIRS o alcuni effetti neurologici degli MVOC. E ci sono aree in cui semplicemente non sappiamo ancora abbastanza.\n\nDistinguiamo esplicitamente queste categorie nei nostri contenuti. Non esageriamo la certezza scientifica per creare urgenza, né minimizziamo rischi documentati per evitare di allarmare."
            },
            {
                eyebrow: "4. Nessuna esagerazione del rischio",
                title: "Rigore prima della paura",
                body: "La muffa in casa è un problema reale con conseguenze documentate per la salute. Nella maggior parte dei casi non è un’emergenza mortale. Scrivere di muffa con l’obiettivo di creare una paura sproporzionata — sia per vendere trattamenti sia per attirare traffico — è una pratica che questo sito rifiuta esplicitamente."
            },
            {
                eyebrow: "5. Trasparenza sui limiti",
                title: "Il sito non sostituisce una valutazione professionale",
                body: "Questo sito non sostituisce il parere medico professionale, la valutazione tecnica in presenza o la diagnosi di laboratorio. Negli articoli sulla salute, questo avviso viene mostrato in modo ben visibile."
            },
            {
                eyebrow: "6. Aggiornamenti",
                title: "Revisione e aggiornamento quando emergono nuove evidenze",
                body: "Ci impegniamo a rivedere e aggiornare i contenuti quando vengono pubblicate nuove evidenze scientifiche rilevanti. La data dell’ultima revisione è indicata in ogni articolo."
            },
            {
                eyebrow: "7. Errori e correzioni",
                title: "Correzioni trasparenti e registrate",
                body: "Se individui un errore fattuale nei nostri contenuti, contattaci. Correggiamo in modo trasparente — l’errore originale, la correzione e la data di aggiornamento vengono registrati."
            }
        ],
        contactTitle: "Contatto",
        contactCards: [
            {
                eyebrow: "Questioni editoriali",
                title: "Contatto generale",
                body: `Per questioni editoriali: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Scrivi a ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            },
            {
                eyebrow: "Questioni relative alle ispezioni",
                title: "InspectOS",
                body: "Per questioni relative alle ispezioni: tramite InspectOS su inspectos.pt",
                ctaLabel: "Apri InspectOS",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            }
        ],
        disclosureTitle: "Indipendenza editoriale",
        disclosureText: "MoldCheck.pt difende la diagnosi indipendente e non accetta denaro da aziende il cui interesse commerciale dipende dalla vendita della bonifica del problema."
    },
    es: {
        eyebrow: "Sobre MoldCheck.pt",
        title: "Qué es MoldCheck.pt — y por qué existe",
        description: "MoldCheck.pt existe para explicar moho, humedad y riesgo interior en Portugal con independencia editorial y base científica.",
        introParagraphs: [
            "MoldCheck.pt nació de una observación sencilla: Portugal tiene el segundo peor problema de moho de Europa y no existe ninguna fuente de información independiente para las personas que viven con esa realidad.",
            "El mercado disponible ofrece diagnósticos gratuitos de empresas que ganan dinero con los tratamientos que recomiendan. Los buscadores devuelven sobre todo contenido producido por esas mismas empresas. Los médicos rara vez tienen formación en medicina ambiental doméstica. Y los estándares internacionales de referencia — las directrices de la OMS de 2009 y la norma IICRC S520 — existen en inglés, en lenguaje técnico, inaccesible para el residente medio.",
            "Este sitio existe para cubrir ese vacío."
        ],
        behindTitle: "Quién está detrás",
        behindBody: "MoldCheck.pt es una iniciativa del FAIRBANK Group. FAIRBANK Group opera InspectOS, una plataforma independiente de inspección inmobiliaria en Portugal.\n\nNuestra conexión comercial está con el diagnóstico independiente — no con el tratamiento. Un inspector independiente que cobra por su tiempo y no recibe comisión de la empresa de remediación es exactamente el modelo que este sitio defiende. También es el modelo que representa InspectOS.\n\nPieter Paul Castelein, fundador de FAIRBANK Group, escribió el ensayo fundacional de este sitio después de descubrir la magnitud del problema del moho en Portugal y comprobar que no existía ningún recurso informativo honesto que lo abordara de forma directa.",
        policyTitle: "Cómo trabajamos — y a qué nos comprometemos",
        policyCards: [
            {
                eyebrow: "1. Independencia frente a los tratamientos",
                title: "Sin conflicto financiero con la remediación",
                body: "MoldCheck.pt no recibe pagos, comisiones ni ninguna forma de compensación de empresas que venden tratamientos contra la humedad, productos antimoho, sistemas de ventilación o servicios de remediación.\n\nEsto no significa que el sitio no pueda cobrar por servicios propios o actividades legítimamente relacionadas con su misión, como inspecciones independientes, análisis de laboratorio, reservas o recursos digitales. Significa, en cambio, que no aceptamos dinero de empresas cuyo interés comercial depende de recomendar o vender la remediación del problema.\n\nCuando recomendamos un producto, método o servicio, lo hacemos porque tiene base científica o una utilidad real para el usuario — no porque una empresa de remediación nos haya pagado por recomendarlo."
            },
            {
                eyebrow: "2. Base científica",
                title: "Literatura revisada por pares y normas reconocidas",
                body: "Todo el contenido clínico y técnico de este sitio se basa en literatura científica revisada por pares o en normas técnicas reconocidas internacionalmente. Nuestras fuentes principales incluyen:\n\nDirectrices de la OMS para la calidad del aire interior: humedad y moho (2009)\n\nIICRC S520 — Norma internacional para la remediación profesional del moho, 4.ª edición (2024)\n\nEPA — Guía de remediación del moho\n\nInstitute of Medicine — Espacios interiores húmedos y salud (2004)\n\nInvestigación revisada por pares con cita explícita"
            },
            {
                eyebrow: "3. Honestidad sobre la incertidumbre",
                title: "Distingimos lo sólido, lo sugestivo y lo incierto",
                body: "La ciencia del moho interior está en desarrollo activo. Hay áreas donde la evidencia es sólida y está consolidada — por ejemplo, la relación causal entre humedad y síntomas respiratorios. Hay áreas donde la evidencia es sugestiva pero no concluyente — como el CIRS o ciertos efectos neurológicos de los MVOC. Y hay áreas donde simplemente todavía no lo sabemos.\n\nDistinguimos estas categorías de forma explícita en nuestro contenido. No exageramos la certeza científica para crear urgencia, ni minimizamos riesgos documentados para evitar alarmar."
            },
            {
                eyebrow: "4. Sin exageración del riesgo",
                title: "Rigor antes que miedo",
                body: "El moho en la vivienda es un problema real con consecuencias documentadas para la salud. En la mayoría de los casos no es una emergencia mortal. Escribir sobre moho con el objetivo de generar miedo desproporcionado — ya sea para vender tratamientos o para atraer tráfico — es una práctica que este sitio rechaza expresamente."
            },
            {
                eyebrow: "5. Transparencia sobre las limitaciones",
                title: "El sitio no sustituye una evaluación profesional",
                body: "Este sitio no sustituye el consejo médico profesional, la evaluación técnica presencial ni el diagnóstico de laboratorio. En los artículos sobre salud, este aviso aparece de forma destacada."
            },
            {
                eyebrow: "6. Actualizaciones",
                title: "Revisión y actualización cuando cambie la evidencia",
                body: "Nos comprometemos a revisar y actualizar el contenido cuando se publiquen nuevas evidencias científicas relevantes. La fecha de la última revisión se indica en cada artículo."
            },
            {
                eyebrow: "7. Errores y correcciones",
                title: "Correcciones transparentes y registradas",
                body: "Si identificas un error factual en nuestro contenido, contáctanos. Corregimos con transparencia — el error original, la corrección y la fecha de actualización quedan registradas."
            }
        ],
        contactTitle: "Contacto",
        contactCards: [
            {
                eyebrow: "Cuestiones editoriales",
                title: "Contacto general",
                body: `Para cuestiones editoriales: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Escribir a ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            },
            {
                eyebrow: "Cuestiones de inspección",
                title: "InspectOS",
                body: "Para cuestiones de inspección: a través de InspectOS en inspectos.pt",
                ctaLabel: "Abrir InspectOS",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            }
        ],
        disclosureTitle: "Independencia editorial",
        disclosureText: "MoldCheck.pt defiende el diagnóstico independiente y no acepta dinero de empresas cuyo interés comercial depende de vender la remediación del problema."
    }
};
function getAboutFallbackContent(locale) {
    const content = aboutContentByLocale[locale];
    if (!content) {
        throw new Error(`Missing about fallback content for locale: ${locale}`);
    }
    return {
        pageKey: "about",
        language: locale,
        translationGroup: "about",
        title: content.title,
        eyebrow: content.eyebrow,
        description: content.description,
        body: paragraphsToBlocks(content.introParagraphs),
        introLayout: "grid",
        introCards: [
            {
                eyebrow: locale === "pt" ? "Quem está por detrás disto" : locale === "en" ? "Who is behind this" : locale === "fr" ? "Qui est derrière cela" : locale === "de" ? "Wer dahintersteht" : locale === "nl" ? "Wie hierachter zit" : locale === "it" ? "Chi c’è dietro" : "Quién está detrás",
                title: content.behindTitle,
                body: content.behindBody,
                tone: "featured"
            }
        ],
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
"[project]/src/config/foundationalArticles.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "foundationalArticles",
    ()=>foundationalArticles
]);
const foundationalArticles = [
    {
        key: "black-mold",
        section: "mold-types",
        slugs: {
            pt: "bolor-negro-mitos-factos",
            en: "black-mold-facts-science",
            fr: "moisissures-noires-science",
            de: "schwarzer-schimmel-wissenschaft",
            nl: "zwarte-schimmel-wetenschap",
            it: "muffa-nera-scienza",
            es: "moho-negro-ciencia"
        }
    },
    {
        key: "bleach",
        section: "remediation",
        slugs: {
            pt: "lixivia-nao-resolve-bolor",
            en: "why-bleach-doesnt-fix-mold",
            fr: "eau-de-javel-ne-resout-pas-moisissures",
            de: "bleichmittel-loest-schimmel-nicht",
            nl: "bleekwater-lost-schimmel-niet-op",
            it: "candeggina-non-risolve-muffa",
            es: "lejia-no-resuelve-moho"
        }
    },
    {
        key: "health",
        section: "health",
        slugs: {
            pt: "casa-afeta-saude-bolor",
            en: "is-your-home-making-you-ill-mold",
            fr: "logement-affecte-sante-moisissures",
            de: "macht-wohnung-krank-schimmel",
            nl: "woning-maakt-je-ziek-schimmel",
            it: "casa-influisce-salute-muffa",
            es: "vivienda-afecta-salud-moho"
        }
    },
    {
        key: "portugal",
        section: "portugal",
        slugs: {
            pt: "segundo-pior-problema-bolor-europa",
            en: "europes-second-worst-mold-problem",
            fr: "deuxieme-pire-probleme-moisissures",
            de: "zweitschlimmstes-schimmelproblem-europa",
            nl: "op-een-na-ergste-schimmelprobleem",
            it: "secondo-peggior-problema-muffa-europa",
            es: "segundo-peor-problema-moho-europa"
        }
    },
    {
        key: "inspection-guide",
        section: "inspection",
        slugs: {
            pt: "avaliar-risco-bolor-casa-guia",
            en: "assess-mold-risk-home-guide",
            fr: "evaluer-risque-moisissures-guide",
            de: "schimmelrisiko-wohnung-beurteilen",
            nl: "schimmelrisico-woning-beoordelen",
            it: "valutare-rischio-muffa-casa-guida",
            es: "evaluar-riesgo-moho-casa-guia"
        }
    }
];
}),
"[project]/src/features/content/data/homeContent.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHomeFallbackContent",
    ()=>getHomeFallbackContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$foundationalArticles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/foundationalArticles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/routing/paths.ts [app-rsc] (ecmascript)");
;
;
const homeContentByLocale = {
    pt: {
        description: "Um em cada quatro portugueses vive em casa afetada por humidade ou bolor. MoldCheck.pt é o único recurso independente em Portugal dedicado a explicar o que isso significa — para a sua saúde, para a sua casa, e para o que pode fazer a seguir.",
        heroTitle: "Portugal tem o segundo pior problema de bolor da Europa. A maioria das pessoas não sabe.",
        heroBody: "Um em cada quatro portugueses vive em casa afetada por humidade ou bolor. MoldCheck.pt é o único recurso independente em Portugal dedicado a explicar o que isso significa — para a sua saúde, para a sua casa, e para o que pode fazer a seguir.",
        heroPrimaryCtaLabel: "Fazer a avaliação gratuita",
        heroSecondaryCtaLabel: "Ler o guia de inspecção",
        trustBarText: "Baseado em investigação científica da OMS · Independente de empresas de tratamento · Sem publicidade · Iniciativa do FAIRBANK Group",
        problemTitle: "Porque é que Portugal tem tanto bolor?",
        problemBody: "82% dos edifícios em Portugal foram construídos antes do ano 2000 — antes de qualquer requisito de isolamento ou eficiência energética. Porto tem uma humidade relativa média de 77%. Lisboa, no inverno, atinge os 84%.\n\nO resultado: condensação crónica, pontes térmicas, e paredes que retêm humidade durante décadas.\n\nO bolor não é azar. É o resultado previsível de edifícios mal equipados para o clima em que existem.",
        problemLink: "Saber mais sobre por que Portugal é vulnerável →",
        conflictTitle: "Porque é que o diagnóstico gratuito não é neutro",
        conflictBody: "As principais empresas de tratamento de bolor em Portugal oferecem diagnósticos gratuitos. É uma estratégia comercial inteligente: a empresa que diagnostica o problema também vende a solução.\n\nNão existe em Portugal nenhuma entidade que avalie o bolor na sua casa e lhe diga o que tem — sem ganhar dinheiro com o que se segue.\n\nO MoldCheck.pt é essa alternativa. Não vendemos tratamentos. Não recebemos comissões. Publicamos o que a ciência diz.",
        conflictLink: "Ler a nossa política editorial →",
        featuredTitle: "Comece aqui",
        featuredDescription: "",
        nextStepsTitle: "Os próximos passos — consoante a sua situação",
        aboutTitle: "Quem está por detrás disto — e porquê",
        aboutCardEyebrow: "MoldCheck.pt",
        aboutCardTitle: "Quem está por detrás disto — e porquê",
        aboutBody: "O MoldCheck.pt é uma iniciativa do FAIRBANK Group, a empresa por detrás da InspectOS — plataforma de inspecção independente de imóveis em Portugal.\n\nNão vendemos tratamentos de humidade. Não recebemos comissões de empresas de remediação. Quando recomendamos uma inspecção ou análise laboratorial, é porque acreditamos que precisa de uma — não porque lucramos com o tratamento que se segue.\n\nTodo o conteúdo deste site é baseado em investigação científica revisada por pares, incluindo as diretrizes da OMS de 2009 e o padrão IICRC S520. Quando a ciência é incerta, dizemos que é incerta.",
        aboutLink: "Ler a política editorial completa →",
        footerNote: "© MoldCheck.pt — Uma iniciativa do FAIRBANK Group\nInspectOS · PropCheck.pt · Política de Privacidade · Política Editorial · Contacto\nEste site não substitui aconselhamento médico ou técnico profissional.",
        featuredCards: [
            {
                title: "Portugal tem o 2.º pior bolor da Europa — mas ninguém fala nisso",
                body: "O ensaio fundador do MoldCheck.pt. Porquê este problema existe, porque é ignorado, e o que pode mudar.",
                ctaLabel: "Ler artigo →"
            },
            {
                title: "Porque é que a lixívia não resolve o bolor",
                body: "A solução mais usada em Portugal não funciona. Aqui está o porquê — e o que realmente resulta.",
                ctaLabel: "Ler artigo →"
            },
            {
                title: "A sua casa está a afetar a sua saúde?",
                body: "O que a OMS estabeleceu sobre bolor e doenças respiratórias — e os sintomas que a maioria das pessoas não associa à habitação.",
                ctaLabel: "Ler artigo →"
            },
            {
                title: "Guia completo: avaliar o risco de bolor em casa",
                body: "Inspecção divisão a divisão, com checklist de 20 pontos e tabela de localização → causa.",
                ctaLabel: "Ler guia →"
            }
        ],
        nextStepCards: [
            {
                title: "Situação 1 — “Tenho bolor visível”",
                body: "Comece pelo guia de avaliação visual. Identifique a localização, a extensão, e o padrão — essa informação determina tudo o que se segue.",
                ctaLabel: "Guia de avaliação →"
            },
            {
                title: "Situação 2 — “Tenho sintomas de saúde que melhoram fora de casa”",
                body: "Este é o sinal mais importante a levar a sério. Leia o artigo sobre saúde e bolor antes de qualquer outra acção.",
                ctaLabel: "Artigo de saúde →"
            },
            {
                title: "Situação 3 — “Não sei se tenho bolor”",
                body: "Muitas das localizações mais problemáticas são invisíveis. O guia de inspecção diz-lhe onde procurar — e o que a ausência de bolor visível ainda não exclui.",
                ctaLabel: "Começar a inspecção →"
            },
            {
                title: "Situação 4 — “Preciso de ajuda profissional”",
                body: "Uma inspecção independente com medidor de humidade e câmara termográfica identifica a origem do problema sem vender o tratamento que se segue.",
                ctaLabel: "Saber mais sobre inspecção independente →"
            }
        ],
        faqTitle: "FAQ",
        faqCards: [
            {
                title: "1. Se não vejo bolor, posso descartá-lo?",
                body: "Não. Pode estar oculto em cavidades, debaixo de pavimentos, por cima de tetos ou dentro do sistema de ar."
            },
            {
                title: "2. O cheiro a humidade significa sempre que há bolor?",
                body: "Nem sempre, mas é um sinal que merece investigação, sobretudo se persistir."
            },
            {
                title: "3. Uma amostra de ar normal significa que a casa está bem?",
                body: "Não necessariamente. Pode não refletir contaminação oculta ou partículas que esse método deteta mal."
            },
            {
                title: "4. Basta limpar a superfície ou aplicar lixívia?",
                body: "Não como solução principal num problema real de danos por água. A causa e os materiais afetados são mais importantes."
            },
            {
                title: "5. ERMI ou HERTSMI-2 são definitivos?",
                body: "Não. Podem acrescentar contexto, mas não substituem uma avaliação técnica completa."
            }
        ]
    },
    en: {
        eyebrow: "Independent editorial resource on mold, damp and indoor air quality",
        description: "One in four people in Portugal lives in housing affected by dampness or mold. MoldCheck.pt is Portugal’s only independent resource dedicated to explaining what that means — for your health, your home, and what to do next.",
        heroTitle: "Portugal has Europe’s second-worst mold problem. Most people don’t know it.",
        heroBody: "One in four people in Portugal lives in housing affected by dampness or mold. MoldCheck.pt is Portugal’s only independent resource dedicated to explaining what that means — for your health, your home, and what to do next.",
        heroPrimaryCtaLabel: "Assess my home for free",
        heroSecondaryCtaLabel: "Read the inspection guide",
        trustBarText: "Based on WHO scientific research · Independent of treatment companies · No advertising · A FAIRBANK Group initiative",
        problemTitle: "Why does Portugal have so much mold?",
        problemBody: "82% of buildings in Portugal were built before the year 2000 — before any meaningful insulation or energy-efficiency requirements. Porto has an average relative humidity of 77%. Lisbon in winter reaches 84%.\n\nThe result: chronic condensation, thermal bridges, and walls that retain moisture for decades.\n\nMold is not bad luck. It is the predictable result of buildings that were never properly equipped for the climate they exist in.",
        problemLink: "Learn more about why Portuguese buildings are vulnerable →",
        conflictTitle: "Why the free diagnosis isn’t neutral",
        conflictBody: "Portugal’s major mold treatment companies offer free home diagnoses. It is a smart commercial strategy: the company that diagnoses the problem also sells the solution.\n\nThere is no independent entity in Portugal that will assess the mold in your home and tell you what you have — without making money from what comes next.\n\nMoldCheck.pt is that alternative. We do not sell treatments. We do not take commissions. We publish what the science says.",
        conflictLink: "Read our editorial policy →",
        featuredTitle: "Start here",
        featuredDescription: "",
        nextStepsTitle: "Next steps — depending on your situation",
        aboutTitle: "Who is behind this — and why",
        aboutCardEyebrow: "MoldCheck.pt",
        aboutCardTitle: "Who is behind this — and why",
        aboutBody: "MoldCheck.pt is a FAIRBANK Group initiative. FAIRBANK operates InspectOS, an independent property inspection platform in Portugal.\n\nWe do not sell damp treatments. We do not take commissions from remediation companies. When we recommend an inspection or a lab test, it is because we believe you need one — not because we profit from whatever treatment comes next.\n\nAll content on this site is based on peer-reviewed scientific research, including the 2009 WHO guidelines and the IICRC S520 standard. When the science is uncertain, we say so.",
        aboutLink: "Read the full editorial policy →",
        footerNote: "© MoldCheck.pt — A FAIRBANK Group initiative\nInspectOS · PropCheck.pt · Privacy Policy · Editorial Policy · Contact\nThis website does not replace professional medical or technical advice.",
        featuredCards: [
            {
                title: "Portugal has Europe’s second-worst mold problem — and nobody talks about it",
                body: "The founding essay. Why this problem exists, why it is ignored, and what could change.",
                ctaLabel: "Read article →"
            },
            {
                title: "Why bleach doesn’t fix mold",
                body: "Portugal’s most common solution doesn’t work. Here is why — and what actually does.",
                ctaLabel: "Read article →"
            },
            {
                title: "Is your home affecting your health?",
                body: "What the WHO established about mold and respiratory disease — and the symptoms most people do not connect to their housing.",
                ctaLabel: "Read article →"
            },
            {
                title: "Complete guide: assessing mold risk at home",
                body: "A room-by-room inspection guide with a 20-point checklist and a location-to-cause table.",
                ctaLabel: "Read guide →"
            }
        ],
        nextStepCards: [
            {
                title: "Situation 1 — “I have visible mold”",
                body: "Start with the visual assessment guide. Identify the location, extent, and pattern — that information shapes everything that follows.",
                ctaLabel: "Assessment guide →"
            },
            {
                title: "Situation 2 — “I have health symptoms that improve away from home”",
                body: "This is the most important signal to take seriously. Read the health article before taking any other step.",
                ctaLabel: "Health article →"
            },
            {
                title: "Situation 3 — “I’m not sure whether I have mold”",
                body: "Many of the most problematic locations are invisible. The inspection guide shows you where to look — and what the absence of visible mold still does not rule out.",
                ctaLabel: "Start the inspection →"
            },
            {
                title: "Situation 4 — “I need professional help”",
                body: "An independent inspection using a moisture meter and thermal imaging can identify the origin of the problem without selling the treatment that follows.",
                ctaLabel: "Learn about independent inspection →"
            }
        ]
    },
    fr: {
        eyebrow: "Ressource éditoriale indépendante sur les moisissures, l’humidité et la qualité de l’air intérieur",
        description: "Une personne sur quatre au Portugal vit dans un logement affecté par l’humidité ou les moisissures. MoldCheck.pt est la seule ressource indépendante au Portugal dédiée à expliquer ce que cela signifie — pour votre santé, votre logement, et ce que vous pouvez faire ensuite.",
        heroTitle: "Le Portugal a le deuxième pire problème de moisissures en Europe. La plupart des gens ne le savent pas.",
        heroBody: "Une personne sur quatre au Portugal vit dans un logement affecté par l’humidité ou les moisissures. MoldCheck.pt est la seule ressource indépendante au Portugal dédiée à expliquer ce que cela signifie — pour votre santé, votre logement, et ce que vous pouvez faire ensuite.",
        heroPrimaryCtaLabel: "Évaluer mon logement gratuitement",
        heroSecondaryCtaLabel: "Lire le guide d’inspection",
        trustBarText: "Basé sur la recherche scientifique de l’OMS · Indépendant des entreprises de traitement · Sans publicité · Une initiative du FAIRBANK Group",
        problemTitle: "Pourquoi le Portugal a-t-il autant de moisissures ?",
        problemBody: "82 % des bâtiments au Portugal ont été construits avant l’an 2000 — avant toute exigence réelle en matière d’isolation ou d’efficacité énergétique. Porto a une humidité relative moyenne de 77 %. Lisbonne atteint 84 % en hiver.\n\nLe résultat : condensation chronique, ponts thermiques, et murs qui retiennent l’humidité pendant des décennies.\n\nLes moisissures ne sont pas une fatalité. C’est le résultat prévisible de bâtiments qui n’ont jamais été correctement adaptés au climat dans lequel ils se trouvent.",
        problemLink: "En savoir plus sur la vulnérabilité des bâtiments portugais →",
        conflictTitle: "Pourquoi le diagnostic gratuit n’est pas neutre",
        conflictBody: "Les principales entreprises de traitement des moisissures au Portugal proposent des diagnostics gratuits à domicile. C’est une stratégie commerciale efficace : l’entreprise qui diagnostique le problème vend aussi la solution.\n\nIl n’existe au Portugal aucune entité indépendante qui évaluera les moisissures dans votre logement et vous dira ce que vous avez — sans gagner d’argent sur ce qui suit.\n\nMoldCheck.pt est cette alternative. Nous ne vendons pas de traitements. Nous ne percevons pas de commissions. Nous publions ce que dit la science.",
        conflictLink: "Lire notre politique éditoriale →",
        featuredTitle: "Commencez ici",
        featuredDescription: "",
        nextStepsTitle: "Les prochaines étapes — selon votre situation",
        aboutTitle: "Qui est derrière cela — et pourquoi",
        aboutCardEyebrow: "MoldCheck.pt",
        aboutCardTitle: "Qui est derrière cela — et pourquoi",
        aboutBody: "MoldCheck.pt est une initiative du FAIRBANK Group. FAIRBANK exploite InspectOS, une plateforme indépendante d’inspection immobilière au Portugal.\n\nNous ne vendons pas de traitements contre l’humidité. Nous ne percevons pas de commissions de la part d’entreprises de remédiation. Lorsque nous recommandons une inspection ou une analyse en laboratoire, c’est parce que nous pensons que vous en avez besoin — pas parce que nous profitons du traitement qui suit.\n\nTout le contenu de ce site repose sur des recherches scientifiques évaluées par les pairs, notamment les recommandations de l’OMS de 2009 et la norme IICRC S520. Lorsque la science est incertaine, nous le disons.",
        aboutLink: "Lire la politique éditoriale complète →",
        footerNote: "© MoldCheck.pt — Une initiative du FAIRBANK Group\nInspectOS · PropCheck.pt · Politique de confidentialité · Politique éditoriale · Contact\nCe site ne remplace pas un avis médical ou technique professionnel.",
        featuredCards: [
            {
                title: "Le Portugal a le 2e pire problème de moisissures en Europe — et personne n’en parle",
                body: "L’essai fondateur. Pourquoi ce problème existe, pourquoi il est ignoré, et ce qui pourrait changer.",
                ctaLabel: "Lire l’article →"
            },
            {
                title: "Pourquoi l’eau de Javel ne résout pas les moisissures",
                body: "La solution la plus utilisée au Portugal ne fonctionne pas. Voici pourquoi — et ce qui fonctionne vraiment.",
                ctaLabel: "Lire l’article →"
            },
            {
                title: "Votre logement affecte-t-il votre santé ?",
                body: "Ce que l’OMS a établi sur les moisissures et les maladies respiratoires — et les symptômes que la plupart des gens ne relient pas à leur logement.",
                ctaLabel: "Lire l’article →"
            },
            {
                title: "Guide complet : évaluer le risque de moisissures chez soi",
                body: "Un guide d’inspection pièce par pièce avec une checklist de 20 points.",
                ctaLabel: "Lire le guide →"
            }
        ],
        nextStepCards: [
            {
                title: "Situation 1 — « J’ai des moisissures visibles »",
                body: "Commencez par le guide d’évaluation visuelle. Identifiez l’emplacement, l’étendue et le motif — ces informations déterminent tout ce qui suit.",
                ctaLabel: "Guide d’évaluation →"
            },
            {
                title: "Situation 2 — « J’ai des symptômes qui s’améliorent quand je quitte mon logement »",
                body: "C’est le signal le plus important à prendre au sérieux. Lisez d’abord l’article sur la santé et les moisissures.",
                ctaLabel: "Article santé →"
            },
            {
                title: "Situation 3 — « Je ne sais pas si j’ai des moisissures »",
                body: "Beaucoup des zones les plus problématiques sont invisibles. Le guide d’inspection vous dit où regarder — et ce que l’absence de moisissures visibles n’exclut toujours pas.",
                ctaLabel: "Commencer l’inspection →"
            },
            {
                title: "Situation 4 — « J’ai besoin d’une aide professionnelle »",
                body: "Une inspection indépendante avec humidimètre et caméra thermique permet d’identifier l’origine du problème sans vous vendre ensuite le traitement.",
                ctaLabel: "En savoir plus sur l’inspection indépendante →"
            }
        ]
    },
    de: {
        eyebrow: "Unabhängige redaktionelle Quelle zu Schimmel, Feuchtigkeit und Innenraumluftqualität",
        description: "Jede vierte Person in Portugal lebt in Wohnraum, der von Feuchtigkeit oder Schimmel betroffen ist. MoldCheck.pt ist Portugals einzige unabhängige Quelle, die erklärt, was das bedeutet — für Ihre Gesundheit, Ihre Wohnung und was Sie als Nächstes tun können.",
        heroTitle: "Portugal hat Europas zweitschlimmstes Schimmelproblem. Die meisten Menschen wissen das nicht.",
        heroBody: "Jede vierte Person in Portugal lebt in Wohnraum, der von Feuchtigkeit oder Schimmel betroffen ist. MoldCheck.pt ist Portugals einzige unabhängige Quelle, die erklärt, was das bedeutet — für Ihre Gesundheit, Ihre Wohnung und was Sie als Nächstes tun können.",
        heroPrimaryCtaLabel: "Meine Wohnung kostenlos beurteilen",
        heroSecondaryCtaLabel: "Den Inspektionsleitfaden lesen",
        trustBarText: "Basierend auf WHO-Forschung · Unabhängig von Behandlungsunternehmen · Keine Werbung · Eine Initiative der FAIRBANK Group",
        problemTitle: "Warum hat Portugal so viel Schimmel?",
        problemBody: "82 % der Gebäude in Portugal wurden vor dem Jahr 2000 gebaut — bevor es nennenswerte Anforderungen an Dämmung oder Energieeffizienz gab. Porto hat eine durchschnittliche relative Luftfeuchtigkeit von 77 %. Lissabon erreicht im Winter 84 %.\n\nDas Ergebnis: chronische Kondensation, Wärmebrücken und Wände, die über Jahrzehnte Feuchtigkeit speichern.\n\nSchimmel ist kein Pech. Er ist das vorhersehbare Ergebnis von Gebäuden, die nie richtig für das Klima ausgelegt wurden, in dem sie stehen.",
        problemLink: "Mehr über die Anfälligkeit portugiesischer Gebäude erfahren →",
        conflictTitle: "Warum die kostenlose Diagnose nicht neutral ist",
        conflictBody: "Portugals große Unternehmen für Schimmelbehandlung bieten kostenlose Hausdiagnosen an. Das ist eine kluge Geschäftsstrategie: Das Unternehmen, das das Problem diagnostiziert, verkauft auch die Lösung.\n\nEs gibt in Portugal keine unabhängige Stelle, die den Schimmel in Ihrer Wohnung bewertet und Ihnen sagt, was Sie haben — ohne an dem zu verdienen, was danach kommt.\n\nMoldCheck.pt ist diese Alternative. Wir verkaufen keine Behandlungen. Wir nehmen keine Provisionen. Wir veröffentlichen, was die Wissenschaft sagt.",
        conflictLink: "Unsere Redaktionsrichtlinie lesen →",
        featuredTitle: "Beginnen Sie hier",
        featuredDescription: "",
        nextStepsTitle: "Die nächsten Schritte — je nach Ihrer Situation",
        aboutTitle: "Wer dahintersteht — und warum",
        aboutCardEyebrow: "MoldCheck.pt",
        aboutCardTitle: "Wer dahintersteht — und warum",
        aboutBody: "MoldCheck.pt ist eine Initiative der FAIRBANK Group. FAIRBANK betreibt InspectOS, eine unabhängige Plattform für Immobilieninspektionen in Portugal.\n\nWir verkaufen keine Feuchtigkeitsbehandlungen. Wir erhalten keine Provisionen von Sanierungsunternehmen. Wenn wir eine Inspektion oder Laboranalyse empfehlen, dann weil wir glauben, dass Sie sie brauchen — nicht weil wir an der anschließenden Behandlung verdienen.\n\nAlle Inhalte auf dieser Website basieren auf begutachteter wissenschaftlicher Forschung, einschließlich der WHO-Leitlinien von 2009 und des IICRC-S520-Standards. Wenn die Wissenschaft unsicher ist, sagen wir das offen.",
        aboutLink: "Die vollständige Redaktionsrichtlinie lesen →",
        footerNote: "© MoldCheck.pt — Eine Initiative der FAIRBANK Group\nInspectOS · PropCheck.pt · Datenschutzerklärung · Redaktionsrichtlinie · Kontakt\nDiese Website ersetzt keine professionelle medizinische oder technische Beratung.",
        featuredCards: [
            {
                title: "Portugal hat Europas zweitschlimmstes Schimmelproblem — und niemand spricht darüber",
                body: "Der Gründungsessay. Warum dieses Problem besteht, warum es ignoriert wird und was sich ändern könnte.",
                ctaLabel: "Artikel lesen →"
            },
            {
                title: "Warum Bleichmittel Schimmel nicht beseitigt",
                body: "Die am häufigsten genutzte Lösung in Portugal funktioniert nicht. Hier ist der Grund — und was tatsächlich hilft.",
                ctaLabel: "Artikel lesen →"
            },
            {
                title: "Beeinflusst Ihre Wohnung Ihre Gesundheit?",
                body: "Was die WHO über Schimmel und Atemwegserkrankungen festgestellt hat — und welche Symptome die meisten Menschen nicht mit ihrer Wohnung verbinden.",
                ctaLabel: "Artikel lesen →"
            },
            {
                title: "Vollständiger Leitfaden zur Einschätzung des Schimmelrisikos zu Hause",
                body: "Ein Raum-für-Raum-Inspektionsleitfaden mit einer 20-Punkte-Checkliste.",
                ctaLabel: "Leitfaden lesen →"
            }
        ],
        nextStepCards: [
            {
                title: "Situation 1 — „Ich habe sichtbaren Schimmel“",
                body: "Beginnen Sie mit dem Leitfaden zur visuellen Einschätzung. Ort, Ausmaß und Muster bestimmen, was als Nächstes zu tun ist.",
                ctaLabel: "Bewertungsleitfaden →"
            },
            {
                title: "Situation 2 — „Ich habe gesundheitliche Symptome, die außerhalb der Wohnung besser werden“",
                body: "Das ist das wichtigste Warnsignal. Lesen Sie zuerst den Gesundheitsartikel.",
                ctaLabel: "Gesundheitsartikel →"
            },
            {
                title: "Situation 3 — „Ich weiß nicht, ob ich Schimmel habe“",
                body: "Viele der problematischsten Stellen sind unsichtbar. Der Inspektionsleitfaden zeigt Ihnen, wo Sie suchen müssen — und was das Fehlen von sichtbarem Schimmel dennoch nicht ausschließt.",
                ctaLabel: "Inspektion starten →"
            },
            {
                title: "Situation 4 — „Ich brauche professionelle Hilfe“",
                body: "Eine unabhängige Inspektion mit Feuchtigkeitsmesser und Wärmebildkamera kann die Ursache des Problems ermitteln, ohne Ihnen anschließend eine Behandlung zu verkaufen.",
                ctaLabel: "Mehr über unabhängige Inspektion →"
            }
        ]
    },
    nl: {
        eyebrow: "Onafhankelijke redactionele bron over schimmel, vocht en binnenluchtkwaliteit",
        description: "Eén op de vier mensen in Portugal woont in een huis met vocht- of schimmelproblemen. MoldCheck.pt is de enige onafhankelijke bron in Portugal die uitlegt wat dat betekent — voor je gezondheid, je woning en wat je daarna kunt doen.",
        heroTitle: "Portugal heeft het op één na ergste schimmelprobleem van Europa. De meeste mensen weten dat niet.",
        heroBody: "Eén op de vier mensen in Portugal woont in een huis met vocht- of schimmelproblemen. MoldCheck.pt is de enige onafhankelijke bron in Portugal die uitlegt wat dat betekent — voor je gezondheid, je woning en wat je daarna kunt doen.",
        heroPrimaryCtaLabel: "Mijn woning gratis beoordelen",
        heroSecondaryCtaLabel: "De inspectiegids lezen",
        trustBarText: "Gebaseerd op WHO-wetenschappelijk onderzoek · Onafhankelijk van behandelingsbedrijven · Geen reclame · Een initiatief van de FAIRBANK Group",
        problemTitle: "Waarom heeft Portugal zoveel schimmel?",
        problemBody: "82% van de gebouwen in Portugal is gebouwd vóór het jaar 2000 — vóór er betekenisvolle eisen bestonden voor isolatie of energie-efficiëntie. Porto heeft een gemiddelde relatieve luchtvochtigheid van 77%. Lissabon bereikt in de winter 84%.\n\nHet resultaat: chronische condensatie, koudebruggen en muren die tientallen jaren vocht vasthouden.\n\nSchimmel is geen pech. Het is het voorspelbare gevolg van gebouwen die nooit goed zijn aangepast aan het klimaat waarin ze bestaan.",
        problemLink: "Meer over de kwetsbaarheid van Portugese gebouwen →",
        conflictTitle: "Waarom een gratis diagnose niet neutraal is",
        conflictBody: "De grote schimmelbehandelingsbedrijven in Portugal bieden gratis huisdiagnoses aan. Dat is een slimme commerciële strategie: het bedrijf dat het probleem diagnosticeert, verkoopt ook de oplossing.\n\nEr bestaat in Portugal geen onafhankelijke partij die de schimmel in jouw woning beoordeelt en je vertelt wat er aan de hand is — zonder geld te verdienen aan wat daarna komt.\n\nMoldCheck.pt is dat alternatief. We verkopen geen behandelingen. We ontvangen geen commissies. We publiceren wat de wetenschap zegt.",
        conflictLink: "Lees ons redactioneel beleid →",
        featuredTitle: "Begin hier",
        featuredDescription: "",
        nextStepsTitle: "Volgende stappen — afhankelijk van jouw situatie",
        aboutTitle: "Wie hierachter zit — en waarom",
        aboutCardEyebrow: "MoldCheck.pt",
        aboutCardTitle: "Wie hierachter zit — en waarom",
        aboutBody: "MoldCheck.pt is een initiatief van de FAIRBANK Group. FAIRBANK beheert InspectOS, een onafhankelijk vastgoedinspectieplatform in Portugal.\n\nWe verkopen geen vochtbehandelingen. We ontvangen geen commissies van saneringsbedrijven. Als we een inspectie of laboratoriumanalyse aanbevelen, is dat omdat we denken dat je die nodig hebt — niet omdat we verdienen aan de behandeling die daarop volgt.\n\nAlle inhoud op deze site is gebaseerd op peer-reviewed wetenschappelijk onderzoek, waaronder de WHO-richtlijnen uit 2009 en de IICRC S520-standaard. Wanneer de wetenschap onzeker is, zeggen we dat ook.",
        aboutLink: "Lees het volledige redactioneel beleid →",
        footerNote: "© MoldCheck.pt — Een initiatief van de FAIRBANK Group\nInspectOS · PropCheck.pt · Privacybeleid · Redactioneel beleid · Contact\nDeze website vervangt geen professioneel medisch of technisch advies.",
        featuredCards: [
            {
                title: "Portugal heeft het op één na ergste schimmelprobleem van Europa — en niemand heeft het erover",
                body: "Het oprichtingsessay. Waarom dit probleem bestaat, waarom het wordt genegeerd en wat er kan veranderen.",
                ctaLabel: "Artikel lezen →"
            },
            {
                title: "Waarom bleekwater schimmel niet oplost",
                body: "De meest gebruikte oplossing in Portugal werkt niet. Dit is waarom — en wat wél werkt.",
                ctaLabel: "Artikel lezen →"
            },
            {
                title: "Heeft jouw woning invloed op je gezondheid?",
                body: "Wat de WHO heeft vastgesteld over schimmel en luchtwegaandoeningen — en de symptomen die de meeste mensen niet met hun woning verbinden.",
                ctaLabel: "Artikel lezen →"
            },
            {
                title: "Volledige gids: schimmelrisico in huis beoordelen",
                body: "Een kamer-voor-kamer inspectiegids met een checklist van 20 punten.",
                ctaLabel: "Gids lezen →"
            }
        ],
        nextStepCards: [
            {
                title: "Situatie 1 — “Ik heb zichtbare schimmel”",
                body: "Begin met de visuele beoordelingsgids. Bepaal de locatie, omvang en het patroon — die informatie bepaalt alles wat daarna komt.",
                ctaLabel: "Beoordelingsgids →"
            },
            {
                title: "Situatie 2 — “Mijn gezondheidsklachten verbeteren buitenshuis”",
                body: "Dit is het belangrijkste signaal om serieus te nemen. Lees eerst het gezondheidsartikel.",
                ctaLabel: "Gezondheidsartikel →"
            },
            {
                title: "Situatie 3 — “Ik weet niet of ik schimmel heb”",
                body: "Veel van de meest problematische plekken zijn onzichtbaar. De inspectiegids laat zien waar je moet kijken — en wat de afwezigheid van zichtbare schimmel nog steeds niet uitsluit.",
                ctaLabel: "Inspectie starten →"
            },
            {
                title: "Situatie 4 — “Ik heb professionele hulp nodig”",
                body: "Een onafhankelijke inspectie met een vochtmeter en warmtebeeldcamera kan de oorzaak van het probleem vaststellen zonder de behandeling die daarna volgt aan je te verkopen.",
                ctaLabel: "Meer over onafhankelijke inspectie →"
            }
        ]
    },
    it: {
        eyebrow: "Risorsa editoriale indipendente su muffa, umidità e qualità dell’aria interna",
        description: "Una persona su quattro in Portogallo vive in una casa colpita da umidità o muffa. MoldCheck.pt è l’unica risorsa indipendente in Portogallo dedicata a spiegare che cosa significa questo — per la tua salute, per la tua casa e per ciò che puoi fare dopo.",
        heroTitle: "Il Portogallo ha il secondo peggior problema di muffa in Europa. La maggior parte delle persone che ci vivono non lo sa.",
        heroBody: "Una persona su quattro in Portogallo vive in una casa colpita da umidità o muffa. MoldCheck.pt è l’unica risorsa indipendente in Portogallo dedicata a spiegare che cosa significa questo — per la tua salute, per la tua casa e per ciò che puoi fare dopo.",
        heroPrimaryCtaLabel: "Valuta gratuitamente la mia casa",
        heroSecondaryCtaLabel: "Leggi la guida all’ispezione",
        trustBarText: "Basato sulla ricerca scientifica dell’OMS · Indipendente dalle aziende di trattamento · Nessuna pubblicità · Un’iniziativa del FAIRBANK Group",
        problemTitle: "Perché in Portogallo c’è così tanta muffa?",
        problemBody: "L’82% degli edifici in Portogallo è stato costruito prima dell’anno 2000 — prima di qualsiasi requisito significativo in materia di isolamento o efficienza energetica. Porto ha un’umidità relativa media del 77%. Lisbona, in inverno, raggiunge l’84%.\n\nIl risultato: condensa cronica, ponti termici e pareti che trattengono l’umidità per decenni.\n\nLa muffa non è sfortuna. È il risultato prevedibile di edifici che non sono mai stati attrezzati per il clima in cui si trovano.",
        problemLink: "Scopri di più sul perché gli edifici portoghesi sono vulnerabili →",
        conflictTitle: "Perché una diagnosi gratuita non è neutrale",
        conflictBody: "Le principali aziende di trattamento della muffa in Portogallo offrono diagnosi gratuite a domicilio. È una strategia commerciale intelligente: l’azienda che diagnostica il problema è anche quella che vende la soluzione.\n\nIn Portogallo non esiste alcuna entità indipendente che valuti la muffa nella tua casa e ti dica che cosa hai — senza guadagnare da ciò che viene dopo.\n\nMoldCheck.pt è quell’alternativa. Non vendiamo trattamenti. Non riceviamo commissioni. Pubblichiamo ciò che dice la scienza.",
        conflictLink: "Leggi la nostra politica editoriale →",
        featuredTitle: "Inizia da qui",
        featuredDescription: "",
        nextStepsTitle: "I prossimi passi — in base alla tua situazione",
        aboutTitle: "Chi c’è dietro tutto questo — e perché",
        aboutCardEyebrow: "MoldCheck.pt",
        aboutCardTitle: "Chi c’è dietro tutto questo — e perché",
        aboutBody: "MoldCheck.pt è un’iniziativa del FAIRBANK Group. FAIRBANK gestisce InspectOS, una piattaforma indipendente di ispezione immobiliare in Portogallo.\n\nNon vendiamo trattamenti contro l’umidità. Non riceviamo commissioni da aziende di risanamento. Quando consigliamo un’ispezione o un’analisi di laboratorio, è perché riteniamo che tu ne abbia bisogno — non perché guadagniamo dal trattamento che segue.\n\nTutti i contenuti di questo sito si basano su ricerca scientifica peer-reviewed, comprese le linee guida OMS del 2009 e lo standard IICRC S520. Quando la scienza è incerta, lo diciamo chiaramente.",
        aboutLink: "Leggi la politica editoriale completa →",
        footerNote: "© MoldCheck.pt — Un’iniziativa del FAIRBANK Group\nInspectOS · PropCheck.pt · Informativa sulla Privacy · Politica Editoriale · Contatti\nQuesto sito non sostituisce un parere medico o tecnico professionale.",
        featuredCards: [
            {
                title: "Il Portogallo ha il 2º peggior problema di muffa in Europa — e nessuno ne parla",
                body: "Il saggio fondativo di MoldCheck.pt. Perché questo problema esiste, perché viene ignorato e che cosa può cambiare.",
                ctaLabel: "Leggi l’articolo →"
            },
            {
                title: "Perché la candeggina non risolve la muffa",
                body: "La soluzione più usata in Portogallo non funziona. Ecco perché — e che cosa funziona davvero.",
                ctaLabel: "Leggi l’articolo →"
            },
            {
                title: "La tua casa sta influenzando la tua salute?",
                body: "Che cosa ha stabilito l’OMS sulla muffa e sulle malattie respiratorie — e quali sintomi la maggior parte delle persone non collega alla propria abitazione.",
                ctaLabel: "Leggi l’articolo →"
            },
            {
                title: "Come valutare il rischio di muffa nella tua casa",
                body: "Guida d’ispezione stanza per stanza con checklist di 20 punti e tabella diagnostica posizione → causa.",
                ctaLabel: "Leggi la guida →"
            }
        ],
        nextStepCards: [
            {
                title: "Situazione 1 — “Ho muffa visibile”",
                body: "Inizia dalla guida di valutazione visiva. Identifica posizione, estensione e schema del problema — queste informazioni determinano tutto ciò che viene dopo.",
                ctaLabel: "Guida di valutazione →"
            },
            {
                title: "Situazione 2 — “Ho sintomi di salute che migliorano quando sono fuori casa”",
                body: "Questo è il segnale più importante da prendere sul serio. Leggi l’articolo su salute e muffa prima di qualsiasi altra azione.",
                ctaLabel: "Articolo sulla salute →"
            },
            {
                title: "Situazione 3 — “Non so se ho muffa”",
                body: "Molti dei punti più problematici sono invisibili. La guida all’ispezione ti dice dove guardare — e che cosa l’assenza di muffa visibile non esclude ancora.",
                ctaLabel: "Inizia l’ispezione →"
            },
            {
                title: "Situazione 4 — “Ho bisogno di aiuto professionale”",
                body: "Un’ispezione indipendente con igrometro e termocamera individua l’origine del problema senza venderti il trattamento successivo.",
                ctaLabel: "Scopri di più sull’ispezione indipendente →"
            }
        ]
    },
    es: {
        eyebrow: "Recurso editorial independiente sobre moho, humedad y calidad del aire interior",
        description: "Una de cada cuatro personas en Portugal vive en una vivienda afectada por humedad o moho. MoldCheck.pt es el único recurso independiente en Portugal dedicado a explicar qué significa eso — para tu salud, para tu vivienda y para lo que puedes hacer después.",
        heroTitle: "Portugal tiene el segundo peor problema de moho de Europa. La mayoría de la gente que vive aquí no lo sabe.",
        heroBody: "Una de cada cuatro personas en Portugal vive en una vivienda afectada por humedad o moho. MoldCheck.pt es el único recurso independiente en Portugal dedicado a explicar qué significa eso — para tu salud, para tu vivienda y para lo que puedes hacer después.",
        heroPrimaryCtaLabel: "Evalúa mi vivienda gratis",
        heroSecondaryCtaLabel: "Leer la guía de inspección",
        trustBarText: "Basado en investigación científica de la OMS · Independiente de empresas de tratamiento · Sin publicidad · Una iniciativa del FAIRBANK Group",
        problemTitle: "¿Por qué hay tanto moho en Portugal?",
        problemBody: "El 82% de los edificios en Portugal se construyó antes del año 2000 — antes de cualquier requisito significativo de aislamiento o eficiencia energética. Oporto tiene una humedad relativa media del 77%. Lisboa, en invierno, alcanza el 84%.\n\nEl resultado: condensación crónica, puentes térmicos y paredes que retienen humedad durante décadas.\n\nEl moho no es mala suerte. Es el resultado previsible de edificios que nunca fueron preparados para el clima en el que existen.",
        problemLink: "Descubre por qué los edificios portugueses son tan vulnerables →",
        conflictTitle: "Por qué un diagnóstico gratuito no es neutral",
        conflictBody: "Las principales empresas de tratamiento de moho en Portugal ofrecen diagnósticos gratuitos en la vivienda. Es una estrategia comercial inteligente: la empresa que diagnostica el problema también vende la solución.\n\nNo existe en Portugal ninguna entidad independiente que evalúe el moho de tu vivienda y te diga qué tienes — sin ganar dinero con lo que viene después.\n\nMoldCheck.pt es esa alternativa. No vendemos tratamientos. No cobramos comisiones. Publicamos lo que dice la ciencia.",
        conflictLink: "Leer nuestra política editorial →",
        featuredTitle: "Empieza aquí",
        featuredDescription: "",
        nextStepsTitle: "Siguientes pasos — según tu situación",
        aboutTitle: "Quién está detrás de esto — y por qué",
        aboutCardEyebrow: "MoldCheck.pt",
        aboutCardTitle: "Quién está detrás de esto — y por qué",
        aboutBody: "MoldCheck.pt es una iniciativa del FAIRBANK Group. FAIRBANK gestiona InspectOS, una plataforma independiente de inspección inmobiliaria en Portugal.\n\nNo vendemos tratamientos contra la humedad. No cobramos comisiones de empresas de remediación. Cuando recomendamos una inspección o un análisis de laboratorio, es porque creemos que lo necesitas — no porque ganemos dinero con el tratamiento posterior.\n\nTodo el contenido de este sitio se basa en investigación científica revisada por pares, incluidas las directrices de la OMS de 2009 y el estándar IICRC S520. Cuando la ciencia es incierta, lo decimos claramente.",
        aboutLink: "Leer la política editorial completa →",
        footerNote: "© MoldCheck.pt — Una iniciativa del FAIRBANK Group\nInspectOS · PropCheck.pt · Política de Privacidad · Política Editorial · Contacto\nEste sitio web no sustituye el asesoramiento médico o técnico profesional.",
        featuredCards: [
            {
                title: "Portugal tiene el segundo peor problema de moho de Europa — y nadie habla de ello",
                body: "El ensayo fundacional de MoldCheck.pt. Por qué existe este problema, por qué se ignora y qué puede cambiar.",
                ctaLabel: "Leer artículo →"
            },
            {
                title: "Por qué la lejía no resuelve el moho",
                body: "La solución más utilizada en Portugal no funciona. Aquí está el porqué — y lo que realmente funciona.",
                ctaLabel: "Leer artículo →"
            },
            {
                title: "¿Tu vivienda está afectando a tu salud?",
                body: "Lo que la OMS estableció sobre moho y enfermedades respiratorias — y los síntomas que la mayoría de la gente no relaciona con su vivienda.",
                ctaLabel: "Leer artículo →"
            },
            {
                title: "Cómo evaluar el riesgo de moho en tu vivienda",
                body: "Guía de inspección habitación por habitación con checklist de 20 puntos y tabla diagnóstica ubicación → causa.",
                ctaLabel: "Leer guía →"
            }
        ],
        nextStepCards: [
            {
                title: "Situación 1 — “Tengo moho visible”",
                body: "Empieza por la guía de evaluación visual. Identifica la ubicación, la extensión y el patrón — esa información determina todo lo que viene después.",
                ctaLabel: "Guía de evaluación →"
            },
            {
                title: "Situación 2 — “Tengo síntomas de salud que mejoran fuera de casa”",
                body: "Esta es la señal más importante que debes tomarte en serio. Lee el artículo sobre salud y moho antes de cualquier otra acción.",
                ctaLabel: "Artículo sobre salud →"
            },
            {
                title: "Situación 3 — “No sé si tengo moho”",
                body: "Muchas de las zonas más problemáticas son invisibles. La guía de inspección te dice dónde mirar — y qué cosas sigue sin descartar la ausencia de moho visible.",
                ctaLabel: "Empezar la inspección →"
            },
            {
                title: "Situación 4 — “Necesito ayuda profesional”",
                body: "Una inspección independiente con higrómetro y cámara termográfica identifica el origen del problema sin venderte el tratamiento que viene después.",
                ctaLabel: "Saber más sobre la inspección independiente →"
            }
        ]
    }
};
function getProblemEyebrow(locale) {
    const labels = {
        pt: "O problema",
        en: "The problem",
        fr: "Le problème",
        de: "Das Problem",
        nl: "Het probleem",
        it: "Il problema",
        es: "El problema"
    };
    return labels[locale];
}
function getConflictEyebrow(locale) {
    const labels = {
        pt: "O conflito de interesse",
        en: "The conflict of interest",
        fr: "Le conflit d’intérêts",
        de: "Der Interessenkonflikt",
        nl: "Het belangenconflict",
        it: "Il conflitto di interessi",
        es: "El conflicto de interés"
    };
    return labels[locale];
}
function getArticleHref(locale, section) {
    const articleKey = section === "remediation" ? "bleach" : section === "inspection" ? "inspection-guide" : section;
    const slug = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$foundationalArticles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["foundationalArticles"].find((article)=>article.key === articleKey)?.slugs[locale];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSectionPath"])(locale, section, slug);
}
function buildHomeSections(locale, content) {
    const aboutHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlobalPath"])(locale, "about");
    const servicesHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlobalPath"])(locale, "services");
    const articleHrefs = {
        portugal: getArticleHref(locale, "portugal"),
        remediation: getArticleHref(locale, "remediation"),
        health: getArticleHref(locale, "health"),
        inspection: getArticleHref(locale, "inspection")
    };
    const sections = [
        {
            eyebrow: getProblemEyebrow(locale),
            title: content.problemTitle,
            layout: "grid",
            cards: [
                {
                    title: content.problemTitle,
                    body: content.problemBody,
                    tone: "featured",
                    ctaLabel: content.problemLink,
                    ctaHref: articleHrefs.portugal
                }
            ]
        },
        {
            eyebrow: getConflictEyebrow(locale),
            title: content.conflictTitle,
            layout: "grid",
            cards: [
                {
                    title: content.conflictTitle,
                    body: content.conflictBody,
                    tone: "warning",
                    ctaLabel: content.conflictLink,
                    ctaHref: aboutHref
                }
            ]
        },
        {
            title: content.featuredTitle,
            description: content.featuredDescription,
            layout: "utility",
            cards: content.featuredCards.map((card, index)=>({
                    title: card.title,
                    body: card.body,
                    ctaLabel: card.ctaLabel,
                    ctaHref: [
                        articleHrefs.portugal,
                        articleHrefs.remediation,
                        articleHrefs.health,
                        articleHrefs.inspection
                    ][index]
                }))
        },
        {
            title: content.nextStepsTitle,
            layout: "utility",
            cards: content.nextStepCards.map((card, index)=>({
                    title: card.title,
                    body: card.body,
                    ctaLabel: card.ctaLabel,
                    ctaHref: [
                        articleHrefs.inspection,
                        articleHrefs.health,
                        articleHrefs.inspection,
                        servicesHref
                    ][index]
                }))
        },
        {
            title: content.aboutTitle,
            layout: "grid",
            cards: [
                {
                    eyebrow: content.aboutCardEyebrow,
                    title: content.aboutCardTitle,
                    body: content.aboutBody,
                    tone: "featured",
                    ctaLabel: content.aboutLink,
                    ctaHref: aboutHref
                }
            ]
        }
    ];
    if (content.faqTitle && content.faqCards?.length) {
        sections.push({
            title: content.faqTitle,
            layout: "utility",
            cards: content.faqCards.map((card)=>({
                    title: card.title,
                    body: card.body
                }))
        });
    }
    return sections;
}
function getHomeFallbackContent(locale) {
    const content = homeContentByLocale[locale] ?? homeContentByLocale.pt;
    return {
        pageKey: "home",
        language: locale,
        translationGroup: "home",
        title: "MoldCheck.pt",
        eyebrow: content.eyebrow,
        description: content.description,
        heroTitle: content.heroTitle,
        heroBody: content.heroBody,
        heroPrimaryCtaLabel: content.heroPrimaryCtaLabel,
        heroPrimaryCtaHref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlobalPath"])(locale, "tools"),
        heroSecondaryCtaLabel: content.heroSecondaryCtaLabel,
        heroSecondaryCtaHref: getArticleHref(locale, "inspection"),
        trustBarText: content.trustBarText,
        seoTitle: locale === "pt" ? "MoldCheck — Informação Independente sobre Bolor em Portugal" : "MoldCheck.pt",
        seoDescription: locale === "pt" ? "Portugal tem o 2.º pior problema de bolor da Europa. Informação científica independente sobre diagnóstico, saúde e remediação — sem vender tratamentos." : content.description,
        sections: buildHomeSections(locale, content),
        footerNote: content.footerNote
    };
}
}),
"[project]/src/features/content/data/privacyContent.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPrivacyFallbackContent",
    ()=>getPrivacyFallbackContent
]);
function paragraphBlock(text, key) {
    return {
        _type: "block",
        _key: key,
        style: "normal",
        children: [
            {
                _type: "span",
                _key: `${key}-span`,
                text
            }
        ]
    };
}
function buildSections(content) {
    return [
        {
            title: content.whatDataTitle,
            tone: "band",
            layout: "utility",
            cards: [
                {
                    eyebrow: "2.1",
                    title: content.directDataTitle,
                    body: content.directDataBody
                },
                {
                    eyebrow: "2.2",
                    title: content.automaticDataTitle,
                    body: content.automaticDataBody
                }
            ]
        },
        {
            title: content.sharingTitle,
            layout: "utility",
            cards: [
                {
                    title: content.sharingTitle,
                    body: content.sharingBody
                }
            ]
        },
        {
            title: content.transfersTitle,
            layout: "utility",
            cards: [
                {
                    title: content.transfersTitle,
                    body: content.transfersBody
                }
            ]
        },
        {
            title: content.rightsTitle,
            layout: "utility",
            cards: [
                {
                    title: content.rightsTitle,
                    body: content.rightsBody
                }
            ]
        },
        {
            title: content.complaintTitle,
            layout: "utility",
            cards: [
                {
                    title: content.complaintTitle,
                    body: content.complaintBody
                }
            ]
        },
        {
            title: content.securityTitle,
            layout: "utility",
            cards: [
                {
                    title: content.securityTitle,
                    body: content.securityBody
                }
            ]
        },
        {
            title: content.childrenTitle,
            layout: "utility",
            cards: [
                {
                    title: content.childrenTitle,
                    body: content.childrenBody
                }
            ]
        },
        {
            title: content.linksTitle,
            layout: "utility",
            cards: [
                {
                    title: content.linksTitle,
                    body: content.linksBody
                }
            ]
        },
        {
            title: content.changesTitle,
            layout: "utility",
            cards: [
                {
                    title: content.changesTitle,
                    body: content.changesBody
                }
            ]
        },
        {
            title: content.contactTitle,
            layout: "utility",
            cards: [
                {
                    title: content.contactTitle,
                    body: content.contactBody
                }
            ]
        }
    ];
}
const privacyContentByLocale = {
    pt: {
        title: "Política de Privacidade",
        eyebrow: "Privacidade e protecção de dados",
        description: "Política de privacidade do MoldCheck.pt, enquadrada pelo RGPD, Lei 58/2019 e Lei 41/2004, com informação clara sobre contactos, pagamentos, newsletter, downloads gratuitos e cookies necessários.",
        lastUpdated: "Última actualização: 10 de março de 2026",
        whoWeAreTitle: "1. Quem somos",
        whoWeAreBody: "O MoldCheck.pt é gerido pelo FAIRBANK Group (designado nesta política como “nós”, “nos” ou “o responsável pelo tratamento”).\n\nResponsável pelo tratamento de dados:\nFAIRBANK Group, Lda.\n[Morada registada]\nLisboa, Portugal\nNIF: [número]\nContacto: info@moldcheck.pt\n\nO MoldCheck.pt é um website editorial independente dedicado a temas de humidade, bolor e qualidade do ar interior. O site pode também disponibilizar fluxos de marcação ou pagamento para inspecções, análises laboratoriais ou recursos digitais através de prestadores de pagamento terceiros, como a Stripe. Não recolhemos dados de saúde de forma activa.",
        whatDataTitle: "2. Que dados recolhemos",
        directDataTitle: "Dados que nos fornece directamente",
        directDataBody: "Formulário de contacto ou contacto por email:\n— Endereço de e-mail\n— Nome (opcional)\n— Conteúdo da mensagem\n\nFinalidade: responder à sua mensagem.\nBase jurídica: consentimento (artigo 6.º, n.º 1, alínea a) do RGPD).\nConservação: 12 meses após a última comunicação, salvo obrigação legal de conservação mais longa.\n\nSubscrição de newsletter:\n— Endereço de e-mail\n— Idioma preferido\n— Data de subscrição\n\nFinalidade: envio de actualizações editoriais sobre bolor, humidade e qualidade do ar interior em Portugal.\nBase jurídica: consentimento (artigo 6.º, n.º 1, alínea a) do RGPD).\nConservação: até cancelamento da subscrição + 30 dias para processamento técnico.\n\nDownload de conteúdo gratuito (PDF / checklist):\n— Endereço de e-mail\n\nFinalidade: envio do documento solicitado e entrada automática na sequência de emails associada ao recurso descarregado.\nBase jurídica: consentimento e/ou execução de medidas pré-contratuais ou contratuais, conforme aplicável.\n\nCompras, reservas ou pagamentos (se aplicável):\n— Nome\n— Endereço de e-mail\n— Dados necessários para concluir a reserva ou compra\n— Informação transaccional limitada\n\nOs pagamentos são processados por prestadores de pagamento terceiros, como a Stripe. O MoldCheck.pt não armazena os dados completos do cartão de pagamento.",
        automaticDataTitle: "Dados recolhidos automaticamente",
        automaticDataBody: "Análise de tráfego (Plausible Analytics):\nO MoldCheck.pt utiliza o Plausible Analytics, uma ferramenta de análise que não utiliza cookies, não recolhe dados pessoais identificáveis e não cria perfis de utilizador.\n\nOs dados recolhidos podem incluir: páginas visitadas, país aproximado, referenciador (URL de origem) e tipo de dispositivo. Nenhum destes dados é pessoal identificável.\n\nO Plausible não requer consentimento ao abrigo do RGPD ou da Lei n.º 41/2004 porque não processa dados pessoais identificáveis.\n\nCookies necessários:\n— Cookie de preferência de idioma: armazena a língua seleccionada pelo utilizador. Duração: 365 dias. Não requer consentimento.\n— Cookie de sessão: gestão de sessão técnica. Duração: sessão. Não requer consentimento.\n\nNão utilizamos cookies de publicidade, cookies de rastreamento de terceiros, pixels de redes sociais nem ferramentas de análise que recolham dados pessoais sem consentimento.",
        sharingTitle: "3. Partilha de dados com terceiros",
        sharingBody: "Não vendemos, alugamos nem cedemos os seus dados pessoais a terceiros para fins de marketing.\n\nOs seus dados podem ser partilhados com:\n\nPrestadores de serviços técnicos (subcontratantes nos termos do artigo 28.º do RGPD), tais como:\n\nfornecedor de alojamento do website\n\nplataforma de e-mail / newsletter\n\nPlausible Analytics\n\nStripe ou outro prestador de pagamentos\n\noutros fornecedores estritamente necessários para operar reservas, downloads ou formulários\n\nEntidades legais: divulgaremos dados pessoais às autoridades competentes se legalmente obrigados a fazê-lo (artigo 6.º, n.º 1, alínea c) do RGPD).",
        transfersTitle: "4. Transferências internacionais de dados",
        transfersBody: "Os dados pessoais são tratados preferencialmente na União Europeia. Se um prestador de serviços tratar dados fora da UE/EEE, garantimos que exista:\n\numa decisão de adequação da Comissão Europeia, ou\n\nCláusulas Contratuais-Tipo (Standard Contractual Clauses — SCC) aprovadas pela Comissão Europeia.",
        rightsTitle: "5. Os seus direitos",
        rightsBody: "Ao abrigo do RGPD e da Lei n.º 58/2019, tem os seguintes direitos:\n\ndireito de acesso\n\ndireito de rectificação\n\ndireito ao apagamento\n\ndireito à limitação do tratamento\n\ndireito à portabilidade dos dados\n\ndireito de oposição\n\ndireito de retirar o consentimento a qualquer momento\n\nPara exercer qualquer destes direitos: info@moldcheck.pt\n\nResponderemos no prazo de 30 dias. Em casos complexos, este prazo pode ser estendido até 60 dias, sendo o utilizador informado dessa extensão.",
        complaintTitle: "6. Apresentação de reclamação à autoridade de controlo",
        complaintBody: "Se considerar que o tratamento dos seus dados pessoais viola o RGPD, tem o direito de apresentar reclamação à:\n\nCNPD — Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lisboa\nPortugal\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nPode também apresentar reclamação junto da autoridade de controlo do seu país de residência, se aplicável.",
        securityTitle: "7. Segurança",
        securityBody: "Implementamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, divulgação, alteração ou destruição, incluindo transmissão cifrada (HTTPS/TLS), controlo de acesso e backups regulares.\n\nNenhum sistema é absolutamente seguro. Em caso de violação de dados com risco para os titulares, notificaremos a CNPD no prazo legal aplicável e, quando necessário, os titulares afectados sem demora injustificada.",
        childrenTitle: "8. Crianças",
        childrenBody: "Este website não é dirigido a menores de 16 anos. Não recolhemos intencionalmente dados pessoais de menores. Se tomarmos conhecimento de que um menor nos forneceu dados, eliminaremos esses dados logo que razoavelmente possível.",
        linksTitle: "9. Ligações externas",
        linksBody: "Este website contém ligações para websites externos, incluindo InspectOS.pt e PropCheck.pt. Não somos responsáveis pelas práticas de privacidade desses websites. Recomendamos a consulta das respectivas políticas de privacidade.",
        changesTitle: "10. Alterações a esta política",
        changesBody: "Podemos actualizar esta política. A data da última actualização está indicada no topo desta página. Em caso de alterações materiais, publicaremos um aviso visível no website.",
        contactTitle: "11. Contacto",
        contactBody: "Para qualquer questão sobre esta política ou sobre o tratamento dos seus dados: info@moldcheck.pt"
    },
    en: {
        title: "Privacy Policy",
        eyebrow: "Privacy and data protection",
        description: "MoldCheck.pt privacy policy under the GDPR, Portuguese Law 58/2019 and Law 41/2004, covering contact flows, payments, newsletter, gated free downloads and necessary cookies.",
        lastUpdated: "Last updated: 10 March 2026",
        whoWeAreTitle: "1. Who we are",
        whoWeAreBody: "MoldCheck.pt is operated by FAIRBANK Group (referred to in this policy as “we”, “us” or “the data controller”).\n\nData controller:\nFAIRBANK Group, Lda.\n[Registered address]\nLisbon, Portugal\nTax ID (NIF): [number]\nContact: info@moldcheck.pt\n\nMoldCheck.pt is an independent editorial website focused on damp, mold, and indoor air quality. The site may also offer booking or payment flows for inspections, laboratory analysis, or digital resources through third-party payment providers such as Stripe. We do not actively collect health data.",
        whatDataTitle: "2. What data we collect",
        directDataTitle: "Data you provide directly",
        directDataBody: "Contact form or email enquiries:\n— Email address\n— Name (optional)\n— Message content\n\nPurpose: to respond to your message.\nLegal basis: consent (Article 6(1)(a) GDPR).\nRetention: 12 months after the last communication, unless a longer legal retention obligation applies.\n\nNewsletter subscription:\n— Email address\n— Preferred language\n— Subscription date\n\nPurpose: sending editorial updates about mold, damp, and indoor air quality in Portugal.\nLegal basis: consent (Article 6(1)(a) GDPR).\nRetention: until unsubscribe + 30 days for technical processing.\n\nFree content download (PDF / checklist):\n— Email address\n\nPurpose: delivering the requested document and automatically entering the user into the email sequence associated with that downloaded resource.\nLegal basis: consent and/or performance of pre-contractual or contractual steps, as applicable.\n\nPurchases, bookings, or payments (if applicable):\n— Name\n— Email address\n— Data necessary to complete the booking or purchase\n— Limited transaction information\n\nPayments are processed by third-party payment providers such as Stripe. MoldCheck.pt does not store full payment card details.",
        automaticDataTitle: "Automatically collected data",
        automaticDataBody: "Traffic analytics (Plausible Analytics):\nMoldCheck.pt uses Plausible Analytics, an analytics tool that uses no cookies, collects no personally identifiable data, and creates no user profiles.\n\nData collected may include: pages visited, approximate country, referrer URL, and device type. None of this data is personally identifiable.\n\nPlausible does not require consent under the GDPR or Portuguese Law 41/2004 because it does not process personally identifiable data.\n\nNecessary cookies:\n— Language preference cookie: stores the user’s selected language. Duration: 365 days. No consent required.\n— Session cookie: technical session management. Duration: session. No consent required.\n\nWe do not use advertising cookies, third-party tracking cookies, social media pixels, or analytics tools that collect personal data without consent.",
        sharingTitle: "3. Sharing data with third parties",
        sharingBody: "We do not sell, rent, or transfer your personal data to third parties for marketing purposes.\n\nYour data may be shared with:\n\nTechnical service providers (data processors under Article 28 GDPR), such as:\n\nwebsite hosting provider\n\nemail / newsletter platform\n\nPlausible Analytics\n\nStripe or other payment providers\n\nother suppliers strictly necessary to operate bookings, downloads, or forms\n\nLegal authorities: we will disclose personal data to competent authorities if legally required to do so (Article 6(1)(c) GDPR).",
        transfersTitle: "4. International data transfers",
        transfersBody: "Personal data is processed preferably within the European Union. Where a service provider processes data outside the EU/EEA, we ensure that either:\n\na European Commission adequacy decision is in place, or\n\nStandard Contractual Clauses (SCCs) approved by the European Commission are in force.",
        rightsTitle: "5. Your rights",
        rightsBody: "Under the GDPR and Portuguese Law 58/2019, you have the following rights:\n\nright of access\n\nright to rectification\n\nright to erasure\n\nright to restriction of processing\n\nright to data portability\n\nright to object\n\nright to withdraw consent at any time\n\nTo exercise any of these rights: info@moldcheck.pt\n\nWe will respond within 30 days. In complex cases, this may be extended to 60 days, and you will be informed of the extension.",
        complaintTitle: "6. Right to lodge a complaint",
        complaintBody: "If you believe our processing of your personal data violates the GDPR, you have the right to lodge a complaint with:\n\nCNPD — Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lisbon\nPortugal\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nYou may also lodge a complaint with the supervisory authority in your country of residence, where applicable.",
        securityTitle: "7. Security",
        securityBody: "We implement appropriate technical and organisational measures to protect personal data against unauthorised access, disclosure, alteration, or destruction, including encrypted transmission (HTTPS/TLS), access controls, and regular backups.\n\nNo system is absolutely secure. In the event of a data breach posing risk to individuals, we will notify the CNPD within the applicable legal timeframe and, where necessary, affected individuals without undue delay.",
        childrenTitle: "8. Children",
        childrenBody: "This website is not directed at persons under 16 years of age. We do not knowingly collect personal data from minors. If we become aware that a minor has provided us with data, we will delete it as soon as reasonably possible.",
        linksTitle: "9. External links",
        linksBody: "This website contains links to external websites, including InspectOS.pt and PropCheck.pt. We are not responsible for the privacy practices of those websites. Please consult their respective privacy policies.",
        changesTitle: "10. Changes to this policy",
        changesBody: "We may update this policy. The date of the latest update is shown at the top of this page. In the event of material changes, we will publish a visible notice on the website.",
        contactTitle: "11. Contact",
        contactBody: "For any question about this policy or about the processing of your data: info@moldcheck.pt"
    },
    fr: {
        title: "Politique de confidentialité",
        eyebrow: "Confidentialité et protection des données",
        description: "Politique de confidentialité de MoldCheck.pt au regard du RGPD, de la loi portugaise 58/2019 et de la loi 41/2004, couvrant contacts, paiements, newsletter, téléchargements gratuits et cookies nécessaires.",
        lastUpdated: "Dernière mise à jour : 10 mars 2026",
        whoWeAreTitle: "1. Qui nous sommes",
        whoWeAreBody: "MoldCheck.pt est géré par le FAIRBANK Group (désigné dans cette politique comme « nous », « nos » ou « le responsable du traitement »).\n\nResponsable du traitement :\nFAIRBANK Group, Lda.\n[Adresse enregistrée]\nLisbonne, Portugal\nNIF : [numéro]\nContact : info@moldcheck.pt\n\nMoldCheck.pt est un site éditorial indépendant consacré à l’humidité, aux moisissures et à la qualité de l’air intérieur. Le site peut également proposer des réservations ou des paiements pour des inspections, des analyses de laboratoire ou des ressources numériques via des prestataires de paiement tiers tels que Stripe. Nous ne collectons pas activement de données de santé.",
        whatDataTitle: "2. Données que nous collectons",
        directDataTitle: "Données que vous fournissez directement",
        directDataBody: "Formulaire de contact ou demandes par e-mail :\n— Adresse e-mail\n— Nom (facultatif)\n— Contenu du message\n\nFinalité : répondre à votre message.\nBase juridique : consentement (article 6, paragraphe 1, point a) du RGPD).\nConservation : 12 mois après le dernier échange, sauf obligation légale de conservation plus longue.\n\nAbonnement à la newsletter :\n— Adresse e-mail\n— Langue préférée\n— Date d’abonnement\n\nFinalité : envoi de mises à jour éditoriales sur les moisissures, l’humidité et la qualité de l’air intérieur au Portugal.\nBase juridique : consentement (article 6, paragraphe 1, point a) du RGPD).\nConservation : jusqu’à la désinscription + 30 jours pour le traitement technique.\n\nTéléchargement de contenu gratuit (PDF / checklist) :\n— Adresse e-mail\n\nFinalité : envoi du document demandé et inscription automatique de l’utilisateur à la séquence d’e-mails associée à cette ressource téléchargée.\nBase juridique : consentement et/ou exécution de mesures précontractuelles ou contractuelles, selon le cas.\n\nAchats, réservations ou paiements (le cas échéant) :\n— Nom\n— Adresse e-mail\n— Données nécessaires pour finaliser la réservation ou l’achat\n— Informations transactionnelles limitées\n\nLes paiements sont traités par des prestataires de paiement tiers tels que Stripe. MoldCheck.pt ne stocke pas les données complètes de carte bancaire.",
        automaticDataTitle: "Données collectées automatiquement",
        automaticDataBody: "Analyse du trafic (Plausible Analytics) :\nMoldCheck.pt utilise Plausible Analytics, un outil d’analyse qui n’utilise pas de cookies, ne collecte pas de données personnelles identifiables et ne crée pas de profils utilisateurs.\n\nLes données collectées peuvent inclure : pages visitées, pays approximatif, URL de provenance et type d’appareil. Aucune de ces données n’est personnellement identifiable.\n\nPlausible ne nécessite pas de consentement au titre du RGPD ou de la loi portugaise 41/2004, car il ne traite pas de données personnelles identifiables.\n\nCookies nécessaires :\n— Cookie de préférence linguistique : stocke la langue sélectionnée par l’utilisateur. Durée : 365 jours. Aucun consentement requis.\n— Cookie de session : gestion technique de session. Durée : session. Aucun consentement requis.\n\nNous n’utilisons pas de cookies publicitaires, de cookies tiers de suivi, de pixels de réseaux sociaux ou d’outils d’analyse collectant des données personnelles sans consentement.",
        sharingTitle: "3. Partage des données avec des tiers",
        sharingBody: "Nous ne vendons, ne louons ni ne cédons vos données personnelles à des tiers à des fins marketing.\n\nVos données peuvent être partagées avec :\n\nPrestataires de services techniques (sous-traitants au sens de l’article 28 du RGPD), tels que :\n\nhébergeur du site\n\nplateforme e-mail / newsletter\n\nPlausible Analytics\n\nStripe ou autres prestataires de paiement\n\nautres fournisseurs strictement nécessaires au fonctionnement des réservations, téléchargements ou formulaires\n\nAutorités légales : nous divulguerons des données personnelles aux autorités compétentes si la loi nous y oblige (article 6, paragraphe 1, point c) du RGPD).",
        transfersTitle: "4. Transferts internationaux de données",
        transfersBody: "Les données personnelles sont traitées de préférence dans l’Union européenne. Si un prestataire traite des données en dehors de l’UE/EEE, nous veillons à ce qu’il existe :\n\nune décision d’adéquation de la Commission européenne, ou\n\ndes Clauses Contractuelles Types (CCT / SCC) approuvées par la Commission européenne.",
        rightsTitle: "5. Vos droits",
        rightsBody: "Au titre du RGPD et de la loi portugaise 58/2019, vous disposez des droits suivants :\n\ndroit d’accès\n\ndroit de rectification\n\ndroit à l’effacement\n\ndroit à la limitation du traitement\n\ndroit à la portabilité des données\n\ndroit d’opposition\n\ndroit de retirer votre consentement à tout moment\n\nPour exercer l’un de ces droits : info@moldcheck.pt\n\nNous répondrons dans un délai de 30 jours. Dans les cas complexes, ce délai peut être porté à 60 jours, et vous en serez informé.",
        complaintTitle: "6. Réclamation auprès de l’autorité de contrôle",
        complaintBody: "Si vous estimez que le traitement de vos données personnelles viole le RGPD, vous avez le droit d’introduire une réclamation auprès de :\n\nCNPD — Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lisbonne\nPortugal\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nVous pouvez également introduire une réclamation auprès de l’autorité de contrôle de votre pays de résidence, le cas échéant.",
        securityTitle: "7. Sécurité",
        securityBody: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre l’accès non autorisé, la divulgation, l’altération ou la destruction, notamment la transmission chiffrée (HTTPS/TLS), le contrôle d’accès et des sauvegardes régulières.\n\nAucun système n’est absolument sûr. En cas de violation de données présentant un risque pour les personnes concernées, nous notifierons la CNPD dans le délai légal applicable et, si nécessaire, les personnes concernées sans retard injustifié.",
        childrenTitle: "8. Mineurs",
        childrenBody: "Ce site n’est pas destiné aux personnes de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles concernant des mineurs. Si nous apprenons qu’un mineur nous a transmis des données, nous les supprimerons dès que raisonnablement possible.",
        linksTitle: "9. Liens externes",
        linksBody: "Ce site contient des liens vers des sites externes, notamment InspectOS.pt et PropCheck.pt. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites. Veuillez consulter leurs politiques respectives.",
        changesTitle: "10. Modifications de cette politique",
        changesBody: "Nous pouvons mettre à jour cette politique. La date de dernière mise à jour figure en haut de cette page. En cas de modification substantielle, un avis visible sera publié sur le site.",
        contactTitle: "11. Contact",
        contactBody: "Pour toute question relative à cette politique ou au traitement de vos données : info@moldcheck.pt"
    },
    de: {
        title: "Datenschutzerklärung",
        eyebrow: "Datenschutz und rechtliche Transparenz",
        description: "Datenschutzerklärung von MoldCheck.pt nach DSGVO, portugiesischem Gesetz 58/2019 und Gesetz 41/2004, einschließlich Kontakt, Zahlungen, Newsletter, kostenlose Downloads und notwendige Cookies.",
        lastUpdated: "Letzte Aktualisierung: 10. März 2026",
        whoWeAreTitle: "1. Wer wir sind",
        whoWeAreBody: "MoldCheck.pt wird von der FAIRBANK Group betrieben (in dieser Erklärung als „wir“, „uns“ oder „Verantwortlicher“ bezeichnet).\n\nVerantwortlicher:\nFAIRBANK Group, Lda.\n[Eingetragene Adresse]\nLissabon, Portugal\nNIF: [Nummer]\nKontakt: info@moldcheck.pt\n\nMoldCheck.pt ist eine unabhängige redaktionelle Website zu Feuchtigkeit, Schimmel und Innenraumluftqualität. Die Website kann außerdem Buchungs- oder Zahlungsabläufe für Inspektionen, Laboranalysen oder digitale Ressourcen über Drittanbieter wie Stripe anbieten. Wir erheben keine Gesundheitsdaten aktiv.",
        whatDataTitle: "2. Welche Daten wir erheben",
        directDataTitle: "Daten, die Sie direkt bereitstellen",
        directDataBody: "Kontaktformular oder Anfragen per E-Mail:\n— E-Mail-Adresse\n— Name (optional)\n— Inhalt der Nachricht\n\nZweck: Beantwortung Ihrer Nachricht.\nRechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).\nSpeicherung: 12 Monate nach der letzten Kommunikation, sofern keine längere gesetzliche Aufbewahrungspflicht besteht.\n\nNewsletter-Anmeldung:\n— E-Mail-Adresse\n— Bevorzugte Sprache\n— Datum der Anmeldung\n\nZweck: Versand redaktioneller Updates zu Schimmel, Feuchtigkeit und Innenraumluftqualität in Portugal.\nRechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).\nSpeicherung: bis zur Abmeldung + 30 Tage für die technische Verarbeitung.\n\nDownload kostenloser Inhalte (PDF / Checkliste):\n— E-Mail-Adresse\n\nZweck: Übermittlung des angeforderten Dokuments sowie automatische Aufnahme in die mit dieser heruntergeladenen Ressource verbundene E-Mail-Sequenz.\nRechtsgrundlage: Einwilligung und/oder Durchführung vorvertraglicher oder vertraglicher Maßnahmen, je nach Fall.\n\nKäufe, Buchungen oder Zahlungen (sofern zutreffend):\n— Name\n— E-Mail-Adresse\n— Daten, die zur Durchführung der Buchung oder des Kaufs erforderlich sind\n— Begrenzte Transaktionsinformationen\n\nZahlungen werden über Drittanbieter wie Stripe abgewickelt. MoldCheck.pt speichert keine vollständigen Zahlungskartendaten.",
        automaticDataTitle: "Automatisch erhobene Daten",
        automaticDataBody: "Traffic-Analyse (Plausible Analytics):\nMoldCheck.pt verwendet Plausible Analytics, ein Analysewerkzeug, das keine Cookies verwendet, keine personenbezogenen identifizierbaren Daten erhebt und keine Nutzerprofile erstellt.\n\nDie erhobenen Daten können umfassen: besuchte Seiten, ungefähres Land, Referrer-URL und Gerätetyp. Keine dieser Daten ist persönlich identifizierbar.\n\nPlausible erfordert keine Einwilligung nach DSGVO oder dem portugiesischen Gesetz 41/2004, da keine identifizierbaren personenbezogenen Daten verarbeitet werden.\n\nNotwendige Cookies:\n— Cookie zur Sprachpräferenz: speichert die vom Nutzer gewählte Sprache. Dauer: 365 Tage. Keine Einwilligung erforderlich.\n— Session-Cookie: technische Sitzungsverwaltung. Dauer: Sitzung. Keine Einwilligung erforderlich.\n\nWir verwenden keine Werbe-Cookies, keine Tracking-Cookies Dritter, keine Social-Media-Pixel und keine Analysewerkzeuge, die ohne Einwilligung personenbezogene Daten erheben.",
        sharingTitle: "3. Weitergabe von Daten an Dritte",
        sharingBody: "Wir verkaufen, vermieten oder überlassen Ihre personenbezogenen Daten nicht zu Marketingzwecken an Dritte.\n\nIhre Daten können weitergegeben werden an:\n\nTechnische Dienstleister (Auftragsverarbeiter gemäß Art. 28 DSGVO), wie z. B.:\n\nHosting-Anbieter der Website\n\nE-Mail- / Newsletter-Plattform\n\nPlausible Analytics\n\nStripe oder andere Zahlungsdienstleister\n\nandere Anbieter, die für Buchungen, Downloads oder Formulare technisch erforderlich sind\n\nBehörden: Wir legen personenbezogene Daten gegenüber zuständigen Behörden offen, wenn wir gesetzlich dazu verpflichtet sind (Art. 6 Abs. 1 lit. c DSGVO).",
        transfersTitle: "4. Internationale Datenübermittlungen",
        transfersBody: "Personenbezogene Daten werden vorzugsweise innerhalb der Europäischen Union verarbeitet. Wenn ein Dienstleister Daten außerhalb der EU/des EWR verarbeitet, stellen wir sicher, dass entweder:\n\nein Angemessenheitsbeschluss der Europäischen Kommission vorliegt, oder\n\nStandardvertragsklauseln (SCC) der Europäischen Kommission verwendet werden.",
        rightsTitle: "5. Ihre Rechte",
        rightsBody: "Nach DSGVO und dem portugiesischen Gesetz 58/2019 haben Sie folgende Rechte:\n\nRecht auf Auskunft\n\nRecht auf Berichtigung\n\nRecht auf Löschung\n\nRecht auf Einschränkung der Verarbeitung\n\nRecht auf Datenübertragbarkeit\n\nRecht auf Widerspruch\n\nRecht auf Widerruf Ihrer Einwilligung jederzeit\n\nZur Ausübung dieser Rechte: info@moldcheck.pt\n\nWir antworten innerhalb von 30 Tagen. In komplexen Fällen kann diese Frist auf 60 Tage verlängert werden; darüber werden Sie informiert.",
        complaintTitle: "6. Beschwerderecht bei der Aufsichtsbehörde",
        complaintBody: "Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt, haben Sie das Recht, eine Beschwerde einzureichen bei:\n\nCNPD — Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lissabon\nPortugal\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nSie können sich gegebenenfalls auch an die Datenschutzaufsichtsbehörde Ihres Wohnsitzlandes wenden.",
        securityTitle: "7. Sicherheit",
        securityBody: "Wir setzen angemessene technische und organisatorische Maßnahmen ein, um personenbezogene Daten vor unbefugtem Zugriff, Offenlegung, Veränderung oder Zerstörung zu schützen, einschließlich verschlüsselter Übertragung (HTTPS/TLS), Zugangskontrollen und regelmäßiger Backups.\n\nKein System ist absolut sicher. Im Falle einer Datenschutzverletzung mit Risiko für Betroffene werden wir die CNPD innerhalb der gesetzlich vorgeschriebenen Frist benachrichtigen und, sofern erforderlich, die betroffenen Personen ohne unangemessene Verzögerung informieren.",
        childrenTitle: "8. Kinder",
        childrenBody: "Diese Website richtet sich nicht an Personen unter 16 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Minderjährigen. Wenn wir erfahren, dass uns ein Minderjähriger Daten übermittelt hat, werden wir diese so bald wie vernünftigerweise möglich löschen.",
        linksTitle: "9. Externe Links",
        linksBody: "Diese Website enthält Links zu externen Websites, darunter InspectOS.pt und PropCheck.pt. Wir sind nicht für die Datenschutzpraktiken dieser Websites verantwortlich. Bitte lesen Sie deren jeweilige Datenschutzerklärungen.",
        changesTitle: "10. Änderungen dieser Erklärung",
        changesBody: "Wir können diese Erklärung aktualisieren. Das Datum der letzten Aktualisierung ist oben auf dieser Seite angegeben. Bei wesentlichen Änderungen veröffentlichen wir einen sichtbaren Hinweis auf der Website.",
        contactTitle: "11. Kontakt",
        contactBody: "Bei Fragen zu dieser Erklärung oder zur Verarbeitung Ihrer Daten: info@moldcheck.pt"
    },
    nl: {
        title: "Privacybeleid",
        eyebrow: "Privacy en gegevensbescherming",
        description: "Privacybeleid van MoldCheck.pt onder de AVG, Portugese wet 58/2019 en wet 41/2004, inclusief contact, betalingen, nieuwsbrief, gratis downloads en noodzakelijke cookies.",
        lastUpdated: "Laatste bijwerking: 10 maart 2026",
        whoWeAreTitle: "1. Wie we zijn",
        whoWeAreBody: "MoldCheck.pt wordt beheerd door de FAIRBANK Group (hierna aangeduid als “wij”, “ons” of “de verwerkingsverantwoordelijke”).\n\nVerwerkingsverantwoordelijke:\nFAIRBANK Group, Lda.\n[Geregistreerd adres]\nLissabon, Portugal\nNIF: [nummer]\nContact: info@moldcheck.pt\n\nMoldCheck.pt is een onafhankelijke redactionele website over vocht, schimmel en binnenluchtkwaliteit. De site kan ook boekings- of betaalstromen aanbieden voor inspecties, laboratoriumanalyses of digitale middelen via externe betalingsverwerkers zoals Stripe. Wij verzamelen niet actief gezondheidsgegevens.",
        whatDataTitle: "2. Welke gegevens we verzamelen",
        directDataTitle: "Gegevens die je rechtstreeks verstrekt",
        directDataBody: "Contactformulier of contact per e-mail:\n— E-mailadres\n— Naam (optioneel)\n— Inhoud van het bericht\n\nDoel: beantwoorden van je bericht.\nRechtsgrondslag: toestemming (art. 6 lid 1 sub a AVG).\nBewaring: 12 maanden na de laatste communicatie, tenzij een langere wettelijke bewaarplicht geldt.\n\nNieuwsbriefinschrijving:\n— E-mailadres\n— Voorkeurstaal\n— Datum van inschrijving\n\nDoel: het versturen van redactionele updates over schimmel, vocht en binnenluchtkwaliteit in Portugal.\nRechtsgrondslag: toestemming (art. 6 lid 1 sub a AVG).\nBewaring: tot uitschrijving + 30 dagen voor technische verwerking.\n\nDownload van gratis inhoud (PDF / checklist):\n— E-mailadres\n\nDoel: levering van het aangevraagde document en automatische opname van de gebruiker in de e-mailreeks die bij die gedownloade bron hoort.\nRechtsgrondslag: toestemming en/of uitvoering van precontractuele of contractuele stappen, afhankelijk van het geval.\n\nAankopen, boekingen of betalingen (indien van toepassing):\n— Naam\n— E-mailadres\n— Gegevens die nodig zijn om de boeking of aankoop uit te voeren\n— Beperkte transactie-informatie\n\nBetalingen worden verwerkt door externe betalingsaanbieders zoals Stripe. MoldCheck.pt slaat geen volledige kaartgegevens op.",
        automaticDataTitle: "Automatisch verzamelde gegevens",
        automaticDataBody: "Verkeersanalyse (Plausible Analytics):\nMoldCheck.pt gebruikt Plausible Analytics, een analysetool die geen cookies gebruikt, geen persoonlijk identificeerbare gegevens verzamelt en geen gebruikersprofielen opbouwt.\n\nDe verzamelde gegevens kunnen omvatten: bezochte pagina’s, benaderd land, referrer-URL en apparaattype. Geen van deze gegevens is persoonlijk identificeerbaar.\n\nPlausible vereist geen toestemming onder de AVG of de Portugese wet 41/2004, omdat het geen identificeerbare persoonsgegevens verwerkt.\n\nNoodzakelijke cookies:\n— Cookie voor taalvoorkeur: slaat de door de gebruiker gekozen taal op. Duur: 365 dagen. Geen toestemming vereist.\n— Sessiecookie: technisch sessiebeheer. Duur: sessie. Geen toestemming vereist.\n\nWij gebruiken geen advertentiecookies, geen trackingcookies van derden, geen social media-pixels en geen analysetools die zonder toestemming persoonsgegevens verzamelen.",
        sharingTitle: "3. Delen van gegevens met derden",
        sharingBody: "Wij verkopen, verhuren of verstrekken jouw persoonsgegevens niet aan derden voor marketingdoeleinden.\n\nJe gegevens kunnen worden gedeeld met:\n\nTechnische dienstverleners (verwerkers in de zin van art. 28 AVG), zoals:\n\nhostingprovider van de website\n\ne-mail- / nieuwsbriefplatform\n\nPlausible Analytics\n\nStripe of andere betalingsaanbieders\n\nandere leveranciers die strikt noodzakelijk zijn voor boekingen, downloads of formulieren\n\nWettelijke autoriteiten: wij verstrekken persoonsgegevens aan bevoegde autoriteiten indien wij daartoe wettelijk verplicht zijn (art. 6 lid 1 sub c AVG).",
        transfersTitle: "4. Internationale gegevensdoorgiften",
        transfersBody: "Persoonsgegevens worden bij voorkeur binnen de Europese Unie verwerkt. Als een dienstverlener gegevens buiten de EU/EER verwerkt, zorgen wij ervoor dat er:\n\neen adequaatheidsbesluit van de Europese Commissie is, of\n\nStandaard Contractuele Clausules (SCC’s) van de Europese Commissie van kracht zijn.",
        rightsTitle: "5. Jouw rechten",
        rightsBody: "Op grond van de AVG en de Portugese wet 58/2019 heb je de volgende rechten:\n\nrecht op inzage\n\nrecht op rectificatie\n\nrecht op wissing\n\nrecht op beperking van verwerking\n\nrecht op gegevensoverdraagbaarheid\n\nrecht van bezwaar\n\nrecht om toestemming op elk moment in te trekken\n\nOm een van deze rechten uit te oefenen: info@moldcheck.pt\n\nWij reageren binnen 30 dagen. In complexe gevallen kan deze termijn worden verlengd tot 60 dagen; je wordt dan daarvan op de hoogte gebracht.",
        complaintTitle: "6. Klacht indienen bij de toezichthouder",
        complaintBody: "Als je van mening bent dat de verwerking van jouw persoonsgegevens in strijd is met de AVG, heb je het recht een klacht in te dienen bij:\n\nCNPD — Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lissabon\nPortugal\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nJe kunt indien van toepassing ook een klacht indienen bij de toezichthouder in jouw land van verblijf.",
        securityTitle: "7. Beveiliging",
        securityBody: "Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen ongeoorloofde toegang, openbaarmaking, wijziging of vernietiging, waaronder versleutelde overdracht (HTTPS/TLS), toegangscontrole en regelmatige back-ups.\n\nGeen enkel systeem is volledig veilig. In geval van een datalek met risico voor betrokkenen zullen wij de CNPD binnen de toepasselijke wettelijke termijn informeren en, indien nodig, de betrokken personen zonder onnodige vertraging waarschuwen.",
        childrenTitle: "8. Minderjarigen",
        childrenBody: "Deze website is niet gericht op personen jonger dan 16 jaar. Wij verzamelen niet bewust persoonsgegevens van minderjarigen. Als wij vernemen dat een minderjarige ons gegevens heeft verstrekt, zullen wij deze zo snel als redelijkerwijs mogelijk verwijderen.",
        linksTitle: "9. Externe links",
        linksBody: "Deze website bevat links naar externe websites, waaronder InspectOS.pt en PropCheck.pt. Wij zijn niet verantwoordelijk voor het privacybeleid van die websites. Raadpleeg hun respectieve privacyverklaringen.",
        changesTitle: "10. Wijzigingen in dit beleid",
        changesBody: "Wij kunnen dit beleid bijwerken. De datum van de laatste bijwerking staat bovenaan deze pagina. Bij wezenlijke wijzigingen publiceren wij een duidelijke kennisgeving op de website.",
        contactTitle: "11. Contact",
        contactBody: "Voor vragen over dit beleid of over de verwerking van jouw gegevens: info@moldcheck.pt"
    },
    it: {
        title: "Informativa sulla Privacy",
        eyebrow: "Privacy e protezione dei dati",
        description: "Informativa sulla privacy di MoldCheck.pt ai sensi del RGPD, della legge portoghese 58/2019 e della legge 41/2004, inclusi contatti, pagamenti, newsletter, download gratuiti e cookie necessari.",
        lastUpdated: "Ultimo aggiornamento: 10 marzo 2026",
        whoWeAreTitle: "1. Chi siamo",
        whoWeAreBody: "MoldCheck.pt è gestito dal FAIRBANK Group (di seguito denominato “noi”, “ci” o “titolare del trattamento”).\n\nTitolare del trattamento:\nFAIRBANK Group, Lda.\n[Indirizzo registrato]\nLisbona, Portogallo\nNIF: [numero]\nContatto: info@moldcheck.pt\n\nMoldCheck.pt è un sito editoriale indipendente dedicato a umidità, muffa e qualità dell’aria interna. Il sito può inoltre offrire flussi di prenotazione o pagamento per ispezioni, analisi di laboratorio o risorse digitali tramite fornitori di pagamento terzi come Stripe. Non raccogliamo attivamente dati sanitari.",
        whatDataTitle: "2. Quali dati raccogliamo",
        directDataTitle: "Dati forniti direttamente dall’utente",
        directDataBody: "Modulo di contatto o richieste via e-mail:\n— Indirizzo e-mail\n— Nome (facoltativo)\n— Contenuto del messaggio\n\nFinalità: rispondere al messaggio inviato.\nBase giuridica: consenso (art. 6, par. 1, lett. a, RGPD).\nConservazione: 12 mesi dall’ultima comunicazione, salvo obblighi legali di conservazione più lunghi.\n\nIscrizione alla newsletter:\n— Indirizzo e-mail\n— Lingua preferita\n— Data di iscrizione\n\nFinalità: invio di aggiornamenti editoriali su muffa, umidità e qualità dell’aria interna in Portogallo.\nBase giuridica: consenso (art. 6, par. 1, lett. a, RGPD).\nConservazione: fino alla cancellazione + 30 giorni per il trattamento tecnico.\n\nDownload di contenuti gratuiti (PDF / checklist):\n— Indirizzo e-mail\n\nFinalità: invio del documento richiesto e inserimento automatico dell’utente nella sequenza email associata alla risorsa scaricata.\nBase giuridica: consenso e/o esecuzione di misure precontrattuali o contrattuali, a seconda del caso.\n\nAcquisti, prenotazioni o pagamenti (se applicabile):\n— Nome\n— Indirizzo e-mail\n— Dati necessari per completare la prenotazione o l’acquisto\n— Informazioni transazionali limitate\n\nI pagamenti sono elaborati da fornitori di pagamento terzi come Stripe. MoldCheck.pt non memorizza i dati completi della carta di pagamento.",
        automaticDataTitle: "Dati raccolti automaticamente",
        automaticDataBody: "Analisi del traffico (Plausible Analytics):\nMoldCheck.pt utilizza Plausible Analytics, uno strumento di analisi che non utilizza cookie, non raccoglie dati personali identificabili e non crea profili utente.\n\nI dati raccolti possono includere: pagine visitate, paese approssimativo, URL di provenienza e tipo di dispositivo. Nessuno di questi dati è personalmente identificabile.\n\nPlausible non richiede consenso ai sensi del RGPD o della legge portoghese 41/2004, poiché non tratta dati personali identificabili.\n\nCookie necessari:\n— Cookie di preferenza della lingua: memorizza la lingua selezionata dall’utente. Durata: 365 giorni. Nessun consenso richiesto.\n— Cookie di sessione: gestione tecnica della sessione. Durata: sessione. Nessun consenso richiesto.\n\nNon utilizziamo cookie pubblicitari, cookie di tracciamento di terze parti, pixel dei social media o strumenti di analisi che raccolgano dati personali senza consenso.",
        sharingTitle: "3. Condivisione dei dati con terzi",
        sharingBody: "Non vendiamo, affittiamo né cediamo i dati personali a terzi per finalità di marketing.\n\nI dati possono essere condivisi con:\n\nFornitori di servizi tecnici (responsabili del trattamento ai sensi dell’art. 28 RGPD), quali:\n\nfornitore di hosting del sito\n\npiattaforma e-mail / newsletter\n\nPlausible Analytics\n\nStripe o altri fornitori di pagamento\n\naltri fornitori strettamente necessari per prenotazioni, download o moduli\n\nAutorità competenti: comunicheremo dati personali alle autorità competenti se legalmente obbligati a farlo (art. 6, par. 1, lett. c, RGPD).",
        transfersTitle: "4. Trasferimenti internazionali di dati",
        transfersBody: "I dati personali sono trattati preferibilmente all’interno dell’Unione europea. Se un fornitore di servizi tratta dati al di fuori dell’UE/SEE, ci assicuriamo che esista:\n\nuna decisione di adeguatezza della Commissione europea, oppure\n\nClausole Contrattuali Standard (SCC) approvate dalla Commissione europea.",
        rightsTitle: "5. I vostri diritti",
        rightsBody: "Ai sensi del RGPD e della legge portoghese 58/2019, avete i seguenti diritti:\n\ndiritto di accesso\n\ndiritto di rettifica\n\ndiritto alla cancellazione\n\ndiritto alla limitazione del trattamento\n\ndiritto alla portabilità dei dati\n\ndiritto di opposizione\n\ndiritto di revocare il consenso in qualsiasi momento\n\nPer esercitare uno di questi diritti: info@moldcheck.pt\n\nRisponderemo entro 30 giorni. Nei casi complessi, il termine può essere esteso fino a 60 giorni, e ne daremo comunicazione.",
        complaintTitle: "6. Reclamo all’autorità di controllo",
        complaintBody: "Se ritenete che il trattamento dei vostri dati personali violi il RGPD, avete il diritto di presentare reclamo a:\n\nCNPD — Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lisbona\nPortogallo\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nPotete inoltre presentare reclamo presso l’autorità di controllo del vostro paese di residenza, ove applicabile.",
        securityTitle: "7. Sicurezza",
        securityBody: "Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, divulgazione, alterazione o distruzione, inclusi trasmissione cifrata (HTTPS/TLS), controlli di accesso e backup regolari.\n\nNessun sistema è completamente sicuro. In caso di violazione dei dati con rischio per gli interessati, notificheremo la CNPD entro il termine legale applicabile e, se necessario, gli interessati senza ritardo ingiustificato.",
        childrenTitle: "8. Minori",
        childrenBody: "Questo sito non è destinato a persone di età inferiore ai 16 anni. Non raccogliamo consapevolmente dati personali di minori. Se veniamo a conoscenza del fatto che un minore ci ha fornito dati, li elimineremo non appena ragionevolmente possibile.",
        linksTitle: "9. Link esterni",
        linksBody: "Questo sito contiene collegamenti a siti esterni, tra cui InspectOS.pt e PropCheck.pt. Non siamo responsabili delle pratiche sulla privacy di tali siti. Si invita a consultare le rispettive informative.",
        changesTitle: "10. Modifiche alla presente informativa",
        changesBody: "Potremmo aggiornare questa informativa. La data dell’ultimo aggiornamento è indicata nella parte superiore di questa pagina. In caso di modifiche sostanziali, pubblicheremo un avviso visibile sul sito.",
        contactTitle: "11. Contatto",
        contactBody: "Per qualsiasi domanda relativa a questa informativa o al trattamento dei vostri dati: info@moldcheck.pt"
    },
    es: {
        title: "Política de Privacidad",
        eyebrow: "Privacidad y protección de datos",
        description: "Política de privacidad de MoldCheck.pt conforme al RGPD, la Ley portuguesa 58/2019 y la Ley 41/2004, incluyendo contacto, pagos, newsletter, descargas gratuitas y cookies necesarias.",
        lastUpdated: "Última actualización: 10 de marzo de 2026",
        whoWeAreTitle: "1. Quiénes somos",
        whoWeAreBody: "MoldCheck.pt está gestionado por FAIRBANK Group (en adelante, “nosotros”, “nos” o “el responsable del tratamiento”).\n\nResponsable del tratamiento:\nFAIRBANK Group, Lda.\n[Dirección registrada]\nLisboa, Portugal\nNIF: [número]\nContacto: info@moldcheck.pt\n\nMoldCheck.pt es un sitio editorial independiente dedicado a la humedad, el moho y la calidad del aire interior. El sitio también puede ofrecer flujos de reserva o pago para inspecciones, análisis de laboratorio o recursos digitales a través de proveedores de pago externos como Stripe. No recopilamos activamente datos de salud.",
        whatDataTitle: "2. Qué datos recopilamos",
        directDataTitle: "Datos que usted proporciona directamente",
        directDataBody: "Formulario de contacto o contacto por correo electrónico:\n— Dirección de correo electrónico\n— Nombre (opcional)\n— Contenido del mensaje\n\nFinalidad: responder a su mensaje.\nBase jurídica: consentimiento (artículo 6.1.a del RGPD).\nConservación: 12 meses desde la última comunicación, salvo obligación legal de conservación más prolongada.\n\nSuscripción a la newsletter:\n— Dirección de correo electrónico\n— Idioma preferido\n— Fecha de suscripción\n\nFinalidad: envío de actualizaciones editoriales sobre moho, humedad y calidad del aire interior en Portugal.\nBase jurídica: consentimiento (artículo 6.1.a del RGPD).\nConservación: hasta la baja + 30 días para procesamiento técnico.\n\nDescarga de contenido gratuito (PDF / checklist):\n— Dirección de correo electrónico\n\nFinalidad: envío del documento solicitado y entrada automática del usuario en la secuencia de emails asociada al recurso descargado.\nBase jurídica: consentimiento y/o ejecución de medidas precontractuales o contractuales, según corresponda.\n\nCompras, reservas o pagos (cuando proceda):\n— Nombre\n— Dirección de correo electrónico\n— Datos necesarios para completar la reserva o compra\n— Información transaccional limitada\n\nLos pagos son procesados por proveedores de pago externos, como Stripe. MoldCheck.pt no almacena los datos completos de la tarjeta de pago.",
        automaticDataTitle: "Datos recopilados automáticamente",
        automaticDataBody: "Análisis de tráfico (Plausible Analytics):\nMoldCheck.pt utiliza Plausible Analytics, una herramienta de análisis que no utiliza cookies, no recopila datos personales identificables y no crea perfiles de usuario.\n\nLos datos recopilados pueden incluir: páginas visitadas, país aproximado, URL de procedencia y tipo de dispositivo. Ninguno de estos datos es personalmente identificable.\n\nPlausible no requiere consentimiento al amparo del RGPD o de la Ley portuguesa 41/2004, ya que no procesa datos personales identificables.\n\nCookies necesarias:\n— Cookie de preferencia de idioma: almacena el idioma seleccionado por el usuario. Duración: 365 días. No requiere consentimiento.\n— Cookie de sesión: gestión técnica de sesión. Duración: sesión. No requiere consentimiento.\n\nNo utilizamos cookies publicitarias, cookies de seguimiento de terceros, píxeles de redes sociales ni herramientas de análisis que recopilen datos personales sin consentimiento.",
        sharingTitle: "3. Compartición de datos con terceros",
        sharingBody: "No vendemos, alquilamos ni cedemos sus datos personales a terceros con fines de marketing.\n\nSus datos pueden compartirse con:\n\nProveedores de servicios técnicos (encargados del tratamiento en el sentido del artículo 28 del RGPD), tales como:\n\nproveedor de alojamiento del sitio web\n\nplataforma de email / newsletter\n\nPlausible Analytics\n\nStripe u otros proveedores de pago\n\notros proveedores estrictamente necesarios para reservas, descargas o formularios\n\nAutoridades legales: divulgaremos datos personales a las autoridades competentes si estamos legalmente obligados a hacerlo (artículo 6.1.c del RGPD).",
        transfersTitle: "4. Transferencias internacionales de datos",
        transfersBody: "Los datos personales se tratan preferentemente dentro de la Unión Europea. Si un proveedor de servicios trata datos fuera de la UE/EEE, garantizamos que exista:\n\nuna decisión de adecuación de la Comisión Europea, o\n\nCláusulas Contractuales Tipo (SCC) aprobadas por la Comisión Europea.",
        rightsTitle: "5. Sus derechos",
        rightsBody: "En virtud del RGPD y de la Ley portuguesa 58/2019, usted tiene los siguientes derechos:\n\nderecho de acceso\n\nderecho de rectificación\n\nderecho de supresión\n\nderecho a la limitación del tratamiento\n\nderecho a la portabilidad de los datos\n\nderecho de oposición\n\nderecho a retirar el consentimiento en cualquier momento\n\nPara ejercer cualquiera de estos derechos: info@moldcheck.pt\n\nResponderemos en un plazo de 30 días. En casos complejos, este plazo podrá ampliarse hasta 60 días, informándole de dicha ampliación.",
        complaintTitle: "6. Reclamación ante la autoridad de control",
        complaintBody: "Si considera que el tratamiento de sus datos personales vulnera el RGPD, tiene derecho a presentar una reclamación ante:\n\nCNPD — Comissão Nacional de Protecção de Dados\nRua de São Bento, n.º 148, 3.º\n1200-821 Lisboa\nPortugal\nwww.cnpd.pt\n\ngeral@cnpd.pt\n\nTambién puede presentar una reclamación ante la autoridad de control de su país de residencia, cuando proceda.",
        securityTitle: "7. Seguridad",
        securityBody: "Aplicamos medidas técnicas y organizativas adecuadas para proteger los datos personales frente a accesos no autorizados, divulgación, alteración o destrucción, incluyendo transmisión cifrada (HTTPS/TLS), controles de acceso y copias de seguridad periódicas.\n\nNingún sistema es completamente seguro. En caso de violación de datos con riesgo para los interesados, notificaremos a la CNPD dentro del plazo legal aplicable y, cuando sea necesario, a las personas afectadas sin demora indebida.",
        childrenTitle: "8. Menores",
        childrenBody: "Este sitio web no está dirigido a personas menores de 16 años. No recopilamos conscientemente datos personales de menores. Si llegamos a tener conocimiento de que un menor nos ha facilitado datos, los eliminaremos tan pronto como sea razonablemente posible.",
        linksTitle: "9. Enlaces externos",
        linksBody: "Este sitio web contiene enlaces a sitios externos, incluidos InspectOS.pt y PropCheck.pt. No somos responsables de las prácticas de privacidad de dichos sitios. Le recomendamos consultar sus respectivas políticas de privacidad.",
        changesTitle: "10. Cambios en esta política",
        changesBody: "Podemos actualizar esta política. La fecha de la última actualización figura en la parte superior de esta página. En caso de cambios sustanciales, publicaremos un aviso visible en el sitio web.",
        contactTitle: "11. Contacto",
        contactBody: "Para cualquier cuestión sobre esta política o sobre el tratamiento de sus datos: info@moldcheck.pt"
    }
};
function getPrivacyFallbackContent(locale) {
    const content = privacyContentByLocale[locale];
    return {
        pageKey: "privacy",
        language: locale,
        translationGroup: "privacy",
        title: content.title,
        eyebrow: content.eyebrow,
        description: content.description,
        body: [
            paragraphBlock(content.lastUpdated, `privacy-last-updated-${locale}`)
        ],
        introLayout: "utility",
        introCards: [
            {
                eyebrow: "1",
                title: content.whoWeAreTitle,
                body: content.whoWeAreBody,
                tone: "featured"
            }
        ],
        sections: buildSections(content)
    };
}
}),
"[project]/src/features/content/data/servicesContent.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServicesFallbackContent",
    ()=>getServicesFallbackContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/site.ts [app-rsc] (ecmascript)");
;
function paragraphsToBlocks(paragraphs) {
    return paragraphs.map((text, index)=>({
            _type: "block",
            _key: `services-paragraph-${index + 1}`,
            style: "normal",
            children: [
                {
                    _type: "span",
                    _key: `services-span-${index + 1}`,
                    text
                }
            ]
        }));
}
const servicesContentByLocale = {
    pt: {
        eyebrow: "Inspecção independente",
        title: "Inspecção Independente de Humidade e Bolor em Portugal",
        description: "Diagnóstico independente, análise laboratorial e monitorização apresentados com clareza, sem o enquadramento comercial do tratamento.",
        independentParagraphs: [
            "Em Portugal, o diagnóstico de problemas de humidade e bolor é quase sempre realizado pela empresa que vai vender o tratamento. O diagnóstico gratuito é o início de um funil comercial — não um serviço de informação imparcial.",
            "Uma inspecção independente funciona de forma diferente. O inspector cobra pelo seu tempo. Não recebe comissão do saneador, do fabricante do sistema de ventilação, nem de nenhuma outra empresa que possa beneficiar do resultado do diagnóstico. O seu único interesse é dizer-lhe com precisão o que tem.",
            "Este é o modelo que a InspectOS representa — e o único modelo que o MoldCheck.pt recomenda."
        ],
        howItWorksTitle: "Como funciona",
        howItWorksBody: "As inspecções são realizadas por inspectores certificados da InspectOS equipados com:\n\nHigrómetro digital de precisão — medição de humidade relativa do ar e temperatura\n\nMedidor de humidade de materiais — medição não invasiva do teor de humidade em paredes, pavimentos e tetos\n\nCâmara termográfica — detecção de pontes térmicas, infiltrações ocultas e zonas de condensação invisíveis a olho nu\n\nCapacidade de colheita de amostras — superfícies, materiais e ar, para análise laboratorial quando indicado\n\nApós a inspecção, recebe um relatório escrito com: localização e extensão do problema, causa provável, recomendações baseadas em evidência científica, e indicação clara de quando uma análise laboratorial é ou não necessária.\n\nO relatório não inclui um orçamento de tratamento. Não recomendamos empresas específicas de saneamento. Não temos acordo comercial com nenhuma empresa de remediação.",
        servicesTitle: "Serviços disponíveis",
        tier1Cards: [
            {
                eyebrow: "NÍVEL 1 — Inspecção Visual e Instrumental",
                title: "Inspecção Padrão",
                body: "Inspecção completa da habitação com higrómetro, medidor de humidade e câmara termográfica. Inclui relatório escrito.\n\nPreço indicativo: €250–€400 (habitação até 100 m²) · €400–€800 (habitação até 250 m²)"
            },
            {
                eyebrow: "NÍVEL 1 — Inspecção Visual e Instrumental",
                title: "Inspecção Pré-Compra",
                body: "Para quem está a considerar comprar uma habitação e quer saber exactamente o que tem antes de assinar. Inclui relatório utilizável em negociação ou eventual rescisão de promessa.\n\nPreço indicativo: €350–€600"
            },
            {
                eyebrow: "NÍVEL 1 — Inspecção Visual e Instrumental",
                title: "Inspecção Pós-Inundação / Emergência",
                body: "Para habitações afectadas por inundação, rotura de canalização, ou infiltração súbita. Foco na avaliação de danos por água e risco de contaminação fúngica. Resposta rápida disponível.\n\nPreço indicativo: €300–€500"
            },
            {
                eyebrow: "NÍVEL 1 — Inspecção Visual e Instrumental",
                title: "Verificação Pós-Remediação",
                body: "Para confirmar, de forma independente, que uma obra de saneamento foi bem executada e que o problema está efectivamente resolvido — antes de pagar o valor final ao saneador.\n\nPreço indicativo: €200–€350"
            }
        ],
        tier2Cards: [
            {
                eyebrow: "NÍVEL 2 — Análise Laboratorial",
                title: "Amostragem de Ar + Análise Micológica",
                body: "Quando a inspecção visual e instrumental não é suficiente para identificar as espécies presentes ou quantificar o risco com precisão, recomendamos análise laboratorial.\n\nColheita de amostras de ar em interiores e exteriores com análise em laboratório certificado (ISO 17025). Identifica espécies fúngicas presentes e compara concentrações interior/exterior.\n\nPreço indicativo: €500–€900 (inclui inspecção, colheita e análise)"
            },
            {
                eyebrow: "NÍVEL 2 — Análise Laboratorial",
                title: "Amostragem de Superfície e Material",
                body: "Colheita de amostras de superfícies visíveis e, quando indicado, de materiais de construção. Adequado para identificação de espécies em pontos específicos.\n\nPreço indicativo: €300–€600"
            }
        ],
        tier3Cards: [
            {
                eyebrow: "NÍVEL 3 — Análise Especializada Internacional",
                title: "ERMI (Environmental Relative Moldiness Index)",
                body: "Para situações que requerem diagnóstico de precisão — nomeadamente suspeita de Stachybotrys, histórico de danos graves por água, ou casos com sintomas de saúde persistentes.\n\nAnálise de poeira acumulada por MSqPCR — o método mais sensível disponível para detectar história de contaminação fúngica, incluindo espécies de difícil detecção por amostragem de ar. Enviado para laboratório parceiro nos EUA.\n\nPreço indicativo: €600–€900"
            },
            {
                eyebrow: "NÍVEL 3 — HERTSMI-2",
                title: "HERTSMI-2",
                body: "Versão simplificada do ERMI focada nas 5 espécies mais relevantes clinicamente: Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum, Wallemia sebi. Desenvolvido especificamente para avaliação clínica em contexto de CIRS/doenças relacionadas com edifícios.\n\nPreço indicativo: €450–€700\n\nNota importante: O MoldCheck.pt / InspectOS é o único prestador de serviços HERTSMI-2 na Península Ibérica e, tanto quanto sabemos, em toda a Europa. O laboratório de referência para este teste é o Mycometrics (EUA).",
                tone: "warning"
            },
            {
                eyebrow: "NÍVEL 3 — Análise Especializada Internacional",
                title: "Painel de Micotoxinas em Superfícies",
                body: "Análise química de micotoxinas em amostras de superfície. Relevante quando há suspeita de produção de toxinas e impacto na saúde.\n\nPreço indicativo: €700–€1.200"
            },
            {
                eyebrow: "NÍVEL 3 — Análise Especializada Internacional",
                title: "Microbioma Completo do Edifício (NGS)",
                body: "Sequenciação genómica de nova geração — identificação abrangente de todos os fungos e bactérias presentes. O diagnóstico mais completo disponível para edifícios com historial complexo de danos por água.\n\nPreço indicativo: €1.000–€1.500"
            }
        ],
        tier4Cards: [
            {
                eyebrow: "NÍVEL 4 — Monitorização Contínua",
                title: "Sensor de Qualidade do Ar Interior + Acompanhamento",
                body: "Instalação de sensor de monitorização contínua (CO₂, TVOC, temperatura, humidade relativa). Relatório mensal com análise de tendências. Adequado para habitações com problemas recorrentes ou para monitorização pós-remediação.\n\nPreço indicativo: €150–€300 (instalação) + €25–€60/mês"
            },
            {
                eyebrow: "NÍVEL 4 — Monitorização Contínua",
                title: "Reinspecção Anual",
                body: "Para habitações com historial de problemas de humidade. Visita anual para avaliação de condições e detecção precoce de recidivas.\n\nPreço indicativo: €180–€280/ano"
            }
        ],
        bookingTitle: "Como agendar",
        bookingCards: [
            {
                eyebrow: "Reserva",
                title: "Agendar através da InspectOS",
                body: "As inspecções são realizadas através da InspectOS — plataforma independente de inspecção de imóveis em Portugal.",
                ctaLabel: "→ Agendar inspecção em InspectOS.pt",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            },
            {
                eyebrow: "Dúvidas",
                title: "Contacte-nos antes de reservar",
                body: `Para dúvidas sobre qual serviço é adequado à sua situação, pode contactar-nos primeiro: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Escrever para ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            }
        ],
        coverageTitle: "Cobertura geográfica",
        coverageBody: "Actualmente com cobertura disponível em Lisboa, Porto, Setúbal, Cascais, Sintra, Braga e Algarve (Faro, Lagos, Albufeira). Cobertura em expansão — consulte disponibilidade para a sua área.",
        pricingTitle: "Nota sobre preços",
        pricingBody: "Os preços indicados são intervalos aproximados baseados na dimensão e complexidade da habitação. O preço final é confirmado após contacto inicial e antes de qualquer compromisso. Não existe taxa de diagnóstico: o custo total da inspecção é o preço do serviço.",
        disclosureText: "MoldCheck.pt é uma iniciativa do FAIRBANK Group, a empresa por detrás da InspectOS. Não vendemos tratamentos de humidade. Não recebemos comissões de empresas de remediação. Quando recomendamos uma inspecção ou análise laboratorial, é porque acreditamos que precisa de uma — não porque lucramos com o tratamento que se segue."
    },
    en: {
        eyebrow: "Independent inspection services",
        title: "Independent Mold and Damp Inspection in Portugal",
        description: "Independent diagnosis, laboratory analysis and monitoring explained clearly, without the commercial framing of treatment sales.",
        independentParagraphs: [
            "In Portugal, damp and mold problems are almost always diagnosed by the same company that will later sell the treatment. A free diagnosis is the beginning of a sales funnel — not an impartial information service.",
            "An independent inspection works differently. The inspector charges for their time. They receive no commission from the remediation contractor, the ventilation system manufacturer, or any other company that might benefit from the diagnostic outcome. Their only interest is telling you precisely what you have.",
            "This is the model InspectOS represents — and the only model MoldCheck.pt recommends."
        ],
        howItWorksTitle: "How it works",
        howItWorksBody: "Inspections are carried out by certified InspectOS inspectors equipped with:\n\nPrecision digital hygrometer — measures relative humidity and air temperature\n\nMaterials moisture meter — non-invasive measurement of moisture content in walls, floors, and ceilings\n\nThermal imaging camera — detects thermal bridges, hidden water ingress, and condensation zones invisible to the naked eye\n\nSample collection capability — surfaces, materials, and air, for laboratory analysis when indicated\n\nAfter the inspection, you receive a written report covering: the location and extent of the problem, the probable cause, evidence-based recommendations, and a clear indication of when laboratory analysis is — or is not — necessary.\n\nThe report does not include a treatment quote. We do not recommend specific remediation companies. We have no commercial agreements with remediation firms.",
        servicesTitle: "Available services",
        tier1Cards: [
            {
                eyebrow: "TIER 1 — Visual and Instrumental Inspection",
                title: "Standard Inspection",
                body: "Full property inspection with hygrometer, moisture meter, and thermal imaging camera. Includes written report.\n\nIndicative price: €250–€400 (up to 100 m²) · €400–€800 (up to 250 m²)"
            },
            {
                eyebrow: "TIER 1 — Visual and Instrumental Inspection",
                title: "Pre-Purchase Inspection",
                body: "For anyone considering buying a property and wanting to know exactly what they are buying before signing. Includes a report suitable for negotiation or contract withdrawal discussions.\n\nIndicative price: €350–€600"
            },
            {
                eyebrow: "TIER 1 — Visual and Instrumental Inspection",
                title: "Post-Flood / Emergency Inspection",
                body: "For properties affected by flooding, burst pipes, or sudden water ingress. Focused on water damage assessment and fungal contamination risk. Rapid response available.\n\nIndicative price: €300–€500"
            },
            {
                eyebrow: "TIER 1 — Visual and Instrumental Inspection",
                title: "Post-Remediation Verification",
                body: "Independent confirmation that remediation work was properly carried out and that the problem has genuinely been resolved — before making final payment to the contractor.\n\nIndicative price: €200–€350"
            }
        ],
        tier2Cards: [
            {
                eyebrow: "TIER 2 — Laboratory Analysis",
                title: "Air Sampling + Mycological Analysis",
                body: "When visual and instrumental inspection is not enough to identify the species present or quantify risk precisely, we recommend laboratory analysis.\n\nIndoor and outdoor air sample collection with analysis at an ISO 17025 certified laboratory. Identifies fungal species present and compares indoor and outdoor concentrations.\n\nIndicative price: €500–€900 (includes inspection, collection, and analysis)"
            },
            {
                eyebrow: "TIER 2 — Laboratory Analysis",
                title: "Surface and Material Sampling",
                body: "Sample collection from visible surfaces and, when indicated, building materials. Suitable for species identification at specific points of concern.\n\nIndicative price: €300–€600"
            }
        ],
        tier3Cards: [
            {
                eyebrow: "TIER 3 — Specialist International Analysis",
                title: "ERMI (Environmental Relative Moldiness Index)",
                body: "For situations requiring precision diagnosis — especially suspected Stachybotrys, a history of serious water damage, or persistent health-related concerns.\n\nAccumulated dust analysis by MSqPCR — the most sensitive method currently available for detecting a history of fungal contamination, including species that air sampling often misses. Sent to a partner laboratory in the United States.\n\nIndicative price: €600–€900"
            },
            {
                eyebrow: "TIER 3 — HERTSMI-2",
                title: "HERTSMI-2",
                body: "A simplified ERMI focused on the five species considered most clinically relevant: Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum, and Wallemia sebi. Developed specifically for clinical assessment in the context of CIRS and building-related illness.\n\nIndicative price: €450–€700\n\nImportant note: MoldCheck.pt / InspectOS is the only HERTSMI-2 service provider on the Iberian Peninsula and, to our knowledge, in Europe. The reference laboratory for this test is Mycometrics (USA).",
                tone: "warning"
            },
            {
                eyebrow: "TIER 3 — Specialist International Analysis",
                title: "Surface Mycotoxin Panel",
                body: "Chemical analysis of mycotoxins in surface samples. Relevant where toxin production and health effects are suspected.\n\nIndicative price: €700–€1,200"
            },
            {
                eyebrow: "TIER 3 — Specialist International Analysis",
                title: "Full Building Microbiome (NGS)",
                body: "Next-generation genomic sequencing — comprehensive identification of all fungi and bacteria present. The most complete diagnostic currently available for buildings with a complex history of water damage.\n\nIndicative price: €1,000–€1,500"
            }
        ],
        tier4Cards: [
            {
                eyebrow: "TIER 4 — Continuous Monitoring",
                title: "Indoor Air Quality Sensor + Monitoring",
                body: "Installation of a continuous monitoring sensor (CO₂, TVOC, temperature, relative humidity). Monthly reporting with trend analysis. Suitable for properties with recurring issues or for post-remediation monitoring.\n\nIndicative price: €150–€300 (installation) + €25–€60/month"
            },
            {
                eyebrow: "TIER 4 — Continuous Monitoring",
                title: "Annual Re-Inspection",
                body: "For properties with a history of damp-related problems. Annual visit for condition assessment and early detection of recurrence.\n\nIndicative price: €180–€280/year"
            }
        ],
        bookingTitle: "How to book",
        bookingCards: [
            {
                eyebrow: "Booking",
                title: "Book through InspectOS",
                body: "Inspections are booked through InspectOS — Portugal’s independent property inspection platform.",
                ctaLabel: "→ Book an inspection at InspectOS.pt",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            },
            {
                eyebrow: "Questions",
                title: "Contact us before booking",
                body: `If you are unsure which service fits your situation, contact us first: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Email ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            }
        ],
        coverageTitle: "Geographic coverage",
        coverageBody: "Currently available in Lisbon, Porto, Setúbal, Cascais, Sintra, Braga, and the Algarve (Faro, Lagos, Albufeira). Coverage is expanding — check availability for your area.",
        pricingTitle: "A note on pricing",
        pricingBody: "The prices shown are indicative ranges based on property size and complexity. Final pricing is confirmed after initial contact and before any commitment. There is no separate diagnostic fee: the inspection price is the full service price.",
        disclosureText: "MoldCheck.pt is a FAIRBANK Group initiative. FAIRBANK operates InspectOS, an independent property inspection platform in Portugal. We do not sell damp treatments. We do not take commissions from remediation companies. When we recommend an inspection or laboratory analysis, it is because we believe you need one — not because we profit from whatever treatment may follow."
    },
    fr: {
        eyebrow: "Inspection indépendante",
        title: "Inspection indépendante de l’humidité et des moisissures au Portugal",
        description: "Diagnostic indépendant, analyse en laboratoire et suivi présentés avec clarté, sans cadrage commercial orienté vers le traitement.",
        independentParagraphs: [
            "Au Portugal, le diagnostic des problèmes d’humidité et de moisissures est presque toujours réalisé par l’entreprise qui va ensuite vendre le traitement. Le diagnostic gratuit est le début d’un entonnoir commercial — pas un service d’information impartial.",
            "Une inspection indépendante fonctionne différemment. L’inspecteur facture son temps. Il ne reçoit aucune commission de l’entreprise de remédiation, du fabricant du système de ventilation, ni d’aucune autre entreprise susceptible de bénéficier du résultat du diagnostic. Son seul intérêt est de vous dire avec précision ce que vous avez.",
            "C’est le modèle qu’InspectOS représente — et le seul modèle que MoldCheck.pt recommande."
        ],
        howItWorksTitle: "Comment cela fonctionne",
        howItWorksBody: "Les inspections sont réalisées par des inspecteurs certifiés InspectOS équipés de :\n\nHygromètre numérique de précision — mesure de l’humidité relative et de la température de l’air\n\nHumidimètre pour matériaux — mesure non invasive de la teneur en humidité des murs, sols et plafonds\n\nCaméra thermographique — détection des ponts thermiques, infiltrations cachées et zones de condensation invisibles à l’œil nu\n\nCapacité de prélèvement — surfaces, matériaux et air, pour analyse en laboratoire lorsque cela est indiqué\n\nAprès l’inspection, vous recevez un rapport écrit couvrant : la localisation et l’étendue du problème, la cause probable, des recommandations fondées sur des preuves scientifiques, et une indication claire sur la nécessité — ou non — d’une analyse en laboratoire.\n\nLe rapport n’inclut pas de devis de traitement. Nous ne recommandons pas d’entreprises de remédiation spécifiques. Nous n’avons aucun accord commercial avec des entreprises de remédiation.",
        servicesTitle: "Services disponibles",
        tier1Cards: [
            {
                eyebrow: "NIVEAU 1 — Inspection visuelle et instrumentale",
                title: "Inspection standard",
                body: "Inspection complète du logement avec hygromètre, humidimètre et caméra thermographique. Inclut un rapport écrit.\n\nPrix indicatif : €250–€400 (jusqu’à 100 m²) · €400–€800 (jusqu’à 250 m²)"
            },
            {
                eyebrow: "NIVEAU 1 — Inspection visuelle et instrumentale",
                title: "Inspection pré-achat",
                body: "Pour les personnes qui envisagent d’acheter un bien et souhaitent savoir exactement ce qu’elles achètent avant de signer. Inclut un rapport utilisable pour la négociation ou dans le cadre d’un désistement.\n\nPrix indicatif : €350–€600"
            },
            {
                eyebrow: "NIVEAU 1 — Inspection visuelle et instrumentale",
                title: "Inspection post-inondation / urgence",
                body: "Pour les logements touchés par une inondation, une rupture de canalisation ou une infiltration soudaine. Axée sur l’évaluation des dégâts des eaux et du risque de contamination fongique. Réponse rapide disponible.\n\nPrix indicatif : €300–€500"
            },
            {
                eyebrow: "NIVEAU 1 — Inspection visuelle et instrumentale",
                title: "Vérification post-remédiation",
                body: "Confirmation indépendante que les travaux de remédiation ont été correctement effectués et que le problème est réellement résolu — avant le paiement final au prestataire.\n\nPrix indicatif : €200–€350"
            }
        ],
        tier2Cards: [
            {
                eyebrow: "NIVEAU 2 — Analyse en laboratoire",
                title: "Prélèvement d’air + analyse mycologique",
                body: "Lorsque l’inspection visuelle et instrumentale ne suffit pas à identifier les espèces présentes ou à quantifier précisément le risque, nous recommandons une analyse en laboratoire.\n\nPrélèvement d’échantillons d’air intérieur et extérieur avec analyse dans un laboratoire certifié ISO 17025. Identifie les espèces fongiques présentes et compare les concentrations intérieures et extérieures.\n\nPrix indicatif : €500–€900 (inclut inspection, prélèvement et analyse)"
            },
            {
                eyebrow: "NIVEAU 2 — Analyse en laboratoire",
                title: "Prélèvement de surface et de matériaux",
                body: "Prélèvement d’échantillons sur des surfaces visibles et, si nécessaire, sur des matériaux de construction. Adapté à l’identification d’espèces sur des zones spécifiques.\n\nPrix indicatif : €300–€600"
            }
        ],
        tier3Cards: [
            {
                eyebrow: "NIVEAU 3 — Analyse spécialisée internationale",
                title: "ERMI (Environmental Relative Moldiness Index)",
                body: "Pour les situations nécessitant un diagnostic de précision — notamment en cas de suspicion de Stachybotrys, d’antécédents de dégâts des eaux importants, ou de symptômes persistants.\n\nAnalyse de poussières accumulées par MSqPCR — la méthode la plus sensible disponible pour détecter un historique de contamination fongique, y compris des espèces souvent invisibles à l’échantillonnage de l’air. Envoyé à un laboratoire partenaire aux États-Unis.\n\nPrix indicatif : €600–€900"
            },
            {
                eyebrow: "NIVEAU 3 — HERTSMI-2",
                title: "HERTSMI-2",
                body: "Version simplifiée de l’ERMI, centrée sur les cinq espèces les plus pertinentes sur le plan clinique : Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum et Wallemia sebi. Développé spécifiquement pour l’évaluation clinique dans le contexte du CIRS et des maladies liées aux bâtiments.\n\nPrix indicatif : €450–€700\n\nNote importante : MoldCheck.pt / InspectOS est le seul prestataire HERTSMI-2 dans la péninsule Ibérique et, à notre connaissance, en Europe. Le laboratoire de référence pour ce test est Mycometrics (États-Unis).",
                tone: "warning"
            },
            {
                eyebrow: "NIVEAU 3 — Analyse spécialisée internationale",
                title: "Panneau de mycotoxines de surface",
                body: "Analyse chimique des mycotoxines dans des échantillons de surface. Pertinente lorsqu’une production de toxines et un impact sur la santé sont suspectés.\n\nPrix indicatif : €700–€1 200"
            },
            {
                eyebrow: "NIVEAU 3 — Analyse spécialisée internationale",
                title: "Microbiome complet du bâtiment (NGS)",
                body: "Séquençage génomique de nouvelle génération — identification complète de tous les champignons et bactéries présents. Le diagnostic le plus complet actuellement disponible pour les bâtiments ayant un historique complexe de dégâts des eaux.\n\nPrix indicatif : €1 000–€1 500"
            }
        ],
        tier4Cards: [
            {
                eyebrow: "NIVEAU 4 — Surveillance continue",
                title: "Capteur de qualité de l’air intérieur + suivi",
                body: "Installation d’un capteur de surveillance continue (CO₂, TVOC, température, humidité relative). Rapport mensuel avec analyse des tendances. Adapté aux logements avec problèmes récurrents ou au suivi post-remédiation.\n\nPrix indicatif : €150–€300 (installation) + €25–€60/mois"
            },
            {
                eyebrow: "NIVEAU 4 — Surveillance continue",
                title: "Réinspection annuelle",
                body: "Pour les logements ayant un historique de problèmes d’humidité. Visite annuelle pour évaluer les conditions et détecter précocement une récidive.\n\nPrix indicatif : €180–€280/an"
            }
        ],
        bookingTitle: "Comment réserver",
        bookingCards: [
            {
                eyebrow: "Réservation",
                title: "Réserver via InspectOS",
                body: "Les inspections sont réservées via InspectOS — la plateforme indépendante d’inspection immobilière au Portugal.",
                ctaLabel: "→ Réserver une inspection sur InspectOS.pt",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            },
            {
                eyebrow: "Questions",
                title: "Contactez-nous avant de réserver",
                body: `Si vous avez un doute sur le service adapté à votre situation, contactez-nous d’abord : ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Écrire à ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            }
        ],
        coverageTitle: "Couverture géographique",
        coverageBody: "Couverture actuellement disponible à Lisbonne, Porto, Setúbal, Cascais, Sintra, Braga et en Algarve (Faro, Lagos, Albufeira). Couverture en expansion — vérifiez la disponibilité pour votre zone.",
        pricingTitle: "Note sur les prix",
        pricingBody: "Les prix indiqués sont des fourchettes approximatives basées sur la taille et la complexité du logement. Le prix final est confirmé après un premier contact et avant tout engagement. Il n’existe pas de frais séparés de diagnostic : le coût total de l’inspection correspond au prix du service.",
        disclosureText: "MoldCheck.pt est une initiative du FAIRBANK Group, l’entreprise à l’origine d’InspectOS. Nous ne vendons pas de traitements contre l’humidité. Nous ne recevons aucune commission de la part d’entreprises de remédiation. Lorsque nous recommandons une inspection ou une analyse en laboratoire, c’est parce que nous pensons qu’elle est nécessaire — pas parce que nous profitons du traitement qui pourrait suivre."
    },
    de: {
        eyebrow: "Unabhängige Inspektion",
        title: "Unabhängige Schimmel- und Feuchtigkeitsinspektion in Portugal",
        description: "Unabhängige Diagnose, Laboranalyse und Monitoring klar erklärt, ohne die kommerzielle Logik des Behandlungsverkaufs.",
        independentParagraphs: [
            "In Portugal wird die Diagnose von Feuchtigkeits- und Schimmelproblemen fast immer von dem Unternehmen durchgeführt, das später auch die Behandlung verkauft. Die kostenlose Diagnose ist der Beginn eines Verkaufstrichters — kein unparteiischer Informationsdienst.",
            "Eine unabhängige Inspektion funktioniert anders. Der Inspektor berechnet seine Zeit. Er erhält keine Provision vom Sanierungsunternehmen, vom Hersteller eines Lüftungssystems oder von einem anderen Unternehmen, das vom Ergebnis der Diagnose profitieren könnte. Sein einziges Interesse ist es, Ihnen präzise zu sagen, was Sie tatsächlich haben.",
            "Das ist das Modell, das InspectOS repräsentiert — und das einzige Modell, das MoldCheck.pt empfiehlt."
        ],
        howItWorksTitle: "Wie es funktioniert",
        howItWorksBody: "Inspektionen werden von zertifizierten InspectOS-Inspektoren durchgeführt, ausgestattet mit:\n\nPräzisions-Digitalhygrometer — Messung der relativen Luftfeuchtigkeit und Temperatur\n\nMaterialfeuchtemessgerät — zerstörungsfreie Messung des Feuchtegehalts in Wänden, Böden und Decken\n\nWärmebildkamera — Erkennung von Wärmebrücken, verborgenen Wassereintritten und Kondensationszonen\n\nProbenahmemöglichkeit — Oberflächen, Materialien und Luft für Laboranalysen, wenn dies angezeigt ist\n\nNach der Inspektion erhalten Sie einen schriftlichen Bericht mit: Ort und Ausmaß des Problems, wahrscheinlicher Ursache, wissenschaftlich fundierten Empfehlungen und einer klaren Einschätzung, ob eine Laboranalyse erforderlich ist oder nicht.\n\nDer Bericht enthält kein Angebot für Behandlungsmaßnahmen. Wir empfehlen keine bestimmten Sanierungsunternehmen. Wir haben keine geschäftlichen Vereinbarungen mit Sanierungsfirmen.",
        servicesTitle: "Verfügbare Leistungen",
        tier1Cards: [
            {
                eyebrow: "STUFE 1 — Visuelle und instrumentelle Inspektion",
                title: "Standard-Inspektion",
                body: "Vollständige Inspektion der Immobilie mit Hygrometer, Feuchtemessgerät und Wärmebildkamera. Einschließlich schriftlichem Bericht.\n\nRichtpreis: €250–€400 (bis 100 m²) · €400–€800 (bis 250 m²)"
            },
            {
                eyebrow: "STUFE 1 — Visuelle und instrumentelle Inspektion",
                title: "Vor-Kauf-Inspektion",
                body: "Für Personen, die den Kauf einer Immobilie erwägen und vor der Unterzeichnung genau wissen möchten, was sie kaufen. Einschließlich Bericht, der für Preisverhandlungen oder Rücktrittsentscheidungen verwendet werden kann.\n\nRichtpreis: €350–€600"
            },
            {
                eyebrow: "STUFE 1 — Visuelle und instrumentelle Inspektion",
                title: "Nach-Überflutung / Notfall-Inspektion",
                body: "Für Immobilien, die von Überschwemmung, Rohrbruch oder plötzlichem Wassereintritt betroffen sind. Fokus auf Wasserschadensbewertung und Risiko einer Pilzkontamination. Schnelle Reaktion möglich.\n\nRichtpreis: €300–€500"
            },
            {
                eyebrow: "STUFE 1 — Visuelle und instrumentelle Inspektion",
                title: "Nach-Sanierungs-Verifizierung",
                body: "Unabhängige Bestätigung, dass Sanierungsarbeiten korrekt durchgeführt wurden und das Problem tatsächlich behoben ist — bevor die Schlusszahlung an den Auftragnehmer erfolgt.\n\nRichtpreis: €200–€350"
            }
        ],
        tier2Cards: [
            {
                eyebrow: "STUFE 2 — Laboranalyse",
                title: "Luftprobenahme + mykologische Analyse",
                body: "Wenn die visuelle und instrumentelle Inspektion nicht ausreicht, um vorhandene Arten zu identifizieren oder das Risiko präzise einzuschätzen, empfehlen wir eine Laboranalyse.\n\nEntnahme von Innen- und Außenluftproben mit Analyse in einem ISO-17025-zertifizierten Labor. Identifiziert vorhandene Pilzarten und vergleicht Innen- und Außenkonzentrationen.\n\nRichtpreis: €500–€900 (einschließlich Inspektion, Probenahme und Analyse)"
            },
            {
                eyebrow: "STUFE 2 — Laboranalyse",
                title: "Oberflächen- und Materialprobenahme",
                body: "Entnahme von Proben von sichtbaren Oberflächen und, wenn erforderlich, von Baumaterialien. Geeignet zur Identifikation von Arten an konkreten Problemstellen.\n\nRichtpreis: €300–€600"
            }
        ],
        tier3Cards: [
            {
                eyebrow: "STUFE 3 — Spezialisierte internationale Analyse",
                title: "ERMI (Environmental Relative Moldiness Index)",
                body: "Für Situationen, die eine hochpräzise Diagnose erfordern — insbesondere bei Verdacht auf Stachybotrys, bei einer Vorgeschichte schwerer Wasserschäden oder bei anhaltenden gesundheitlichen Beschwerden.\n\nAnalyse von angesammeltem Staub mittels MSqPCR — die empfindlichste Methode, um eine Vorgeschichte von Pilzkontamination nachzuweisen, einschließlich Arten, die bei Luftprobenahmen häufig übersehen werden. Versand an ein Partnerlabor in den USA.\n\nRichtpreis: €600–€900"
            },
            {
                eyebrow: "STUFE 3 — HERTSMI-2",
                title: "HERTSMI-2",
                body: "Vereinfachte ERMI-Version mit Fokus auf die fünf klinisch relevantesten Arten: Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum und Wallemia sebi. Speziell entwickelt für die klinische Bewertung im Kontext von CIRS und gebäudebedingten Erkrankungen.\n\nRichtpreis: €450–€700\n\nWichtiger Hinweis: MoldCheck.pt / InspectOS ist der einzige HERTSMI-2-Anbieter auf der Iberischen Halbinsel und nach unserem Kenntnisstand in Europa. Das Referenzlabor für diesen Test ist Mycometrics (USA).",
                tone: "warning"
            },
            {
                eyebrow: "STUFE 3 — Spezialisierte internationale Analyse",
                title: "Mykotoxin-Oberflächenpanel",
                body: "Chemische Analyse von Mykotoxinen in Oberflächenproben. Relevant, wenn der Verdacht auf Toxinbildung und gesundheitliche Auswirkungen besteht.\n\nRichtpreis: €700–€1.200"
            },
            {
                eyebrow: "STUFE 3 — Spezialisierte internationale Analyse",
                title: "Vollständiges Gebäudemikrobiom (NGS)",
                body: "Genomische Sequenzierung der nächsten Generation — umfassende Identifikation aller vorhandenen Pilze und Bakterien. Die vollständigste derzeit verfügbare Diagnostik für Gebäude mit komplexer Vorgeschichte von Wasserschäden.\n\nRichtpreis: €1.000–€1.500"
            }
        ],
        tier4Cards: [
            {
                eyebrow: "STUFE 4 — Kontinuierliche Überwachung",
                title: "Sensor für Innenraumluftqualität + Monitoring",
                body: "Installation eines Sensors zur kontinuierlichen Überwachung (CO₂, TVOC, Temperatur, relative Luftfeuchtigkeit). Monatlicher Bericht mit Trendanalyse. Geeignet für Immobilien mit wiederkehrenden Problemen oder zur Nachkontrolle nach einer Sanierung.\n\nRichtpreis: €150–€300 (Installation) + €25–€60/Monat"
            },
            {
                eyebrow: "STUFE 4 — Kontinuierliche Überwachung",
                title: "Jährliche Nachinspektion",
                body: "Für Immobilien mit einer Vorgeschichte von Feuchtigkeitsproblemen. Jährlicher Besuch zur Zustandsbewertung und frühen Erkennung möglicher Rückfälle.\n\nRichtpreis: €180–€280/Jahr"
            }
        ],
        bookingTitle: "Buchung",
        bookingCards: [
            {
                eyebrow: "Reservierung",
                title: "Inspektion über InspectOS buchen",
                body: "Inspektionen werden über InspectOS gebucht — Portugals unabhängige Plattform für Immobilieninspektionen.",
                ctaLabel: "→ Inspektion auf InspectOS.pt buchen",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            },
            {
                eyebrow: "Fragen",
                title: "Kontaktieren Sie uns vor der Buchung",
                body: `Wenn Sie unsicher sind, welche Leistung zu Ihrer Situation passt, kontaktieren Sie uns zunächst: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `An ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail} schreiben`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            }
        ],
        coverageTitle: "Geografische Abdeckung",
        coverageBody: "Derzeit verfügbar in Lissabon, Porto, Setúbal, Cascais, Sintra, Braga und an der Algarve (Faro, Lagos, Albufeira). Das Angebot wird erweitert — bitte Verfügbarkeit für Ihre Region prüfen.",
        pricingTitle: "Hinweis zu den Preisen",
        pricingBody: "Die angegebenen Preise sind Richtwerte auf Basis von Größe und Komplexität der Immobilie. Der Endpreis wird nach dem Erstkontakt und vor jeder verbindlichen Zusage bestätigt. Es gibt keine separate Diagnosegebühr: Die Gesamtkosten der Inspektion entsprechen dem Preis der Leistung.",
        disclosureText: "MoldCheck.pt ist eine Initiative der FAIRBANK Group, dem Unternehmen hinter InspectOS. Wir verkaufen keine Feuchtigkeitsbehandlungen. Wir erhalten keine Provisionen von Sanierungsunternehmen. Wenn wir eine Inspektion oder Laboranalyse empfehlen, dann weil wir glauben, dass sie notwendig ist — nicht weil wir an einer nachfolgenden Behandlung verdienen."
    },
    nl: {
        eyebrow: "Onafhankelijke inspectie",
        title: "Onafhankelijke schimmel- en vochtinspectie in Portugal",
        description: "Onafhankelijke diagnose, laboratoriumanalyse en monitoring helder uitgelegd, zonder commerciële behandellogica.",
        independentParagraphs: [
            "In Portugal wordt de diagnose van vocht- en schimmelproblemen bijna altijd uitgevoerd door het bedrijf dat vervolgens ook de behandeling verkoopt. De gratis diagnose is het begin van een verkooptrechter — geen onpartijdige informatiedienst.",
            "Een onafhankelijke inspectie werkt anders. De inspecteur rekent zijn tijd aan. Hij ontvangt geen commissie van het saneringsbedrijf, de fabrikant van het ventilatiesysteem of enig ander bedrijf dat voordeel zou kunnen hebben bij de uitkomst van de diagnose. Zijn enige belang is om je precies te vertellen wat er aan de hand is.",
            "Dit is het model dat InspectOS vertegenwoordigt — en het enige model dat MoldCheck.pt aanbeveelt."
        ],
        howItWorksTitle: "Hoe het werkt",
        howItWorksBody: "Inspecties worden uitgevoerd door gecertificeerde InspectOS-inspecteurs die beschikken over:\n\nPrecisie digitale hygrometer — meting van relatieve luchtvochtigheid en temperatuur\n\nVochtmeter voor materialen — niet-invasieve meting van het vochtgehalte in muren, vloeren en plafonds\n\nWarmtebeeldcamera — detectie van koudebruggen, verborgen waterinsijpeling en condensatiezones\n\nMogelijkheid tot monstername — oppervlakken, materialen en lucht, voor laboratoriumanalyse wanneer nodig\n\nNa de inspectie ontvang je een schriftelijk rapport met: de locatie en omvang van het probleem, de waarschijnlijke oorzaak, wetenschappelijk onderbouwde aanbevelingen, en een duidelijke indicatie of laboratoriumanalyse wel of niet nodig is.\n\nHet rapport bevat geen offerte voor behandeling. Wij bevelen geen specifieke saneringsbedrijven aan. Wij hebben geen commerciële afspraken met saneringsfirma’s.",
        servicesTitle: "Beschikbare diensten",
        tier1Cards: [
            {
                eyebrow: "NIVEAU 1 — Visuele en instrumentele inspectie",
                title: "Standaardinspectie",
                body: "Volledige woninginspectie met hygrometer, vochtmeter en warmtebeeldcamera. Inclusief schriftelijk rapport.\n\nIndicatieve prijs: €250–€400 (tot 100 m²) · €400–€800 (tot 250 m²)"
            },
            {
                eyebrow: "NIVEAU 1 — Visuele en instrumentele inspectie",
                title: "Pre-aankoopinspectie",
                body: "Voor wie overweegt een woning te kopen en vóór ondertekening exact wil weten wat er aan de hand is. Inclusief rapport bruikbaar voor prijsonderhandeling of heroverweging van de aankoop.\n\nIndicatieve prijs: €350–€600"
            },
            {
                eyebrow: "NIVEAU 1 — Visuele en instrumentele inspectie",
                title: "Inspectie na overstroming / noodgeval",
                body: "Voor woningen die getroffen zijn door overstroming, gesprongen leidingen of plotselinge waterinsijpeling. Gericht op beoordeling van waterschade en risico op schimmelbesmetting. Snelle interventie mogelijk.\n\nIndicatieve prijs: €300–€500"
            },
            {
                eyebrow: "NIVEAU 1 — Visuele en instrumentele inspectie",
                title: "Verificatie na sanering",
                body: "Onafhankelijke bevestiging dat saneringswerk correct is uitgevoerd en dat het probleem werkelijk is opgelost — vóór de eindbetaling aan de uitvoerder.\n\nIndicatieve prijs: €200–€350"
            }
        ],
        tier2Cards: [
            {
                eyebrow: "NIVEAU 2 — Laboratoriumanalyse",
                title: "Luchtmonstering + mycologische analyse",
                body: "Wanneer visuele en instrumentele inspectie niet volstaat om aanwezige soorten te identificeren of het risico nauwkeurig te beoordelen, bevelen we laboratoriumanalyse aan.\n\nVerzameling van binnen- en buitenluchtmonsters met analyse in een ISO 17025-gecertificeerd laboratorium. Identificeert aanwezige schimmelsoorten en vergelijkt concentraties binnen en buiten.\n\nIndicatieve prijs: €500–€900 (inclusief inspectie, monstername en analyse)"
            },
            {
                eyebrow: "NIVEAU 2 — Laboratoriumanalyse",
                title: "Oppervlakte- en materiaalmonsters",
                body: "Monstername van zichtbare oppervlakken en, indien nodig, van bouwmaterialen. Geschikt voor soortidentificatie op specifieke probleemlocaties.\n\nIndicatieve prijs: €300–€600"
            }
        ],
        tier3Cards: [
            {
                eyebrow: "NIVEAU 3 — Gespecialiseerde internationale analyse",
                title: "ERMI (Environmental Relative Moldiness Index)",
                body: "Voor situaties die een zeer nauwkeurige diagnose vereisen — vooral bij vermoeden van Stachybotrys, een voorgeschiedenis van ernstige waterschade of aanhoudende gezondheidsklachten.\n\nAnalyse van opgehoopt stof via MSqPCR — de gevoeligste methode die momenteel beschikbaar is om een geschiedenis van schimmelverontreiniging vast te stellen, inclusief soorten die vaak niet worden gedetecteerd via luchtmonsters. Verzonden naar een partnerlaboratorium in de VS.\n\nIndicatieve prijs: €600–€900"
            },
            {
                eyebrow: "NIVEAU 3 — HERTSMI-2",
                title: "HERTSMI-2",
                body: "Vereenvoudigde versie van ERMI, gericht op de vijf klinisch meest relevante soorten: Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum en Wallemia sebi. Speciaal ontwikkeld voor klinische beoordeling in de context van CIRS en gebouwgerelateerde klachten.\n\nIndicatieve prijs: €450–€700\n\nBelangrijke opmerking: MoldCheck.pt / InspectOS is de enige HERTSMI-2-aanbieder op het Iberisch Schiereiland en, voor zover wij weten, in heel Europa. Het referentielaboratorium voor deze test is Mycometrics (VS).",
                tone: "warning"
            },
            {
                eyebrow: "NIVEAU 3 — Gespecialiseerde internationale analyse",
                title: "Mycotoxine-oppervlaktepanel",
                body: "Chemische analyse van mycotoxinen in oppervlakte-monsters. Relevant wanneer toxineproductie en gezondheidseffecten worden vermoed.\n\nIndicatieve prijs: €700–€1.200"
            },
            {
                eyebrow: "NIVEAU 3 — Gespecialiseerde internationale analyse",
                title: "Volledig gebouwmicrobioom (NGS)",
                body: "Next-generation genomische sequencing — uitgebreide identificatie van alle aanwezige schimmels en bacteriën. De meest volledige diagnostiek die momenteel beschikbaar is voor gebouwen met een complexe voorgeschiedenis van waterschade.\n\nIndicatieve prijs: €1.000–€1.500"
            }
        ],
        tier4Cards: [
            {
                eyebrow: "NIVEAU 4 — Continue monitoring",
                title: "Binnenluchtkwaliteitssensor + monitoring",
                body: "Installatie van een sensor voor continue monitoring (CO₂, TVOC, temperatuur, relatieve luchtvochtigheid). Maandelijks rapport met trendanalyse. Geschikt voor woningen met terugkerende problemen of voor monitoring na sanering.\n\nIndicatieve prijs: €150–€300 (installatie) + €25–€60/maand"
            },
            {
                eyebrow: "NIVEAU 4 — Continue monitoring",
                title: "Jaarlijkse herinspectie",
                body: "Voor woningen met een geschiedenis van vochtproblemen. Jaarlijks bezoek voor conditiebeoordeling en vroege detectie van terugkeer van het probleem.\n\nIndicatieve prijs: €180–€280/jaar"
            }
        ],
        bookingTitle: "Hoe te boeken",
        bookingCards: [
            {
                eyebrow: "Boeking",
                title: "Boek via InspectOS",
                body: "Inspecties worden geboekt via InspectOS — het onafhankelijke vastgoedinspectieplatform in Portugal.",
                ctaLabel: "→ Boek een inspectie op InspectOS.pt",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            },
            {
                eyebrow: "Vragen",
                title: "Neem eerst contact op als je twijfelt",
                body: `Als je twijfelt welke dienst geschikt is voor jouw situatie, neem dan eerst contact op: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Mail naar ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            }
        ],
        coverageTitle: "Geografische dekking",
        coverageBody: "Momenteel beschikbaar in Lissabon, Porto, Setúbal, Cascais, Sintra, Braga en de Algarve (Faro, Lagos, Albufeira). Dekking wordt uitgebreid — controleer de beschikbaarheid voor jouw regio.",
        pricingTitle: "Opmerking over prijzen",
        pricingBody: "De vermelde prijzen zijn richtprijzen op basis van de grootte en complexiteit van de woning. De definitieve prijs wordt bevestigd na eerste contact en vóór enige verbintenis. Er is geen aparte diagnosetoeslag: de totale kost van de inspectie is de prijs van de dienst.",
        disclosureText: "MoldCheck.pt is een initiatief van de FAIRBANK Group, het bedrijf achter InspectOS. Wij verkopen geen vochtbehandelingen. Wij ontvangen geen commissies van saneringsbedrijven. Wanneer wij een inspectie of laboratoriumanalyse aanbevelen, is dat omdat wij denken dat je die nodig hebt — niet omdat wij verdienen aan de behandeling die daarop volgt."
    },
    it: {
        eyebrow: "Ispezione indipendente",
        title: "Ispezione indipendente di umidità e muffa in Portogallo",
        description: "Diagnosi indipendente, analisi di laboratorio e monitoraggio spiegati con chiarezza, senza l’impostazione commerciale del trattamento.",
        independentParagraphs: [
            "In Portogallo, la diagnosi dei problemi di umidità e muffa è quasi sempre effettuata dall’azienda che poi venderà il trattamento. La diagnosi gratuita è l’inizio di un funnel commerciale — non un servizio informativo imparziale.",
            "Un’ispezione indipendente funziona in modo diverso. L’ispettore fa pagare il proprio tempo. Non riceve commissioni dall’impresa di bonifica, dal produttore del sistema di ventilazione né da qualsiasi altra azienda che possa beneficiare del risultato della diagnosi. Il suo unico interesse è dirti con precisione che cosa hai.",
            "Questo è il modello rappresentato da InspectOS — ed è l’unico modello che MoldCheck.pt raccomanda."
        ],
        howItWorksTitle: "Come funziona",
        howItWorksBody: "Le ispezioni vengono effettuate da ispettori certificati InspectOS dotati di:\n\nigrometro digitale di precisione — misurazione dell’umidità relativa dell’aria e della temperatura\n\nmisuratore di umidità dei materiali (moisture meter) — misurazione non invasiva del contenuto di umidità in pareti, pavimenti e soffitti\n\ntermocamera — rilevazione di ponti termici, infiltrazioni nascoste e zone di condensazione invisibili a occhio nudo\n\ncapacità di prelievo di campioni — superfici, materiali e aria, per analisi di laboratorio quando necessario\n\nDopo l’ispezione ricevi un rapporto scritto con: localizzazione ed estensione del problema, causa probabile, raccomandazioni basate su evidenze scientifiche e indicazione chiara di quando sia o non sia necessaria un’analisi di laboratorio.\n\nIl rapporto non include un preventivo di trattamento. Non raccomandiamo aziende specifiche di bonifica. Non abbiamo alcun accordo commerciale con imprese di bonifica.",
        servicesTitle: "Servizi disponibili",
        tier1Cards: [
            {
                eyebrow: "LIVELLO 1 — Ispezione visiva e strumentale",
                title: "Ispezione standard",
                body: "Ispezione completa dell’abitazione con igrometro, misuratore di umidità e termocamera. Include rapporto scritto.\n\nPrezzo indicativo: €250–€400 (abitazione fino a 100 m²) | €400–€800 (abitazione fino a 250 m²)"
            },
            {
                eyebrow: "LIVELLO 1 — Ispezione visiva e strumentale",
                title: "Ispezione pre-acquisto",
                body: "Per chi sta valutando l’acquisto di un immobile e vuole sapere esattamente che cosa sta comprando prima di firmare. Include rapporto utilizzabile in fase di negoziazione o di recesso da una promessa di acquisto.\n\nPrezzo indicativo: €350–€600"
            },
            {
                eyebrow: "LIVELLO 1 — Ispezione visiva e strumentale",
                title: "Ispezione post-alluvione / emergenza",
                body: "Per abitazioni colpite da allagamento, rottura di tubazioni o infiltrazione improvvisa. Focalizzata sulla valutazione dei danni da acqua e del rischio di contaminazione fungina. Disponibile risposta rapida.\n\nPrezzo indicativo: €300–€500"
            },
            {
                eyebrow: "LIVELLO 1 — Ispezione visiva e strumentale",
                title: "Verifica post-bonifica",
                body: "Conferma indipendente che un intervento di bonifica sia stato eseguito correttamente e che il problema sia realmente risolto — prima di effettuare il pagamento finale all’impresa.\n\nPrezzo indicativo: €200–€350"
            }
        ],
        tier2Cards: [
            {
                eyebrow: "LIVELLO 2 — Analisi di laboratorio",
                title: "Campionamento dell’aria + analisi micologica",
                body: "Quando l’ispezione visiva e strumentale non è sufficiente per identificare le specie presenti o quantificare con precisione il rischio, raccomandiamo un’analisi di laboratorio.\n\nPrelievo di campioni d’aria interni ed esterni con analisi in laboratorio certificato ISO 17025. Identifica le specie fungine presenti e confronta le concentrazioni interne/esterne.\n\nPrezzo indicativo: €500–€900 (include ispezione, prelievo e analisi)"
            },
            {
                eyebrow: "LIVELLO 2 — Analisi di laboratorio",
                title: "Campionamento di superfici e materiali",
                body: "Prelievo di campioni da superfici visibili e, quando indicato, da materiali da costruzione. Adatto all’identificazione delle specie in punti specifici di interesse.\n\nPrezzo indicativo: €300–€600"
            }
        ],
        tier3Cards: [
            {
                eyebrow: "LIVELLO 3 — Analisi specialistica internazionale",
                title: "ERMI (Environmental Relative Moldiness Index)",
                body: "Per situazioni che richiedono una diagnosi di precisione — in particolare sospetto di Stachybotrys, storico di gravi danni da acqua o casi con sintomi di salute persistenti.\n\nAnalisi della polvere accumulata tramite MSqPCR — il metodo più sensibile disponibile per rilevare una storia di contaminazione fungina, comprese specie difficili da individuare con il solo campionamento dell’aria. Inviato a laboratorio partner negli Stati Uniti.\n\nPrezzo indicativo: €600–€900"
            },
            {
                eyebrow: "LIVELLO 3 — HERTSMI-2",
                title: "HERTSMI-2",
                body: "Versione semplificata dell’ERMI focalizzata sulle 5 specie clinicamente più rilevanti: Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum, Wallemia sebi. Sviluppato specificamente per la valutazione clinica in contesto di CIRS / malattie correlate agli edifici.\n\n⚠️ Nota importante: MoldCheck.pt / InspectOS è l’unico fornitore di servizi HERTSMI-2 nella Penisola Iberica e, per quanto ne sappiamo, in tutta Europa. Il laboratorio di riferimento per questo test è Mycometrics (USA).\n\nPrezzo indicativo: €450–€700",
                tone: "warning"
            },
            {
                eyebrow: "LIVELLO 3 — Analisi specialistica internazionale",
                title: "Pannello di micotossine su superfici",
                body: "Analisi chimica delle micotossine in campioni di superficie. Rilevante quando si sospetta produzione di tossine e impatto sulla salute.\n\nPrezzo indicativo: €700–€1.200"
            },
            {
                eyebrow: "LIVELLO 3 — Analisi specialistica internazionale",
                title: "Microbioma completo dell’edificio (NGS)",
                body: "Sequenziamento genomico di nuova generazione — identificazione completa di tutti i funghi e batteri presenti. La diagnosi più completa disponibile per edifici con storia complessa di danni da acqua.\n\nPrezzo indicativo: €1.000–€1.500"
            }
        ],
        tier4Cards: [
            {
                eyebrow: "LIVELLO 4 — Monitoraggio continuo",
                title: "Sensore di qualità dell’aria interna + monitoraggio",
                body: "Installazione di sensore per monitoraggio continuo (CO₂, TVOC, temperatura, umidità relativa). Rapporto mensile con analisi delle tendenze. Adatto per abitazioni con problemi ricorrenti o per monitoraggio post-bonifica.\n\nPrezzo indicativo: €150–€300 (installazione) + €25–€60/mese"
            },
            {
                eyebrow: "LIVELLO 4 — Monitoraggio continuo",
                title: "Re-ispezione annuale",
                body: "Per abitazioni con storico di problemi di umidità. Visita annuale per valutazione delle condizioni e rilevazione precoce di eventuali recidive.\n\nPrezzo indicativo: €180–€280/anno"
            }
        ],
        bookingTitle: "Come prenotare",
        bookingCards: [
            {
                eyebrow: "Prenotazione",
                title: "Prenota tramite InspectOS",
                body: "Le ispezioni vengono effettuate tramite InspectOS — piattaforma indipendente di ispezione immobiliare in Portogallo.",
                ctaLabel: "→ Prenota un’ispezione su InspectOS.pt",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            },
            {
                eyebrow: "Dubbi",
                title: "Contattaci prima di prenotare",
                body: `Per dubbi su quale servizio sia più adatto alla tua situazione, puoi contattarci prima: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Scrivi a ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            }
        ],
        coverageTitle: "Copertura geografica",
        coverageBody: "Attualmente disponibile in Lisbona, Porto, Setúbal, Cascais, Sintra, Braga e Algarve (Faro, Lagos, Albufeira). Copertura in espansione — verifica la disponibilità per la tua zona.",
        pricingTitle: "Nota sui prezzi",
        pricingBody: "I prezzi indicati sono intervalli orientativi basati sulla dimensione e sulla complessità dell’abitazione. Il prezzo finale viene confermato dopo il contatto iniziale e prima di qualsiasi impegno. Non esiste una tariffa di diagnosi separata: il costo totale dell’ispezione coincide con il prezzo del servizio.",
        disclosureText: "MoldCheck.pt è un’iniziativa del FAIRBANK Group, l’azienda dietro InspectOS. Non vendiamo trattamenti contro l’umidità. Non riceviamo commissioni da imprese di bonifica. Quando raccomandiamo un’ispezione o un’analisi di laboratorio, è perché riteniamo che tu ne abbia bisogno — non perché traiamo profitto dal trattamento successivo."
    },
    es: {
        eyebrow: "Inspección independiente",
        title: "Inspección independiente de humedad y moho en Portugal",
        description: "Diagnóstico independiente, análisis de laboratorio y monitorización explicados con claridad, sin la lógica comercial del tratamiento.",
        independentParagraphs: [
            "En Portugal, el diagnóstico de los problemas de humedad y moho casi siempre lo realiza la empresa que después venderá el tratamiento. El diagnóstico gratuito es el inicio de un embudo comercial — no un servicio de información imparcial.",
            "Una inspección independiente funciona de forma distinta. El inspector cobra por su tiempo. No recibe comisión de la empresa de remediación, del fabricante del sistema de ventilación ni de ninguna otra empresa que pueda beneficiarse del resultado del diagnóstico. Su único interés es decirte con precisión qué tienes.",
            "Este es el modelo que representa InspectOS — y el único modelo que MoldCheck.pt recomienda."
        ],
        howItWorksTitle: "Cómo funciona",
        howItWorksBody: "Las inspecciones son realizadas por inspectores certificados de InspectOS equipados con:\n\nhigrómetro digital de precisión — medición de humedad relativa del aire y temperatura\n\nmedidor de humedad de materiales (moisture meter) — medición no invasiva del contenido de humedad en paredes, suelos y techos\n\ncámara termográfica — detección de puentes térmicos, infiltraciones ocultas y zonas de condensación invisibles a simple vista\n\ncapacidad de toma de muestras — superficies, materiales y aire, para análisis de laboratorio cuando sea necesario\n\nDespués de la inspección, recibes un informe escrito con: localización y extensión del problema, causa probable, recomendaciones basadas en evidencia científica e indicación clara de cuándo un análisis de laboratorio es o no necesario.\n\nEl informe no incluye un presupuesto de tratamiento. No recomendamos empresas concretas de saneamiento. No tenemos ningún acuerdo comercial con empresas de remediación.",
        servicesTitle: "Servicios disponibles",
        tier1Cards: [
            {
                eyebrow: "NIVEL 1 — Inspección visual e instrumental",
                title: "Inspección estándar",
                body: "Inspección completa de la vivienda con higrómetro, medidor de humedad y cámara termográfica. Incluye informe escrito.\n\nPrecio orientativo: €250–€400 (vivienda de hasta 100 m²) | €400–€800 (vivienda de hasta 250 m²)"
            },
            {
                eyebrow: "NIVEL 1 — Inspección visual e instrumental",
                title: "Inspección precompra",
                body: "Para quien esté considerando comprar una vivienda y quiera saber exactamente qué tiene antes de firmar. Incluye informe utilizable para negociación o desistimiento de promesa de compra.\n\nPrecio orientativo: €350–€600"
            },
            {
                eyebrow: "NIVEL 1 — Inspección visual e instrumental",
                title: "Inspección postinundación / emergencia",
                body: "Para viviendas afectadas por inundación, rotura de tuberías o infiltración repentina. Enfocada en la evaluación de daños por agua y riesgo de contaminación fúngica. Respuesta rápida disponible.\n\nPrecio orientativo: €300–€500"
            },
            {
                eyebrow: "NIVEL 1 — Inspección visual e instrumental",
                title: "Verificación postremediación",
                body: "Confirmación independiente de que una obra de saneamiento se ha ejecutado correctamente y que el problema está realmente resuelto — antes de pagar el importe final a la empresa.\n\nPrecio orientativo: €200–€350"
            }
        ],
        tier2Cards: [
            {
                eyebrow: "NIVEL 2 — Análisis de laboratorio",
                title: "Muestreo de aire + análisis micológico",
                body: "Cuando la inspección visual e instrumental no es suficiente para identificar las especies presentes o cuantificar el riesgo con precisión, recomendamos análisis de laboratorio.\n\nToma de muestras de aire interior y exterior con análisis en laboratorio certificado ISO 17025. Identifica las especies fúngicas presentes y compara las concentraciones interior/exterior.\n\nPrecio orientativo: €500–€900 (incluye inspección, toma de muestras y análisis)"
            },
            {
                eyebrow: "NIVEL 2 — Análisis de laboratorio",
                title: "Muestreo de superficies y materiales",
                body: "Toma de muestras de superficies visibles y, cuando procede, de materiales de construcción. Adecuado para la identificación de especies en puntos específicos de interés.\n\nPrecio orientativo: €300–€600"
            }
        ],
        tier3Cards: [
            {
                eyebrow: "NIVEL 3 — Análisis especializado internacional",
                title: "ERMI (Environmental Relative Moldiness Index)",
                body: "Para situaciones que requieren un diagnóstico de precisión — especialmente sospecha de Stachybotrys, historial de daños graves por agua o casos con síntomas de salud persistentes.\n\nAnálisis del polvo acumulado mediante MSqPCR — el método más sensible disponible para detectar historial de contaminación fúngica, incluidas especies difíciles de detectar mediante muestreo de aire. Enviado a laboratorio colaborador en Estados Unidos.\n\nPrecio orientativo: €600–€900"
            },
            {
                eyebrow: "NIVEL 3 — HERTSMI-2",
                title: "HERTSMI-2",
                body: "Versión simplificada del ERMI centrada en las 5 especies clínicamente más relevantes: Stachybotrys chartarum, Aspergillus penicillioides, Aspergillus versicolor, Chaetomium globosum, Wallemia sebi. Desarrollado específicamente para evaluación clínica en contexto de CIRS / enfermedades relacionadas con edificios.\n\n⚠️ Nota importante: MoldCheck.pt / InspectOS es el único proveedor de servicios HERTSMI-2 en la Península Ibérica y, hasta donde sabemos, en toda Europa. El laboratorio de referencia para esta prueba es Mycometrics (EE. UU.).\n\nPrecio orientativo: €450–€700",
                tone: "warning"
            },
            {
                eyebrow: "NIVEL 3 — Análisis especializado internacional",
                title: "Panel de micotoxinas en superficies",
                body: "Análisis químico de micotoxinas en muestras de superficie. Relevante cuando existe sospecha de producción de toxinas e impacto en la salud.\n\nPrecio orientativo: €700–€1.200"
            },
            {
                eyebrow: "NIVEL 3 — Análisis especializado internacional",
                title: "Microbioma completo del edificio (NGS)",
                body: "Secuenciación genómica de nueva generación — identificación integral de todos los hongos y bacterias presentes. El diagnóstico más completo disponible para edificios con historial complejo de daños por agua.\n\nPrecio orientativo: €1.000–€1.500"
            }
        ],
        tier4Cards: [
            {
                eyebrow: "NIVEL 4 — Monitorización continua",
                title: "Sensor de calidad del aire interior + seguimiento",
                body: "Instalación de sensor de monitorización continua (CO₂, TVOC, temperatura, humedad relativa). Informe mensual con análisis de tendencias. Adecuado para viviendas con problemas recurrentes o para seguimiento postremediación.\n\nPrecio orientativo: €150–€300 (instalación) + €25–€60/mes"
            },
            {
                eyebrow: "NIVEL 4 — Monitorización continua",
                title: "Reinspección anual",
                body: "Para viviendas con historial de problemas de humedad. Visita anual para evaluación de condiciones y detección temprana de recurrencias.\n\nPrecio orientativo: €180–€280/año"
            }
        ],
        bookingTitle: "Cómo reservar",
        bookingCards: [
            {
                eyebrow: "Reserva",
                title: "Reservar a través de InspectOS",
                body: "Las inspecciones se realizan a través de InspectOS — plataforma independiente de inspección inmobiliaria en Portugal.",
                ctaLabel: "→ Reservar una inspección en InspectOS.pt",
                ctaHref: "https://inspectos.pt",
                openInNewTab: true
            },
            {
                eyebrow: "Dudas",
                title: "Contáctanos antes de reservar",
                body: `Si tienes dudas sobre qué servicio se adapta mejor a tu situación, puedes contactarnos primero: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaLabel: `Escribir a ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`,
                ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
            }
        ],
        coverageTitle: "Cobertura geográfica",
        coverageBody: "Actualmente disponible en Lisboa, Oporto, Setúbal, Cascais, Sintra, Braga y Algarve (Faro, Lagos, Albufeira). Cobertura en expansión — consulta disponibilidad para tu zona.",
        pricingTitle: "Nota sobre precios",
        pricingBody: "Los precios indicados son rangos orientativos basados en el tamaño y la complejidad de la vivienda. El precio final se confirma tras el contacto inicial y antes de cualquier compromiso. No existe una tasa de diagnóstico separada: el coste total de la inspección es el precio del servicio.",
        disclosureText: "MoldCheck.pt es una iniciativa del FAIRBANK Group, la empresa detrás de InspectOS. No vendemos tratamientos contra la humedad. No recibimos comisiones de empresas de remediación. Cuando recomendamos una inspección o un análisis de laboratorio, es porque creemos que lo necesitas — no porque ganemos dinero con el tratamiento posterior."
    }
};
function getServicesFallbackContent(locale) {
    const content = servicesContentByLocale[locale];
    if (!content) {
        throw new Error(`Missing services fallback content for locale: ${locale}`);
    }
    return {
        pageKey: "services",
        language: locale,
        translationGroup: "services",
        title: content.title,
        eyebrow: content.eyebrow,
        description: content.description,
        body: paragraphsToBlocks(content.independentParagraphs),
        introLayout: "grid",
        introCards: [
            {
                eyebrow: locale === "pt" ? "Como funciona" : locale === "en" ? "How it works" : locale === "fr" ? "Comment cela fonctionne" : locale === "de" ? "Wie es funktioniert" : locale === "nl" ? "Hoe het werkt" : locale === "it" ? "Come funziona" : "Cómo funciona",
                title: content.howItWorksTitle,
                body: content.howItWorksBody,
                tone: "featured"
            }
        ],
        sections: [
            {
                title: content.servicesTitle,
                tone: "band",
                layout: "utility",
                cards: content.tier1Cards
            },
            {
                title: locale === "pt" ? "NÍVEL 2 — Análise Laboratorial (laboratório europeu)" : locale === "en" ? "TIER 2 — Laboratory Analysis (European laboratory)" : locale === "fr" ? "NIVEAU 2 — Analyse en laboratoire (laboratoire européen)" : locale === "de" ? "STUFE 2 — Laboranalyse (europäisches Labor)" : locale === "nl" ? "NIVEAU 2 — Laboratoriumanalyse (Europees laboratorium)" : locale === "it" ? "LIVELLO 2 — Analisi di laboratorio (laboratorio europeo)" : "NIVEL 2 — Análisis de laboratorio (laboratorio europeo)",
                layout: "utility",
                cards: content.tier2Cards
            },
            {
                title: locale === "pt" ? "NÍVEL 3 — Análise Especializada Internacional" : locale === "en" ? "TIER 3 — Specialist International Analysis" : locale === "fr" ? "NIVEAU 3 — Analyse spécialisée internationale" : locale === "de" ? "STUFE 3 — Spezialisierte internationale Analyse" : locale === "nl" ? "NIVEAU 3 — Gespecialiseerde internationale analyse" : locale === "it" ? "LIVELLO 3 — Analisi specialistica internazionale" : "NIVEL 3 — Análisis especializado internacional",
                layout: "utility",
                cards: content.tier3Cards
            },
            {
                title: locale === "pt" ? "NÍVEL 4 — Monitorização Contínua" : locale === "en" ? "TIER 4 — Continuous Monitoring" : locale === "fr" ? "NIVEAU 4 — Surveillance continue" : locale === "de" ? "STUFE 4 — Kontinuierliche Überwachung" : locale === "nl" ? "NIVEAU 4 — Continue monitoring" : locale === "it" ? "LIVELLO 4 — Monitoraggio continuo" : "NIVEL 4 — Monitorización continua",
                layout: "utility",
                cards: content.tier4Cards
            },
            {
                title: content.bookingTitle,
                layout: "utility",
                cards: content.bookingCards
            },
            {
                title: content.coverageTitle,
                layout: "utility",
                cards: [
                    {
                        title: content.coverageTitle,
                        body: content.coverageBody
                    }
                ]
            },
            {
                title: content.pricingTitle,
                layout: "utility",
                cards: [
                    {
                        title: content.pricingTitle,
                        body: content.pricingBody
                    }
                ]
            }
        ],
        disclosureTitle: locale === "pt" ? "Disclosure final" : locale === "en" ? "Final disclosure" : locale === "fr" ? "Disclosure final" : locale === "de" ? "Abschließender Disclosure-Hinweis" : locale === "nl" ? "Einddisclosure" : locale === "it" ? "Disclosure finale" : "Disclosure final",
        disclosureText: content.disclosureText
    };
}
}),
"[project]/src/features/content/data/globalPages.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultGlobalPageContent",
    ()=>getDefaultGlobalPageContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$aboutContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/aboutContent.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$homeContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/homeContent.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$privacyContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/privacyContent.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$servicesContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/servicesContent.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function buildGlobalPageDefaults(locale) {
    return {
        home: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$homeContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHomeFallbackContent"])(locale),
        about: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$aboutContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAboutFallbackContent"])(locale),
        services: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$servicesContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServicesFallbackContent"])(locale),
        privacy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$privacyContent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPrivacyFallbackContent"])(locale),
        contact: {
            pageKey: "contact",
            language: locale,
            translationGroup: "contact",
            title: "Contact",
            eyebrow: "Editorial and operational contact",
            description: "This page is prepared for a calm split between editorial contact, professional enquiries and redirects to external operational booking when needed.",
            introLayout: "utility",
            introCards: [
                {
                    eyebrow: "Editorial",
                    title: "General and editorial enquiries",
                    body: `Prepared for ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail} and a lightweight multilingual contact form.`,
                    ctaLabel: "Contact editorial team",
                    ctaHref: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].contactEmail}`
                },
                {
                    eyebrow: "Operations",
                    title: "Inspection bookings should move to the right channel",
                    body: "Prepared for restrained handoff messaging to InspectOS when a booking request is appropriate."
                }
            ],
            sections: []
        },
        tools: {
            pageKey: "tools",
            language: locale,
            translationGroup: "tools",
            title: "Tools",
            eyebrow: "Editorial utilities",
            description: "Interactive tools should behave like rigorous editorial utilities: calm, precise and supportive of informed decisions.",
            introLayout: "utility",
            introCards: [
                {
                    eyebrow: "Risk assessment",
                    title: "Room-by-room evaluator",
                    body: "Prepared for a structured household risk tool with editorial framing and result bands."
                },
                {
                    eyebrow: "Humidity logging",
                    title: "Monitoring utility",
                    body: "Prepared for instrument-based tracking and seasonal monitoring workflows."
                },
                {
                    eyebrow: "Lab selection",
                    title: "Testing helper",
                    body: "Prepared for choosing between inspection, air sampling, ERMI and HERTSMI-2."
                }
            ],
            sections: [],
            disclosureTitle: "Utilities should remain publication-first",
            disclosureText: "Tools are here to organise evidence and explain thresholds. They should not behave like lead traps or panic funnels."
        },
        shop: {
            pageKey: "shop",
            language: locale,
            translationGroup: "shop",
            title: "Shop",
            eyebrow: "Editorial commerce layer",
            description: "Inspections, laboratory workflows and digital resources can live inside the same publication system without turning the site into a sales landing page.",
            introLayout: "utility",
            introCards: [
                {
                    eyebrow: "Commercial layer",
                    title: "Calm options before checkout",
                    body: "The shop should feel like a careful extension of the publication: clear options, restrained emphasis and visible independence before payment."
                }
            ],
            sections: [],
            disclosureTitle: "Commercial layer, editorial tone",
            disclosureText: "The shop should feel like a careful extension of the publication: clear options, restrained emphasis and visible independence before payment."
        }
    };
}
function getDefaultGlobalPageContent(locale, pageKey) {
    return buildGlobalPageDefaults(locale)[pageKey];
}
}),
"[project]/src/lib/sanity/pages.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildGlobalPageMetadata",
    ()=>buildGlobalPageMetadata,
    "getGlobalPageContent",
    ()=>getGlobalPageContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locales.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$globalPages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/data/globalPages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/routing/paths.ts [app-rsc] (ecmascript)");
;
;
;
;
async function getGlobalPageContent(locale, pageKey) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$data$2f$globalPages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultGlobalPageContent"])(locale, pageKey);
}
async function buildGlobalPageMetadata(locale, pageKey) {
    const page = await getGlobalPageContent(locale, pageKey);
    return {
        title: page.seoTitle ?? page.title,
        description: page.seoDescription ?? page.description ?? page.heroBody ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name,
        alternates: {
            canonical: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlobalPath"])(locale, pageKey),
            languages: Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["activeLocales"].map((item)=>[
                    item,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$routing$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlobalPath"])(item, pageKey)
                ]))
        }
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
"[project]/src/app/(site)/[locale]/about/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$components$2f$GlobalPageBlocks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/content/components/GlobalPageBlocks.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sanity/pages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PageShell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/PageShell.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function AboutPage({ params }) {
    const { locale } = await params;
    const page = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlobalPageContent"])(locale, "about");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PageShell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageShell"], {
                eyebrow: page.eyebrow,
                title: page.title,
                description: page.description
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/[locale]/about/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$content$2f$components$2f$GlobalPageBlocks$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlobalPageBlocks"], {
                page: page
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/[locale]/about/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/(site)/[locale]/about/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(site)/[locale]/about/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__17642cc2._.js.map
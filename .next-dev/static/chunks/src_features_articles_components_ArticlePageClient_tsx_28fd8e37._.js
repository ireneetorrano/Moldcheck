(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/articles/components/ArticlePageClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticlePageClient",
    ()=>ArticlePageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$articles$2f$context$2f$ArticleLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/articles/context/ArticleLocaleContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
// Render body paragraphs, injecting id anchors on ## headings
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
                    lineNumber: 40,
                    columnNumber: 13
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "article-page__para",
                children: para
            }, i, false, {
                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                lineNumber: 46,
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
                        lineNumber: 65,
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
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "faq-item__answer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: answer
                }, void 0, false, {
                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(FaqItem, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c1 = FaqItem;
function ArticlePageClient(param) {
    let { locale, content, sectionLabel, tocTitle, tocItems, slugsByLocale, uiLabels } = param;
    _s1();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tocVisible, setTocVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const articleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Show TOC after scrolling ~200px into the article
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticlePageClient.useEffect": ()=>{
            const onScroll = {
                "ArticlePageClient.useEffect.onScroll": ()=>{
                    const scrollY = window.scrollY;
                    setTocVisible(scrollY > 200);
                }
            }["ArticlePageClient.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "ArticlePageClient.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["ArticlePageClient.useEffect"];
        }
    }["ArticlePageClient.useEffect"], []);
    // Section spy: track which anchor is in view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticlePageClient.useEffect": ()=>{
            const ids = tocItems.map({
                "ArticlePageClient.useEffect.ids": (t)=>t.id
            }["ArticlePageClient.useEffect.ids"]);
            const observers = [];
            const callback = {
                "ArticlePageClient.useEffect.callback": (entries)=>{
                    for (const entry of entries){
                        if (entry.isIntersecting) {
                            setActiveId(entry.target.id);
                        }
                    }
                }
            }["ArticlePageClient.useEffect.callback"];
            ids.forEach({
                "ArticlePageClient.useEffect": (id)=>{
                    const el = document.getElementById(id);
                    if (!el) return;
                    const obs = new IntersectionObserver(callback, {
                        rootMargin: "-20% 0px -70% 0px",
                        threshold: 0
                    });
                    obs.observe(el);
                    observers.push(obs);
                }
            }["ArticlePageClient.useEffect"]);
            return ({
                "ArticlePageClient.useEffect": ()=>observers.forEach({
                        "ArticlePageClient.useEffect": (o)=>o.disconnect()
                    }["ArticlePageClient.useEffect"])
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
                            lineNumber: 145,
                            columnNumber: 9
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
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 146,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                    lineNumber: 141,
                    columnNumber: 7
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
                                    lineNumber: 165,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "article-page__title",
                                    children: content.title
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                    lineNumber: 166,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "article-page__byline",
                                    children: content.byline
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                    lineNumber: 167,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 164,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "article-page__body",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleBody, {
                                paragraphs: content.body
                            }, void 0, false, {
                                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 170,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "article-page__disclosure",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "article-page__disclosure-label",
                                    children: uiLabels.disclosure
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                    lineNumber: 176,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: content.disclosure
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                    lineNumber: 177,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 175,
                            columnNumber: 9
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
                                    lineNumber: 182,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "article-page__sources-list",
                                    children: content.sources.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: src.label
                                        }, i, false, {
                                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                    lineNumber: 183,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 181,
                            columnNumber: 9
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
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    content.faq.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                                            question: item.question,
                                            answer: item.answer
                                        }, i, false, {
                                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                            lineNumber: 191,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
                    lineNumber: 163,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
            lineNumber: 139,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/articles/components/ArticlePageClient.tsx",
        lineNumber: 138,
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

//# sourceMappingURL=src_features_articles_components_ArticlePageClient_tsx_28fd8e37._.js.map
module.exports = [
"[project]/src/components/layout/TrustBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrustBar",
    ()=>TrustBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// Pause at the centered resting position (ms)
const PAUSE_MS = 2500;
// Scroll speed px/s — slow and premium
const SPEED = 38;
// Empty gap between end of one sentence and start of the next (px)
const GAP = 320;
function TrustBar({ text }) {
    const label = text.toUpperCase();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const copyARef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const copyBRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const runningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        const container = containerRef.current;
        const copyA = copyARef.current;
        const copyB = copyBRef.current;
        if (!section || !container || !copyA || !copyB) return;
        // centeredX: X that places copyA perfectly centered in the container
        let centeredX = 0;
        // cycleLength: distance copyA travels before returning to centeredX.
        // Using textWidth + GAP means copyB is always exactly (textWidth + GAP) px
        // to the right of copyA — so as copyA exits left, copyB enters right simultaneously.
        let cycleLength = 0;
        const measure = ()=>{
            const cw = container.offsetWidth;
            const tw = copyA.offsetWidth;
            // Account for horizontal padding so centering is relative to the
            // padded content area, not the raw track edge
            const style = getComputedStyle(container);
            const pl = parseFloat(style.paddingLeft) || 0;
            const pr = parseFloat(style.paddingRight) || 0;
            const innerWidth = cw - pl - pr;
            centeredX = pl + (innerWidth - tw) / 2;
            cycleLength = tw + GAP;
        };
        // offset=0 → copyA centered, copyB is (tw + GAP) px to the right (off-screen)
        const place = (offset)=>{
            const aX = centeredX - offset;
            const bX = centeredX + cycleLength - offset;
            copyA.style.transform = `translateX(${aX}px) translateY(-50%)`;
            copyB.style.transform = `translateX(${bX}px) translateY(-50%)`;
        };
        measure();
        place(0);
        let state = "pause";
        let pauseStart = 0;
        let scrollStart = 0;
        let offset = 0;
        const tick = (now)=>{
            if (!runningRef.current) return;
            if (state === "pause") {
                if (pauseStart === 0) pauseStart = now;
                if (now - pauseStart >= PAUSE_MS) {
                    state = "scroll";
                    scrollStart = now;
                    pauseStart = 0;
                }
                place(offset);
            } else {
                const elapsed = now - scrollStart;
                offset = elapsed * (SPEED / 1000);
                if (offset >= cycleLength) {
                    // copyA is back at centeredX — seamless return, no visible jump
                    offset = 0;
                    state = "pause";
                    pauseStart = 0;
                }
                place(offset);
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        const start = ()=>{
            if (runningRef.current) return;
            runningRef.current = true;
            offset = 0;
            state = "pause";
            pauseStart = 0;
            place(0);
            rafRef.current = requestAnimationFrame(tick);
        };
        const io = new IntersectionObserver((entries)=>{
            if (entries[0].isIntersecting) {
                start();
                io.disconnect();
            }
        }, {
            threshold: 0.5
        });
        io.observe(section);
        const ro = new ResizeObserver(()=>{
            measure();
            place(offset);
        });
        ro.observe(container);
        return ()=>{
            runningRef.current = false;
            cancelAnimationFrame(rafRef.current);
            io.disconnect();
            ro.disconnect();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "home-trust-bar",
        "aria-label": "Trust statement",
        ref: sectionRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home-trust-bar__track",
            ref: containerRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "home-trust-bar__item",
                    ref: copyARef,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/TrustBar.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "home-trust-bar__item",
                    ref: copyBRef,
                    "aria-hidden": "true",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/TrustBar.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/TrustBar.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/TrustBar.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_layout_TrustBar_tsx_915c087d._.js.map
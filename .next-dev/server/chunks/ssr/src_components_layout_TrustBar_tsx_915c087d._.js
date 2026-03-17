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
// How long to pause at the centered resting position (ms)
const PAUSE_MS = 2500;
// Scroll speed in px/s — slow and premium
const SPEED = 38;
// Gap between the end of the outgoing sentence and the start of the incoming one (px)
// Must be large enough that the two copies never touch while one is visible
const GAP = 400;
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
        // centeredX: the X position that places copyA perfectly centered in the container
        let centeredX = 0;
        // cycleLength: how far copyA must travel before it is back at centeredX
        // = containerWidth + GAP + textWidth  (full loop distance)
        let cycleLength = 0;
        const measure = ()=>{
            const cw = container.offsetWidth;
            const tw = copyA.offsetWidth;
            centeredX = (cw - tw) / 2;
            // copyB sits exactly one "cycle" to the right of copyA
            cycleLength = cw + GAP + tw;
        };
        // Place both copies given a current offset from the resting position.
        // offset=0 → copyA is centered, copyB is fully off-screen to the right.
        const place = (offset)=>{
            const aX = centeredX - offset;
            const bX = centeredX + cycleLength - offset;
            copyA.style.transform = `translateX(${aX}px) translateY(-50%)`;
            copyB.style.transform = `translateX(${bX}px) translateY(-50%)`;
        };
        measure();
        place(0); // initial resting state: copyA centered, copyB hidden right
        let state = "pause";
        let pauseStart = 0;
        let scrollStart = 0;
        let offset = 0; // distance scrolled from the resting position
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
                    // Full cycle complete — snap back to resting position without a visible jump
                    // because at offset === cycleLength, copyA is exactly back at centeredX
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
        // Only start when the bar enters the viewport
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
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "home-trust-bar__item",
                    ref: copyBRef,
                    "aria-hidden": "true",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/TrustBar.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/TrustBar.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/TrustBar.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_layout_TrustBar_tsx_915c087d._.js.map
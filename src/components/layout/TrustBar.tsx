"use client";

import { useEffect, useRef } from "react";

// Pause at the centered resting position (ms)
const PAUSE_MS = 2500;
// Scroll speed px/s — slow and premium
const SPEED = 38;
// Empty gap between end of one sentence and start of the next (px)
const GAP = 320;

export function TrustBar({ text }: { text: string }) {
  const label = text.toUpperCase();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const copyARef = useRef<HTMLSpanElement>(null);
  const copyBRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);
  const runningRef = useRef(false);

  useEffect(() => {
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

    const measure = () => {
      const cw = container.offsetWidth;
      const tw = copyA.offsetWidth;
      centeredX = (cw - tw) / 2;
      cycleLength = tw + GAP;
    };

    // offset=0 → copyA centered, copyB is (tw + GAP) px to the right (off-screen)
    const place = (offset: number) => {
      const aX = centeredX - offset;
      const bX = centeredX + cycleLength - offset;
      copyA.style.transform = `translateX(${aX}px) translateY(-50%)`;
      copyB.style.transform = `translateX(${bX}px) translateY(-50%)`;
    };

    measure();
    place(0);

    let state: "pause" | "scroll" = "pause";
    let pauseStart = 0;
    let scrollStart = 0;
    let offset = 0;

    const tick = (now: number) => {
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

    const start = () => {
      if (runningRef.current) return;
      runningRef.current = true;
      offset = 0;
      state = "pause";
      pauseStart = 0;
      place(0);
      rafRef.current = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          start();
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(section);

    const ro = new ResizeObserver(() => {
      measure();
      place(offset);
    });
    ro.observe(container);

    return () => {
      runningRef.current = false;
      cancelAnimationFrame(rafRef.current);
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <section className="home-trust-bar" aria-label="Trust statement" ref={sectionRef}>
      <div className="home-trust-bar__track" ref={containerRef}>
        <span className="home-trust-bar__item" ref={copyARef}>{label}</span>
        <span className="home-trust-bar__item" ref={copyBRef} aria-hidden="true">{label}</span>
      </div>
    </section>
  );
}

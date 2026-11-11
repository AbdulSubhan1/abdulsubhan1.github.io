"use client";

import { useEffect, useRef, useState } from "react";

export type RevealPart = { text: string; highlight?: boolean };

/**
 * A paragraph whose words light up one by one as it scrolls through the screen. Highlighted parts light up in
 * the brand colour. With reduced motion, the whole paragraph is shown at once.
 */
export function ScrollReveal({ parts, className }: { parts: RevealPart[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = parts.flatMap((part) =>
    part.text
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => ({ word, highlight: !!part.highlight })),
  );
  // Everything is visible until JavaScript runs, so the text never depends on it
  const [lit, setLit] = useState(words.length);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Starts when the paragraph's top reaches 85% of the screen, ends when its bottom passes 60%,
      // so it is fully lit while still comfortably in view
      const progress = (vh * 0.85 - top) / (height + vh * 0.25);
      setLit(Math.round(Math.min(1, Math.max(0, progress)) * words.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [words.length]);

  return (
    <p ref={ref} className={className}>
      {words.map(({ word, highlight }, i) => (
        <span
          key={i}
          className={`transition-colors duration-300 ${
            i < lit ? (highlight ? "text-brand-strong" : "text-ink") : "text-ink/20"
          }`}
        >
          {word}{" "}
        </span>
      ))}
    </p>
  );
}

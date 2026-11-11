"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/** Smooth, slightly weighted scrolling for the whole site. Off for people who ask for reduced motion. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // anchors: in-page links (#projects) glide too, stopping below the sticky header
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: { offset: -80 } });
    return () => lenis.destroy();
  }, []);
  return null;
}

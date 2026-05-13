"use client";

import { useEffect } from "react";
import { TOTAL_SLIDES } from "@/lib/sections";
import { useLenisNav } from "@/context/LenisContext";

export function useKeyboardNav(activeIndex: number) {
  const { scrollToSection } = useLenisNav();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }

      if (e.key === "p" || e.key === "P") {
        if (!e.metaKey && !e.ctrlKey && !e.altKey) {
          window.print();
        }
      }

      if (e.key === "Home") {
        e.preventDefault();
        scrollToSection(0);
        return;
      }
      if (e.key === "End") {
        e.preventDefault();
        scrollToSection(TOTAL_SLIDES - 1);
        return;
      }

      if (e.key === "ArrowDown" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)) {
        e.preventDefault();
        const next = Math.min(TOTAL_SLIDES - 1, activeIndex + 1);
        scrollToSection(next);
        return;
      }

      if (e.key === "ArrowUp" || e.key === "PageUp" || (e.key === " " && e.shiftKey)) {
        e.preventDefault();
        const prev = Math.max(0, activeIndex - 1);
        scrollToSection(prev);
        return;
      }

      if (/^[1-9]$/.test(e.key)) {
        e.preventDefault();
        const n = Number(e.key);
        const idx = Math.min(TOTAL_SLIDES - 1, n - 1);
        scrollToSection(idx);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, scrollToSection]);
}

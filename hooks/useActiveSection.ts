"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useLenisNav } from "@/context/LenisContext";

export function useActiveSection() {
  const { sectionElementsRef } = useLenisNav();
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setupObserver = useCallback(() => {
    observerRef.current?.disconnect();

    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target, entry.intersectionRatio);
        });

        let bestIndex = 0;
        let bestRatio = 0;
        sectionElementsRef.current.forEach((el, i) => {
          if (!el) return;
          const r = ratios.get(el) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestIndex = i;
          }
        });

        if (bestRatio < 0.15) {
          let closest = 0;
          let closestDist = Infinity;
          const mid = window.innerHeight * 0.35;
          sectionElementsRef.current.forEach((el, i) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const d = Math.abs(rect.top - mid);
            if (d < closestDist) {
              closestDist = d;
              closest = i;
            }
          });
          setActiveIndex(closest);
        } else {
          setActiveIndex(bestIndex);
        }
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], rootMargin: "-10% 0px -45% 0px" }
    );

    sectionElementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
  }, [sectionElementsRef]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setupObserver());
    return () => {
      cancelAnimationFrame(id);
      observerRef.current?.disconnect();
    };
  }, [setupObserver]);

  return { activeIndex, refreshObserver: setupObserver };
}

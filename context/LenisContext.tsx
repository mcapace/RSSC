"use client";

import Lenis from "lenis";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";

type LenisContextValue = {
  scrollToSection: (index: number) => void;
  registerSection: (index: number, el: HTMLElement | null) => void;
  sectionElementsRef: React.MutableRefObject<(HTMLElement | null)[]>;
};

const LenisContext = createContext<LenisContextValue | null>(null);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number>(0);
  const sectionElementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const mountLenis = () => {
      const lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
      });
      lenisRef.current = lenis;
      const tick = (time: number) => {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      return lenis;
    };

    mountLenis();

    const onBeforePrint = () => {
      cancelAnimationFrame(rafRef.current);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };

    const onAfterPrint = () => {
      mountLenis();
    };

    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  const registerSection = useCallback((index: number, el: HTMLElement | null) => {
    sectionElementsRef.current[index] = el;
  }, []);

  const scrollToSection = useCallback((index: number) => {
    const el = sectionElementsRef.current[index];
    const lenis = lenisRef.current;
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: 0, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, []);

  const value = useMemo(
    () => ({
      scrollToSection,
      registerSection,
      sectionElementsRef,
    }),
    [scrollToSection, registerSection]
  );

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}

export function useLenisNav() {
  const ctx = useContext(LenisContext);
  if (!ctx) throw new Error("useLenisNav must be used within LenisProvider");
  return ctx;
}

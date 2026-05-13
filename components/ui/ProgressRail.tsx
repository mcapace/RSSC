"use client";

import clsx from "clsx";
import { SECTIONS } from "@/lib/sections";
import { useLenisNav } from "@/context/LenisContext";

type Props = {
  activeIndex: number;
};

export function ProgressRail({ activeIndex }: Props) {
  const { scrollToSection } = useLenisNav();

  return (
    <nav
      className="progress-rail pointer-events-auto fixed right-4 top-1/2 z-[40] hidden -translate-y-1/2 flex-col items-end gap-3 md:flex"
      aria-label="Slide navigation"
    >
      {SECTIONS.map((s, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={s.id}
            type="button"
            className={clsx(
              "group flex items-center gap-2 border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-gold/60",
              active ? "opacity-100" : "opacity-70"
            )}
            aria-label={`Jump to slide ${s.pageNumber}: ${s.navTitle}`}
            aria-current={active ? "true" : undefined}
            onClick={() => scrollToSection(i)}
          >
            <span
              className={clsx(
                "h-px bg-gold transition-[width,opacity] duration-300",
                active ? "w-6 opacity-100" : "w-3 opacity-40 group-hover:opacity-80"
              )}
            />
            <span
              className={clsx(
                "max-w-[120px] font-mono text-[0.55rem] uppercase leading-tight tracking-[0.18em] text-ivory transition-opacity",
                active ? "opacity-100" : "opacity-0 group-hover:opacity-80"
              )}
            >
              {s.navTitle}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

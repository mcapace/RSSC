"use client";

import clsx from "clsx";
import { SECTIONS, TOTAL_SLIDES } from "@/lib/sections";

type Props = {
  activeIndex: number;
  hideTopChrome?: boolean;
};

export function PersistentOverlay({ activeIndex, hideTopChrome }: Props) {
  const meta = SECTIONS[activeIndex];
  const page = String(meta.pageNumber).padStart(2, "0");
  const total = String(TOTAL_SLIDES).padStart(2, "0");

  return (
    <div
      className={clsx(
        "persistent-overlay pointer-events-none fixed inset-0 z-[35] text-ivory/60"
      )}
    >
      <div
        className={clsx(
          "absolute left-4 top-6 max-w-[min(88vw,20rem)] font-display text-sm italic leading-snug text-ivory/65 transition-opacity duration-500 sm:max-w-xs sm:text-base md:left-8 md:top-8",
          hideTopChrome && "opacity-0"
        )}
      >
        Regent Seven Seas Cruises
      </div>
      <div
        className={clsx(
          "absolute right-4 top-6 max-w-[min(52vw,14rem)] text-right font-mono text-[0.6rem] uppercase leading-snug tracking-[0.12em] text-ivory/65 transition-opacity duration-500 sm:max-w-[16rem] sm:text-[0.65rem] md:right-8 md:top-8 md:tracking-[0.14em]",
          hideTopChrome && "opacity-0"
        )}
      >
        M. SHANKEN COMMUNICATIONS
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg from-40% via-bg/85 to-transparent pb-3 pt-12 md:pb-4 md:pt-16">
        <div className="mx-auto grid max-w-deck-wide grid-cols-1 items-end gap-y-2 px-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] sm:gap-x-3 md:px-6">
          <div className="min-w-0 text-left font-body text-[0.8125rem] leading-snug text-ivory/65 sm:text-sm">
            <span className="block text-pretty">{meta.overlayName}</span>
          </div>
          <div className="min-w-0 text-center font-display text-[0.8125rem] leading-snug text-ivory/65 sm:text-base md:text-lg">
            <span className="block text-pretty">{meta.overlayTitle}</span>
          </div>
          <div className="min-w-0 text-left font-mono text-[0.6rem] tracking-[0.12em] text-ivory/55 sm:text-right sm:text-[0.65rem] md:tracking-[0.16em]">
            {page} / {total}
          </div>
        </div>
      </div>
    </div>
  );
}

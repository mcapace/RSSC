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
          "absolute left-4 top-6 max-w-[min(92vw,520px)] font-display text-[clamp(1.1rem,2.8vw,1.5rem)] italic text-ivory/60 transition-opacity duration-500 md:left-8 md:top-8",
          hideTopChrome && "opacity-0"
        )}
      >
        Regent Seven Seas Cruises
      </div>
      <div
        className={clsx(
          "absolute right-4 top-6 max-w-[min(52vw,280px)] text-right font-mono text-[0.65rem] uppercase leading-snug tracking-[0.18em] text-ivory/[0.7] transition-opacity duration-500 md:right-8 md:top-8 md:max-w-[min(40vw,320px)] md:text-[0.75rem] md:tracking-[0.25em]",
          hideTopChrome && "opacity-0"
        )}
      >
        M. SHANKEN COMMUNICATIONS
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg from-40% via-bg/85 to-transparent pb-4 pt-16 md:pb-5 md:pt-20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-end gap-y-3 px-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)] sm:gap-x-4 md:px-8">
          <div className="min-w-0 text-left font-body text-xs text-ivory/60 sm:text-sm">
            <span className="block break-words">{meta.overlayName}</span>
          </div>
          <div className="min-w-0 text-center font-display text-sm leading-snug text-ivory/60 sm:text-base md:text-lg">
            <span className="block break-words text-balance">{meta.overlayTitle}</span>
          </div>
          <div className="min-w-0 text-left font-mono text-[0.65rem] tracking-[0.18em] text-ivory/60 sm:text-right sm:text-xs md:tracking-[0.2em]">
            {page} / {total}
          </div>
        </div>
      </div>
    </div>
  );
}

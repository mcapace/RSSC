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
          "absolute left-8 top-8 font-display text-[1.5rem] italic text-ivory/60 transition-opacity duration-500",
          hideTopChrome && "opacity-0"
        )}
      >
        Regent Seven Seas Cruises
      </div>
      <div
        className={clsx(
          "absolute right-8 top-8 max-w-[min(40vw,320px)] text-right font-mono text-[0.75rem] uppercase tracking-[0.25em] text-ivory/[0.7] transition-opacity duration-500",
          hideTopChrome && "opacity-0"
        )}
      >
        M. SHANKEN COMMUNICATIONS
      </div>

      <div className="absolute bottom-8 left-8 max-w-[28vw] font-body text-sm text-ivory/60">
        {meta.overlayName}
      </div>
      <div className="absolute bottom-8 left-1/2 w-[min(90vw,520px)] -translate-x-1/2 text-center font-display text-lg text-ivory/60">
        {meta.overlayTitle}
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-xs tracking-[0.2em] text-ivory/60">
        {page} / {total}
      </div>
    </div>
  );
}

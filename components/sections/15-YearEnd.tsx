"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

export default function YearEnd15() {
  const meta = SECTIONS[14];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={14} id={meta.id} ariaLabel={meta.ariaLabel} className="relative overflow-x-hidden bg-bg">
      <div
        className="pointer-events-none absolute inset-0 blur-[200px]"
        style={{ background: "radial-gradient(circle at 70% 70%, rgba(201,169,97,0.15), transparent 55%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-16">
        <SectionLabel lines={["— MOVEMENT III · COMMIT · NOVEMBER · DECEMBER · 2026"]} />
        <div className="mt-6 max-w-4xl">
          <SplitTitle
            line1="The year ends on the page the reader reads twice."
            line2="November · December — Year-End Lists"
            sizeClass="text-[clamp(1.85rem,3.8vw,2.85rem)]"
            line2ClassName="text-[clamp(1.35rem,2.8vw,2rem)] italic text-gold"
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.article
            className="rounded-sm border border-gold/35 bg-surface/30 p-6"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold">WS Top 100 Wines — November</p>
            <p className="m-0 mt-2 font-body text-sm text-ivory/70 md:text-base">Booking Inquiries</p>
            <p className="m-0 mt-4 font-body text-sm leading-relaxed text-ivory/82 md:text-base">
              {
                "The biggest sponsorship week of Wine Spectator's year. 25% SOV against the franchise — where intent peaks."
              }
            </p>
            <p className="m-0 mt-6 font-display text-2xl italic text-gold">750K Impressions</p>
            <p className="m-0 mt-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/55">25% SOV</p>
          </motion.article>

          <motion.article
            className="rounded-sm border border-gold/35 bg-surface/30 p-6"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold">WA Top 20 Whiskies — December</p>
            <p className="m-0 mt-2 font-body text-sm text-ivory/70 md:text-base">Booking Inquiries</p>
            <p className="m-0 mt-4 font-body text-sm leading-relaxed text-ivory/82 md:text-base">
              {
                "Whisky Advocate's year-end finale. 25% SOV — Regent closes 2026 in the company of the world's most acquired bottles."
              }
            </p>
            <p className="m-0 mt-6 font-display text-2xl italic text-gold">250K Impressions</p>
            <p className="m-0 mt-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/55">25% SOV</p>
          </motion.article>
        </div>
      </div>
    </SectionFrame>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const specs = [
  { k: "Impressions", v: "600K" },
  { k: "Goal", v: "Lead Gen" },
  { k: "Format", v: "Custom" },
  { k: "Video", v: ":60 max" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function TheHub10() {
  const meta = SECTIONS[9];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={9} id={meta.id} ariaLabel={meta.ariaLabel} className="relative overflow-x-hidden bg-bg">
      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/8 blur-[90px]"
        aria-hidden
        animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.4] }}
        transition={reduce ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto grid min-h-0 w-full max-w-deck-wide items-start gap-10 md:grid-cols-[0.45fr_0.55fr] md:gap-12">
        <div className="space-y-6">
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.5, ease }}
          >
            <SectionLabel lines={["— ALWAYS-ON · THE HOME · JUN 15 → DEC 31 · 6.5 MONTHS"]} />
          </motion.div>
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            <SplitTitle
              line1="The hub at winespectator.com/regent."
              line2="A bespoke sponsored hub that holds the three pillars in one place — Voyage Map embedded, Sponsored Series serialized, Dram Diaries archived as it airs."
              sizeClass="text-deck-lede font-display font-medium text-ivory"
              line2ClassName="!not-italic text-gold/90"
            />
          </motion.div>
          <motion.div
            className="h-px max-w-md bg-gradient-to-r from-gold/60 to-transparent"
            aria-hidden
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, delay: 0.12, ease }}
            style={{ transformOrigin: "left center" }}
          />
          <motion.p
            className="m-0 max-w-prose font-body text-base leading-relaxed text-ivory/82"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.18, ease }}
          >
            {"The reader's standing destination, all six-and-a-half months."}
          </motion.p>
          <motion.p
            className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ivory/55"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.24, ease }}
          >
            SOP 100% · SOS 100%.
          </motion.p>
        </div>

        <div className="relative mx-auto w-full max-w-[640px]">
          <motion.div
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={reduce ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-md border border-gold/40 bg-surface/80 p-3 shadow-2xl"
            style={{ willChange: "transform" }}
          >
            <div className="flex items-center gap-2 px-2 pb-3 pt-1">
              <span className="inline-flex gap-1.5">
                <motion.span
                  className="h-2.5 w-2.5 rounded-full bg-red-400/70"
                  aria-hidden
                  initial={reduce ? { scale: 1 } : { scale: 0 }}
                  animate={reduce ? { scale: 1 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22, delay: 0.05 }}
                />
                <motion.span
                  className="h-2.5 w-2.5 rounded-full bg-amber-300/70"
                  aria-hidden
                  initial={reduce ? { scale: 1 } : { scale: 0 }}
                  animate={reduce ? { scale: 1 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22, delay: 0.12 }}
                />
                <motion.span
                  className="h-2.5 w-2.5 rounded-full bg-emerald-400/70"
                  aria-hidden
                  initial={reduce ? { scale: 1 } : { scale: 0 }}
                  animate={reduce ? { scale: 1 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22, delay: 0.19 }}
                />
              </span>
              <div className="ml-3 flex-1 rounded-sm border border-gold/25 bg-bg/80 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ivory/65">
                winespectator.com/regent
              </div>
            </div>

            <div className="space-y-3 rounded-sm border border-gold/20 bg-bg/60 p-3">
              <div className="flex items-center justify-between gap-2 border-b border-gold/15 pb-2">
                <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-gold/90">Voyage Map</span>
                <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ivory/45">Embedded</span>
              </div>
              <div className="h-24 rounded-sm bg-gradient-to-br from-gold/22 via-gold/8 to-transparent" />
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-sm border border-gold/20 bg-gold/10 px-2 py-3 text-center font-mono text-[0.5rem] uppercase leading-tight tracking-[0.12em] text-ivory/65">
                  Rare Spirits
                  <br />
                  Series
                </div>
                <div className="rounded-sm border border-gold/20 bg-gold/8 px-2 py-3 text-center font-mono text-[0.5rem] uppercase leading-tight tracking-[0.12em] text-ivory/65">
                  Dram
                  <br />
                  Diaries
                </div>
                <div className="rounded-sm border border-gold/20 bg-gold/12 px-2 py-3 text-center font-mono text-[0.5rem] uppercase leading-tight tracking-[0.12em] text-ivory/65">
                  Archive
                </div>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-2">
                <div className="h-28 rounded-sm bg-gold/10" />
                <div className="h-28 rounded-sm bg-gold/6" />
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {specs.map((s, si) => (
              <motion.div
                key={s.k}
                className="border border-gold/30 px-3 py-3"
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: reduce ? 0 : 0.07 * si, duration: 0.45, ease }}
              >
                <p className="m-0 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-ivory/55">{s.k}</p>
                <p className="m-0 mt-1 font-display text-lg italic text-gold">{s.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}

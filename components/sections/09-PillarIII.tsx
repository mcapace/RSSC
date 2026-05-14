"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const phases = [
  {
    title: "Phase 01 · Pre-Voyage — Anticipation.",
    body: "Two Reels + Stories — packing the tasting kit, the bottles he's bringing on board, what to drink before departure.",
  },
  {
    title: "Phase 02 · During Voyage — Validation.",
    body: "Real-time Stories from the ship — port-by-port tastings, on-deck dispatches, live from the cellar at sea.",
  },
  {
    title: "Phase 03 · Post-Voyage — Momentum.",
    body: "Five-week content series — one Reel + Story per week — keeping the voyage alive in feed and converting follower to booking.",
  },
];

export default function PillarIII09() {
  const meta = SECTIONS[8];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={8} id={meta.id} ariaLabel={meta.ariaLabel} className="relative overflow-x-hidden bg-bg">
      <motion.div
        className="pointer-events-none absolute bottom-24 left-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/8 blur-[96px]"
        aria-hidden
        animate={reduce ? undefined : { opacity: [0.25, 0.42, 0.3], scale: [1, 1.08, 1] }}
        transition={reduce ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-[1] mx-auto w-full max-w-deck">
        <SectionLabel lines={["— PILLAR III"]} />
        <div className="mt-6">
          <SplitTitle
            line1="Dram Diaries with Jonny McCormack."
            line2={"Whisky Advocate's most-read columnist boards Regent — and brings his readership with him."}
            line2ClassName="font-display font-medium italic text-gold"
          />
        </div>

        <motion.p
          className="mt-6 max-w-prose font-body text-base leading-relaxed text-ivory/85"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          A three-phase content arc that begins before he sails and ends a month after he docks.
        </motion.p>

        <p className="mt-6 m-0 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ivory/60">
          Jonny McCormack — Whisky Advocate · Senior Contributor
        </p>

        <div className="mt-10 space-y-8">
          {phases.map((ph, i) => (
            <motion.div
              key={ph.title}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.07 * i, duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-sm border border-gold/30 bg-surface/25 px-4 py-5"
            >
              <p className="m-0 font-display text-lg italic text-ivory md:text-xl">{ph.title}</p>
              <p className="m-0 mt-3 font-body text-sm leading-relaxed text-ivory/80 md:text-base">{ph.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold/90"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          13 social units · 5 weeks of post-voyage.
        </motion.p>
      </div>
    </SectionFrame>
  );
}

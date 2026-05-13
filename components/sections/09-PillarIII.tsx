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
    <SectionFrame index={8} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20">
        <SectionLabel lines={["— PILLAR III"]} />
        <div className="mt-6">
          <SplitTitle
            line1="Dram Diaries with Jonny McCormack."
            line2="Whisky Advocate's most-read columnist boards Regent — and brings his readership with him."
            sizeClass="text-[clamp(1.85rem,3.6vw,2.75rem)]"
            line2ClassName="text-[clamp(1.1rem,2.2vw,1.6rem)] italic text-gold"
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
              transition={{ delay: 0.07 * i, duration: 0.5 }}
              className="rounded-sm border border-gold/30 bg-surface/25 px-4 py-5"
            >
              <p className="m-0 font-display text-lg italic text-ivory md:text-xl">{ph.title}</p>
              <p className="m-0 mt-3 font-body text-sm leading-relaxed text-ivory/80 md:text-base">{ph.body}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold/90">13 social units · 5 weeks of post-voyage.</p>
      </div>
    </SectionFrame>
  );
}

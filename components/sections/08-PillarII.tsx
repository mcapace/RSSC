"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const chapters = [
  {
    title: "Chapter I — The Cellar at Sea.",
    body: "A master sommelier on stocking a cellar at altitude — and the bottles that travel.",
  },
  {
    title: "Chapter II — The Distillery Run.",
    body: "Three quiet days through Islay's eight distilleries — a port itinerary that drinks itself.",
  },
  {
    title: "Chapter III — The Rum Coast.",
    body: "Caribbean rum, slowly — distilleries from Martinique to Barbados, told the long way.",
  },
];

export default function PillarII08() {
  const meta = SECTIONS[7];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={7} id={meta.id} ariaLabel={meta.ariaLabel} className="relative overflow-x-hidden bg-bg">
      <motion.div
        className="pointer-events-none absolute -left-16 top-1/3 h-64 w-64 rounded-full bg-gold/10 blur-[80px]"
        aria-hidden
        animate={reduce ? undefined : { opacity: [0.28, 0.48, 0.32], y: [0, 14, 0] }}
        transition={reduce ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-[1] mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20">
        <SectionLabel lines={["— PILLAR II"]} />
        <div className="mt-6">
          <SplitTitle
            line1="Rare Spirits, Rare Destinations."
            line2="A three-part sponsored content series, written for the reader who reads twice."
            sizeClass="text-[clamp(2rem,4vw,3rem)]"
            line2ClassName="text-[clamp(1.15rem,2.3vw,1.7rem)] italic text-gold"
          />
        </div>

        <motion.p
          className="mt-6 max-w-prose font-body text-base leading-relaxed text-ivory/85"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          Each chapter pairs a Regent voyage with the rarefied bottle it deserves — interviewed, photographed, and unhurried.
        </motion.p>

        <div className="mt-12 space-y-8">
          {chapters.map((c, i) => (
            <motion.div
              key={c.title}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.07 * i, duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-gold/20 pb-8 last:border-0"
            >
              <p className="m-0 font-display text-xl italic text-ivory md:text-2xl">{c.title}</p>
              <p className="m-0 mt-3 font-body text-sm leading-relaxed text-ivory/80 md:text-base">{c.body}</p>
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
          Long-form · Expert voices · Hub residency.
        </motion.p>
      </div>
    </SectionFrame>
  );
}

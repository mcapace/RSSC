"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    title: "Pillar I — Interactive Voyage Map",
    body: "Destinations brought to life, port-by-port, paired with the spirit or wine that defines them.",
  },
  {
    title: "Pillar II — Sponsored Three-Part Series",
    body: '"Rare Spirits, Rare Destinations." Long-form sponsored content, written for the researcher and lived inside the Hub.',
  },
  {
    title: "Pillar III — Dram Diaries w/ Jonny McCormack",
    body: "A three-phase social documentary — pre-voyage, on-deck, and a five-week post-voyage arc.",
  },
];

export default function Architecture06() {
  const meta = SECTIONS[5];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={5} id={meta.id} ariaLabel={meta.ariaLabel} className="relative overflow-x-hidden bg-bg">
      <motion.div
        className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-gold/12 blur-[100px]"
        aria-hidden
        animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.38], x: [0, 12, 0] }}
        transition={reduce ? undefined : { duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-72 w-72 rounded-full bg-gold/10 blur-[90px]"
        aria-hidden
        animate={reduce ? undefined : { opacity: [0.28, 0.48, 0.32], y: [0, -16, 0] }}
        transition={reduce ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-[1] mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20">
        <SectionLabel lines={["— THE PROGRAM"]} />
        <div className="mt-8">
          <SplitTitle
            line1="The Program"
            line2="Three pillars, one season, one shared idea."
            sizeClass="text-[clamp(2.35rem,4.8vw,3.5rem)]"
            line2ClassName="text-[clamp(1.35rem,2.8vw,2rem)] italic text-gold"
          />
        </div>

        <motion.p
          className="mt-8 max-w-prose font-body text-lg leading-relaxed text-ivory/88"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease }}
        >
          Beneath the seven media moments runs a single creative architecture — three sponsored-content pillars that carry the Regent story from research, to
          anticipation, to bookmarked-for-life.
        </motion.p>

        <motion.div
          className="mt-6 h-px max-w-md bg-gradient-to-r from-gold/80 via-gold/30 to-transparent"
          aria-hidden
          initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, delay: 0.1, ease }}
          style={{ transformOrigin: "left center" }}
        />

        <div className="mt-14 space-y-10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 * i, duration: 0.55, ease }}
              className="overflow-hidden rounded-sm border border-gold/35 bg-bg/50 px-5 py-6"
            >
              <motion.div
                className="mb-3 h-0.5 w-full max-w-[min(100%,12rem)] bg-gold/60"
                aria-hidden
                initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.08 * i + 0.12, duration: 0.65, ease }}
                style={{ transformOrigin: "left center" }}
              />
              <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gold">{p.title}</p>
              <p className="m-0 mt-3 font-body text-base leading-relaxed text-ivory/82">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

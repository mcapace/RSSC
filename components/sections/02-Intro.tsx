"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const bullets = [
  "Position Regent as the definitive luxury expedition for collectors who plan itineraries around rare bottles and rare harbors.",
  "Earn the Whisky Advocate reader’s trust with editorial craft: long-form, expert voices, and a single hub that behaves like a residency, not a takeover.",
  "Sequence the story across the H2 window so each surge feels inevitable, each social unit feels earned, and year-end lists close the loop with proof.",
];

export default function Intro02() {
  const meta = SECTIONS[1];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={1} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="relative mx-auto flex min-h-0 max-w-5xl flex-col gap-12 px-6 py-16 md:flex-row md:items-start md:gap-16 md:px-12 md:py-20">
        <motion.div
          className="md:w-[42%]"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel lines={["— THE BRIEF"]} />
          <div className="mt-8">
            <SplitTitle
              line1="The Brief"
              line2="Partnership, in plain terms."
              sizeClass="text-[clamp(2.4rem,5vw,3.75rem)]"
              line2ClassName="text-[clamp(1.5rem,3vw,2.25rem)] italic text-gold"
            />
          </div>
        </motion.div>

        <motion.div
          className="min-w-0 flex-1 space-y-8 border-l border-gold/25 pl-0 md:border-l md:pl-10"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="m-0 font-body text-lg leading-relaxed text-ivory/85">
            M. Shanken Communications proposes an H2 2026 program that treats the partnership like a voyage: a plotted course, disciplined pacing, and
            moments of spectacle that never break the Regent luxury frame.
          </p>
          <ul className="m-0 list-none space-y-5 p-0">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1.5 h-px w-8 shrink-0 bg-gold/70" aria-hidden />
                <span className="font-body text-base leading-relaxed text-ivory/80">{b}</span>
              </li>
            ))}
          </ul>
          <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold-muted">
            Source: Regent Seven Seas × M. Shanken, H2 2026 program deck
          </p>
        </motion.div>
      </div>
    </SectionFrame>
  );
}

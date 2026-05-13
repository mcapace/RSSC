"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const blocks = [
  {
    k: "i. Reach",
    body: "An audience already self-selected for unhurried luxury, considered taste, and a passport stamped often.",
  },
  {
    k: "ii. Relevance",
    body: "Brand-safe environments where wine, whisky and worldly travel are the entire premise — not lifestyle adjacencies.",
  },
  {
    k: "iii. Rhythm",
    body: "Six-and-a-half months — three program pillars, supported by a seven-movement media sequence.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Intro02() {
  const meta = SECTIONS[1];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={1} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20">
        <SectionLabel lines={["— THE BRIEF"]} />
        <div className="mt-8">
          <SplitTitle line1="The Brief" sizeClass="text-[clamp(2.5rem,5vw,3.75rem)]" />
        </div>

        <motion.p
          className="mt-8 max-w-prose font-body text-xl leading-relaxed text-ivory/90"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease }}
        >
          Carry Regent&apos;s story into the homes of America&apos;s most discerning food &amp; drink readers.
        </motion.p>

        <motion.div
          className="mt-6 h-px max-w-lg bg-gradient-to-r from-gold/70 via-gold/25 to-transparent"
          aria-hidden
          initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, delay: 0.08, ease }}
          style={{ transformOrigin: "left center" }}
        />

        <div className="mt-12 space-y-10">
          {blocks.map((b, i) => (
            <motion.div
              key={b.k}
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.08 * i, duration: 0.55, ease }}
              className="border-l border-gold/40 pl-6"
            >
              <p className="m-0 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gold">{b.k}</p>
              <p className="m-0 mt-3 max-w-prose font-body text-base leading-relaxed text-ivory/85">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

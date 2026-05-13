"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const months = ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const movements = [
  "Always-On Hub — Voyage Map · Sponsored Series · 6.5 months",
  "New Season Launch — June",
  "Mid-Year Booking Surge — July–August",
  "World Cruise '29 Sneak Peek — July",
  "Prestige Winter Push — August",
  "Spotlight on Whisky LIVE — September",
  "Dram Diaries™ · McCormack — October",
  "WS Top 100 Wines — November",
  "WA Top 20 Whiskies — December",
];

export default function TheWindow04() {
  const meta = SECTIONS[3];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={3} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20">
        <SectionLabel lines={["— THE WINDOW"]} />
        <div className="mt-8">
          <SplitTitle
            line1="The Window"
            line2="A second-half campaign in seven movements."
            sizeClass="text-[clamp(2.35rem,4.8vw,3.5rem)]"
            line2ClassName="text-[clamp(1.35rem,2.8vw,2rem)] italic text-gold"
          />
        </div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-gold/90 md:gap-4"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6 }}
        >
          {months.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </motion.div>

        <ul className="mt-12 m-0 list-none space-y-4 p-0">
          {movements.map((line, i) => (
            <motion.li
              key={line}
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.04 * i, duration: 0.45 }}
              className="flex gap-3 border-b border-gold/15 pb-4 font-body text-sm leading-relaxed text-ivory/85 md:text-base"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" aria-hidden />
              <span>{line}</span>
            </motion.li>
          ))}
        </ul>

        <p className="mt-10 m-0 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ivory/55">15 Jun · 31 Dec 2026</p>
      </div>
    </SectionFrame>
  );
}

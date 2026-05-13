"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const months = ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const ease = [0.22, 1, 0.36, 1] as const;

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
          transition={{ duration: 0.5, ease }}
        >
          {months.map((m, mi) => (
            <motion.span
              key={m}
              initial={reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: reduce ? 0 : 0.04 * mi, duration: 0.42, ease }}
              className="inline-block rounded-sm px-1"
            >
              {m}
            </motion.span>
          ))}
        </motion.div>

        <ul className="mt-12 m-0 list-none space-y-4 p-0">
          {movements.map((line, i) => (
            <motion.li
              key={line}
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.05 * i, duration: 0.48, ease }}
              className="flex gap-3 border-b border-gold/15 pb-4 font-body text-sm leading-relaxed text-ivory/85 md:text-base"
            >
              <motion.span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60"
                aria-hidden
                initial={reduce ? { scale: 1 } : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.05 * i + 0.08, type: "spring", stiffness: 420, damping: 22 }}
              />
              <span>{line}</span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          className="mt-10 m-0 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ivory/55"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.12, ease }}
        >
          15 Jun · 31 Dec 2026
        </motion.p>
        <motion.div
          className="mt-4 h-px max-w-xs bg-gradient-to-r from-gold/70 via-gold/25 to-transparent"
          aria-hidden
          initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          style={{ transformOrigin: "left center" }}
        />
      </div>
    </SectionFrame>
  );
}

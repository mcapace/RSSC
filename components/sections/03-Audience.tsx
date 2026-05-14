"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const stats = [
  { label: "Median HHI", value: "$180K" },
  { label: "Median Age", value: "45" },
  { label: "Pageviews / Month", value: "5.5M" },
  { label: "Unique Visitors", value: "1.7M" },
];

export default function Audience03() {
  const meta = SECTIONS[2];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={2} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="relative mx-auto w-full max-w-deck-wide">
        <SectionLabel lines={["— THE AUDIENCE"]} />
        <div className="mt-8">
          <SplitTitle
            line1="The Audience"
            line2="Affluent epicureans, already on board."
            line2ClassName="font-display font-medium italic text-gold"
          />
        </div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.06 * i, duration: 0.5 }}
              className="border border-gold/35 px-4 py-4"
            >
              <p className="m-0 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ivory/55">{s.label}</p>
              <p className="m-0 mt-2 font-display text-2xl italic text-gold md:text-3xl">{s.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 space-y-6 border-t border-gold/25 pt-10"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="m-0 max-w-prose font-body text-base leading-relaxed text-ivory/85">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-gold">Gender skew</span>
            <span className="mx-2 text-ivory/50">—</span>
            67% Male / 33% Female
          </p>
          <p className="m-0 max-w-prose font-body text-base leading-relaxed text-ivory/85">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-gold">Target index, 30+</span>
            <span className="mx-2 text-ivory/50">—</span>
            68% Men · 34% Women
          </p>
          <p className="m-0 max-w-prose font-body text-base leading-relaxed text-ivory/85">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-gold">Social footprint</span>
            <span className="mx-2 text-ivory/50">—</span>
            Facebook 100K · Instagram 70K
          </p>
          <p className="m-0 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ivory/45">Source · GA4 Jan–Mar 2025 avg</p>

          <motion.div
            className="mt-10 border-t border-gold/25 pt-10"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold">Whisky Advocate · Events</p>
            <p className="m-0 mt-3 max-w-prose font-body text-base leading-relaxed text-ivory/85">
              {
                "WhiskyFest NYC · Nov 20, 2026 · reimagined, elevated tasting, in-app experience — on-site flagship for the WA reader between pours, seminars, and retail."
              }
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionFrame>
  );
}

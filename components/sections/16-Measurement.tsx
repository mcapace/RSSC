"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const lenses = [
  {
    title: "Lens i — Awareness.",
    owner: "Owner · M. Shanken AdOps",
    bullets: [
      "Net impressions vs. plan",
      "Viewability ≥ 70% (MOAT)",
      "Frequency 3–5×/wk on tentpoles",
    ],
  },
  {
    title: "Lens ii — Engagement.",
    owner: "Owner · Social team weekly",
    bullets: [
      "Page CTR · 0.04% display benchmark",
      "Reel completion + saves",
      "Story tap-through & swipe-up rate",
      "Voyage Map dwell + return visits",
    ],
  },
  {
    title: "Lens iii — Conversion.",
    owner: "Owner · Regent CRM + UTM",
    bullets: [
      "Hub lead-gen sign-ups",
      "WC '29 early-access registrations",
      "High-intent users flagged from Voyage Map",
      "Booking inquiries attributed to WS/WA",
    ],
  },
] as const;

export default function Measurement16() {
  const meta = SECTIONS[15];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={15} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:px-12 md:py-16">
        <div className="space-y-4">
          <SectionLabel lines={["— MEASUREMENT"]} />
          <SplitTitle
            line1="Measurement."
            line2="What success looks like."
            sizeClass="text-[clamp(2.2rem,4.2vw,3.25rem)]"
            line2ClassName="text-[clamp(1.4rem,2.8vw,2rem)] italic text-gold"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {lenses.map((lens, i) => (
            <motion.div
              key={lens.title}
              className="min-w-0 rounded-sm border border-gold/35 px-5 py-6"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.06 * i, duration: 0.5 }}
            >
              <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-gold">{lens.title}</p>
              <ul className="m-0 mt-4 list-none space-y-2 p-0 font-body text-sm leading-relaxed text-ivory/82">
                {lens.bullets.map((b) => (
                  <li key={b} className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-gold/70">
                    {b}
                  </li>
                ))}
              </ul>
              <p className="m-0 mt-5 border-t border-gold/20 pt-4 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-ivory/50">{lens.owner}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="m-0 rounded-sm border border-gold/30 bg-surface/25 px-4 py-4 font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.1em] text-ivory/65"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          MOAT · accepted · Avg newsletter open · 35% · Reporting · weekly + post-flight.
        </motion.p>
      </div>
    </SectionFrame>
  );
}

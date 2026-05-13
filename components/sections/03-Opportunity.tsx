"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const stats = [
  { label: "Window", value: "Mid-June — December" },
  { label: "Editorial home", value: "WhiskyAdvocate.com" },
  { label: "Format", value: "Sponsored series + hub" },
];

export default function Opportunity03() {
  const meta = SECTIONS[2];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={2} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-20">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel lines={["— THE OPPORTUNITY"]} />
        </motion.div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <SplitTitle
              line1="The Opportunity"
              line2="Luxury print craft, digital reach."
              sizeClass="text-[clamp(2.4rem,5vw,3.75rem)]"
              line2ClassName="text-[clamp(1.45rem,3vw,2.2rem)] italic text-gold"
            />
            <p className="mt-8 max-w-prose font-body text-lg leading-relaxed text-ivory/85">
              Regent speaks to travelers who treat dining and spirits as part of the itinerary. Whisky Advocate speaks to the buyer who reads labels the way
              others read departure boards. The overlap is narrow, affluent, and decisive. H2 is the right season to choreograph discovery, prestige, and
              year-end authority in one continuous arc.
            </p>
            <p className="mt-6 max-w-prose font-body text-base leading-relaxed text-ivory/75">
              The deck maps that arc across six and a half months: an always-on hub, surges aligned to sailing rhythm, social proof that feels like a diary,
              and measurement that respects how luxury brands count success.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="border border-gold/40 px-5 py-4">
                <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold">{s.label}</p>
                <p className="m-0 mt-2 font-display text-xl italic text-ivory">{s.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionFrame>
  );
}

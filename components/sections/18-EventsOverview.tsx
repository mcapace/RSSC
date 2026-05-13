"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

export default function EventsOverview18() {
  const meta = SECTIONS[16];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={16} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20">
        <SectionLabel lines={["— EVENTS · OVERVIEW"]} />
        <div className="mt-8">
          <SplitTitle
            line1="Live events, same reader."
            line2="WhiskyFest anchors the room where discovery becomes purchase."
            sizeClass="text-[clamp(2rem,4.2vw,3.25rem)]"
            line2ClassName="text-[clamp(1.15rem,2.4vw,1.85rem)] italic text-gold"
          />
        </div>

        <motion.div
          className="mt-12 rounded-sm border border-gold/40 bg-surface/35 px-5 py-6 md:px-8 md:py-8"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold">WhiskyFest NYC</p>
          <p className="m-0 mt-3 font-display text-2xl italic text-ivory md:text-3xl">
            {"Nov 20, 2026 · reimagined, elevated tasting, in-app experience"}
          </p>
          <p className="m-0 mt-4 font-body text-base leading-relaxed text-ivory/82">
            {"Marriott Marquis NYC · flagship consumer tasting · closed-loop CRM through the new WhiskyFest app."}
          </p>
        </motion.div>

        <motion.div
          className="mt-10 border-t border-gold/25 pt-10"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold">Whisky Advocate · Events</p>
          <p className="m-0 mt-3 max-w-prose font-body text-base leading-relaxed text-ivory/85">
            {
              "WhiskyFest NYC · Nov 20, 2026 · reimagined, elevated tasting, in-app experience — the signature on-site moment for the WA reader between pours, seminars, and retail."
            }
          </p>
        </motion.div>
      </div>
    </SectionFrame>
  );
}

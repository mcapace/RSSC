"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const ease = [0.22, 1, 0.36, 1] as const;

export default function EventsOverview18() {
  const meta = SECTIONS[16];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={16} id={meta.id} ariaLabel={meta.ariaLabel} className="relative overflow-x-hidden bg-bg">
      <motion.div
        className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-gold/10 blur-[80px]"
        aria-hidden
        animate={reduce ? undefined : { opacity: [0.3, 0.5, 0.35], scale: [1, 1.08, 1] }}
        transition={reduce ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto w-full max-w-deck">
        <SectionLabel lines={["— EVENTS · OVERVIEW"]} />
        <div className="mt-8">
          <SplitTitle
            line1="Live events, same reader."
            line2="WhiskyFest anchors the room where discovery becomes purchase."
            line2ClassName="font-display font-medium italic text-gold"
          />
        </div>

        <motion.div
          className="mt-12 overflow-hidden rounded-sm border border-gold/40 bg-surface/35 px-5 py-6 md:px-8 md:py-8"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease }}
        >
          <motion.div
            className="mb-4 h-0.5 max-w-[8rem] bg-gradient-to-r from-gold/80 to-gold/20"
            aria-hidden
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
            style={{ transformOrigin: "left center" }}
          />
          <motion.p
            className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold"
            initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.1, duration: 0.45, ease }}
          >
            WhiskyFest NYC
          </motion.p>
          <motion.p
            className="m-0 mt-3 font-display text-2xl italic text-ivory md:text-3xl"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.18, duration: 0.5, ease }}
          >
            {"Nov 20, 2026 · reimagined, elevated tasting, in-app experience"}
          </motion.p>
          <motion.p
            className="m-0 mt-4 font-body text-base leading-relaxed text-ivory/82"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.26, duration: 0.48, ease }}
          >
            {"Marriott Marquis NYC · flagship consumer tasting · closed-loop CRM through the new WhiskyFest app."}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-10 border-t border-gold/25 pt-10"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08, ease }}
        >
          <motion.p
            className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold"
            initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease }}
          >
            Whisky Advocate · Events
          </motion.p>
          <motion.p
            className="m-0 mt-3 max-w-prose font-body text-base leading-relaxed text-ivory/85"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.5, ease }}
          >
            {
              "WhiskyFest NYC · Nov 20, 2026 · reimagined, elevated tasting, in-app experience — the signature on-site moment for the WA reader between pours, seminars, and retail."
            }
          </motion.p>
        </motion.div>
      </div>
    </SectionFrame>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SECTIONS } from "@/lib/sections";

export default function Transition05() {
  const meta = SECTIONS[4];
  const reduce = useReducedMotion();

  return (
    <SectionFrame
      index={4}
      id={meta.id}
      ariaLabel={meta.ariaLabel}
      className="flex items-center justify-center bg-bg px-6"
    >
      <motion.div
        initial={reduce ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.2 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-[min(72vw,720px)] flex-col items-center gap-10"
        style={{ transformOrigin: "center" }}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <p className="m-0 text-center font-display text-[clamp(1.75rem,4vw,2.75rem)] italic text-gold/70">
          Between acts.
        </p>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </motion.div>
    </SectionFrame>
  );
}

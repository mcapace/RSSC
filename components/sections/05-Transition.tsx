"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { AmbientField } from "@/components/ui/AmbientField";
import { SECTIONS } from "@/lib/sections";

export default function Transition05() {
  const meta = SECTIONS[4];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={4} id={meta.id} ariaLabel={meta.ariaLabel} className="relative overflow-x-hidden bg-bg">
      <AmbientField variant="cool" />
      <div className="relative z-[1] flex min-h-[70vh] flex-col items-center justify-center gap-12 px-6 py-20 text-center md:min-h-[78vh]">
        <motion.p
          className="m-0 max-w-xl font-mono text-[0.7rem] uppercase tracking-[0.35em] text-ivory/45"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.8 }}
        >
          Between the route and the rigging
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.3 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-[min(88vw,640px)] origin-center bg-gradient-to-r from-transparent via-gold/55 to-transparent"
        />

        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="max-w-2xl space-y-4"
        >
          <p className="m-0 font-display text-[clamp(1.75rem,4vw,2.75rem)] italic leading-snug text-gold/85">
            The window is set. Next: how the program is built.
          </p>
          <p className="m-0 font-body text-sm leading-relaxed text-ivory/55">
            Interlude in the deck: a breath before architecture, pillars, and the month-by-month voyage.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.3 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-[min(70vw,420px)] origin-center bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        />
      </div>
    </SectionFrame>
  );
}

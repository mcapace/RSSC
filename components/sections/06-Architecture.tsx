"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { AmbientField } from "@/components/ui/AmbientField";
import { SECTIONS } from "@/lib/sections";

const layers = [
  { title: "Always-on hub", detail: "Editorial residency on WhiskyAdvocate.com" },
  { title: "Surge + prestige", detail: "Flighted media aligned to sailing rhythm" },
  { title: "Social proof", detail: "Dram Diaries: 13 units, 5 post-voyage weeks" },
  { title: "Year-end authority", detail: "Lists, commitment, newsletter frontline" },
];

export default function Architecture06() {
  const meta = SECTIONS[5];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={5} id={meta.id} ariaLabel={meta.ariaLabel} className="relative overflow-x-hidden bg-bg">
      <AmbientField variant="warm" />

      <div className="relative z-[1] mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-20">
        <motion.p
          className="m-0 max-w-2xl font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.28em] text-ivory/50"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7 }}
        >
          Ambient field: abstract textured warmth, oil-on-paper feel (per program deck). Noise layer is global; this slide adds a second, warmer wash.
        </motion.p>

        <div className="mt-10 space-y-6">
          <SectionLabel lines={["— THE ARCHITECTURE"]} />
          <SplitTitle
            line1="The Architecture"
            line2="The Program."
            sizeClass="text-[clamp(2.35rem,4.8vw,3.5rem)]"
            line2ClassName="text-[clamp(1.5rem,3vw,2.2rem)] italic text-gold"
          />
        </div>

        <p className="mt-8 max-w-prose font-body text-base leading-relaxed text-ivory/80">
          The proposal frames the partnership as architecture, not a media flight. Each layer stacks: the hub holds the story between peaks, surges align to
          launch and prestige beats, social extends after guests return, and year-end converts familiarity into inclusion.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="border border-gold/45 bg-bg/40 px-4 py-5 backdrop-blur-sm"
            >
              <p className="m-0 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gold/90">{String(i + 1).padStart(2, "0")}</p>
              <p className="m-0 mt-3 font-display text-lg italic text-ivory">{layer.title}</p>
              <p className="m-0 mt-2 font-body text-sm leading-snug text-ivory/70">{layer.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

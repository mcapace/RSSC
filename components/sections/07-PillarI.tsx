"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const points = [
  {
    k: "i. Visual storytelling, port by port.",
    body: "Animated route, illustrated harbor cards, sommelier intros.",
  },
  {
    k: "ii. A pairing for every port.",
    body: "Bordeaux meets a First Growth. Islay meets a peated single malt.",
  },
  {
    k: "iii. High-intent signals to Regent.",
    body: "Behavioral tracking flags users who linger or return — feeding the booking funnel.",
  },
];

export default function PillarI07() {
  const meta = SECTIONS[6];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={6} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20">
        <SectionLabel lines={["— PILLAR I"]} />
        <div className="mt-6">
          <SplitTitle
            line1="Interactive Voyage Map."
            line2="A living visual that turns Regent's itineraries into a tasting tour of the world."
            sizeClass="text-[clamp(2.2rem,4.2vw,3.25rem)]"
            line2ClassName="text-[clamp(1.2rem,2.4vw,1.75rem)] italic text-gold"
          />
        </div>

        <motion.p
          className="mt-6 max-w-prose font-body text-base leading-relaxed text-ivory/85"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          Click a port — see the wine, the dram, the chef, the story.
        </motion.p>

        <div className="mt-10 space-y-8">
          {points.map((p, i) => (
            <motion.div
              key={p.k}
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.06 * i, duration: 0.5 }}
              className="border-l-2 border-gold/35 pl-5"
            >
              <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gold">{p.k}</p>
              <p className="m-0 mt-2 font-body text-sm leading-relaxed text-ivory/82 md:text-base">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 rounded-sm border border-gold/40 bg-surface/40 px-4 py-4"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="m-0 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.12em] text-ivory/70">
            Featured port card example — Port 03 · Bordeaux: Château Latour 2015 · paired with the Compass Rose harbor lunch.
          </p>
        </motion.div>

        <p className="mt-8 m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold/90">Always-On · Hub residency.</p>
      </div>
    </SectionFrame>
  );
}

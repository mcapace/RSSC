"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

function Sparkline({ reduce }: { reduce: boolean }) {
  const d = "M 0 32 C 18 10, 34 48, 52 22 S 86 8, 120 28";
  return (
    <svg viewBox="0 0 120 40" className="h-24 w-full" aria-hidden>
      <motion.path
        d={d}
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth={1.2}
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        pathLength={1}
      />
    </svg>
  );
}

function Rings({ reduce }: { reduce: boolean }) {
  const sizes = [52, 76, 104, 132];
  return (
    <div className="relative mx-auto h-40 w-40" aria-hidden>
      {sizes.map((s, i) => (
        <motion.div
          key={s}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/45"
          style={{ width: s, height: s }}
          initial={reduce ? { opacity: 0.9, scale: 1 } : { opacity: 0, scale: 0.65 }}
          whileInView={{ opacity: 0.35 + i * 0.12, scale: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ delay: 0.08 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

function Bars({ reduce }: { reduce: boolean }) {
  const heights = [52, 86, 68];
  return (
    <div className="flex h-32 items-end justify-center gap-4" aria-hidden>
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-4 origin-bottom bg-gold/70"
          style={{ height: h }}
          initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

export default function Measurement16() {
  const meta = SECTIONS[15];
  const reduce = useReducedMotion();

  const kpis = [
    { n: "12.4M", l: "Impressions" },
    { n: "4:32", l: "Avg time" },
    { n: "+18%", l: "Lift" },
    { n: "73", l: "Score" },
    { n: "5.2K", l: "Leads" },
    { n: "1", l: "Single view" },
  ] as const;

  return (
    <SectionFrame index={15} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12 md:px-12 md:py-16">
        <div className="space-y-4">
          <SectionLabel lines={["— MEASUREMENT"]} />
          <SplitTitle
            line1="Measurement"
            line2="3 Lenses · 1 Dashboard"
            sizeClass="text-[clamp(2.4rem,4.5vw,3.5rem)]"
            line2ClassName="text-[clamp(1.8rem,3.4vw,2.5rem)] italic text-gold"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="min-w-0 space-y-4 rounded-sm border border-gold/35 px-5 py-6">
            <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold">Lens I</p>
            <p className="m-0 font-display text-2xl italic text-ivory">Reach</p>
            <p className="m-0 font-body text-sm text-ivory/75">Impressions, unique visitors, frequency.</p>
            <Rings reduce={!!reduce} />
          </div>

          <div className="min-w-0 space-y-4 rounded-sm border border-gold/35 px-5 py-6">
            <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold">Lens II</p>
            <p className="m-0 font-display text-2xl italic text-ivory">Engagement</p>
            <p className="m-0 font-body text-sm text-ivory/75">Time on page, social engagement, newsletter CTR.</p>
            <Sparkline reduce={!!reduce} />
          </div>

          <div className="min-w-0 space-y-4 rounded-sm border border-gold/35 px-5 py-6">
            <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold">Lens III</p>
            <p className="m-0 font-display text-2xl italic text-ivory">Brand lift</p>
            <p className="m-0 font-body text-sm text-ivory/75">Survey, affinity, intent.</p>
            <Bars reduce={!!reduce} />
          </div>
        </div>

        <motion.div
          className="rounded-sm border border-gold/45 px-4 py-5 md:px-6"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {kpis.map((k) => (
              <div key={k.l} className="min-w-0 text-center">
                <p className="m-0 break-words font-display text-xl italic text-gold md:text-2xl">{k.n}</p>
                <p className="m-0 mt-2 break-words font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ivory/55">
                  {k.l}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionFrame>
  );
}

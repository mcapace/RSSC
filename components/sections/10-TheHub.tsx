"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

function CornerCallout({
  label,
  style,
  delay,
  reduce,
}: {
  label: string;
  style: React.CSSProperties;
  delay: number;
  reduce: boolean;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute max-w-[min(46vw,160px)] break-words font-mono text-[0.55rem] uppercase leading-snug tracking-[0.18em] text-ivory/70"
      style={style}
      initial={reduce ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.55 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.span
        className="mb-1 block h-px w-10 bg-gold"
        initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: delay + 0.05, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left center" }}
      />
      {label}
    </motion.div>
  );
}

export default function TheHub10() {
  const meta = SECTIONS[9];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={9} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="mx-auto grid min-h-0 w-full max-w-6xl items-start gap-12 px-6 py-12 md:grid-cols-[0.42fr_0.58fr] md:px-12 md:py-16">
        <div className="space-y-6">
          <SectionLabel lines={["— THE HUB"]} />
          <SplitTitle
            line1="Editorial"
            line2="Residency."
            sizeClass="text-[clamp(2.4rem,4.5vw,3.5rem)]"
            line2ClassName="text-[clamp(2rem,3.8vw,2.75rem)] italic text-gold"
          />
          <p className="m-0 max-w-[40ch] font-body text-base text-ivory/80">
            The hub is the always-on home for the partnership: a co-branded lane inside WhiskyAdvocate.com where
            sponsored articles, pairings, and capture moments live together.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[640px]">
          <motion.div
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={reduce ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-md border border-gold/40 bg-surface/80 p-3 shadow-2xl"
            style={{ willChange: "transform" }}
          >
            <div className="flex items-center gap-2 px-2 pb-3 pt-1">
              <span className="inline-flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </span>
              <div className="ml-3 flex-1 rounded-sm border border-gold/25 bg-bg/80 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/60">
                whiskyadvocate.com/regent-seven-seas
              </div>
            </div>

            <div className="space-y-3 rounded-sm border border-gold/20 bg-bg/60 p-3">
              <div className="h-28 rounded-sm bg-gradient-to-br from-gold/25 via-gold/10 to-transparent" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-20 rounded-sm bg-gold/15" />
                <div className="h-20 rounded-sm bg-gold/12" />
                <div className="h-20 rounded-sm bg-gold/18" />
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-2">
                <div className="h-32 rounded-sm bg-gold/10" />
                <div className="h-32 rounded-sm bg-gold/8" />
              </div>
            </div>

            <CornerCallout
              label="Co-branded Header"
              style={{ top: "-6%", left: "-4%" }}
              delay={0.1}
              reduce={!!reduce}
            />
            <CornerCallout
              label="Sponsored Articles"
              style={{ bottom: "-8%", left: "-2%" }}
              delay={0.25}
              reduce={!!reduce}
            />
            <CornerCallout
              label="Whisky × Cruise Pairings"
              style={{ top: "10%", right: "-6%" }}
              delay={0.35}
              reduce={!!reduce}
            />
            <CornerCallout
              label="Newsletter Capture"
              style={{ bottom: "6%", right: "-4%" }}
              delay={0.45}
              reduce={!!reduce}
            />
          </motion.div>
        </div>
      </div>
    </SectionFrame>
  );
}

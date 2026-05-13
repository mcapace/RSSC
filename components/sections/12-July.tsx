"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

export default function July12() {
  const meta = SECTIONS[11];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={11} id={meta.id} ariaLabel={meta.ariaLabel} className="relative overflow-x-hidden bg-bg">
      <div
        className="pointer-events-none absolute inset-0 blur-[200px]"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(201,169,97,0.14), transparent 55%), radial-gradient(circle at 85% 70%, rgba(201,169,97,0.12), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-16">
        <SectionLabel lines={["— MOVEMENT I · AWAKEN · JULY · 2026"]} />
        <div className="mt-6 max-w-4xl">
          <SplitTitle
            line1="Two flights, running in parallel."
            line2="July · Mid-Year Surge + WC '29"
            sizeClass="text-[clamp(2rem,4.5vw,3.25rem)]"
            line2ClassName="text-[clamp(1.5rem,3vw,2.25rem)] italic text-gold"
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.article
            className="rounded-sm border border-gold/35 bg-surface/30 p-6"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold">Flight A — Mid-Year Booking Surge</p>
            <p className="m-0 mt-4 font-display text-xl italic text-ivory md:text-2xl">The Wave Season Blitz, re-cast.</p>
            <p className="m-0 mt-3 font-body text-sm leading-relaxed text-ivory/80 md:text-base">
              Two months of run-of-site display on Wine Spectator + Whisky Advocate — premium environment, 20% SOV.
            </p>
            <dl className="mt-6 space-y-3 border-t border-gold/20 pt-5">
              <div>
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/55">Impressions</dt>
                <dd className="m-0 mt-1 font-display text-lg italic text-gold">250K</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/55">SOV</dt>
                <dd className="m-0 mt-1 font-body text-ivory/85">20%</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/55">Goal</dt>
                <dd className="m-0 mt-1 font-body text-ivory/85">Awareness</dd>
              </div>
            </dl>
          </motion.article>

          <motion.article
            className="rounded-sm border border-gold/35 bg-surface/30 p-6"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold">
              {"Flight B — World Cruise '29 Sneak Peek"}
            </p>
            <p className="m-0 mt-4 font-display text-xl italic text-ivory md:text-2xl">An early-access teaser.</p>
            <p className="m-0 mt-3 font-body text-sm leading-relaxed text-ivory/80 md:text-base">
              One cinematic Instagram Reel + three weeks of Extension Network pre-roll + display, against the WS/WA look-alike audience.
            </p>
            <dl className="mt-6 space-y-3 border-t border-gold/20 pt-5">
              <div>
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/55">Impressions</dt>
                <dd className="m-0 mt-1 font-display text-lg italic text-gold">470K</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/55">Units</dt>
                <dd className="m-0 mt-1 font-body text-ivory/85">2</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/55">Goal</dt>
                <dd className="m-0 mt-1 font-body text-ivory/85">Early-access sign-ups</dd>
              </div>
            </dl>
          </motion.article>
        </div>

        <p className="mt-10 m-0 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ivory/55">SOP 100% · SOS 100%.</p>
      </div>
    </SectionFrame>
  );
}

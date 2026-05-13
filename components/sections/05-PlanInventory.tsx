"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const lines = [
  "01 · Jun → Dec — 6.5 Months, Custom Content Hub (adj. from 12 mo) — 600K imps",
  "02 · Jul – Aug — 2 Months, Display Banners on WA + WS Websites (Mid-Year Booking Surge) — 250K",
  "03 · Jul — 1× Instagram Reel (World Cruise '29 Sneak Peek) — 50K",
  "04 · Jul — 3 Weeks, Shanken Extension Network display & pre-roll (WC '29) — 420K",
  "05 · Jun — 1× Dedicated Email (New Season Launch) — 50K",
  "06 · Jun — 1× Collecting Newsletter (NSL) — 50K",
  "07 · Jun — 1× WhiskyNotes Newsletter (NSL) — 65K",
  "08 · Jun — 1× Instagram Post + Story (NSL) — 20K",
  "09 · Aug — 3 Weeks, Shanken Extension Network Pre-Roll + Dynamic Display (Prestige Winter Push) — 350K",
  "10 · Sep — 3× Instagram Stories (Spotlight on Whisky LIVE) — 50K",
  "11 · Oct — 5× Instagram Reels (Dram Diaries™ Series) — 200K",
  "12 · Oct — 5× Instagram Stories (Dram Diaries™ Series) — 80K",
  "13 · Oct — 3× Static / Carousel Posts (Dram Diaries™ Series) — 150K",
  "14 · Nov — WS Top 100 Wines — 750K",
  "15 · Dec — WA Top 20 Whiskies — 250K",
];

export default function PlanInventory05() {
  const meta = SECTIONS[4];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={4} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20">
        <SectionLabel lines={["— PLAN INVENTORY · PER PROPOSAL · ADJUSTED DATES"]} />
        <div className="mt-8">
          <SplitTitle
            line1="Plan Inventory"
            line2="Fifteen placements, on the dates that fit the window."
            sizeClass="text-[clamp(2.1rem,4.2vw,3.25rem)]"
            line2ClassName="text-[clamp(1.25rem,2.5vw,1.85rem)] italic text-gold"
          />
        </div>

        <div className="mt-10 max-h-[min(52vh,520px)] overflow-y-auto rounded-sm border border-gold/25 bg-surface/30 pr-2">
          <ul className="m-0 list-none space-y-0 p-0">
            {lines.map((line, i) => (
              <motion.li
                key={line}
                initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.02 * i, duration: 0.25 }}
                className="border-b border-gold/10 px-4 py-3 font-mono text-[0.62rem] uppercase leading-snug tracking-[0.06em] text-ivory/80 md:text-[0.68rem]"
              >
                {line}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p
          className="mt-8 m-0 font-display text-xl italic text-gold md:text-2xl"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          — Total — 3.34M impressions
        </motion.p>
      </div>
    </SectionFrame>
  );
}

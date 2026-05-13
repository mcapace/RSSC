"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const items = [
  {
    num: "01",
    title: "Presenting Brand Sponsorship",
    body: "Title position on stage, signage, program, lanyard or pour station — single-brand ownership of the new-format NYC edition.",
  },
  {
    num: "02",
    title: "Master Seminar Hosting",
    body: "Branded seminar slot inside the elevated program, led by your distillery. Premium seated experience for the most engaged collectors.",
  },
  {
    num: "03",
    title: "In-App Integration",
    body: "Native presence inside the new WhiskyFest app — dedicated brand page, push notifications, rare pour drops, attendee data capture.",
  },
  {
    num: "04",
    title: "Premium Pour Booth",
    body: "Featured booth placement, end-cap or center-aisle, with curated rare line-up access for the elevated tier.",
  },
  {
    num: "05",
    title: "Gift Bag + Database",
    body: "Branded inclusion in every attendee bag · access to the qualified-buyer database post-event.",
  },
] as const;

export default function WhiskyFestOpportunities19() {
  const meta = SECTIONS[17];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={17} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20">
        <SectionLabel lines={["— EVENT OPPORTUNITIES · WHISKYFEST NYC"]} />
        <div className="mt-6 space-y-3">
          <p className="m-0 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-ivory/55">
            WhiskyFest NYC · Nov 20, 2026
          </p>
          <div className="mt-4">
            <SplitTitle
              line1="Reimagined · Elevated Tasting · In-App Experience"
              sizeClass="text-[clamp(1.5rem,3.2vw,2.35rem)]"
            />
          </div>
        </div>

        <div className="mt-12 space-y-6">
          {items.map((row, i) => (
            <motion.article
              key={row.num}
              className="border-l-2 border-gold/40 pl-5 md:pl-6"
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
            >
              <p className="m-0 font-mono text-[0.7rem] tabular-nums tracking-[0.12em] text-gold">
                {row.num}
                <span className="mx-2 text-ivory/35">—</span>
                <span className="font-display text-base italic tracking-normal text-ivory md:text-lg">{row.title}</span>
              </p>
              <p className="m-0 mt-2 max-w-prose font-body text-sm leading-relaxed text-ivory/82 md:text-base">{row.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

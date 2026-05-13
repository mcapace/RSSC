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

const ease = [0.22, 1, 0.36, 1] as const;

export default function WhiskyFestOpportunities19() {
  const meta = SECTIONS[17];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={17} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20">
        <SectionLabel lines={["— EVENT OPPORTUNITIES · WHISKYFEST NYC"]} />
        <motion.div
          className="mt-6 space-y-3"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease }}
        >
          <motion.p
            className="m-0 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-ivory/55"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            WhiskyFest NYC · Nov 20, 2026
          </motion.p>
          <div className="mt-4">
            <SplitTitle
              line1="Reimagined · Elevated Tasting · In-App Experience"
              sizeClass="text-[clamp(1.5rem,3.2vw,2.35rem)]"
            />
          </div>
        </motion.div>

        <div className="mt-12 space-y-6">
          {items.map((row, i) => (
            <motion.article
              key={row.num}
              className="relative pl-5 md:pl-6"
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={
                reduce
                  ? { delay: 0.05 * i, duration: 0.01 }
                  : { delay: 0.06 * i, type: "spring", stiffness: 320, damping: 28 }
              }
            >
              <motion.span
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/80 via-gold/40 to-gold/20"
                aria-hidden
                initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: 0.05 * i + 0.1, duration: 0.55, ease }}
                style={{ transformOrigin: "top center" }}
              />
              <p className="m-0 font-mono text-[0.7rem] tabular-nums tracking-[0.12em] text-gold">
                <motion.span
                  className="inline-block"
                  initial={reduce ? { scale: 1 } : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: 0.06 * i + 0.05, type: "spring", stiffness: 400, damping: 18 }}
                >
                  {row.num}
                </motion.span>
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

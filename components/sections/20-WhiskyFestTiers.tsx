"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const tiers = [
  {
    head: "Tier 01 — $295 · Tasting Floor · Open Access",
    body: "Entry to the floor. The broadest audience moment of the night — the curious connoisseur, walking the room, ready to discover.",
  },
  {
    head: "Tier 02 — $550 · Floor + Seminars · 5 Seminars · 100–200 each",
    body: "Floor plus admission to five pre-event seminars across categories. Tighter rooms. Higher intent. Brand-led sessions available.",
  },
  {
    head: "Tier 03 (Premium) — $725 · All Access · Capped 50–75",
    body: "Floor + seminars + curated luxury lounge with bespoke tasting. The Vérité & Cardinale audience, in one room, by name.",
  },
] as const;

const innovations = [
  "Live floorplan — Interactive map. Attendees navigate by booth, category, score. Stonestreet pinned on launch.",
  "Favorite & follow — Tap a brand to add to a personal tasting list. Pre-, in-, post-event — the list persists.",
  "Buy-now in-app — Every brand card links to retail. The drink-to-purchase distance becomes one tap.",
  "Push & alerts — Targeted pushes during the event — pour times at the JFW booth, last call at the lounge.",
  "Badge-scan CRM — Brand reps scan badges at booth. Names, emails, opt-ins flow back to JFW within 48 hours.",
  "Re-engagement — Favorited brands trigger automated follow-up: tasting notes, retail link, next event.",
] as const;

export default function WhiskyFestTiers20() {
  const meta = SECTIONS[18];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={18} id={meta.id} ariaLabel={meta.ariaLabel} className="bg-bg">
      <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-12 md:py-16">
        <SectionLabel lines={["20B · WHISKYFEST 2026 · TIERS + INNOVATIONS"]} />
        <div className="mt-6">
          <SplitTitle
            line1="WhiskyFest 2026."
            line2="Hand-to-hand with the buyer who already says yes."
            sizeClass="text-[clamp(2rem,4vw,3rem)]"
            line2ClassName="text-[clamp(1.2rem,2.5vw,1.85rem)] italic text-gold"
          />
        </div>

        <motion.p
          className="mt-6 max-w-prose font-body text-base leading-relaxed text-ivory/85"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          {
            "Completely revamped for 2026 to drive measurable ROI. Three attendee tiers — from the curious floor visitor to the lounge collector — plus an attendee app that turns the night into a closed-loop CRM event."
          }
        </motion.p>

        <motion.div
          className="mt-10 grid gap-3 rounded-sm border border-gold/35 bg-surface/30 px-4 py-5 font-mono text-[0.58rem] uppercase leading-relaxed tracking-[0.1em] text-ivory/75 sm:grid-cols-2 md:grid-cols-4 md:text-[0.6rem]"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <p className="m-0">
            <span className="block text-gold/90">Date</span>
            <span className="mt-1 block font-body text-sm normal-case tracking-normal text-ivory/90">November 20, 2026</span>
          </p>
          <p className="m-0">
            <span className="block text-gold/90">Venue</span>
            <span className="mt-1 block font-body text-sm normal-case tracking-normal text-ivory/90">Marriott Marquis NYC</span>
          </p>
          <p className="m-0">
            <span className="block text-gold/90">Brand Sponsorship</span>
            <span className="mt-1 block font-body text-sm normal-case tracking-normal text-ivory/90">$15,000 · turnkey</span>
          </p>
          <p className="m-0 sm:col-span-2 md:col-span-1">
            <span className="block text-gold/90">Included</span>
            <span className="mt-1 block font-body text-sm normal-case tracking-normal text-ivory/90">Booth · signage · graphics · collateral</span>
          </p>
        </motion.div>

        <div className="mt-12">
          <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold">Attendee tiers</p>
          <div className="mt-6 space-y-6">
            {tiers.map((t, i) => (
              <motion.div
                key={t.head}
                className="rounded-sm border border-gold/25 bg-surface/20 px-4 py-5 md:px-6"
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: 0.04 * i, duration: 0.45 }}
              >
                <p className="m-0 font-mono text-[0.62rem] uppercase leading-snug tracking-[0.08em] text-ivory/70 md:text-[0.65rem]">{t.head}</p>
                <p className="m-0 mt-3 font-body text-sm leading-relaxed text-ivory/85 md:text-base">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold">2026 Innovations</p>
          <ol className="m-0 mt-6 list-none space-y-4 p-0">
            {innovations.map((line, i) => (
              <motion.li
                key={line.slice(0, 24)}
                className="flex gap-3 border-b border-gold/15 pb-4 last:border-0"
                initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: 0.03 * i, duration: 0.4 }}
              >
                <span className="shrink-0 font-mono text-[0.65rem] tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-body text-sm leading-relaxed text-ivory/85 md:text-base">{line}</span>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div
          className="mt-12 rounded-sm border border-gold/45 bg-gold/5 px-4 py-5 md:px-6"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold">Closed Loop</p>
          <p className="m-0 mt-3 font-body text-sm leading-relaxed text-ivory/88 md:text-base">
            {
              "Pre-event email + paid lift → live floor engagement → badge scans → in-app retail conversion → 30-day re-engagement. Every step measurable. Every name yours."
            }
          </p>
        </motion.div>
      </div>
    </SectionFrame>
  );
}

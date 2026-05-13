"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS, TOTAL_SLIDES } from "@/lib/sections";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Cover01() {
  const meta = SECTIONS[0];
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <SectionFrame
      index={0}
      id={meta.id}
      ariaLabel={meta.ariaLabel}
      className="relative overflow-x-hidden bg-bg"
      domRef={sectionRef}
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-2/3">
        <motion.div
          style={{ y: reduce ? 0 : imageY }}
          className="relative h-full min-h-screen w-full overflow-hidden"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2, ease }}
        >
          {/* Replace placeholder with approved Regent Seven Seas photography */}
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
            style={{
              filter: "brightness(0.4) saturate(0.6)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--color-bg) 0%, rgba(10,14,26,0.92) 35%, rgba(10,14,26,0.35) 70%, transparent 100%)",
            }}
          />
        </motion.div>
      </div>

      <div className="relative z-[45] flex min-h-screen flex-col px-6 pb-16 pt-10 md:px-12 md:pb-20 md:pt-12">
        <motion.p
          className="m-0 font-display text-sm italic text-ivory/80 md:text-base"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
        >
          Regent Seven Seas × M. Shanken
        </motion.p>

        <div className="mt-6 flex justify-between gap-6">
          <motion.div
            className="font-display text-[1.5rem] italic text-ivory"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            Regent Seven Seas Cruises
          </motion.div>
          <motion.div
            className="max-w-[min(48vw,320px)] text-right font-mono text-[0.75rem] uppercase tracking-[0.25em] text-ivory/[0.7]"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            M. Shanken Communications
          </motion.div>
        </div>

        <div className="mt-auto flex max-w-[min(92vw,760px)] flex-col gap-5 md:mt-[18vh]">
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
          >
            <SectionLabel
              lines={[
                "H2 2026 · Digital Media Partnership · Deck Script",
                `${TOTAL_SLIDES} slides · Mid-June — December MMXXVI · Proposal · Confidential`,
              ]}
              className="text-gold"
            />
          </motion.div>

          <motion.div initial={reduce ? { opacity: 1 } : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.65, ease }}>
            <SectionLabel lines={["H2 2026 · A Partnership Program"]} className="text-gold/90" />
          </motion.div>

          <SplitTitle
            line1="A Voyage"
            line2="of the Senses."
            stagger={!reduce}
            sizeClass="text-[clamp(4.25rem,12vw,12rem)] leading-[0.88]"
            line2ClassName="text-[clamp(4.25rem,12vw,12rem)] leading-[0.88]"
          />

          <motion.div
            className="mt-2 flex flex-col gap-4"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 2.2, ease }}
          >
            <div className="flex items-center gap-4">
              <span className="inline-block h-px w-[60px] bg-gold" />
              <p className="m-0 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-ivory/50">
                Mid-June — December — MMXXVI
              </p>
            </div>
            <p className="m-0 max-w-xl font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.18em] text-ivory/55">
              Wine Spectator · Whisky Advocate · Shanken Extension Network
            </p>
            <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold/80">— PROPOSAL · CONFIDENTIAL —</p>
          </motion.div>
        </div>

        <div className="scroll-indicator-cover pointer-events-none absolute bottom-24 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 md:bottom-28">
          <div className="relative h-10 w-px overflow-hidden bg-gold/30">
            <motion.span
              className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-gold"
              animate={reduce ? undefined : { y: [0, 36, 0] }}
              transition={reduce ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-gold/80">SCROLL</span>
        </div>
      </div>
    </SectionFrame>
  );
}

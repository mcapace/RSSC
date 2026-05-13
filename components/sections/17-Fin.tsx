"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

function ShipMini() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path d="M4 18 L12 8 L20 18 H16 V20 H8 V18 Z" fill="currentColor" className="text-gold" />
    </svg>
  );
}

export default function Fin17() {
  const meta = SECTIONS[16];
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={16} id={meta.id} ariaLabel={meta.ariaLabel} className="relative overflow-x-hidden bg-bg">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? { scale: 1 } : { scale: 1 }}
        whileInView={reduce ? undefined : { scale: 1.05 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "transform" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(201,169,97,0.35) 0%, rgba(10,14,26,0.55) 45%, rgba(10,14,26,0.95) 100%)",
          }}
        />
      </motion.div>

      <div className="relative z-[2] flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-16 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[clamp(0.55rem,1.8vw,0.7rem)] uppercase tracking-[0.2em] text-ivory/70 sm:tracking-[0.28em]">
          <ShipMini />
          <SectionLabel lines={["— WITH GRATITUDE —"]} className="text-center text-ivory/70" />
          <ShipMini />
        </div>

        <motion.div
          className="max-w-3xl space-y-4"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <SplitTitle
            line1="Thank you."
            line2="We'd love to set sail with you."
            sizeClass="text-[clamp(2.5rem,6vw,4rem)]"
            line2ClassName="text-[clamp(1.35rem,3vw,2rem)] italic text-gold"
          />
        </motion.div>

        <motion.div
          className="max-w-xl space-y-3 text-center"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ivory/75">Account Executive</p>
          <p className="m-0 font-display text-2xl italic text-ivory md:text-3xl">Michael DiChiara</p>
          <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ivory/60">M. Shanken Communications</p>
        </motion.div>

        <p className="m-0 max-w-lg break-words px-2 text-center font-mono text-[clamp(0.55rem,1.5vw,0.65rem)] uppercase leading-relaxed tracking-[0.12em] text-ivory/50 sm:tracking-[0.18em]">
          Regent Seven Seas Cruises · A Voyage of the Senses. · Mid-June — December · MMXXVI
        </p>

        <p className="m-0 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-ivory/45">— Account · Michael DiChiara, M. Shanken —</p>
        <p className="m-0 font-mono text-[0.58rem] uppercase tracking-[0.28em] text-gold/80">— FIN —</p>

        <p className="m-0 font-mono text-xs tracking-[0.2em] text-ivory/60 md:hidden">17 / 17</p>
      </div>
    </SectionFrame>
  );
}

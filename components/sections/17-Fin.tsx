"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
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
    <SectionFrame index={16} id={meta.id} ariaLabel={meta.ariaLabel} className="relative overflow-hidden bg-bg">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? { scale: 1 } : { scale: 1 }}
        whileInView={reduce ? undefined : { scale: 1.05 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "transform" }}
      >
        {/* Replace placeholder with approved Regent sunset photography */}
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

      <div className="relative z-[2] flex min-h-screen flex-col items-center justify-center gap-10 px-6 text-center">
        <div className="flex items-center gap-4 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-ivory/70">
          <ShipMini />
          <SectionLabel lines={["— REGENT × M. SHANKEN —"]} className="text-center text-ivory/70" />
          <ShipMini />
        </div>

        <motion.p
          className="m-0 font-display text-[clamp(6rem,14vw,12rem)] italic text-gold"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          FIN.
        </motion.p>

        <p className="m-0 max-w-[900px] font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ivory/50">
          FOR FURTHER DISCUSSION · CONNIE McGILVRAY · MICHAEL CAPACE · M. SHANKEN COMMUNICATIONS
        </p>

        <p className="m-0 font-mono text-xs tracking-[0.2em] text-ivory/60 md:hidden">17 / 17</p>
      </div>
    </SectionFrame>
  );
}

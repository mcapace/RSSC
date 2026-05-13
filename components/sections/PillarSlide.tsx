"use client";

import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";

export type PillarSlideProps = {
  pillarNumber: string;
  romanNumeral: "I" | "II" | "III";
  title: string;
  subtitle: string;
  description: string;
  units: { label: string; value: string }[];
  visual: React.ReactNode;
  sectionIndex: number;
  id: string;
  ariaLabel: string;
};

export function PillarSlide({
  pillarNumber,
  romanNumeral,
  title,
  subtitle,
  description,
  units,
  visual,
  sectionIndex,
  id,
  ariaLabel,
}: PillarSlideProps) {
  const reduce = useReducedMotion();

  return (
    <SectionFrame index={sectionIndex} id={id} ariaLabel={ariaLabel} className="bg-bg">
      <div className="mx-auto grid min-h-screen max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-[0.4fr_0.6fr] md:px-12 md:py-20">
        <motion.div
          className="relative flex flex-col justify-center gap-6"
          initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pointer-events-none absolute left-[-6%] top-1/2 -translate-y-1/2 select-none font-display text-[clamp(8rem,18vw,14rem)] italic text-gold/15"
            aria-hidden
          >
            <motion.span
              initial={reduce ? { scale: 1 } : { scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {romanNumeral}
            </motion.span>
          </div>

          <SectionLabel lines={[pillarNumber]} />

          <div className="relative z-[1] space-y-4">
            <h2 className="m-0 max-w-[18ch] font-display text-[clamp(2.5rem,5vw,4rem)] font-medium text-ivory">
              {title}
            </h2>
            <p className="m-0 max-w-[28ch] font-display text-[clamp(1.25rem,2.4vw,1.75rem)] italic text-gold">
              {subtitle}
            </p>
            <p className="m-0 max-w-[32ch] font-body text-base text-ivory/80">{description}</p>
          </div>

          <div className="relative z-[1] mt-4 grid gap-3 sm:grid-cols-2">
            {units.map((u) => (
              <div
                key={u.label}
                className="border border-gold/40 px-4 py-3 transition-colors duration-300 hover:border-gold hover:bg-surface"
              >
                <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gold">{u.label}</p>
                <p className="m-0 mt-2 font-display text-lg italic text-ivory">{u.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={clsx("relative flex min-h-[40vh] items-center justify-center md:min-h-0")}
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {visual}
        </motion.div>
      </div>
    </SectionFrame>
  );
}

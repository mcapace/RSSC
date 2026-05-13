"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";

export type MonthSlideProps = {
  month: string;
  year: "2026";
  theme: string;
  headline: string;
  italicHeadline: string;
  metrics: { label: string; value: string }[];
  description: string;
  visualType: "launch" | "surge" | "prestige" | "live" | "yearEnd";
  sectionIndex: number;
  id: string;
  ariaLabel: string;
};

const blobPosition: Record<MonthSlideProps["visualType"], string> = {
  launch: "radial-gradient(circle at 18% 22%, rgba(201,169,97,0.15), transparent 55%)",
  surge: "radial-gradient(circle at 82% 30%, rgba(201,169,97,0.15), transparent 55%)",
  prestige: "radial-gradient(circle at 50% 12%, rgba(201,169,97,0.15), transparent 60%)",
  live: "radial-gradient(circle at 30% 78%, rgba(201,169,97,0.15), transparent 55%)",
  yearEnd: "radial-gradient(circle at 70% 70%, rgba(201,169,97,0.15), transparent 55%)",
};

export function MonthSlide({
  month,
  year,
  theme,
  headline,
  italicHeadline,
  metrics,
  description,
  visualType,
  sectionIndex,
  id,
  ariaLabel,
}: MonthSlideProps) {
  const reduce = useReducedMotion();
  const mono = `${month} · ${theme}`.toUpperCase();

  return (
    <SectionFrame index={sectionIndex} id={id} ariaLabel={ariaLabel} className="relative overflow-x-hidden bg-bg">
      <div
        className="pointer-events-none absolute inset-0 blur-[200px]"
        style={{ background: blobPosition[visualType] }}
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-0 w-full max-w-6xl items-start gap-10 px-6 py-12 md:grid-cols-[auto_1fr] md:px-12 md:py-16">
        <motion.div
          className="pointer-events-none hidden select-none font-display text-[clamp(6rem,10vw,9rem)] italic text-gold/30 md:block"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          aria-hidden
        >
          {month}
        </motion.div>

        <div className="relative z-[1] space-y-8">
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SectionLabel lines={[mono]} />
          </motion.div>

          <SplitTitle
            line1={headline}
            line2={italicHeadline}
            stagger={!reduce}
            staggerDelay={0.2}
            sizeClass="text-[clamp(2.8rem,6vw,4.5rem)]"
            line2ClassName="text-[clamp(2.2rem,4.5vw,3.25rem)] italic text-gold"
          />

          <motion.div
            className="h-px w-[min(520px,80vw)] origin-left bg-gold"
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left center" }}
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="border border-gold/35 px-4 py-3"
              >
                <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ivory/60">
                  {m.label}
                </p>
                <p className="m-0 mt-2 break-words font-display text-xl italic leading-snug text-gold">{m.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <p className="m-0 max-w-[min(52ch,100%)] flex-1 break-words font-body text-base leading-relaxed text-ivory/80">
              {description}
            </p>
            <div className="relative w-full max-w-[320px] shrink-0 overflow-hidden rounded-sm border border-gold/35 bg-surface/60">
              <div className="relative h-44 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1526481280695-3c687fd543c8?auto=format&fit=crop&w=900&q=70"
                  alt=""
                  fill
                  className="object-cover opacity-40"
                  sizes="320px"
                />
              </div>
              <p className="m-0 px-4 py-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ivory/55">
                Sneak peek panel · {year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}

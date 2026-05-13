"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";

function TinyShip() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path d="M4 18 L12 8 L20 18 H16 V20 H8 V18 Z" fill="currentColor" className="text-gold" />
    </svg>
  );
}

function TinyGlass() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M8 4 H16 L14 20 H10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-gold"
      />
    </svg>
  );
}

function TinyPalm() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 20 V10 M8 14 C9 8 15 8 16 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-gold"
      />
    </svg>
  );
}

const GLYPHS = [TinyGlass, TinyShip, TinyPalm, TinyGlass, TinyShip, TinyPalm, TinyGlass, TinyShip, TinyPalm, TinyGlass, TinyShip, TinyPalm, TinyGlass];

export function PillarIVisual() {
  const reduce = useReducedMotion();
  const lines = Array.from({ length: 15 }, (_, i) => i);

  return (
    <svg viewBox="0 0 520 520" className="h-[min(70vh,520px)] w-full max-w-[520px]" aria-hidden>
      {lines.map((i) => {
        const r = 40 + i * 14;
        const speed = 8 + (i % 5) * 2.4;
        return (
          <motion.ellipse
            key={i}
            cx={260}
            cy={260}
            rx={r}
            ry={r * 0.62}
            fill="none"
            stroke="var(--color-gold)"
            strokeOpacity={0.08 + i * 0.012}
            strokeWidth={1}
            strokeDasharray="6 10"
            animate={reduce ? undefined : { strokeDashoffset: [0, -120] }}
            transition={reduce ? undefined : { duration: speed, repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </svg>
  );
}

const ARTICLES = [
  {
    kicker: "Islay",
    title: "The Last Distillery in Islay",
    byline: "Photography: Regent archives",
    src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=70",
  },
  {
    kicker: "At Sea",
    title: "From Highland to Horizon: A Tasting at Sea",
    byline: "Tasting notes: WA editors",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=70",
  },
  {
    kicker: "Pacific",
    title: "What Yamazaki Tastes Like in the Pacific",
    byline: "Route: Tokyo to Juneau",
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1c?auto=format&fit=crop&w=900&q=70",
  },
] as const;

export function PillarIIVisual() {
  return (
    <motion.div
      className="relative h-[420px] w-full max-w-[560px]"
      whileHover="fan"
      initial="rest"
    >
      {ARTICLES.map((a, idx) => {
        const rotations = [-3, 1, -1.5];
        const fan = [-6, 3, -4];
        return (
          <motion.div
            key={a.title}
            variants={{
              rest: { rotate: rotations[idx], x: idx * 10, y: idx * 8 },
              fan: { rotate: fan[idx], x: idx * 18, y: idx * 4 },
            }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className={clsx(
              "absolute left-1/2 top-6 w-[78%] max-w-[320px] -translate-x-1/2 overflow-hidden rounded-sm border border-gold/40 bg-surface shadow-xl",
              idx === 1 && "z-[2]",
              idx === 2 && "z-[3]"
            )}
            style={{ marginTop: idx * 36 }}
          >
            <div className="relative h-36 w-full">
              <Image src={a.src} alt="" fill className="object-cover" sizes="320px" />
            </div>
            <div className="space-y-2 px-4 py-3">
              <p className="m-0 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gold">{a.kicker}</p>
              <p className="m-0 font-display text-xl italic leading-snug text-ivory [overflow-wrap:anywhere]">{a.title}</p>
              <p className="m-0 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ivory/50">{a.byline}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export function PillarIIIVisual() {
  const reduce = useReducedMotion();
  const tiles = Array.from({ length: 13 }, (_, i) => i);

  return (
    <div className="grid w-full max-w-[420px] grid-cols-4 gap-2" aria-hidden>
      {tiles.map((i) => (
        <motion.div
          key={i}
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: i * 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, y: -4, boxShadow: "0 18px 40px rgba(0,0,0,0.35)" }}
          className="flex aspect-square items-center justify-center rounded-sm border border-gold/30"
          style={{
            background: `linear-gradient(135deg, rgba(201,169,97,${0.12 + (i % 5) * 0.05}), rgba(17,23,42,0.9))`,
          }}
        >
          <span className="flex items-center justify-center opacity-80">
            {(() => {
              const Icon = GLYPHS[i % GLYPHS.length];
              return <Icon />;
            })()}
          </span>
        </motion.div>
      ))}
      <div />
      <div />
      <div />
    </div>
  );
}

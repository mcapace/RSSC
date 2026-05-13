"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

const PATH_D =
  "M 40 220 C 200 140, 320 300, 480 200 S 760 120, 920 220 S 1080 300, 1160 200";

type Port = {
  id: string;
  month: string;
  title: string;
  impressions: string;
  kpi: string;
  muted?: boolean;
};

const PORTS: Port[] = [
  { id: "june", month: "JUNE", title: "Launch", impressions: "185K window", kpi: "SOP / SOS at parity" },
  { id: "july", month: "JULY", title: "Surge + Sneak Peek", impressions: "Surge flighting", kpi: "SOP / SOS at parity" },
  { id: "august", month: "AUGUST", title: "Prestige", impressions: "Reach ladder", kpi: "Frequency guardrails" },
  { id: "september", month: "SEPTEMBER", title: "WhiskyLive", impressions: "70K IG audience", kpi: "Engagement goal" },
  { id: "october", month: "OCTOBER", title: "Transition", impressions: "Bridge pacing", kpi: "Lightweight flighting", muted: true },
  { id: "novdec", month: "NOV/DEC", title: "Year-End Lists", impressions: "Commitment window", kpi: "Top 100 inclusion" },
];

function ShipGlyph({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x - 14} ${y - 10})`} style={{ willChange: "transform" }}>
      <path d="M4 18 L14 6 L24 18 L20 18 L20 22 L8 22 L8 18 Z" fill="var(--color-gold)" opacity={0.95} />
      <path d="M14 6 L14 2" stroke="var(--color-gold)" strokeWidth={1} />
    </g>
  );
}

export default function VoyageMap04() {
  const meta = SECTIONS[3];
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);
  const [ship, setShip] = useState({ x: 60, y: 220 });

  const activeId = hovered ?? "june";

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const shipT = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const total = path.getTotalLength();
    const pts = PORTS.map((_, i) => {
      const t = (i + 0.5) / PORTS.length;
      return path.getPointAtLength(total * t);
    });
    setPoints(pts);
  }, []);

  useMotionValueEvent(shipT, "change", (t) => {
    const path = pathRef.current;
    if (!path) return;
    const total = path.getTotalLength();
    const p = path.getPointAtLength(total * t);
    setShip({ x: p.x, y: p.y });
  });

  return (
    <SectionFrame
      index={3}
      id={meta.id}
      ariaLabel={meta.ariaLabel}
      className="relative bg-bg px-4 py-16 md:px-10 md:py-20"
      domRef={sectionRef}
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel lines={["— THE WINDOW"]} />
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-3"
        >
          <SplitTitle
            line1="Voyage Map"
            line2="Sponsored Series · 6.5 mo"
            sizeClass="text-[clamp(2.5rem,5vw,4rem)]"
            line2ClassName="text-[clamp(2rem,4vw,3.5rem)] italic text-gold"
          />
          <p className="m-0 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ivory/60">
            15 JUN · 31 DEC 2026
          </p>
        </motion.div>

        <div className="hidden w-full md:block">
          <svg
            viewBox="0 0 1200 420"
            className="h-[min(55vh,420px)] w-full"
            role="img"
            aria-label="Campaign voyage timeline from June through November and December"
          >
            <motion.path
              ref={pathRef}
              d={PATH_D}
              fill="none"
              stroke="var(--color-gold-muted)"
              strokeWidth={1}
              strokeDasharray="2 6"
              strokeLinecap="round"
              pathLength={1}
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            />

            <ShipGlyph x={ship.x} y={ship.y} />

            {points.map((pt, i) => {
              const port = PORTS[i];
              const isActive = port.id === activeId;
              return (
                <g key={port.id} transform={`translate(${pt.x} ${pt.y})`}>
                  <motion.rect
                    x={-0.5}
                    y={-60}
                    width={1}
                    height={60}
                    fill="var(--color-gold)"
                    initial={reduce ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: port.muted ? 0.45 : 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.15, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: "0px", originY: "0px", transformBox: "fill-box" }}
                  />

                  <motion.g
                    initial={reduce ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.2 + i * 0.15 }}
                    onMouseEnter={() => setHovered(port.id)}
                    onMouseLeave={() => setHovered(null)}
                    className="cursor-pointer"
                    style={{ transformOrigin: "0px 0px" }}
                  >
                    <circle r={isActive ? 6 : 4} fill="var(--color-gold)" />
                    <circle r={8} fill="none" stroke="var(--color-gold)" strokeWidth={1} opacity={isActive ? 1 : 0.45} />
                    {isActive && !reduce ? (
                      <motion.circle
                        r={8}
                        fill="none"
                        stroke="var(--color-gold)"
                        strokeWidth={1}
                        initial={{ scale: 1, opacity: 0.9 }}
                        animate={{ scale: 1.3, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      />
                    ) : null}
                  </motion.g>

                  <text
                    x={0}
                    y={-72}
                    textAnchor="middle"
                    className="fill-ivory font-mono text-[11px] uppercase tracking-[0.18em]"
                    opacity={port.muted ? 0.45 : 0.85}
                  >
                    {port.month}
                  </text>
                  <text
                    x={0}
                    y={-56}
                    textAnchor="middle"
                    className="fill-gold font-display text-[13px] italic"
                    opacity={port.muted ? 0.45 : 0.95}
                  >
                    {port.title}
                  </text>

                  <motion.rect
                    x={-0.5}
                    y={0}
                    width={1}
                    height={36}
                    fill="var(--color-gold)"
                    initial={reduce ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: port.muted ? 0.35 : 0.75 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 + i * 0.15, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: "0px", originY: "0px", transformBox: "fill-box" }}
                  />

                  <text
                    x={0}
                    y={52}
                    textAnchor="middle"
                    className="fill-ivory font-mono text-[10px] uppercase tracking-[0.14em]"
                    opacity={0.45}
                  >
                    {port.impressions}
                  </text>
                  <text
                    x={0}
                    y={66}
                    textAnchor="middle"
                    className="fill-ivory font-mono text-[10px] uppercase tracking-[0.14em]"
                    opacity={0.45}
                  >
                    {port.kpi}
                  </text>

                  <foreignObject x={-140} y={80} width={280} height={160} pointerEvents="none">
                    <AnimatePresence>
                      {hovered === port.id ? (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.22 }}
                          className="rounded-sm border border-gold/60 bg-surface/95 px-4 py-3 text-left shadow-xl backdrop-blur-sm"
                        >
                          <p className="m-0 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gold">
                            {port.month}
                          </p>
                          <p className="m-0 mt-1 font-display text-lg italic text-ivory">{port.title}</p>
                          <p className="m-0 mt-2 font-body text-xs text-ivory/75">
                            Full campaign narrative, flighting, and partner notes ship in the next content pass.
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="flex flex-col gap-6 md:hidden">
          {PORTS.map((port, i) => (
            <motion.div
              key={port.id}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-sm border border-gold/40 px-4 py-3"
              style={{ opacity: port.muted ? 0.55 : 1 }}
            >
              <p className="m-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ivory/70">
                {port.month}
              </p>
              <p className="m-0 font-display text-lg italic text-gold">{port.title}</p>
              <p className="m-0 mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ivory/45">
                {port.impressions} · {port.kpi}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { k: "6.5 MONTHS", d: "Campaign Window" },
            { k: "4 PILLARS", d: "Always-On + Surge + Social + Year-End" },
            { k: "1 HUB", d: "Editorial Home on WhiskyAdvocate.com" },
          ].map((tile) => (
            <motion.div
              key={tile.k}
              whileHover={{ scale: 1.01 }}
              className="border border-gold/50 bg-transparent px-6 py-6 transition-colors duration-300 hover:border-gold hover:bg-surface"
            >
              <p className="m-0 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gold">{tile.k}</p>
              <p className="m-0 mt-3 font-display text-lg italic text-ivory">{tile.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  variant?: "warm" | "cool";
  className?: string;
};

export function AmbientField({ variant = "warm", className }: Props) {
  const reduce = useReducedMotion();
  const warm =
    "radial-gradient(ellipse 120% 80% at 20% 20%, rgba(201,169,97,0.18), transparent 50%), radial-gradient(ellipse 90% 70% at 80% 60%, rgba(139,122,79,0.12), transparent 45%), radial-gradient(ellipse 70% 50% at 50% 90%, rgba(17,23,42,0.9), transparent 55%)";
  const cool =
    "radial-gradient(ellipse 100% 70% at 30% 30%, rgba(90,110,160,0.12), transparent 50%), radial-gradient(ellipse 80% 60% at 70% 70%, rgba(201,169,97,0.08), transparent 50%)";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden>
      <motion.div
        className="absolute inset-[-20%] opacity-90 blur-3xl"
        style={{ background: variant === "warm" ? warm : cool }}
        animate={reduce ? undefined : { scale: [1, 1.04, 1], opacity: [0.85, 1, 0.88] }}
        transition={reduce ? undefined : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

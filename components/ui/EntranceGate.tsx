"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "regent-shanken-h2-intro-done";

type Props = {
  children: React.ReactNode;
};

type Mode = "init" | "intro" | "none";

export function EntranceGate({ children }: Props) {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<Mode>("init");

  useEffect(() => {
    if (reduce) {
      setMode("none");
      return;
    }
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
      setMode("none");
      return;
    }
    setMode("intro");
  }, [reduce]);

  const finish = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
    setMode("none");
  };

  if (mode === "init") {
    return (
      <div className="relative min-h-screen">
        <div className="pointer-events-none opacity-0">{children}</div>
        <div className="fixed inset-0 z-[60] bg-[var(--color-bg)]" aria-hidden />
      </div>
    );
  }

  const introActive = mode === "intro" && !reduce;

  return (
    <div className="relative min-h-screen">
      <div
        className={
          introActive
            ? "pointer-events-none opacity-0"
            : "opacity-100 transition-opacity duration-700"
        }
      >
        {children}
      </div>
      {introActive ? (
        <div className="fixed inset-0 z-[60] bg-black">
          <div className="flex h-full w-full flex-col items-center justify-center px-6">
            <motion.div
              className="h-px bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ width: "min(92vw, 960px)", transformOrigin: "center" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-[0.15em] font-mono text-sm uppercase tracking-[0.35em] text-ivory md:text-base"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04, delayChildren: 1.55 } },
              }}
            >
              {"REGENT × M. SHANKEN".split("").map((ch, i) => (
                <motion.span
                  key={`${ch}-${i}`}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.2 } },
                  }}
                >
                  {ch === " " ? "\u00a0" : ch}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="pointer-events-none absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{
              duration: 3.6,
              times: [0, 0.72, 0.74, 0.9, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={finish}
          />
        </div>
      ) : null}
    </div>
  );
}

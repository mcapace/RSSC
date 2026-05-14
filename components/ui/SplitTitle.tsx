"use client";

import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  line1: string;
  line2?: string;
  className?: string;
  line1ClassName?: string;
  line2ClassName?: string;
  /** Primary display line size (line1). Defaults to deck title scale. */
  sizeClass?: string;
  /** When line2 is set, it defaults to deck-subtitle unless overridden here. */
  line2SizeClass?: string;
  stagger?: boolean;
  staggerDelay?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function SplitTitle({
  line1,
  line2,
  className,
  line1ClassName,
  line2ClassName,
  line2SizeClass,
  sizeClass = "text-deck-title",
  stagger = false,
  staggerDelay = 0,
}: Props) {
  const reduce = useReducedMotion();

  const line1Chars = line1.split("");
  const line2Chars = (line2 ?? "").split("");

  const line2Typography = clsx(
    "mt-3 block w-full max-w-deck font-body font-normal italic leading-relaxed text-gold/90",
    line2SizeClass ?? "text-deck-subtitle",
    line2ClassName
  );

  if (!stagger || reduce) {
    return (
      <div className={clsx("max-w-deck-wide text-pretty", className)}>
        <p className={clsx("m-0 font-display font-medium text-ivory", sizeClass, line1ClassName)}>{line1}</p>
        {line2 ? <p className={clsx("m-0", line2Typography)}>{line2}</p> : null}
      </div>
    );
  }

  return (
    <div className={clsx("max-w-deck-wide text-pretty", className)}>
      <p className={clsx("m-0 flex max-w-full flex-wrap font-display font-medium text-ivory", sizeClass, line1ClassName)}>
        {line1Chars.map((ch, i) => (
          <motion.span
            key={`l1-${i}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: staggerDelay + 0.35 + i * 0.025, ease }}
            style={{ display: "inline-block", whiteSpace: ch === " " ? "pre" : undefined }}
          >
            {ch === " " ? "\u00a0" : ch}
          </motion.span>
        ))}
      </p>
      {line2 ? (
        <p className={clsx("m-0 flex max-w-full flex-wrap", line2Typography)}>
          {line2Chars.map((ch, i) => (
            <motion.span
              key={`l2-${i}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: staggerDelay + 0.55 + i * 0.02, ease }}
              style={{ display: "inline-block", whiteSpace: ch === " " ? "pre" : undefined }}
            >
              {ch === " " ? "\u00a0" : ch}
            </motion.span>
          ))}
        </p>
      ) : null}
    </div>
  );
}

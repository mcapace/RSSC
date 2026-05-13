"use client";

import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  line1: string;
  line2?: string;
  className?: string;
  line1ClassName?: string;
  line2ClassName?: string;
  sizeClass?: string;
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
  sizeClass = "text-[clamp(4rem,12vw,11rem)]",
  stagger = false,
  staggerDelay = 0,
}: Props) {
  const reduce = useReducedMotion();

  const line1Chars = line1.split("");
  const line2Chars = (line2 ?? "").split("");

  if (!stagger || reduce) {
    return (
      <div
        className={clsx(
          "max-w-full break-words leading-[0.9] tracking-[-0.02em] [overflow-wrap:anywhere]",
          className
        )}
      >
        <p
          className={clsx(
            "m-0 max-w-full font-display font-medium text-ivory",
            sizeClass,
            line1ClassName
          )}
        >
          {line1}
        </p>
        {line2 ? (
          <p
            className={clsx(
              "m-0 ml-[6%] max-w-[min(100%,52rem)] font-display font-medium italic text-gold md:ml-[8%]",
              sizeClass,
              line2ClassName
            )}
          >
            {line2}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "max-w-full break-words leading-[0.9] tracking-[-0.02em] [overflow-wrap:anywhere]",
        className
      )}
    >
      <p className={clsx("m-0 flex max-w-full flex-wrap font-display font-medium text-ivory", sizeClass, line1ClassName)}>
        {line1Chars.map((ch, i) => (
          <motion.span
            key={`l1-${i}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: staggerDelay + 1.0 + i * 0.04, ease }}
            style={{ display: "inline-block", whiteSpace: ch === " " ? "pre" : undefined }}
          >
            {ch === " " ? "\u00a0" : ch}
          </motion.span>
        ))}
      </p>
      {line2 ? (
        <p
          className={clsx(
            "m-0 ml-[6%] flex max-w-[min(100%,52rem)] flex-wrap font-display font-medium italic text-gold md:ml-[8%]",
            sizeClass,
            line2ClassName
          )}
        >
          {line2Chars.map((ch, i) => (
            <motion.span
              key={`l2-${i}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: staggerDelay + 1.8 + i * 0.04, ease }}
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

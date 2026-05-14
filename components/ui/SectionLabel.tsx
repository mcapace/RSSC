"use client";

import clsx from "clsx";

type Props = {
  lines: string[];
  className?: string;
};

export function SectionLabel({ lines, className }: Props) {
  return (
    <div
      className={clsx(
        "max-w-deck-wide font-mono text-[0.625rem] uppercase leading-snug tracking-[0.12em] text-gold-muted sm:text-[0.6875rem] sm:tracking-[0.14em]",
        className
      )}
    >
      {lines.map((line) => (
        <p key={line} className="m-0 max-w-full text-pretty">
          {line}
        </p>
      ))}
    </div>
  );
}

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
        "font-mono text-[0.7rem] uppercase tracking-[0.2em] text-gold-muted",
        className
      )}
    >
      {lines.map((line) => (
        <p key={line} className="m-0 leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  );
}

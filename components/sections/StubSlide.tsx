"use client";

import { SectionFrame } from "@/components/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SECTIONS } from "@/lib/sections";

type Props = {
  index: number;
};

export function StubSlide({ index }: Props) {
  const meta = SECTIONS[index];
  const line1 = meta.displayLine1 ?? "";
  const line2 = meta.displayLine2?.trim() ? meta.displayLine2 : undefined;

  return (
    <SectionFrame
      index={index}
      id={meta.id}
      ariaLabel={meta.ariaLabel}
      className="flex items-center justify-center bg-bg px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="w-full max-w-4xl space-y-8">
        {meta.monoLabel ? <SectionLabel lines={[meta.monoLabel]} /> : null}
        {line1 ? (
          <SplitTitle
            line1={line1}
            line2={line2}
            line2ClassName={line2 ? "text-[clamp(2rem,4vw,3.25rem)] italic text-gold" : undefined}
          />
        ) : null}
      </div>
    </SectionFrame>
  );
}

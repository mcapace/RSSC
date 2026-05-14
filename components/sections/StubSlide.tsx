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
      className="flex items-center justify-center bg-bg"
    >
      <div className="w-full max-w-deck space-y-8">
        {meta.monoLabel ? <SectionLabel lines={[meta.monoLabel]} /> : null}
        {line1 ? (
          <SplitTitle
            line1={line1}
            line2={line2}
            line2ClassName={line2 ? "font-display font-medium italic text-gold" : undefined}
          />
        ) : null}
      </div>
    </SectionFrame>
  );
}

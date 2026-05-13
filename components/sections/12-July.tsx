import { MonthSlide } from "./MonthSlide";
import { SECTIONS } from "@/lib/sections";

export default function July12() {
  const meta = SECTIONS[11];
  return (
    <MonthSlide
      sectionIndex={11}
      id={meta.id}
      ariaLabel={meta.ariaLabel}
      month="July"
      year="2026"
      theme="Surge + Sneak Peek"
      headline="Trade Winds."
      italicHeadline="Surge + Sneak Peek."
      metrics={[
        { label: "SOP", value: "100%" },
        { label: "SOS", value: "100%" },
        { label: "Frequency cap", value: "5×/wk" },
      ]}
      description="July widens reach while keeping craft intact: surge placements, a tasteful sneak peek, and guardrails that protect the luxury signal."
      visualType="surge"
    />
  );
}

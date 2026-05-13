import { MonthSlide } from "./MonthSlide";
import { SECTIONS } from "@/lib/sections";

export default function August13() {
  const meta = SECTIONS[12];
  return (
    <MonthSlide
      sectionIndex={12}
      id={meta.id}
      ariaLabel={meta.ariaLabel}
      month="August"
      year="2026"
      theme="Prestige"
      headline="High Tide."
      italicHeadline="Prestige."
      metrics={[
        { label: "Frequency cap", value: "5×/wk recommended" },
        { label: "SOP", value: "100%" },
        { label: "Reach", value: "1.2M" },
      ]}
      description="August carries the deck’s explicit guardrail: a five-per-week frequency cap, recommended, while prestige flighting holds reach without thinning the luxury signal."
      visualType="prestige"
    />
  );
}

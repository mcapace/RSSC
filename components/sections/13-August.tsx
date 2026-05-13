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
        { label: "Frequency cap", value: "5×/wk" },
        { label: "SOP", value: "100%" },
        { label: "Reach", value: "1.2M" },
      ]}
      description="August leans into prestige pacing: measured frequency, premium surfaces, and a reach story that feels earned rather than loud."
      visualType="prestige"
    />
  );
}

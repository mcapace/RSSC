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
      ]}
      description="Per the program deck, July is expressed as parity on SOP and SOS while the line widens into surge and sneak-peek storytelling. Frequency discipline moves to August as prestige tightens."
      visualType="surge"
    />
  );
}

import { PillarSlide } from "./PillarSlide";
import { PillarIIIVisual } from "./pillar-visuals";
import { SECTIONS } from "@/lib/sections";

export default function PillarIII09() {
  const meta = SECTIONS[8];
  return (
    <PillarSlide
      sectionIndex={8}
      id={meta.id}
      ariaLabel={meta.ariaLabel}
      pillarNumber="PILLAR III"
      romanNumeral="III"
      title="Dram Diaries"
      subtitle="13 Social Units · 5 Weeks Of Post-Voyage"
      description="A compact grid of social proof that extends the story after guests return, keeping the partnership present in feed without shouting."
      units={[
        { label: "Social units", value: "13" },
        { label: "Post-voyage window", value: "5 weeks" },
      ]}
      visual={<PillarIIIVisual />}
    />
  );
}

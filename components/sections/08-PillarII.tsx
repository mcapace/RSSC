import { PillarSlide } from "./PillarSlide";
import { PillarIIVisual } from "./pillar-visuals";
import { SECTIONS } from "@/lib/sections";

export default function PillarII08() {
  const meta = SECTIONS[7];
  return (
    <PillarSlide
      sectionIndex={7}
      id={meta.id}
      ariaLabel={meta.ariaLabel}
      pillarNumber="PILLAR II"
      romanNumeral="II"
      title="Rare Spirits, Rare Destinations"
      subtitle="Long-Form · Expert Voices · Hub Residency"
      description="Editorial features that read like chapters, pairing rare spirits with rare itineraries so the reader feels the voyage before stepping aboard."
      units={[
        { label: "Format", value: "Long-form" },
        { label: "Voice", value: "Expert-led" },
      ]}
      visual={<PillarIIVisual />}
    />
  );
}

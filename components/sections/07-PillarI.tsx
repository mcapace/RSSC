import { PillarSlide } from "./PillarSlide";
import { PillarIVisual } from "./pillar-visuals";
import { SECTIONS } from "@/lib/sections";

export default function PillarI07() {
  const meta = SECTIONS[6];
  return (
    <PillarSlide
      sectionIndex={6}
      id={meta.id}
      ariaLabel={meta.ariaLabel}
      pillarNumber="PILLAR I"
      romanNumeral="I"
      title="Voyage Map"
      subtitle="Always-On · Hub Residency"
      description="A living chart that keeps the partnership visible between surges, anchored to the hub so every departure feels connected to the next."
      units={[
        { label: "Residency", value: "Always-on" },
        { label: "Hub tie-in", value: "WhiskyAdvocate.com" },
      ]}
      visual={<PillarIVisual />}
    />
  );
}

import { MonthSlide } from "./MonthSlide";
import { SECTIONS } from "@/lib/sections";

export default function June11() {
  const meta = SECTIONS[10];
  return (
    <MonthSlide
      sectionIndex={10}
      id={meta.id}
      ariaLabel={meta.ariaLabel}
      month="June"
      year="2026"
      theme="Launch"
      headline="Set Sail."
      italicHeadline="Launch Week."
      metrics={[
        { label: "Units", value: "4" },
        { label: "Impressions", value: "185K" },
        { label: "SOP", value: "100%" },
        { label: "SOS", value: "100%" },
      ]}
      description="Launch week concentrates attention when curiosity is highest: four units, premium roadblocking, and a clean handshake between Regent and Whisky Advocate."
      visualType="launch"
    />
  );
}

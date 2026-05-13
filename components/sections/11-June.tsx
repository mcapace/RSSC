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
        { label: "Launch", value: "Launch week" },
      ]}
      description="Deck line: four units, one hundred eighty-five thousand impressions, launch week density. This is the clean open: premium surfaces, tight sequencing, and a handshake between Regent and Whisky Advocate before the season widens."
      visualType="launch"
    />
  );
}

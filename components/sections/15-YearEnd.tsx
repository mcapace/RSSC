import { MonthSlide } from "./MonthSlide";
import { SECTIONS } from "@/lib/sections";

export default function YearEnd15() {
  const meta = SECTIONS[14];
  return (
    <MonthSlide
      sectionIndex={14}
      id={meta.id}
      ariaLabel={meta.ariaLabel}
      month="Nov/Dec"
      year="2026"
      theme="Year-End Lists"
      headline="Year-End Lists."
      italicHeadline="The Commitment."
      metrics={[
        { label: "Nov/Dec", value: "The commitment" },
        { label: "Top 100", value: "Inclusion" },
        { label: "Year-end", value: "Feature" },
        { label: "Newsletter", value: "Frontline" },
      ]}
      description="Deck footer language: Nov/Dec and the commitment, with year-end lists as the proof chapter. This is where inclusion, features, and newsletter frontline convert months of storytelling into a single reckoning readers trust."
      visualType="yearEnd"
    />
  );
}

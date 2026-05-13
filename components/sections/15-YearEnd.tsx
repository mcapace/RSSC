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
      headline="The Reckoning."
      italicHeadline="The Commitment."
      metrics={[
        { label: "Top 100", value: "Inclusion" },
        { label: "Year-end", value: "Feature" },
        { label: "Newsletter", value: "Frontline" },
      ]}
      description="Year-end lists are the reckoning readers trust. This window converts months of storytelling into a single, decisive proof point."
      visualType="yearEnd"
    />
  );
}

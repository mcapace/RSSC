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
      theme="Prestige Winter Push"
      headline="Prestige Winter Push."
      italicHeadline="Three weeks of premium pre-roll plus dynamic display, planted ahead of the winter-itinerary decision window."
      metrics={[
        { label: "Channel", value: "Pre-Roll + Display" },
        { label: "Goal", value: "eCPM Efficiency" },
        { label: "Impressions", value: "350K" },
        { label: "Duration", value: "3 weeks" },
      ]}
      description="Pre-roll places the brand inside the reader's own video consumption on the Extension Network. Dynamic display retargets the next day with itinerary-specific creative. Efficient frequency, premium context, measurable lift. Frequency cap 5×/wk recommended."
      visualType="prestige"
      asideCaption="Shanken Extension Network · August 2026"
    />
  );
}

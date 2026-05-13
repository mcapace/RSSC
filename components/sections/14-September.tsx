import { MonthSlide } from "./MonthSlide";
import { SECTIONS } from "@/lib/sections";

export default function September14() {
  const meta = SECTIONS[13];
  return (
    <MonthSlide
      sectionIndex={13}
      id={meta.id}
      ariaLabel={meta.ariaLabel}
      month="September"
      year="2026"
      theme="Spotlight on Whisky LIVE"
      headline="Spotlight on Whisky LIVE."
      italicHeadline="Regent rides Whisky Advocate's signature consumer festival — three Stories from the floor, with the right audience already in the room."
      metrics={[
        { label: "Format", value: "1080×1920 · Mobile-first" },
        { label: "Frames", value: "3× Story · :15 / frame" },
        { label: "Impressions", value: "50K" },
        { label: "Engagement goal", value: "70K IG audience" },
      ]}
      description="Swipe-up to the hub. Festival energy, sommelier cameos, a deck-side dram. Three Story frames over event weekend."
      visualType="live"
      asideCaption="Whisky LIVE · September 2026"
    />
  );
}

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
      theme="New Season Launch"
      headline="New Season Launch."
      italicHeadline="The campaign opens with a chorus — one email, two newsletters, one social moment, on the same week."
      metrics={[
        { label: "Dedicated Email", value: "50K Sends" },
        { label: "Collecting Newsletter", value: "50K Impressions" },
        { label: "WhiskyNotes Newsletter", value: "65K Impressions" },
        { label: "Instagram · Post + Story", value: "20K Impressions" },
      ]}
      description="Dedicated Email — the hero unit. 35% average open. Lead-gen CTA into Regent's booking funnel. Collecting Newsletter — for the seasoned cellar; frames Regent as the natural next acquisition. WhiskyNotes — carries the dram half of the story into June. Instagram — social handshake; Reel-grade visuals; story with sign-up sticker. 4 units · 185K impressions · launch week."
      visualType="launch"
      asideCaption="Always-On hub · winespectator.com/regent"
    />
  );
}

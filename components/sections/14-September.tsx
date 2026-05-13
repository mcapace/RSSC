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
      theme="WhiskyLive"
      headline="Port of Call."
      italicHeadline="WhiskyLive."
      metrics={[
        { label: "Instagram audience", value: "70K" },
        { label: "Engagement", value: "Goal-led" },
        { label: "Activation", value: "Live" },
      ]}
      description="September aligns with WhiskyLive: a port-of-call moment where on-site energy translates to digital coverage without losing the Regent polish."
      visualType="live"
    />
  );
}

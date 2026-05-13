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
        { label: "Engagement goal", value: "Defined in plan" },
        { label: "Instagram audience", value: "70K" },
        { label: "Activation", value: "WhiskyLive" },
      ]}
      description="The proposal pairs September with WhiskyLive: engagement goal language plus a seventy-thousand-person Instagram audience anchor, and room for live activation coverage on site."
      visualType="live"
    />
  );
}

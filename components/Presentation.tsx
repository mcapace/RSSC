"use client";

import { useLayoutEffect } from "react";
import "lenis/dist/lenis.css";

import Cover01 from "@/components/sections/01-Cover";
import Intro02 from "@/components/sections/02-Intro";
import Audience03 from "@/components/sections/03-Audience";
import TheWindow04 from "@/components/sections/04-TheWindow";
import PlanInventory05 from "@/components/sections/05-PlanInventory";
import Architecture06 from "@/components/sections/06-Architecture";
import PillarI07 from "@/components/sections/07-PillarI";
import PillarII08 from "@/components/sections/08-PillarII";
import PillarIII09 from "@/components/sections/09-PillarIII";
import TheHub10 from "@/components/sections/10-TheHub";
import June11 from "@/components/sections/11-June";
import July12 from "@/components/sections/12-July";
import August13 from "@/components/sections/13-August";
import September14 from "@/components/sections/14-September";
import YearEnd15 from "@/components/sections/15-YearEnd";
import Measurement16 from "@/components/sections/16-Measurement";
import EventsOverview18 from "@/components/sections/18-EventsOverview";
import WhiskyFestOpportunities19 from "@/components/sections/19-WhiskyFestOpportunities";
import WhiskyFestTiers20 from "@/components/sections/20-WhiskyFestTiers";
import Fin17 from "@/components/sections/17-Fin";

import { useActiveSection } from "@/hooks/useActiveSection";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";
import { PersistentOverlay } from "@/components/ui/PersistentOverlay";
import { ProgressRail } from "@/components/ui/ProgressRail";

export function Presentation() {
  const { activeIndex, refreshObserver } = useActiveSection();
  useKeyboardNav(activeIndex);

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => refreshObserver());
    return () => cancelAnimationFrame(id);
  }, [refreshObserver]);

  return (
    <>
      <main id="presentation-scroll" className="presentation-scroll relative">
        <Cover01 />
        <Intro02 />
        <Audience03 />
        <TheWindow04 />
        <PlanInventory05 />
        <Architecture06 />
        <PillarI07 />
        <PillarII08 />
        <PillarIII09 />
        <TheHub10 />
        <June11 />
        <July12 />
        <August13 />
        <September14 />
        <YearEnd15 />
        <Measurement16 />
        <EventsOverview18 />
        <WhiskyFestOpportunities19 />
        <WhiskyFestTiers20 />
        <Fin17 />
      </main>
      <PersistentOverlay activeIndex={activeIndex} hideTopChrome={activeIndex === 0} />
      <ProgressRail activeIndex={activeIndex} />
    </>
  );
}

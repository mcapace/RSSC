"use client";

import { LenisProvider } from "@/context/LenisContext";
import { EntranceGate } from "@/components/ui/EntranceGate";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Presentation } from "@/components/Presentation";

export function ClientRoot() {
  return (
    <LenisProvider>
      <EntranceGate>
        <Presentation />
      </EntranceGate>
      <NoiseOverlay />
    </LenisProvider>
  );
}

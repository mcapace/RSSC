"use client";

export function NoiseOverlay() {
  return (
    <svg
      className="noise-overlay h-full w-full min-h-[100vh] min-w-[100vw]"
      aria-hidden
      preserveAspectRatio="none"
    >
      <filter id="grain" x="0" y="0">
        <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}

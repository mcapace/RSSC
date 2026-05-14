import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        gold: "var(--color-gold)",
        "gold-muted": "var(--color-gold-muted)",
        ivory: "var(--color-ivory)",
        mute: "var(--color-mute)",
      },
      maxWidth: {
        /** Primary column: comfortable reading measure */
        deck: "42rem",
        /** Wider decks: two-column, inventory, hub */
        "deck-wide": "min(100%, 72rem)",
        /** Extra-wide grids only */
        "deck-max": "min(100%, 80rem)",
      },
      fontSize: {
        "deck-hero": [
          "clamp(3rem, 7vw + 0.35rem, 6.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "deck-title": [
          "clamp(1.875rem, 3.2vw + 0.4rem, 2.75rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em" },
        ],
        "deck-subtitle": [
          "clamp(1rem, 1.5vw + 0.45rem, 1.35rem)",
          { lineHeight: "1.45", letterSpacing: "0" },
        ],
        "deck-month": [
          "clamp(1.875rem, 3.8vw + 0.35rem, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "deck-month-sub": [
          "clamp(1.0625rem, 1.9vw + 0.3rem, 1.4rem)",
          { lineHeight: "1.4", letterSpacing: "0" },
        ],
        "deck-lede": [
          "clamp(1.125rem, 1.85vw + 0.35rem, 1.75rem)",
          { lineHeight: "1.45", letterSpacing: "-0.01em" },
        ],
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

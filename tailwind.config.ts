import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
      },
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        brand: {
          red: "#E11D2A",
          redDark: "#B3141F",
          black: "#0A0A0A",
          ink: "#111113",
          muted: "#6B7280",
          line: "#EAEAEA",
          soft: "#F7F7F8",
          blue: "#3B82F6",
          blueLight: "#DBEAFE",
          green: "#10B981",
          greenLight: "#D1FAE5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-plus-jakarta)", "var(--font-inter)", "ui-sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,.04), 0 8px 30px rgba(16,24,40,.06)",
        cardHover: "0 10px 40px rgba(16,24,40,.08), 0 2px 6px rgba(16,24,40,.05)",
        pill: "0 2px 16px rgba(0,0,0,0.06)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(.9)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        plusDrift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "44px 44px" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 32s linear infinite",
        pulseRing: "pulseRing 2s cubic-bezier(.4,0,.6,1) infinite",
        plusDrift: "plusDrift 22s linear infinite",
      },
      backgroundImage: {
        "grid-dot":
          "radial-gradient(rgba(10,10,10,0.08) 1px, transparent 1px)",
        "red-gradient":
          "linear-gradient(135deg, #E11D2A 0%, #B3141F 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

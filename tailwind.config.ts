import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF7F0",
          100: "#F5EFE3",
          200: "#EBE0CB",
          300: "#DCC9A8",
        },
        clay: {
          400: "#C68B5C",
          500: "#A8693B",
          600: "#854F25",
          700: "#5E371A",
          900: "#2D1810",
        },
        ember: {
          400: "#E89B5C",
          500: "#D97A2E",
        },
        aurora: {
          300: "#7DD3C8",
          400: "#4DB8A8",
          500: "#2D9D8A",
        },
        plum: {
          300: "#C4B5D4",
          500: "#7B5EA7",
          700: "#4A3570",
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', '"Source Han Serif SC"', "ui-serif", "Georgia", "serif"],
        sans: ['var(--font-sans)', '"PingFang SC"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.32em",
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(45,24,16,0.08), 0 2px 8px rgba(45,24,16,0.04), inset 0 1px 0 rgba(255,255,255,0.15)",
        "glass-lg": "0 16px 48px rgba(45,24,16,0.12), 0 4px 16px rgba(45,24,16,0.06), inset 0 1px 0 rgba(255,255,255,0.18)",
        "glow-ember": "0 0 24px rgba(217,122,46,0.25), 0 0 48px rgba(217,122,46,0.1)",
        "glow-aurora": "0 0 24px rgba(45,157,138,0.2), 0 0 48px rgba(45,157,138,0.08)",
        "card": "0 2px 8px rgba(45,24,16,0.04), 0 8px 24px rgba(45,24,16,0.06), 0 1px 2px rgba(45,24,16,0.02)",
        "card-hover": "0 4px 16px rgba(45,24,16,0.08), 0 16px 40px rgba(45,24,16,0.1), 0 2px 4px rgba(45,24,16,0.04), 0 0 32px rgba(217,122,46,0.12)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slow-pulse": "slowPulse 2.6s ease-in-out infinite",
        "drift": "drift 12s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        "float-slow": "float 10s ease-in-out 4s infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "orb-1": "orb 20s ease-in-out infinite",
        "orb-2": "orb 24s ease-in-out 5s infinite",
        "orb-3": "orb 28s ease-in-out 10s infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowPulse: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(0, -10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(1deg)" },
          "66%": { transform: "translateY(6px) rotate(-1deg)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        orb: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.5" },
          "25%": { transform: "translate(10%, -15%) scale(1.1)", opacity: "0.6" },
          "50%": { transform: "translate(-5%, -25%) scale(0.95)", opacity: "0.4" },
          "75%": { transform: "translate(-15%, -5%) scale(1.05)", opacity: "0.55" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(217,122,46,0.15), 0 0 40px rgba(217,122,46,0.05)" },
          "50%": { boxShadow: "0 0 30px rgba(217,122,46,0.3), 0 0 60px rgba(217,122,46,0.1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

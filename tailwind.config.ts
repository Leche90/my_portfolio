import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blood: {
          DEFAULT: "#D9412A",
        },
        paper: {
          DEFAULT: "#F9F8F6",
          deep: "#EFECE6",
        },
        ink: {
          DEFAULT: "#0F0E0C",
          muted: "#6E6B64",
          line: "#E1DDD5",
        },
        bg: "#0A0D13",
        panel: "#10141D",
        elevated: "#161B28",
        line: "#212838",
        "line-soft": "#181E2C",
        muted: "#828CA0",
        faint: "#525C70",
        indigo: {
          DEFAULT: "#5B5BF6",
          soft: "#8C8CFF",
          dim: "#33338F",
        },
        cyan: {
          DEFAULT: "#33E6C6",
          soft: "#7BF3DB",
          dim: "#1B6F62",
        },
        amber: "#FFB454",
        rose: "#FF6B7A",
        green: "#3DDC84",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        micro: ["0.625rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        "wider-mono": "0.16em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(91,91,246,0.16) 0%, rgba(10,13,19,0) 70%)",
      },
      boxShadow: {
        "glow-indigo": "0 0 40px -8px rgba(91,91,246,0.45)",
        "glow-cyan": "0 0 40px -8px rgba(51,230,198,0.35)",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
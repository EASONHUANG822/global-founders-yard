import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        paper: "#f7f5ef",
        line: "#d8d2c4",
        signal: "#f5f5f5",
        cobalt: "#a3a3a3",
        carbon: "#171717",
        yard: {
          black: "#050607",
          panel: "#0b0b0c",
          card: "#111113",
          line: "#2a2a2d",
          cyan: "#d4d4d8",
          violet: "#a1a1aa",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Arial",
          "Helvetica Neue",
          "Helvetica",
          "sans-serif",
        ],
      },
      boxShadow: {
        "soft-line": "0 1px 0 rgba(8, 8, 8, 0.08)",
        glow: "0 24px 90px rgba(255, 255, 255, 0.09)",
      },
    },
  },
  plugins: [],
};

export default config;

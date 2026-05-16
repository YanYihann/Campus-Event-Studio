import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ces: {
          primary: "#cc785c",
          "primary-active": "#a9583e",
          "primary-disabled": "#e6dfd8",
          ink: "#141413",
          body: "#3d3d3a",
          "body-strong": "#252523",
          muted: "#6c6a64",
          "muted-soft": "#8e8b82",
          hairline: "#e6dfd8",
          "hairline-soft": "#ebe6df",
          canvas: "#faf9f5",
          "surface-soft": "#f5f0e8",
          "surface-card": "#efe9de",
          "surface-cream-strong": "#e8e0d2",
          "surface-dark": "#181715",
          "surface-dark-elevated": "#252320",
          "surface-dark-soft": "#1f1e1b",
          "on-primary": "#fbf7f1",
          "on-dark": "#faf9f5",
          "on-dark-soft": "#a09d96",
          success: "#5db872",
          warning: "#d4a017",
          error: "#c64545",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"EB Garamond"', "Garamond", '"Times New Roman"', "serif"],
        body: ['"Aptos"', '"Segoe UI"', "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(20, 20, 19, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;

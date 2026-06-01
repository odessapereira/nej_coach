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
        sable: "#F0EBE1",
        "sable-dark": "#E4DDD3",
        brun: "#1C1612",
        rose: "#C9938A",
        "rose-light": "#E8C4BE",
        "rose-pale": "#F5EBE8",
        muted: "#8A7B72",
        blanc: "#FDFAF7",
      },
      fontFamily: {
        barlow: ["'Barlow Condensed'", "sans-serif"],
        dm: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
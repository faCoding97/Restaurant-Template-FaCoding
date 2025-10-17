import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: { primary: "#ffbe33", secondary: "#e69c00", dark: "#0c0c0c" },
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        script: ["var(--font-dancing)"],
      },
      boxShadow: { glow: "0 0 0 4px rgba(255,190,51,.2)" },
    },
  },
  plugins: [],
};
export default config;

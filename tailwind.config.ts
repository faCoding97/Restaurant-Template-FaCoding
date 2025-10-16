import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: {
          primary: "#ffbe33", // ElixCode-like warm orange
          secondary: "#e69c00", // deeper orange
          dark: "#0c0c0c", // near-black background
          gray: "#f1f2f3",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        script: ["var(--font-dancing)"],
      },
      boxShadow: {
        glow: "0 0 0 4px rgba(255, 190, 51, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;

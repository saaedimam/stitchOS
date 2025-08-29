import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        teal: "#00BFA6",
        charcoal: "#22272A",
        offwhite: "#F6F7F9",
      },
      backgroundImage: {
        weave: "radial-gradient( circle at 25% 25%, rgba(11,31,58,0.12), transparent 40% ), radial-gradient( circle at 75% 75%, rgba(0,191,166,0.12), transparent 40% )",
      },
      boxShadow: {
        glass: "0 8px 30px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
    },
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      display: ["Outfit", "Inter", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
export default config;

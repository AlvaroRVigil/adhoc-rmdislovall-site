/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#ECEBE3",
        paperSoft: "#F5F3EB",
        paperDeep: "#DBC8B6",
        ink: "#30271D",
        inkSoft: "#5E4F3F",
        border: "#CDBFAA",
        wood: "#A89279",
        woodSoft: "#DBC8B6",
        woodDeep: "#6E5945",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.25rem, 8vw, 7rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.875rem, 3.5vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
      },
      spacing: {
        // Escala 4/8 — Tailwind ya la trae, añadimos sólo los grandes
        "section-y": "clamp(5rem, 10vw, 9rem)",
        "section-x": "clamp(1.25rem, 5vw, 4rem)",
      },
      maxWidth: {
        container: "1440px",
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

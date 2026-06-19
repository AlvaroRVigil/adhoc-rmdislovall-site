/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Breakpoint del layout desktop: por encima de 1280px se mantiene la
      // versión horizontal; por debajo, la web pasa a vertical. 1280 cubre
      // todo portátil estándar (1366, 1280, 1536...) sin caer a tablet.
      screens: {
        desk: "1280px",
        // Breakpoint propio del carrusel de Servicios: a partir de 900px usa el
        // layout horizontal con pin; por debajo, versión móvil (tarjeta full).
        serv: "900px",
      },
      colors: {
        paper: "#ECEBE3",
        paperSoft: "#F5F3EB",
        paperDeep: "#DBC8B6",
        ink: "#30271D",
        inkSoft: "#5E4F3F",
        border: "#CDBFAA",
        wood: "#9B2F23",
        woodSoft: "#DBC8B6",
        woodDeep: "#6E5945",
        accent: "#9B2F23",
        accentSoft: "#B85949",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.25rem, 8vw, 7rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.875rem, 3.5vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        eyebrow: ["10px", { lineHeight: "1.4", letterSpacing: "0.24em" }],
        "h1-hero": ["clamp(2.25rem, 7vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "h2-section": ["2.125rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "h2-section-md": ["2.25rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        eyebrow: "0.24em",
        marquee: "0.22em",
        "marquee-sm": "0.18em",
        label: "0.22em",
      },
      spacing: {
        // Escala 4/8 — Tailwind ya la trae, añadimos sólo los grandes
        "section-y": "clamp(6rem, 10vw, 9rem)",
        "section-x": "clamp(1.25rem, 5vw, 4rem)",
      },
      maxWidth: {
        container: "1800px",
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

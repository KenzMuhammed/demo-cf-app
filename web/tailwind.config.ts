/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      screens: {
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "2.5rem",
        },
        screens: {
          "2xl": "1536px",
        },
      },
      fontFamily: {
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
      },
      colors: {
        primary: {
          DEFAULT: "#1b2d49",
          lighter: "#7A9FC8",
          light: "#355982",
          dark: "#142134",
          darker: "#0C141D",
          foreground: "#fff",
        },
        secondary: {
          DEFAULT: "#F59E0B",
          lighter: "#FCD34D",
          light: "#FBBF24",
          dark: "#D97706",
          darker: "#92400E",
          foreground: "#fff",
        },
        yellow: "#feb027",
        ocean: "#011d2a",
      },
      boxShadow: {
        sm: "0 5px 8px rgba(0,0,0,0.03)",
        md: "0 5px 10px rgba(0,0,0,0.05)",
      },
    },
  },
};

export default config;

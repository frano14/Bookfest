/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Prilagodi prema potrebama projekta
  theme: {
    extend: {
      colors: {
        bg: "#e9e6dc",
        gray: "#262b26",
        textGray: "#b0aca2",
        orange: "#ca5e1c",
      },
      screens: {
        xl: "1248px",
        l: "1080px",
        m: "920px",
        ms: "780px",
        s: "620px",
        xs: "480px",
      },
    },
  },
  plugins: [],
};

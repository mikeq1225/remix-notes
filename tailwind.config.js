/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#e7cffe",
          50: "#dcbcfb",
          100: "#ca97fc",
          200: "#b779f4",
          300: "#b779f4",
          400: "#8f42dd",
          500: "#8d34e6",
          600: "#8021e0",
          700: "#690fc3",
          800: "#4e0596",
        },
        secondary: {
          50: "#fcccab",
          100: "#f9b485",
          200: "#fc9e5f",
          300: "#fb883c",
          400: "#fa7014",
          500: "#ff6600",
          600: "#f2610d",
        },
      },
    },
  },
  plugins: [],
};

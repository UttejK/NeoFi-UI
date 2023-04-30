/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        grad1: "#3387D5",
        grad2: "#7A06C9",
        primary: "#627EEA",
        secondary: "#0B0819",
        shadow: "#D9D9D9",
        background1: "#040406",
        background2: "#1C1731",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

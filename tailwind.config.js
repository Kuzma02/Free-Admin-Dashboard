/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        blackPrimary: "#030712",
        blackSecondary: "rgba(48, 48, 48, 0.90)",
        whiteSecondary: "#F0F0F0",
      },
      boxShadow: {
        "custom-white": "0px 4px 10px 0px rgba(255, 255, 255, 0.90)",
      },
      backgroundImage: {
        "login-background": "url('/src/assets/dark login bg 1.jpg')",
      },
    },
  },
  plugins: [],
};

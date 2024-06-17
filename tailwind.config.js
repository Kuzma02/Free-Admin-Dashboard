/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackPrimary: '#030712',
        blackSecondary: '#ecc94b',
        whiteSecondary: '#F0F0F0'
        // ...
      }
    },
  },
  plugins: [],
}


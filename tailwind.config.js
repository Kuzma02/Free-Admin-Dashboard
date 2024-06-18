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
        blackSecondary: 'rgba(48, 48, 48, 0.90)',
        whiteSecondary: '#F0F0F0'
        // ...
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/TS/JSX/TSX files for Tailwind classes
  ],
  darkMode: 'class',  // Enable dark mode with a class toggle
  theme: {
    extend: {},
  },
  plugins: [],
};

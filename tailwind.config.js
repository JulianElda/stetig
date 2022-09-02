/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./.storybook/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

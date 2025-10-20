/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/web/**/*.{js,ts,jsx,tsx}",
    "./apps/native/**/*.{js,ts,jsx,tsx}",
    "./packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

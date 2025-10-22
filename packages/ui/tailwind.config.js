/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../apps/native/app/**/*.{js,jsx,ts,tsx}', // Incluye la app nativa
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

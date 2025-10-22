// apps/web/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  important: 'html', // Aumenta la especificidad de Tailwind
  theme: {
    extend: {},
  },
  plugins: [],
};

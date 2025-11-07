/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  important: '#cards-igaming-vip',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
    screens: {
      'mobile': {'max': '767px'},
      'tablet': {'max': '1024px'},
      'desktop': '1025px',
    },
  },
  plugins: [],
};


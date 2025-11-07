/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
    screens: {
      mobile: { max: '767px' },
      tablet: { min: '768px', max: '1024px' },
      desktop: { min: '1025px' },
    },
  },
  plugins: [],
};


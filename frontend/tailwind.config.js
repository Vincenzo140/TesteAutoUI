/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-text': '#e0e0e0',
        'light-bg': '#ffffff',
        'light-text': '#000000',
      },
    },
  },
  },
  plugins: [],
};

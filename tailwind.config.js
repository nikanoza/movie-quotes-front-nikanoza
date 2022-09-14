/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: ['neue', 'sans-serif'],
        georgian: ['georgian', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

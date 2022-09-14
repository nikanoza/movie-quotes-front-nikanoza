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
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        mbFooter: '8px',
      },
      backgroundImage: {
        darkBlue:
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%)',
      },
      colors: {
        cream: '#DDCCAA',
        blood: '#E31221',
        dBlue: '#0D0B14',
      },
      height: {
        102: '27rem',
      },
    },
  },
  plugins: [],
};

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
        bloodHover: '#CC0E10',
        dBlue: '#0D0B14',
        backdrop: 'rgba(0, 0, 0, 0.54)',
        fGray: '#CED4DA',
        fWhite: '#E9ECEF',
        success: '#198754',
        lowGray: '#6C757D',
        error: '#DC3545',
        eye: '#6C757D',
        link: '#0D6EFD',
      },
      width: {
        102: '27rem',
        150: '37.5rem',
      },
      height: {
        102: '27rem',
        150: '37.5rem',
        176: '44rem',
        256: '64rem',
      },
      screens: {
        '3xl': '1920px',
      },
      boxShadow: {
        sGray: '0px 0px 0px 4px rgba(13, 110, 253, 0.25)',
      },
    },
  },
  plugins: [],
};

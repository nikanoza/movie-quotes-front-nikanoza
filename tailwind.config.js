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
        popup:
          'linear-gradient(112.94deg, rgba(239, 239, 239, 0.3) -1.81%, rgba(239, 239, 239, 0.00514528) 102.5%, rgba(1, 1, 1, 0.00260417) 102.51%, rgba(239, 239, 239, 0.05) 102.52%);',
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
        134: '33.625rem',
        150: '37.5rem',
        '3/10': '30%',
      },
      height: {
        104: '26rem',
        108: '27rem',
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

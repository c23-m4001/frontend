/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'modal-fade': 'modal-fade 0.2s linear forwards',
      },
      colors: {
        primary: '#3DA9FC',
        'primary-hover': '#3DD9DC',
        'primary-inverse': '#FFFFFF',

        secondary: '#90B4CE',

        white: '#FFFFFF',
        backdrop: 'rgb(13,12,12,0.6)',
      },
      borderRadius: {
        '10px': '10px',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      maxWidth: {
        '800px': '800px',
      },
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '9px': '9px',
        '10px': '10px',
        '18px': '18px',
      },
    },
  },
  plugins: [],
}

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
        background: '#D8EEFE',
        headline: '#094067',
        paragraph: '#5F6C7B',
        danger: '#FF0000',
        success: '#3DA9FC',
      },
      borderRadius: {
        '10px': '10px',
      },
      borderColor: {
        secondary: '#90B4CE',
      },
      fontFamily: {
        poppins: ['Poppins'],
        sen: ['Sen'],
      },
      flexBasis: {
        '50%': '50%',
      },
      maxWidth: {
        '800px': '800px',
        '180px': '180px',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '60%': '60%',
        '3/4': '75%',
        full: '100%',
        360: '360px',
        600: '600px',
        800: '800px',
      },
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '9px': '9px',
        '10px': '10px',
        '14px': '14px',
        '15px': '15px',
        '18px': '18px',
        '20px': '20px',
        '25px': '25px',
        '30px': '30px',
        '40px': '40px',
        '70px': '70px',
        '77px': '77px',
        '80px': '80px',
        '90px': '90px',
        '96px': '96px',
        '100px': '100px',
        '200px': '200px',
        '210px': '210px',
        '220px': '220px',
      },
    },
  },
  plugins: [],
}

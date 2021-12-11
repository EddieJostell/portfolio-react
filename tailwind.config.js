module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#dd734f',
          dark: '',
          light: '',
        },
        gray: {
          DEFAULT: '#b0b2c3',
          dark: '',
          light: '',
        },
      },
      backgroundColor: {
        'cool-black': '#1c1d24',
      },
    },
  },
  variants: {
    extend: {
      fontSize: ['hover'],
      /* boxShadow: {
        white: 'box-shadow: 0 0 10px #FFF',
      }, */
    },
  },
  plugins: [],
};

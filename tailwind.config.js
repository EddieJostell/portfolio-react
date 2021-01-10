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

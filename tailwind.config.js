const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      lapis: '#336699',
      darksky: '#86BBD8',
      charcoal: '#2F4858',
      grannysmith: '#9EE493',
      nyanza: '#DAF7DC',
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      backgroundImage: theme => ({
        'profile-pic': "url('/robert-oliver.jpg')",
        'profile-pic-bw': "url('/robert-oliver-bw.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
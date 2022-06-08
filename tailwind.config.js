const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },
    fontSize: {
      'h2': ['1.5rem', {
        lineHeight: '2rem',
      }],
      'h2-md': ['2.25rem', {
        lineHeight: '2.5rem',
      }],
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', defaultTheme.fontFamily.sans],
      }
    },
    corePlugins: {

    },
  },
  plugins: [],
}

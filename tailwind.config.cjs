/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        white: {
          500: '#F8F8FF',
          600: '#F4F4FF',
        },
        purple: {
          500: '#6246EA'
        },
        red: {
          500: '#E45858'
        },
        black: {
          500: '#121214'
        },
        gray: {
          500: '#858793'
        },
      },
      textColor: {
        purple: {
          500: '#6246EA'
        },
        red: {
          500: '#E45858'
        },
        gray: {
          500: '#858793'
        },
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

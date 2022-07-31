const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      orange: colors.orange,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      red: colors.red,
      rose: colors.rose,
      amber: colors.amber,
      yellow: colors.yellow
    },
    extend: {
      colors: {
        'gray-main': '#2d2e2e',
        'gray-sombre': '#292a2a',
        'gray-clair': '#2b2c2c',
        'gray-heading': '#a4a5a6',
        'gray-typo': '#979899',
        'orange-link': '#e0a80d',
        'gray-link': '#fefaee',
        'gray-timeline': '#404242'
      },
      fontSize: {
        '2xl': ['20px', '32px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

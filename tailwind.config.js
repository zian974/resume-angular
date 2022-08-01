const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class' or false
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

        'typo-title': '#a4a5a6',
        'typo-title-dk': '#939393',

        'typo-subtitle': '#939393',
        'typo-subtitle-dk': '#979899',

        'highlight': '#f8bb10',
        'highlight-dk': '#e0a80d',

        'typo':'#939393',
        'typo-dk':'#979899',

        'main':'#FFF',
        'main-dk':'#2d2e2e',

        'gray-head': '#fafafa',
        'gray-head-dk': '#282929',
        'gray-high':'#f8f8f8',
        'gray-high-dk':'#292a2a',
        'gray-mid':'#fbfbfb',
        'gray-mid-dk':'#2d2e2e',
        'gray-low':'#fcfcfc',
        'gray-low-dk':'#2b2c2c',

        'gray-bd': '#ececec',
        'gray-bd-dk': '#404242',


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

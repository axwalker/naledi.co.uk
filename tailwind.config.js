const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',

  purge: {
    content: [
      'pages/**/*.js',
      'components/**/*.vue',
      'pages/**/*.vue',
      'content/**/*.md',
    ],
  },

  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['basic-sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#f0f9fb',
          100: '#daf7f8',
          200: '#adeef1',
          300: '#75e1eb',
          400: '#30c8e2',
          500: '#11a8d5',
          600: '#0d87be',
          700: '#126c99',
          800: '#135371',
          900: '#124358',
        },
        code: '#f5f2f0',
      },
      opacity: {
        10: '.1',
        20: '.2',
        30: '.3',
        40: '.4',
        50: '.5',
        60: '.6',
        70: '.7',
        80: '.8',
        90: '.9',
        100: '1',
      },
    },
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('@tailwindcss/typography')],
}

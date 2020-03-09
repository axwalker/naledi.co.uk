// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          100: '#E7F6FE',
          200: '#C3E9FD',
          300: '#9FDBFB',
          400: '#58C0F8',
          500: '#10A5F5',
          600: '#0E95DD',
          700: '#0A6393',
          800: '#074A6E',
          900: '#05324A',
        },
      },
      opacity: {
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '50': '.5',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9',
        '100': '1',
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus'],
  },
  plugins: [require("@tailwindcss/ui")]
};

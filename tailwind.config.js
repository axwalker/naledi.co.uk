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
          100: '#EBF4F6',
          200: '#CEE3E9',
          300: '#B1D2DB',
          400: '#76B0C0',
          500: '#3B8EA5',
          600: '#358095',
          700: '#235563',
          800: '#1B404A',
          900: '#122B32',
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

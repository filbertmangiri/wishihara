const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const themeColors = {
  dark: {
    DEFAULT: colors.slate[900],
    1: colors.slate[900],
    2: colors.slate[800],
    3: colors.slate[700],
    4: colors.slate[600],
    5: colors.slate[500],
  },
  light: {
    DEFAULT: colors.slate[100],
    1: colors.slate[100],
    2: colors.slate[200],
    3: colors.slate[300],
    4: colors.slate[400],
    5: colors.slate[500],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        tablet: '640px', // sm
        laptop: '1024px', // lg
        desktop: '1280px', // xl
      },
      colors: { ...themeColors },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          'base-100': colors.slate[100],
          'base-200': colors.slate[200],
          'base-300': colors.slate[300],
          'base-content': colors.slate[900],
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          'base-100': colors.slate[900],
          'base-200': colors.slate[800],
          'base-300': colors.slate[700],
          'base-content': colors.slate[100],
        },
      },
    ],
  },

  plugins: [require('daisyui')],
};

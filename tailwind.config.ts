import forms from "@tailwindcss/forms";
const colors = require('tailwindcss/colors')

export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        red: colors.red,
        blue: colors.blue
      },
      fontFamily: {
        sans: ["Messina Sans", "sans-serif"],
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      zIndex: {
        menuBar: 10,
        slideOver: 20,
      },
      strokeWidth: {
        1.25: 1.25,
        1.5: 1.5,
        4: 4,
        6: 6,
        8: 8,
      },
      gradientColorStopPositions: {
        "33%": "33%",
      },
      flex: {
        2: "2 2 0%",
        4: "4 4 0%",
        6: "6 6 0%",
      },
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
        screen: { raw: "screen" },
      },
      maxWidth: {
        "8xl": "1366px",
      },
      boxShadow: {
        "inner-mark": "inset 5px 0px 0px -3px rgba(0, 0, 0, 0.5);",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [forms],
};

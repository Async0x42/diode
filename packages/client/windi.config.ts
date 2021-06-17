import { defineConfig } from 'vite-plugin-windicss';
import defaultTheme from 'windicss/defaultTheme';
import colors from 'windicss/colors';
import forms from 'windicss/plugin/forms';
import typography from 'windicss/plugin/typography';
import lineClamp from 'windicss/plugin/line-clamp';
import aspectRatio from 'windicss/plugin/aspect-ratio';

export default defineConfig({
  darkMode: 'class',
  plugins: [typography(), forms, lineClamp, aspectRatio],
  attributify: true,
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      light: colors.light,
      dark: colors.dark,
      amber: colors.amber,
      black: colors.black,
      blue: colors.blue,
      'blue-gray': colors.blueGray,
      'cool-gray': colors.coolGray,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      'light-blue': colors.lightBlue,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      teal: colors.teal,
      'true-gray': colors.trueGray,
      violet: colors.violet,
      'warm-gray': colors.warmGray,
      white: colors.white,
      yellow: colors.yellow,
    },
  },
});

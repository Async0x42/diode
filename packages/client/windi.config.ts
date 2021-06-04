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
      // waiting on windicss 3.0
      // light: colors.light,
      // dark: colors.dark,
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
    fontFamily: {
      sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
    },
  },
  purge: {
    options: {
      safelist: [
        // backgrounds for selection
        /^bg-light/,
        /^bg-dark/,
        /^bg-amber/,
        /^bg-black/,
        /^bg-blue/,
        /^bg-blue-gray/,
        /^bg-cool-gray/,
        /^bg-cyan/,
        /^bg-emerald/,
        /^bg-fuchsia/,
        /^bg-gray/,
        /^bg-green/,
        /^bg-indigo/,
        /^bg-light-blue/,
        /^bg-lime/,
        /^bg-orange/,
        /^bg-pink/,
        /^bg-purple/,
        /^bg-red/,
        /^bg-rose/,
        /^bg-teal/,
        /^bg-true-gray/,
        /^bg-violet/,
        /^bg-warm-gray/,
        /^bg-white/,
        /^bg-yellow/,

        // borders for selection
        /^border-light/,
        /^border-dark/,
        /^border-amber/,
        /^border-black/,
        /^border-blue/,
        /^border-blue-gray/,
        /^border-cool-gray/,
        /^border-cyan/,
        /^border-emerald/,
        /^border-fuchsia/,
        /^border-gray/,
        /^border-green/,
        /^border-indigo/,
        /^border-light-blue/,
        /^border-lime/,
        /^border-orange/,
        /^border-pink/,
        /^border-purple/,
        /^border-red/,
        /^border-rose/,
        /^border-teal/,
        /^border-true-gray/,
        /^border-violet/,
        /^border-warm-gray/,
        /^border-white/,
        /^border-yellow/,
      ],
    },
  },
});

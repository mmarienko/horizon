/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid", "./assests/*.js"],
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'body': '#111111',
        'sale': '#FF0000',
        'heading': '#0A4874',
      },
    },
  },
  plugins: [],
}

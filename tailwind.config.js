/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid", "./assests/*.js"],
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}


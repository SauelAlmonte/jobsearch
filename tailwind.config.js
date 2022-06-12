/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './layout/home/*.html',
    './layout/contact/*.html',
    './layout/dashboard/*.html',
    './layout/login/*.html',
    './layout/results/*.html',
    './layout/search/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}

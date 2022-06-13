/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './layout/home/home.html',
    './layout/contact/contact.html',
    './layout/dashboard/dashboard.html',
    './layout/login/login.html',
    './layout/results/results.html',
    './layout/search/search.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}

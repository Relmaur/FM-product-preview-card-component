/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat'],
        serif: ['Fraunces']
      },
      colors: {
        'dark_cyan': 'hsl(158, 36%, 37%)',
        'darker_cyan': 'hsl(159, 36%, 26%)',
        'cream': 'hsl(30, 38%, 92%)',
        'blue_very': 'hsl(228, 12%, 48%)',
        'grayish_blue': 'hsl(228, 12%, 48%)'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {},
    fontFamily: {
      'Dubai-Regular': ['Dubai-Regular', 'sans-serif'],
      'Dubai-Bold': ['Dubai-Bold', 'sans-serif'],
    },
  },
  plugins: [],
  // purge: {
  //   enabled: true,
  //   content: [
  //     './**/*.html'
  //   ]
  // },
}
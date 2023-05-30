/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'nunito': ['Nunito Sans', 'sans-serif'],
      'lilita': ['Lilita One', 'display']
    },
    extend: {
      colors: {
        'soft-gray': '#8E9AAF',
        'soft-purple': '#CBCOD3',
        'soft-orange': '#EFD3D7',
        'soft-pink': '#FEEAFA',
        'soft-blue': '#DEE2FF'
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}


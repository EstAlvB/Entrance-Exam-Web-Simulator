/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        'soft-gray': '#8E9AAF',
        'soft-purple': '#CBC0D3',
        'soft-orange': '#EFD3D7',
        'soft-pink': '#FEEAFA',
        'soft-blue': '#DEE2FF'
      },
      backgroundImage: {
        'numeric': "url('/images/numeric.jpeg')",
        'logic': "url('/images/logic.jpeg')",
        'verbal': "url('/images/verbose.jpeg')",
        'concentration': "url('/images/concentration.jpeg')"
      },
      listStyleImage: {
        'check': 'url("/images/check.png")',
      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
        'lilita': ['Lilita One', 'display']
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}


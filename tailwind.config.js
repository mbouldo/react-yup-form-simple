module.exports = {
  mode:'jit',
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'sans-serif'],
        'inter':['Inter','sans-serif']
      },
      colors: {
        brand: '#7269ff',
        success: '#03DAC6',
        warning: '#FFBE76',
        danger: '#CF6679',
        // Text Colors
        highContrastGray: '#242933', //DARK GRAYS
        mediumContrastGray: '#2E3440',
        lowContrastGray: '#434C5E',
        // Backgrounds
        highContrastWhite: '#ECEFF4', //WHITES
        mediumContrastWhite: '#F2F4F8',
        lowContrastWhite: '#7b88a1',
        background:'#242933',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
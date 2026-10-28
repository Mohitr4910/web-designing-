/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0c5adb',
          'blue-hover': '#0947b0',
          dark: '#081c4e',
          navy: '#0b225e',
          amber: '#ff9e00',
          'amber-hover': '#e08b00',
          orange: '#ff5722',
          subtle: '#f0f5ff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

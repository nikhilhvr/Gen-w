/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0% 100%': { transform: '(-15deg)' },
          '50%': { transform: 'rotate(15deg)' }
        },
      },
    },
  },
  plugins: [],
}


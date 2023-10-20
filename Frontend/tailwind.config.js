/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce1: 'bounce 1s ease-in-out infinite',
        bounce2: 'bounce 1.5s ease-in-out infinite',
        bounce3: 'bounce 2s ease-in-out infinite'
      },
      keyframes: {
        bounce1: {
          '0% 100%': { transform: 'scale3d(5,5,5)' },
          '50%': { transform: 'scale3d(5)' }
        },
        bounce2: {
          '0% 100%': { transform: 'scale3d(5,5,5)' },
          '50%': { transform: 'scale3d(5)' }
        },
        bounce2: {
          '0% 100%': { transform: 'scale3d(5,5,5)' },
          '50%': { transform: 'scale3d(5)' }
        },
      },
    },
  },
  plugins: [],
}


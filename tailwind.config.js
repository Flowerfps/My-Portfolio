/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F8BBD0',
          DEFAULT: '#F48FB1',
          dark: '#E91E63',
        },
        accent: {
          light: '#FFF9C4',
          DEFAULT: '#FFF59D',
        },
        neutral: {
          light: '#F5F5F5',
          DEFAULT: '#E0E0E0',
          dark: '#9E9E9E',
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}

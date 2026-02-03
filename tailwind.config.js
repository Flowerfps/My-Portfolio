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
          light: '#f5f5f5',
          DEFAULT: '#333',
          dark: '#1a1a1a',
        },
        accent: {
          light: '#fafafa',
          DEFAULT: '#ededed',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      }
    },
  },
  plugins: [],
}

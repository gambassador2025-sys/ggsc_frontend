/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          dark: '#0A1623',
          navy: '#111A2B',
          DEFAULT: '#213960',
          light: '#304B78',
          accent: '#376098',
        },
        beige: {
          light: '#FAF8F5',
          DEFAULT: '#F5F2EB',
          muted: '#E5E1DB',
          dark: '#D8D1C6',
        },
        cream: {
          light: '#FBFBFA',
          DEFAULT: '#FAF9F6',
          dark: '#EFECE6',
        },
        offwhite: {
          DEFAULT: '#FAF9F6',
          warm: '#F8F7F4',
          muted: '#F4F3EF',
        },
      },
    },
  },
  plugins: [],
}

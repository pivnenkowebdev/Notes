/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts}"],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: 15,
    },
    extend: {
      screens: {
        'can-hover': {'raw': '(hover: hover)'},
      }
    },
  },
  plugins: [],
}


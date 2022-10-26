/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sunset': "url('/src/assets/images/bg-1.jpg')",
        'launching': "url('/src/assets/images/bg-2.jpg')",
      }
    },
  },
  plugins: [],
}

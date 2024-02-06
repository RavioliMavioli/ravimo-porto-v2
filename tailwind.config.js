/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'backdrop1': "url('/src/assets/img/backdrop1.jpg')",
        'backdrop2': "url('/src/assets/img/backdrop2.jpg')",
        'backdrop3': "url('/src/assets/img/backdrop3.jpg')",
        'backdrop4': "url('/src/assets/img/backdrop4.jpg')"
      }
    }
  },
  plugins: []
};
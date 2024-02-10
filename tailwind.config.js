/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'backdrop1': "url('/src/assets/img/backdrop1.jpg')",
        'backdrop2': "url('/src/assets/img/backdrop2.jpg')",
        'backdrop3': "url('/src/assets/img/backdrop3.jpg')",
        'backdrop4': "url('/src/assets/img/backdrop4.jpg')",

        'light1': "url('/src/assets/img/backdrop_light1.jpg')",
        'light2': "url('/src/assets/img/backdrop_light2.jpg')",
        'light3': "url('/src/assets/img/backdrop_light3.jpg')",
        'light4': "url('/src/assets/img/backdrop_light4.jpg')"
      },
      maxWidth: {
        'xl': '1000'
      },
      screens: {
        'xl': '1366px',
        '3xl': '2160px',
      },
    }
  },
  
  plugins: []
};
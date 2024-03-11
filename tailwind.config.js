/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        '1': "url('/src/lib/assets/img/lower/1.jpg')",
        '2': "url('/src/lib/assets/img/lower/2.jpg')",
        '3': "url('/src/lib/assets/img/lower/3.jpg')",
        '4': "url('/src/lib/assets/img/lower/4.jpg')",
        '5': "url('/src/lib/assets/img/lower/5.jpg')",
        '6': "url('/src/lib/assets/img/lower/6.jpg')",

        '7': "url('/src/lib/assets/img/lower/7.jpg')",
        '8': "url('/src/lib/assets/img/lower/8.jpg')",
        '9': "url('/src/lib/assets/img/lower/9.jpg')",
        '10': "url('/src/lib/assets/img/lower/10.jpg')",
        '11': "url('/src/lib/assets/img/lower/11.jpg')",
        '12': "url('/src/lib/assets/img/lower/12.jpg')"
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
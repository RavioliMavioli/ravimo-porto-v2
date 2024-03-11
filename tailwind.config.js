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
        '12': "url('/src/lib/assets/img/lower/12.jpg')",

        'sm-1': "url('/src/lib/assets/img/smol/1.jpg')",
        'sm-2': "url('/src/lib/assets/img/smol/2.jpg')",
        'sm-3': "url('/src/lib/assets/img/smol/3.jpg')",
        'sm-4': "url('/src/lib/assets/img/smol/4.jpg')",
        'sm-5': "url('/src/lib/assets/img/smol/5.jpg')",
        'sm-6': "url('/src/lib/assets/img/smol/6.jpg')",
        'sm-7': "url('/src/lib/assets/img/smol/7.jpg')",
        'sm-8': "url('/src/lib/assets/img/smol/8.jpg')",
        'sm-9': "url('/src/lib/assets/img/smol/9.jpg')",
        'sm-10': "url('/src/lib/assets/img/smol/10.jpg')",
        'sm-11': "url('/src/lib/assets/img/smol/11.jpg')",
        'sm-12': "url('/src/lib/assets/img/smol/12.jpg')"
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
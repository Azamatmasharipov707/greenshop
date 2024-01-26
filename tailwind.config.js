/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        openSans: ['OpenSans'],
      },
      colors: {
        green: '#46A358',
        greenHover: '#336c3f',
        darkGray: '#3D3D3D',
        gray: '#727272',
        alfa:'#A5A5A5',
        grizzle: '#FBFBFB',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}


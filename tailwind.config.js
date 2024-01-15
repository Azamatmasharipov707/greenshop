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
    },
    colors: {
      green: '#46A358',
      darkGray: '#3D3D3D',
      gray: '#727272'
    },
  },
  plugins: [],
}


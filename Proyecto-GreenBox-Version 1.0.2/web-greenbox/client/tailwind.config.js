/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        claro: '#FFFFE9',
        verde: '#114E38',
        verdeClaro: '#DADFB9',
        amarilloVerde: '#76A636',
        blanco: 'white',
      },
      fontFamily: {
        texto: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

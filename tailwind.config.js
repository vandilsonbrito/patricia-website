/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./public/fotos-patricia/patricia1.webp')",
        'hero-mobile': "url('./public/fotos-patricia/patricia1-medium.webp')",
        'img-about': "url('./public/fotos-patricia/patricia2.png')",
     },
     colors: {
        primary: '#a140aa1f',
        secundary: '#a140aa28',
        work: '#ebd5eb',
        button: '#51056b'
     }
    },
  },
  plugins: [],
};

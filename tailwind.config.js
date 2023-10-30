/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**.{js,ts,jsx,tsx}",
    "./dist/*.{html, jsx}",
    "./components/*/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto: ['Noto Sans'],
        Playpen: ['Playpen Sans']
      },
      backgroundImage: {
        'hero-pattern': "url('../src/assets/group-graduation.jpg')",
        'group-graduation': "url('../src/assets/blank-page.jpg')",
        'blank-page': "url('../src/assets/blank-page.jpg')",
        'profile-picture': "url('../src/assets/profile-picture.jpg')"
     },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.jsrepo/**/*.{js,ts,jsx,tsx}", // 👈 for ReactBits
  ],
  theme: {
    extend: {
       },
        
  },
  plugins: [],
}


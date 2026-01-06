/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js", // Adds Flowbote components to the content array
  ],
// tailwind.config.js
  theme: {
    extend: {
      fontFamily: {
        sans: ['Questrial', 'ui-sans-serif', 'system-ui'],
      },
  }
},

  plugins: [
    require('flowbite/plugin') // Adds the Flowbite plugin to Tailwind CSS
  ],
}

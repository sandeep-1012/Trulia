/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#00565d',
        'green': '#007882',
        'lightgray': '#3b4144',
        'darkgreen': '#144225',
        'darkblue': '#052286',
        'darkviolet': '#00565d',
        'graybg': '#e8e9ea',
      },
      fontFamily: {
        'display': ['TruliaSans', 'Trulia-Fallback', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      }

    },
  },
  plugins: [],
}
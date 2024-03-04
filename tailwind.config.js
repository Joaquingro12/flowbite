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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height:{
        '1966.65': '1966.65px;'
      },
      width: {
        '3333': '3387.56px',
      },
      rotate: {
        '-25': '-25.5deg',
        '-24': '25deg',
        '-23': '27deg',
        '-27': '-27.5deg',
      },
      colors: {
        '111827': '#111827',
      },
      
    },
  },
  plugins: [],
};

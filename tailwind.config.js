/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          green: "#78D980",
          "dark-green": "#038C65",
          yellow: "#EEEA8A",
          orange: "#FFB661",
          red: "#FF7F62",
          "dark-background-btn": "#1b1b22",
        },
      },
    },
  },
  plugins: [],
};

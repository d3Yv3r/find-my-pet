/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ...colors,
        white: "#FDFFF1",
        primary: {
          100: "#C7D13B",
          200: "#8E813E",
        },
        secondary: {
          100: "#ADB6A1",
          200: "#525D4C",
        },
      },
    },
  },
  plugins: [],
};

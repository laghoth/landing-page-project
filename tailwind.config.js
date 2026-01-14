/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Color For Version 1*/
        brightBackground: "#FDF8EE",
        brightGreen: "#73ac8a",
        brightGreenTwo: "#d9f3e1",
        lightText: "#959595",
        /* Color For Version 2*/
        brightOrange: "#ecb958",
        brightOrangeTwo: "#efc58033",
      },
      boxShadow: {
        primaryShadow: "0px 3px 8px rgb(217,243,225)",
        secondaryShadow: "0px 0px 10px 5px #efc580",
      },
    },
  }, 
  plugins: [],
};

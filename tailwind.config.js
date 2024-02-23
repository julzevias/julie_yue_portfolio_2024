import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.gray[700],
          hover: colors.gray[800],
          border: colors.gray[600],
          text: colors.gray[500],
          dark: colors.gray[900],
          ["accent"]: "#453396",
        },
        secondary: {
          DEFAULT: "#a4e0e2",
          hover: "#66cbcf",
          border: "#65aebf",
          text: "#58bacf",
          dark: "67abc0",
          ["dark-hover"]: "#7fabc4",
        },
        tertiary: {
          DEFAULT: "#ca47cb",
          hover: "#d965e1",
          border: "#a829b1",
          text: "#ae2fb4",
          dark: "#90319d",
          ["dark-hover"]: "#843199",
        },
      },
    },
  },
  plugins: [],
  darkMode: "media",
  mode: "jit",
};

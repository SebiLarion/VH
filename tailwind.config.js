module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "darker-blue": "#003E7E",
        "light-teal": "#007C8F",
        "twitter-blue": "#2AA3EF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

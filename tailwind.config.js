module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Satoshi400: ["Satoshi-Regular"],
        Satoshi500: ["Satoshi-Medium"],
        Satoshi700: ["Satoshi-Bold"],
        Satoshi900: ["Satoshi-Black"],

        Manrope400: ["Manrope-Regular"],
        Manrope500: ["Manrope-Medium"],
        Manrope600: ["Manrope-semibold"],
        Manrope700: ["Manrope-Bold"],

        Poppins400: ["Poppins-Regular"],
        Poppins500: ["Poppins-Medium"],
        Poppins600: ["Poppins-semibold"],
        Poppins700: ["Poppins-Bold"],
      },
      colors: {
        primary: {
          light: "#00AFEF",
          text: "#333333",
          pink: "#DD4A6B",
        },
        brand: "#2C2B6C",
        secondary: {
          main: "#00AFEF8A",
        },
      },
      utilities: {
        ".tick": {
          display: "inline-block",
          width: "1.55rem",
          height: "0.5rem",
          border: "2px solid currentColor",
          borderTop: "none",
          borderRight: "none",
          transform: "rotate(-45deg)",
          marginRight: "0.25rem",
        },
      },
    },
  },
  plugins: [],
};
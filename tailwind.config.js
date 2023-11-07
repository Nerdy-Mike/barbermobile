/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#010C1E",
          default: "#051A38",
          light: "#0D2C5A",
          veryLight: "#276FA2",
        },
        secondary: {
          dark: "#A9C5E5",
          default: "#DDECF9",
          light: "#EAF4FC",
          lighter: "#F4F8FD",
        },
        background: {
          darker: "#DFDFDF",
          default: "#F2F2F2",
          light: "#FCFCFC",
        },
        foreground: {
          darker: "#666666",
          default: "#333333",
          light: "#999999",
        },
        black: {
          default: "#24252B",
          light: "#34363F",
        },
        gray: {
          text: "#ECECEC",
          gray: "#6C6E76",
          medium: "#CCCCCC",
          light: "#2C2C2C",
          veryLight: "#FAFBFF",
          bottomBar: "#808080",
        },
        success: {
          default: "#20D231",
        },
        alert: {
          default: "#FFC120",
        },
        danger: {
          default: "#FF4949",
        },
        basic: {
          black: "#000000",
          white: "#FFFFFF",
          transparent: "rgba(255, 255, 255, 0.005)",
        },
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        h6: "16px",
        h5: "18px",
        h4: "21px",
        h3: "24px",
        h2: "36px",
        h1: "48px",
        hero: "64px",
        mega: "120px",
      },
      fontFamily: {
        light: "OpenSans_300Light",
        regular: "OpenSans_400Regular",
        normal: "OpenSans_400Regular",
        medium: "OpenSans_500Medium",
        semibold: "OpenSans_600SemiBold",
        bold: "OpenSans_700Bold",
        sologan: ["HelveticaNeue", "Helvetica Neue", "helvetica", "Sans-Serif"],
      },
    },
  },
  plugins: [],
};

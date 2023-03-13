module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sans-serif": ["Urbanist"],
      },
      colors: {
        "app-white": "#ffffff",
        "app-black": "#000000",
        "app-black-tr": "rgba(0,0,0,0.5)",
        "app-gray": "#525050",
        "app-dark-gray": "#2D2D2D",
        "app-gray-tint": "#eeeeee",
        "app-gray-shade": "#dddddd",
        "app-green": "#26E066",
        "app-green-shade": "#018849",
        "app-red": "#d01345",
        "app-cyan": "#9CF0E0",
        "app-blue-tint": "#cde2f5",
      },
      fontSize: {
        "app-2xl": "32px",
        "app-xl": "26px",
        "app-lg": "22px",
        "app-big": "18px",
        "app-base": "16px",
        "app-sm": "14px",
        "app-xsm": "12px",
      },
      maxWidth: {
        "container-lg": "1280px",
      },
    },
  },
  plugins: [],
};

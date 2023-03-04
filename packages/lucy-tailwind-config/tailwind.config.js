module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fde7f7",
          100: "#fbcfe8",
          200: "#f7b6d9",
          300: "#f3adf4",
          400: "#ee94e5",
          500: "#d07fbf",
          600: "#a16a99",
          700: "#714573",
          800: "#40284C",
          900: "#0a031f",
        },
        secondary: {
          50: "#F0EFFB",
          100: "#DCDAFB",
          200: "#CECBFA",
          300: "#BEBAF8",
          400: "#A989F8",
          500: "#6E68D9",
          600: "#544FAD",
          700: "#3A3367",
          800: "#381753",
          900: "#161131",
        },
        tertiary: {
          50: "#FFF2F4",
          100: "#FFE0E5",
          200: "#FFB5BE",
          300: "#EE7B93",
          400: "#ED6C7C",
          500: "#FF6582",
          600: "#C74757",
          700: "#9E343F",
          800: "#741E27",
          900: "#4B0A0F",
        },
        quaternary: {
          50: "#FDFBF5",
          100: "#FBF4DF",
          200: "#FAEADE",
          300: "#F8CB7A",
          400: "#F0B35E",
          500: "#DD8C2D",
          600: "#AD6624",
          700: "#7E4D20",
          800: "#4F341C",
          900: "#392823",
        },
        background: {
          primary: "#CCE7E1",
          secondary: "#FAEADE",
        },
        text: {
          primary: "#381753",
          secondary: "#392823",
          disabled: "#9CA3AF",
        },
        state: {
          error: "#FF6582",
          disabled: "#F3F4F6",
        },
      },
    },
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};

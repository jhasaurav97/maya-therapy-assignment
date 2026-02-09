import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#fbf6f1",
        bgSecondary: "#e5e0da",
        bgMuted: "#c2bfcb",
        bgAccent: "#7e7b46",
        bgDark: "#223614",

        textPrimary: "#223614",
        textLight: "#fbf6f1",
        textWhite: "#ffffff",
        textBlack: "#000000",

        borderLight: "#fbf6f1",
        borderDark: "#223614",
      },
    },
    },
  plugins: [],
};

export default config;
import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";


const { heroui } = require("@heroui/react");

export default { // or 'class'
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {

        sans: ['Italy', 'sans-serif'],

      },
      colors: {
        secondary: defaultColors.pink[800],
        primary: defaultColors.pink[500],
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],

} satisfies Config;

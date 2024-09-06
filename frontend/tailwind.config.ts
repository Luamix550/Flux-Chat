import {nextui} from '@nextui-org/theme';
import animations from '@midudev/tailwind-animations';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customWhite: '#E8E9ED',
        customGray: '#1B1C21',
        customBlue: '#17b6e5',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "wallpaper": 'url("/wallpaper.png")'
      },
      fontFamily: {
        Grotesk: ["Space Grotesk", 'sans-serif'],
        Amsterdam: [ "Bebas Neue", 'sans-serif']
      }
    },
  },
  plugins: [nextui(), animations],
};
export default config;

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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "wallpaper2": 'url("/wallpaper2.jpg")',
        "wallpaper3": 'url("/fix.jpg")'
      },
      fontFamily: {
        Grotesk: ["Space Grotesk", 'sans-serif']
      }
    },
  },
  plugins: [nextui(), animations],
};
export default config;

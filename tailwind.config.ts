import type { Config } from 'tailwindcss'
import daisyui from 'daisyui';
import tailwindcss_animate from "tailwindcss-animate";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{css,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    tailwindcss_animate
  ],
} satisfies Config;

// tailwind.config.js
import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    }
    
  },
  darkMode: "class",
  plugins: [nextui()]
}

export default config;
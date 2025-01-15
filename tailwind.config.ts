import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'color, background-color, border-color, fill, stroke',
      },
      spacing: {
        'toggley': '105px',
        'togglex': '10px'
      }
    }
  },
  plugins: [],
} satisfies Config;

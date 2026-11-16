import type { Config } from "tailwindcss";

// Palette comes from CubeSat hardware: aluminum frame, solar-cell indigo,
// and the gold Kapton of multi-layer insulation. Values live in globals.css
// as RGB channels so light and dark themes swap in one place.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        frame: token('frame'),
        panel: token('panel'),
        ink: token('ink'),
        graphite: token('graphite'),
        rule: token('rule'),
        kapton: token('kapton'),
        cell: token('cell'),
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        measure: '68ch',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, fill, stroke, text-decoration-color',
      },
    }
  },
  plugins: [],
} satisfies Config;

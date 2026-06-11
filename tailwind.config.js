/** @type {import('tailwindcss').Config} */

// Tailwind v4: the design theme (colors, fonts, radius, spacing) is defined
// in CSS via the `@theme` block in src/app/globals.css — NOT here.
// This file is kept only for tooling (shadcn/ui references it in components.json)
// and for the content globs below.
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
};

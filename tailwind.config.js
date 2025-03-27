/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // ...existing code...
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // ...existing code...
    },
  },
  // ...existing code...
}

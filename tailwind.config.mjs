/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // === ПАЛИТРА САЙТА ===
        // Если захотите поменять цвета — меняйте значения здесь.
        // Все кнопки и текст обновятся автоматически по всему сайту.
        bordo: { DEFAULT: '#6B2737', dark: '#4A1B26' },
        terra: { DEFAULT: '#C8745A', light: '#E89A7E', dark: '#A85A43' },
        cream: '#FAF7F2',
        warmgray: '#5C5248',
        sand: '#E8DFD5',
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'system-ui', 'sans-serif'],
        display: ['"Noto Serif"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Конфигурация Astro-сайта
export default defineConfig({
  site: 'https://ваш-домен.ru', // ВАШ реальный домен
  integrations: [tailwind()],
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Конфигурация Astro-сайта
export default defineConfig({
  site: 'https://ваш-сайт.рф', // ЗАМЕНИТЕ на ваш реальный домен после публикации
  integrations: [tailwind()],
});

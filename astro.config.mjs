import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Конфигурация Astro-сайта
export default defineConfig({
  site: 'https://ваш-сайт.рф', // ЗАМЕНИТЕ на ваш реальный домен после публикации
  integrations: [tailwind(), sitemap()],
});

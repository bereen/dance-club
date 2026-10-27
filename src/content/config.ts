import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ============================================================
// OPISANIE KOLLEKCIY KONTENTA DLYA DECAP CMS
// Kazhdaya kollekciya = odin razdel adminiki po adresu /admin
// ============================================================

// 1. MEROPRIYATIYA
const eventsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    dateLabel: z.string(),
    type: z.enum(['Бал', 'Семинар', 'Вечер', 'Мастер-класс', 'Лекция']),
    description: z.string(),
    time: z.string(),
    place: z.string().optional().default('Большой зал'),
    signupUrl: z.string(),
    published: z.boolean().default(true),
  }),
});

// 2. OBUCHAYUSHCHIE MATERIALY
const materialsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/materials' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['Видео', 'Статья', 'Методичка']),
    description: z.string(),
    duration: z.string().optional().default(''),
    level: z.enum(['Для всех', 'Начальный', 'Средний', 'Продолжающий']).default('Для всех'),
    direction: z.enum(['Европейская', 'Латина', 'Историко-бытовые', 'Социальные', 'Общее']).default('Общее'),
    link: z.string().url(),
    published: z.boolean().default(true),
  }),
});

// 3. TRENERY
const coachesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/coaches' }),
  schema: z.object({
    name: z.string(),
    photo: z.string().optional(),
    experience: z.string(),
    specialization: z.string(),
    teachingStyle: z.string(),
    achievements: z.string().optional(),
    contact: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

// 4. FAQ
const faqCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.enum(['Одежда', 'Партнёр', 'Запись', 'Оплата', 'Общее']).default('Общее'),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
});

export const collections = {
  events: eventsCollection,
  materials: materialsCollection,
  coaches: coachesCollection,
  faq: faqCollection,
};

---
// src/content/config.ts
// Описание коллекций контента для Decap CMS
// Эти коллекции видны в админке по адресу /admin

import { defineCollection, z } from 'astro:content';

// Коллекция «Мероприятия»
const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),                    // '2026-11-15'
    dateLabel: z.string(),               // '15 ноября'
    type: z.enum(['Бал', 'Семинар', 'Вечер', 'Мастер-класс', 'Лекция']),
    description: z.string(),
    time: z.string(),                    // '19:00 — 22:00'
    place: z.string().optional().default('Большой зал'),
    signupUrl: z.string(),                // ссылка на форму записи
    published: z.boolean().default(true),
  }),
});

// Коллекция «Обучающие материалы»
const materialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['Видео', 'Статья', 'Методичка']),
    description: z.string(),
    duration: z.string().optional().default(''),
    level: z.enum(['Для всех', 'Начальный', 'Средний', 'Продолжающий']).default('Для всех'),
    link: z.string().url(),               // ссылка на Яндекс.Диск (обязательно публичная!)
    direction: z.enum(['Европейская', 'Латина', 'Историко-бытовые', 'Социальные', 'Общее']).default('Общее'),
    published: z.boolean().default(true),
  }),
});

// Коллекция «Тренеры»
const coachesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    photo: z.string().optional(),
    experience: z.string(),               // '12 лет'
    specialization: z.string(),
    teachingStyle: z.string(),
    achievements: z.string().optional(),
    contact: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

// Коллекция «FAQ»
const faqCollection = defineCollection({
  type: 'content',
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

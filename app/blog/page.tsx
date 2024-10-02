/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Metadata } from 'next'
import BlogPage from '@/components/templates/BlogPage/BlogPage'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Блог Perevozka27 | Инсайды грузоперевозок и логистики в Хабаровске',
  description:
    'Погрузитесь в мир современной логистики с блогом Perevozka27. Узнайте о новейших технологиях, эко-трендах и оптимизации грузоперевозок в Хабаровске и ДФО. Экспертные советы для бизнеса и частных клиентов.',
  keywords: [
    'грузоперевозки Хабаровск',
    'логистика ДФО',
    'эко-перевозки',
    'оптимизация маршрутов',
    'цифровая логистика',
    'умные грузоперевозки',
    'транспортные инновации',
    'безопасная доставка грузов',
  ],
  openGraph: {
    title: 'Perevozka27: Ваш гид в мире современных грузоперевозок',
    description:
      'Откройте для себя передовые решения в логистике, экологичные подходы к перевозкам и секреты оптимизации доставки грузов в Хабаровске и по всему Дальнему Востоку.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://perevozka27.ru/blog',
    images: [
      {
        url: '/img/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'Логотип Perevozka27',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Perevozka27 Блог: Революция в грузоперевозках Хабаровска',
    description:
      'Исследуйте будущее логистики: от IoT в управлении флотом до зеленых технологий в грузоперевозках. Узнайте, как оптимизировать свои перевозки с Perevozka27.',
    images: '/img/android-chrome-192x192.png',
  },
  alternates: {
    canonical: 'https://perevozka27.ru/blog',
  },
}

export default async function Blog() {
  const posts = await getAllPosts(['slug', 'title'])
  //@ts-ignore
  return <BlogPage posts={posts} />
}

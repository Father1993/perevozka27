/* eslint-disable max-len */
import RecommendationTechPage from '@/components/templates/RecommendationTechPage/RecommendationTechPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Информация об использовании рекомендательных технологий | Perevozka27',
  description:
    'Информация о том, как сайт perevozka27.ru использует рекомендательные технологии для улучшения пользовательского опыта.',
  openGraph: {
    title:
      'Информация об использовании рекомендательных технологий | Perevozka27',
    description:
      'Узнайте о рекомендательных технологиях, используемых на сайте perevozka27.ru, и о том, как они работают.',
    type: 'website',
    url: 'https://perevozka27.ru/recommendation-tech',
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
    title:
      'Информация об использовании рекомендательных технологий | Perevozka27',
    description:
      'Подробная информация о рекомендательных технологиях на сайте perevozka27.ru и правах пользователей.',
    images: '/img/android-chrome-192x192.png',
  },
  icons: {
    icon: '/img/android-chrome-192x192.png',
    apple: '/img/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://perevozka27.ru/recommendation-tech',
  },
}

export default function RecommendationTech() {
  return <RecommendationTechPage />
}

/* eslint-disable max-len */
import MetricsAgreementPage from '@/components/templates/MetricsAgreementPage/MetricsAgreementPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Согласие на обработку данных метрическими программами | Perevozka27',
  description:
    'Информация о том, как Perevozka27 использует метрические программы для анализа поведения пользователей на сайте с целью улучшения его работы.',
  openGraph: {
    title:
      'Согласие на обработку данных метрическими программами | Perevozka27',
    description:
      'Узнайте, как мы используем метрические программы для анализа использования сайта и какие данные они собирают.',
    type: 'website',
    url: 'https://perevozka27.ru/metrics-agreement',
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
      'Согласие на обработку данных метрическими программами | Perevozka27',
    description:
      'Информация об использовании метрических программ на сайте perevozka27.ru и порядке обработки данных.',
    images: '/img/android-chrome-192x192.png',
  },
  icons: {
    icon: '/img/android-chrome-192x192.png',
    apple: '/img/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://perevozka27.ru/metrics-agreement',
  },
}

export default function MetricsAgreement() {
  return <MetricsAgreementPage />
}

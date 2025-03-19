/* eslint-disable max-len */
import DataProcessingAgreementPage from '@/components/templates/DataProcessingAgreementPage/DataProcessingAgreementPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Согласие на обработку персональных данных | Perevozka27',
  description:
    'Согласие на обработку персональных данных пользователей сайта Perevozka27. Узнайте, как мы обрабатываем и защищаем ваши данные.',
  openGraph: {
    title: 'Согласие на обработку персональных данных | Perevozka27',
    description:
      'Ознакомьтесь с документом о согласии на обработку персональных данных на сайте perevozka27.ru',
    type: 'website',
    url: 'https://perevozka27.ru/data-processing-agreement',
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
    title: 'Согласие на обработку персональных данных | Perevozka27',
    description:
      'Документ о согласии на обработку персональных данных, условиях и способах обработки, правах субъектов персональных данных.',
    images: '/img/android-chrome-192x192.png',
  },
  icons: {
    icon: '/img/android-chrome-192x192.png',
    apple: '/img/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://perevozka27.ru/data-processing-agreement',
  },
}

export default function DataProcessingAgreement() {
  return <DataProcessingAgreementPage />
}

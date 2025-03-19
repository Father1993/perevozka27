/* eslint-disable max-len */
import LegalInfoPage from '@/components/templates/LegalInfoPage/LegalInfoPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Юридическая информация | Perevozka27',
  description:
    'Юридические документы компании ООО "Перевозка27". Политика конфиденциальности, пользовательское соглашение, согласие на обработку персональных данных и другие документы.',
  openGraph: {
    title: 'Юридическая информация Perevozka27',
    description:
      'Ознакомьтесь с юридическими документами компании ООО "Перевозка27". На этой странице собрана вся необходимая правовая информация.',
    type: 'website',
    url: 'https://perevozka27.ru/legal',
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
    title: 'Юридическая информация Perevozka27',
    description:
      'Юридические документы ООО "Перевозка27". Вся правовая информация компании в одном месте.',
    images: '/img/android-chrome-192x192.png',
  },
  icons: {
    icon: '/img/android-chrome-192x192.png',
    apple: '/img/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://perevozka27.ru/legal',
  },
}

export default function Legal() {
  return <LegalInfoPage />
}

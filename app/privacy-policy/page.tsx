/* eslint-disable max-len */
import PrivacyPolicyPage from '@/components/templates/PrivacyPolicyPage/PrivacyPolicyPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Perevozka27',
  description:
    'Ознакомьтесь с политикой конфиденциальности Perevozka27. Мы заботимся о защите ваших персональных данных и обеспечиваем прозрачность в обработке информации наших клиентов.',
  openGraph: {
    title: 'Политика конфиденциальности Perevozka27 | Защита ваших данных',
    description:
      'Узнайте, как Перевозка27 обеспечивает безопасность ваших персональных данных. Наша политика конфиденциальности гарантирует прозрачность и надежность в обработке информации.',
    type: 'website',
    url: 'https://perevozka27.ru/privacy-policy',
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
    title: 'Политика конфиденциальности Perevozka27 | Ваши данные под защитой',
    description:
      'Perevozka27 гарантирует безопасность ваших персональных данных. Ознакомьтесь с нашей политикой конфиденциальности для полной информации.',
    images: '/img/android-chrome-192x192.png',
  },
  icons: {
    icon: '/img/android-chrome-192x192.png',
    apple: '/img/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://perevozka27.ru/privacy-policy',
  },
}

export default function PersonalDataPolicy() {
  return <PrivacyPolicyPage />
}

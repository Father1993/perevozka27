/* eslint-disable max-len */
import PersonalDataPolicyPage from '@/components/templates/PersonalDataPolicyPage/PersonalDataPolicyPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика обработки персональных данных | Perevozka27',
  description:
    'Ознакомьтесь с политикой обработки персональных данных Perevozka27. Мы заботимся о защите ваших персональных данных и обеспечиваем прозрачность в обработке информации наших клиентов в соответствии с требованиями законодательства РФ.',
  openGraph: {
    title: 'Политика обработки персональных данных Perevozka27',
    description:
      'Информация о том, как Перевозка27 обрабатывает и защищает ваши персональные данные в соответствии с ФЗ №152-ФЗ «О персональных данных»',
    type: 'website',
    url: 'https://perevozka27.ru/personal-data-policy',
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
    title: 'Политика обработки персональных данных Perevozka27',
    description:
      'Информация о порядке обработки и защиты персональных данных пользователей сайта Perevozka27',
    images: '/img/android-chrome-192x192.png',
  },
  icons: {
    icon: '/img/android-chrome-192x192.png',
    apple: '/img/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://perevozka27.ru/personal-data-policy',
  },
}

export default function PersonalDataPolicy() {
  return <PersonalDataPolicyPage />
}

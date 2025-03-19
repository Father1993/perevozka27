/* eslint-disable max-len */
import UserAgreementPage from '@/components/templates/UserAgreementPage/UserAgreementPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Пользовательское соглашение | Perevozka27',
  description:
    'Пользовательское соглашение Perevozka27. Права и обязанности пользователей при использовании сайта perevozka27.ru',
  openGraph: {
    title: 'Пользовательское соглашение Perevozka27',
    description:
      'Правила пользования сайтом perevozka27.ru. Ознакомьтесь с пользовательским соглашением, регулирующим взаимодействие с сайтом.',
    type: 'website',
    url: 'https://perevozka27.ru/user-agreement',
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
    title: 'Пользовательское соглашение Perevozka27',
    description:
      'Правила использования сайта perevozka27.ru. Ознакомьтесь с пользовательским соглашением.',
    images: '/img/android-chrome-192x192.png',
  },
  icons: {
    icon: '/img/android-chrome-192x192.png',
    apple: '/img/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://perevozka27.ru/user-agreement',
  },
}

export default function UserAgreement() {
  return <UserAgreementPage />
}

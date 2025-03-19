/* eslint-disable max-len */
import MarketingAgreementPage from '@/components/templates/MarketingAgreementPage/MarketingAgreementPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Согласие на получение рекламной рассылки | Perevozka27',
  description:
    'Информация об условиях получения рекламно-информационных материалов от компании Perevozka27 и способах отказа от рассылки.',
  openGraph: {
    title: 'Согласие на получение рекламной рассылки | Perevozka27',
    description:
      'Ознакомьтесь с условиями получения рекламно-информационных материалов от компании Perevozka27 и узнайте, как отказаться от рассылки.',
    type: 'website',
    url: 'https://perevozka27.ru/marketing-agreement',
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
    title: 'Согласие на получение рекламной рассылки | Perevozka27',
    description:
      'Информация о правилах рекламной рассылки компании Perevozka27 и порядке отписки от нее.',
    images: '/img/android-chrome-192x192.png',
  },
  icons: {
    icon: '/img/android-chrome-192x192.png',
    apple: '/img/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://perevozka27.ru/marketing-agreement',
  },
}

export default function MarketingAgreement() {
  return <MarketingAgreementPage />
}

/* eslint-disable max-len */
import type { Metadata, Viewport } from 'next'
import PagesLayout from '@/components/layouts/PageLayout'
import './globalStyles/normalize.css'
import './globalStyles/globals.css'
import './globalStyles/header.css'
import './globalStyles/cookie-popup.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://perevozka27.ru'),
  title:
    'Perevozka27 | Надежные грузоперевозки в Хабаровске и Хабаровском крае',
  description:
    'Быстрые и надежные грузоперевозки по Хабаровску и краю. От небольших посылок до крупногабаритных грузов. Гарантия сохранности, оперативная подача транспорта, профессиональные грузчики. Рассчитайте стоимость онлайн!',
  keywords:
    'грузоперевозки, Хабаровск, Хабаровский край, перевозка грузов, доставка грузов, транспортная компания, грузовое такси, квартирный переезд, офисный переезд, перевозка мебели, перевозка техники, недорого, под ключ, с грузчиками, услуги, переезды, грузчики, доставка, транспортная',
  authors: [{ name: 'Perevozka27' }],
  creator: 'Perevozka27',
  publisher: 'Perevozka27',
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  icons: {
    icon: [
      { url: '/img/favicon.ico', sizes: 'any' },
      { url: '/img/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/img/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/img/logo-s.svg', color: '#5bbad5' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://perevozka27.ru',
    siteName: 'Perevozka27',
    title: 'Perevozka27 - Профессиональные грузоперевозки в Хабаровске',
    description:
      'Надежные и быстрые грузоперевозки в Хабаровске и крае. Квартирные и офисные переезды, доставка грузов любого объема. Опытные грузчики, современный автопарк. Перевозка27. Перевозка',
    images: [
      {
        url: '/img/android-chrome-512x512.png',
        alt: 'Perevozka27 - Грузоперевозки в Хабаровске',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perevozka27 - Лучшие грузоперевозки в Хабаровске',
    description:
      'Профессиональные грузоперевозки в Хабаровске и крае. Быстро, надежно, доступно. Закажите перевозку прямо сейчас!',
    images: ['/img/android-chrome-192x192.png'],
    creator: '@Perevozka27',
  },
  alternates: {
    canonical: 'https://perevozka27.ru',
    languages: {
      'ru-RU': 'https://perevozka27.ru',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ваш_код_верификации_google',
    yandex: '35b2c648bc53fd32',
  },
}

export const viewport: Viewport = {
  themeColor: 'white',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <PagesLayout>{children}</PagesLayout>
}

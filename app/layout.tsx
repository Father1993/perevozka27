/* eslint-disable max-len */
import type { Metadata, Viewport } from 'next'
import PagesLayout from '@/components/layouts/PageLayout'
import './globalStyles/normalize.css'
import './globalStyles/globals.css'
import './globalStyles/header.css'
import './globalStyles/cookie-popup.css'

export const metadata: Metadata = {
  title: 'Perevozka27.ru | Грузоперевозки по Хабаровску и краю',
  description:
    'Быстрые и надежные грузоперевозки по Хабаровску и краю. Перевезем любой груз: от небольших посылок до крупногабаритных грузов. Гарантируем сохранность вашего имущества. Оперативная подача транспорта.',
  keywords:
    'грузоперевозки, Хабаровск, край, перевозка грузов, доставка грузов, транспортная компания, грузовое такси, квартирный переезд, офисный переезд, перевозка мебели, перевозка техники, недорого, под ключ, с грузчиками, услуги, переезды, грузчики, доставка, транспортная',
  icons: {
    icon: [
      { url: '/img/favicon.ico', sizes: 'any' },
      { url: '/img/favicon-16x16.png', sizes: '16x16' },
      { url: '/img/favicon-32x32.png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}

export const viewport: Viewport = {
  themeColor: 'white',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <PagesLayout>{children}</PagesLayout>
}

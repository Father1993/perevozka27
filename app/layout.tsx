/* eslint-disable max-len */
import type { Metadata, Viewport } from 'next'
import PagesLayout from '@/components/layouts/PageLayout'
import './globalStyles/globals.css'

export const metadata: Metadata = {
  title: 'Perevozka27.ru | Грузоперевозки по Хабаровску и краю',
  description:
    'Быстрые и надежные грузоперевозки по Хабаровску и краю. Перевезем любой груз: от небольших посылок до крупногабаритных грузов. Гарантируем сохранность вашего имущества. Оперативная подача транспорта.',
  keywords:
    'грузоперевозки, Хабаровск, край, перевозка грузов, доставка грузов, транспортная компания, грузовое такси, квартирный переезд, офисный переезд, перевозка мебели, перевозка техники, недорого, под ключ, с грузчиками, услуги, переезды, грузчики, доставка, транспортная',
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

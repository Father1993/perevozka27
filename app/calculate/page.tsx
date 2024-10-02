/* eslint-disable max-len */
import { Metadata } from 'next'
import CalculatePage from '@/components/templates/Calculate/CalculatePage'

export const metadata: Metadata = {
  title: 'Калькулятор грузоперевозок | Мгновенный расчет стоимости',
  description:
    'Рассчитайте точную стоимость грузоперевозки в Хабаровске за секунды.',
  openGraph: {
    title: 'Калькулятор грузоперевозок | Perevozka27',
    description:
      'Калькулятор для мгновенного расчета стоимости грузоперевозок в Хабаровске и ДФО. Получите точную цену с учетом всех факторов за считанные секунды.',
    type: 'website',
    url: 'https://perevozka27.ru/calculate',
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
    title: 'Рассчитайте стоимость перевозки за секунды | Perevozka27',
    description:
      'Используйте наш калькулятор для мгновенного расчета стоимости грузоперевозки в Хабаровске.',
    images: '/img/android-chrome-192x192.png',
  },
  icons: {
    icon: '/img/android-chrome-192x192.png',
    apple: '/img/android-chrome-192x192.png',
  },
  alternates: {
    canonical: 'https://perevozka27.ru/calculate',
  },
}

export default async function Calculate() {
  return <CalculatePage />
}

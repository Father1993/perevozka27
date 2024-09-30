import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Perevozka27.ru',
    short_name: 'Perevozka27',
    description:
      'Быстрые и надежные грузоперевозки по Хабаровску и краю. Перевезем любой груз: от небольших посылок до крупногабаритных грузов. Гарантируем сохранность вашего имущества. Оперативная подача транспорта',
    start_url: '/',
    background_color: '#fff',
    theme_color: '#fff',
    lang: 'ru',
    display: 'standalone',
    icons: [
      {
        src: '/img/icon.ico',
        sizes: '196x196 512x512 144x144 192x192 128x128 120x120 180x180',
        type: 'image/x-icon',
        purpose: 'maskable',
      },
      {
        src: '/img/icon.png',
        sizes: '196x196 512x512 144x144 192x192 128x128 120x120 180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}

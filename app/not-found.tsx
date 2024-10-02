/* eslint-disable max-len */
'use client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Страница не найдена | Perevozka27',
  description:
    'К сожалению, запрашиваемая страница не найдена. Вернитесь на главную страницу Perevozka27 для поиска нужной информации о грузоперевозках в Хабаровске.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: '404 - Страница не найдена | Perevozka27',
    description:
      'Извините, запрашиваемая страница не существует. Вернитесь на главную Perevozka27 для информации о грузоперевозках в Хабаровске и ДФО. Перевозка 27. Перевозка27',
    type: 'website',
    url: 'https://perevozka27.ru/404',
    images: [
      {
        url: '/img/404-og-image.jpg',
        width: 1200,
        height: 630,
        alt: '404 - Страница не найдена | Perevozka27',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '404 - Страница не найдена | Perevozka27',
    description:
      'Упс! Страница, которую вы ищете, не существует. Вернитесь на главную перевозка27 для информации о наших услугах грузоперевозок.',
    images: '/img/android-chrome-192x192.png',
  },
}

const NotFound = () => (
  <main className='flex-grow flex items-center justify-center bg-grey'>
    <div className='not-found__page text-center'>
      <h1 className='text-6xl font-bold text-white-800 md:text-8xl'>404</h1>
      <p className='mt-4 text-lg text-white-700 md:text-xl'>
        Страница не найдена
      </p>
      <div className='mt-6'>
        <a
          href='/'
          className='inline-block px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300'
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  </main>
)

export default NotFound

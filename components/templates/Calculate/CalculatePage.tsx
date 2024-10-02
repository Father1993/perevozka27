/* eslint-disable max-len */
'use client'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import PriceCalculator from '@/components/modules/PriceCalculator/PriceCalculator'

const CalculatePage = () => (
  <main className='flex flex-col min-h-screen'>
    <section className='container flex-grow flex flex-col justify-center'>
      <div className='my-10'>
        <PriceCalculator />
      </div>
      <p className='text-white text-center text-2xl italic mt-4 mb-10'>
        * Обратите внимание: цены на перевозки МЕЖГОРОД обсуждаются
        индивидуально с каждым клиентом
      </p>
      <Link
        href='/'
        className='inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out shadow-md hover:shadow-lg mx-auto mb-10'
      >
        <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
        На главную
      </Link>
    </section>
  </main>
)

export default CalculatePage

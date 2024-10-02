'use client'
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
    </section>
  </main>
)

export default CalculatePage

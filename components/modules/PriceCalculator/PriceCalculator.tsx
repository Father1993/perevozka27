/* eslint-disable max-len */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoneyBillWave,
  faClock,
  faCalculator,
  faPerson,
  faRoad,
} from '@fortawesome/free-solid-svg-icons'

const PriceCalculator = () => {
  const [hours, setHours] = useState<string>('2')
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [needLoader, setNeedLoader] = useState<boolean>(false)
  const [transportType, setTransportType] = useState<'city' | 'intercity'>(
    'city'
  )
  const [distance, setDistance] = useState<string>('100')

  const basePrice = 1200 // Базовая цена за час для городских перевозок
  const loaderPrice = 700 // Цена за час работы грузчика
  const minDistance = 100 // Минимальное расстояние
  const maxDistance = 5000 // Максимальное расстояние

  const calculatePrice = () => {
    const minHours = 2

    if (transportType === 'city') {
      const inputHours = Math.max(Number(hours), minHours)
      const price = Math.ceil(inputHours * basePrice)
      const totalPrice = needLoader ? price + inputHours * loaderPrice : price
      setTotalPrice(totalPrice)
    } else {
      const distanceNum = Math.max(
        Math.min(Number(distance), maxDistance),
        minDistance
      )
      let pricePerKm

      // Тарифная сетка
      if (distanceNum <= 200) {
        pricePerKm = 150
      } else if (distanceNum <= 400) {
        pricePerKm = 110
      } else if (distanceNum <= 500) {
        pricePerKm = 95
      } else {
        pricePerKm = 80
      }

      const price = Math.round(distanceNum * pricePerKm)
      setTotalPrice(price)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl shadow-2xl mb-12 max-w-md mx-auto'
    >
      <h2 className='text-3xl font-extrabold text-indigo-800 mb-6 text-center'>
        Калькулятор стоимости
      </h2>
      <div id='calculator' className='space-y-6'>
        <div className='flex justify-between'>
          <button
            onClick={() => setTransportType('city')}
            className={`px-4 py-2 rounded-lg ${
              transportType === 'city'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            По городу
          </button>
          <button
            onClick={() => setTransportType('intercity')}
            className={`px-4 py-2 rounded-lg ${
              transportType === 'intercity'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Межгород
          </button>
        </div>

        {transportType === 'city' ? (
          <>
            <div className='relative'>
              <label
                className='block text-indigo-700 mb-2 font-semibold'
                htmlFor='hours'
              >
                <FontAwesomeIcon icon={faClock} className='mr-2' />
                Время работы (часы)
              </label>
              <input
                type='number'
                id='hours'
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                min='2'
                className='w-full p-3 border-2 border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-indigo-800 text-lg transition duration-200 ease-in-out'
              />
              <span className='absolute right-10 top-[2.7rem] text-indigo-400 text-sm'>
                мин. 2 часа
              </span>
            </div>

            <div className='flex items-center'>
              <input
                type='checkbox'
                id='needLoader'
                checked={needLoader}
                onChange={(e) => setNeedLoader(e.target.checked)}
                className='w-5 h-5 text-indigo-600 border-indigo-300 rounded focus:ring-indigo-500'
              />
              <label
                htmlFor='needLoader'
                className='ml-2 text-indigo-700 font-semibold'
              >
                <FontAwesomeIcon icon={faPerson} className='mr-2' />
                Услуги грузчика (+700₽/ч)
              </label>
            </div>
          </>
        ) : (
          <div className='relative'>
            <label
              className='block text-indigo-700 mb-2 font-semibold'
              htmlFor='distance'
            >
              <FontAwesomeIcon icon={faRoad} className='mr-2' />
              Расстояние (км)
            </label>
            <input
              type='number'
              id='distance'
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              min='100'
              className='w-full p-3 border-2 border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-indigo-800 text-lg transition duration-200 ease-in-out'
            />
            <span className='absolute right-10 top-[2.7rem] text-indigo-400 text-sm'>
              мин. 100 км
            </span>
          </div>
        )}
        {transportType === 'intercity' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            *ЦЕНА БЕЗ УЧЕТА УСЛУГ ГРУЗЧИКОВ
          </motion.p>
        )}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={calculatePrice}
          className='w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out shadow-md flex items-center justify-center text-lg'
        >
          <FontAwesomeIcon icon={faCalculator} className='mr-2' />
          Рассчитать стоимость
        </motion.button>
        {totalPrice > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className='mt-6 p-4 bg-white rounded-lg shadow-inner'
          >
            <motion.p className='text-2xl font-bold text-indigo-800 flex items-center justify-center'>
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className='mr-3 text-green-500'
              />
              <span className='mr-2'>Стоимость:</span>
              <span className='text-green-600'>{totalPrice} ₽</span>
            </motion.p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default PriceCalculator

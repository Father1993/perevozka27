/* eslint-disable max-len */
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTruck,
  faBoxOpen,
  faClock,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons'

const MainTop = () => {
  const handleUseCalculate = () => {
    window.location.href = '/calculate'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-10 mt-20 mb-10 overflow-hidden relative'
    >
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className='absolute top-0 left-0 w-full h-2 bg-yellow-400'
      />

      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className='text-4xl font-extrabold text-white text-center mb-8 leading-tight'
      >
        Перевозка 27 - Ваш надежный партнер
      </motion.h2>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className='text-2xl text-gray-100 text-center mb-12'
      >
        Профессиональные грузоперевозки в Хабаровске и ближайших регионах
      </motion.p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {[
          {
            icon: faTruck,
            title: 'Надежный транспорт',
            description: 'Грузовик Isuzu Elf',
          },
          {
            icon: faBoxOpen,
            title: 'Вместимость',
            description: 'До 3 тонны, 16м²',
          },
          {
            icon: faClock,
            title: 'Точность доставки',
            description: 'Всегда вовремя',
          },
          {
            icon: faMapMarkedAlt,
            description: 'Хабаровск и ДФО',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            }}
            className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 flex flex-col items-center transition-all duration-300'
          >
            <FontAwesomeIcon
              icon={item.icon}
              className='text-5xl text-yellow-300 mb-4'
            />
            <h3 className='text-xl font-bold text-white mb-2'>{item.title}</h3>
            <p className='text-gray-200 text-center'>{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='mt-12 bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full text-xl shadow-lg hover:bg-yellow-300 transition duration-300 mx-auto block'
        onClick={handleUseCalculate}
      >
        Калькулятор цен
      </motion.button>
    </motion.div>
  )
}

export default MainTop

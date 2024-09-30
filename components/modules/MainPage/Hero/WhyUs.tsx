/* eslint-disable max-len */
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkedAlt,
  faHistory,
  faTruckFast,
  faAward,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const WhyUs = () => {
  const reasons = [
    {
      icon: faMapMarkedAlt,
      title: 'Хабаровск + Край',
      description:
        'Осуществляем грузоперевозки по городу Хабаровск и ближайшим регионам на грузовике Isuzu Elf. Грузоподъемность: 3 тонны. Объем: 16м².',
      bgImage: '/img/1.jpeg',
    },
    {
      icon: faHistory,
      title: 'Большой опыт работы',
      description:
        'Более 15 лет опыта. Доставляем грузы по всему краю с 2008 года.',
      bgImage: '/img/2.jpeg',
    },
    {
      icon: faTruckFast,
      title: 'Качественная доставка',
      description:
        'Наш водитель - профессионал своего дела. Всегда вовремя заберёт груз и доставит точно в срок.',
      bgImage: '/img/3.jpeg',
    },
    {
      icon: faAward,
      title: 'Преимущества',
      description:
        'Лучшая цена грузоперевозок в регионе! Перевозки по Хабаровску и ASлижайшим районам края.',
      bgImage: '/img/4.jpeg',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='p-8 rounded-2xl shadow-xl mb-12'
    >
      <h2 className='text-5xl font-bold text-blue-800 mb-12 text-center'>
        Почему выбирают нас?
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}
            className='relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300'
          >
            <Image
              src={reason.bgImage}
              alt={reason.title}
              layout='fill'
              objectFit='cover'
              className='absolute inset-0 z-0'
            />
            <div className='relative z-10 bg-gradient-to-t from-black via-black/70 to-transparent p-8 h-full flex flex-col justify-end'>
              <div className='flex items-center mb-4'>
                <div className='bg-blue-600 p-3 rounded-full mr-4'>
                  <FontAwesomeIcon
                    icon={reason.icon}
                    className='text-2xl text-white'
                  />
                </div>
                <h3 className='font-bold text-2xl text-white'>
                  {reason.title}
                </h3>
              </div>
              <p className='text-gray-200 leading-relaxed'>
                {reason.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default WhyUs

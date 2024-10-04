/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faTruckFast } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  const services = [
    {
      icon: faTruck,
      title: 'Грузовик с водителем',
      price: '1 200₽/час',
      description:
        'Наш грузовик с водителем предоставляет надежные и комфортные услуги по перевозке грузов. Мы гарантируем своевременную доставку и безопасность груза.',
      bgImage: '/img/elf.jpg',
    },
    {
      icon: faTruckFast,
      title: 'Грузчик',
      price: '700₽/час',
      description:
        'Наши грузчики профессионально и быстро выполнят погрузочно-разгрузочные работы. Мы ценим ваше время и гарантируем качественное обслуживание.',
      bgImage: '/img/gruz.jpg',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='mb-12'
    >
      <h2 className='text-4xl font-bold text-white-800 mb-8 text-center'>
        Наши услуги
      </h2>
      <div id='services' className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}
            className='relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 service__cards'
            style={{
              backgroundImage: `url(${service.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent'></div>
            <div className='relative z-10 p-8 h-full flex flex-col justify-between'>
              <div>
                <div className='flex items-center mb-4'>
                  <div className='bg-blue-600 p-3 rounded-full mr-4'>
                    <FontAwesomeIcon
                      icon={service.icon}
                      className='text-2xl text-white'
                    />
                  </div>
                  <h3 className='font-bold text-3xl text-white'>
                    {service.title}
                  </h3>
                </div>
                <p className='text-gray-200 leading-relaxed mb-4'></p>
              </div>
              <div className='bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4 inline-block'>
                <p className='text-white text-xl font-bold'>
                  Цена: <span className='text-yellow-400'>{service.price}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className='mt-12 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-xl'>
        <h3 className='text-3xl font-bold text-black mb-6 text-center'>
          Средняя цена перевозки по тарифу межгород
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {[
            { route: 'Хабаровск - Владивосток', price: '55 000₽' },
            { route: 'Хабаровск - Комсомольск-на-Амуре', price: '40 000₽' },
            { route: 'Хабаровск - Благовещенск', price: '55 000₽' },
            { route: 'Хабаровск - Биробиджан', price: '30 000₽' },
          ].map((item, index) => (
            <div
              key={index}
              className='bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 flex justify-between items-center transition-all duration-300 hover:shadow-lg hover:scale-105'
            >
              <span className='text-white font-semibold'>{item.route}</span>
              <span className='text-yellow-300 font-bold'>{item.price}</span>
            </div>
          ))}
        </div>
        <p className='text-black text-center text-md italic mt-4'>
          * Обратите внимание: цены обсуждаются индивидуально с каждым клиентом
        </p>
      </div>
    </motion.div>
  )
}

export default Services

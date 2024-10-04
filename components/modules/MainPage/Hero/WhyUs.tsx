/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckIcon from '@/components/elements/CheckIcon/CheckIcon'
import { officialServices, reasons } from '@/constants/all'

const WhyUs = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className='p-8 rounded-2xl shadow-xl mb-12'
  >
    <h2 className='text-5xl font-bold text-white-800 mb-12 text-center'>
      Почему выбирают нас?
    </h2>
    <div id='whyus' className='grid grid-cols-1 md:grid-cols-2 gap-8'>
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
              <h3 className='font-bold text-2xl text-white'>{reason.title}</h3>
            </div>
            <p className='text-gray-200 leading-relaxed'>
              {reason.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className='mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white shadow-lg'
    >
      <h3 className='text-2xl font-bold mb-4 text-center'>
        Работаем официально
      </h3>
      <ul className='space-y-4 mb-6 relative z-10'>
        {officialServices.map((item, index) => (
          <li
            key={index}
            className='flex items-start w-full max-w-md text-left'
          >
            <CheckIcon className='w-4 h-4 sm:w-5 sm:h-5 text-green-300 mr-2 sm:mr-3 flex-shrink-0 mt-1 sm:mt-1' />
            <span className='text-white text-sm sm:text-base md:text-lg'>
              {item}
            </span>
          </li>
        ))}
      </ul>
      <p className='mt-4 font-semibold text-center md:text-lg'>
        Доверьте свои грузоперевозки профессионалам официально!
      </p>
    </motion.div>
  </motion.div>
)

export default WhyUs

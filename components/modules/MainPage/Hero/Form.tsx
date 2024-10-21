/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { contactInfo } from '@/constants/all'

const Form = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          phone: phone,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        (result) => {
          console.log(result.text)
          toast.success('Заявка успешно отправлена!')
          setName('')
          setPhone('')
        },
        (error) => {
          console.log(error.text)
          toast.error('Ошибка при отправке заявки. Попробуйте еще раз.')
        }
      )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl mt-12 overflow-hidden relative'
    >
      <div className='absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-y-6'></div>
      <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div id='contacts' className='text-white p-4'>
          <h2 className='text-3xl font-bold mb-6'>Свяжитесь с нами</h2>
          <div id='' className='space-y-4'>
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className='flex items-center'
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className='text-yellow-300 mr-3 text-xl'
                />
                <Link
                  href={item.href}
                  className='hover:text-yellow-300 transition duration-300'
                >
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg'>
          <h2 className='text-2xl font-bold text-white mb-6'>
            Оставить заявку
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-white mb-2' htmlFor='name'>
                <FontAwesomeIcon icon={faUser} className='mr-2' />
                ФИО
              </label>
              <input
                className='w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 text-white placeholder-white placeholder-opacity-70'
                type='text'
                id='name'
                placeholder='Введите ваше ФИО'
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-6'>
              <label className='block text-white mb-2' htmlFor='phone'>
                <FontAwesomeIcon icon={faMobileAlt} className='mr-2' />
                Телефон
              </label>
              <input
                className='w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 text-white placeholder-white placeholder-opacity-70'
                type='tel'
                id='phone'
                placeholder='Введите номер телефона'
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition duration-300'
              type='submit'
            >
              Отправить заявку
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Form

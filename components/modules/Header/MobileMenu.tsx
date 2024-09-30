import { useState } from 'react'
import Link from 'next/link'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button
        onClick={toggleMenu}
        className='text-white bg-blue-600 p-2 rounded-lg focus:outline-none'
      >
        {isOpen ? 'Закрыть меню' : 'Открыть меню'}
      </button>
      {isOpen && (
        <div className='bg-gray-800 text-white p-4 rounded-lg mt-2'>
          <nav className='flex flex-col space-y-2'>
            <Link href='/' className='hover:text-blue-500'>
              Главная
            </Link>
            <Link href='/about' className='hover:text-blue-500'>
              О нас
            </Link>
            <Link href='/services' className='hover:text-blue-500'>
              Услуги
            </Link>
            <Link
              href='/calculator'
              className='text-orange-700 hover:text-blue-500'
            >
              Калькулятор цен
            </Link>
            <Link href='/price' className='hover:text-blue-500'>
              Прайс
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileMenu

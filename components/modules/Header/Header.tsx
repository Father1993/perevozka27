'use client'
import Link from 'next/link'
import Logo from '@/components/elements/Logo/Logo'

const Header = () => (
  <header className='header'>
    <div className='container mx-auto flex justify-between items-center p-4'>
      <div className='header__logo'>
        <Logo />
      </div>
      <nav className='flex space-x-6'>
        <Link href='/' className='text-white-700 hover:text-blue-500'>
          Главная
        </Link>
        <Link href='/about' className='text-white-700 hover:text-blue-500'>
          О нас
        </Link>
        <Link href='/services' className='text-white-700 hover:text-blue-500'>
          Услуги
        </Link>
        <Link
          href='/calculator'
          className='text-orange-700 hover:text-blue-500'
        >
          Калькулятор цен
        </Link>
        <Link href='/price' className='text-white-700 hover:text-blue-500'>
          Прайс
        </Link>
      </nav>
      <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
        ПОЗВОНИТЬ!
      </button>
    </div>
  </header>
)

export default Header

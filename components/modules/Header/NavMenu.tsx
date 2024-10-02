import Link from 'next/link'

const NavMenu = () => (
  <nav className='flex space-x-6'>
    <Link
      href='/'
      className='text-white-700 text-xl hover:text-yellow-500 header__nav-menu'
    >
      Главная
    </Link>
    <Link
      href='/#about'
      className='text-white-700 text-xl hover:text-yellow-500 header__nav-menu'
    >
      О нас
    </Link>
    <Link
      href='/#services'
      className='text-white-700 text-xl hover:text-yellow-500 header__nav-menu'
    >
      Услуги
    </Link>
    <Link
      href='/blog'
      className='text-white-700 text-xl hover:text-yellow-500 header__nav-menu'
    >
      Блог
    </Link>
    <Link
      href='/#calculator'
      className='text-orange-700 text-xl hover:text-yellow-500'
    >
      Калькулятор цен
    </Link>
    <Link
      href='/#contacts'
      className='text-white-700 text-xl hover:text-yellow-500 header__nav-menu'
    >
      Контакты
    </Link>
  </nav>
)

export default NavMenu

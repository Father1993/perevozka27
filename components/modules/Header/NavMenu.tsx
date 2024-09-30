import Link from 'next/link'

const NavMenu = () => (
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
    <Link href='/calculator' className='text-orange-700 hover:text-blue-500'>
      Калькулятор цен
    </Link>
    <Link href='/price' className='text-white-700 hover:text-blue-500'>
      Прайс
    </Link>
  </nav>
)

export default NavMenu

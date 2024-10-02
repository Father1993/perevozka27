import { useState } from 'react'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import MobileMenu from './MobileMenu'

const NavMenu = () => {
  const isMedia768 = useMediaQuery(768)
  const [open, setOpen] = useState(false)

  const handleOpenMenu = () => {
    setOpen(!open)
  }

  const handleCloseMenu = () => {
    setOpen(false) // Закрываем меню
  }

  return (
    <>
      {!isMedia768 ? (
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
      ) : (
        <>
          <button className='btn-reset burger-menu' onClick={handleOpenMenu} />
          {open && <MobileMenu onClose={handleCloseMenu} />}
        </>
      )}
    </>
  )
}

export default NavMenu

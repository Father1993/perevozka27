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

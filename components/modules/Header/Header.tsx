'use client'
import { useState } from 'react'
import Logo from '@/components/elements/Logo/Logo'
import NavMenu from './NavMenu'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import MobileMenu from './MobileMenu'
import MenuButton from './MenuButton'

const Header = () => {
  const useMedia768 = useMediaQuery(768)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='header'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <div className='header__logo'>
          <Logo />
        </div>
        {useMedia768 ? (
          <>
            <MenuButton onClick={toggleMenu} isOpen={isOpen} />
            {isOpen && <MobileMenu />}
          </>
        ) : (
          <NavMenu />
        )}
        <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
          ПОЗВОНИТЬ!
        </button>
      </div>
    </header>
  )
}

export default Header

/* eslint-disable max-len */
'use client'
import Logo from '@/components/elements/Logo/Logo'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import NavMenu from './NavMenu'

const Header = () => {
  const isMedia768 = useMediaQuery(768)

  return (
    <header className='header bg-gradient-to-r from-blue-900 to-purple-900'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <div className='header__logo'>
          <Logo />
        </div>

        <NavMenu />

        {!isMedia768 && (
          <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
            ПОЗВОНИТЬ!
          </button>
        )}
      </div>
    </header>
  )
}

export default Header

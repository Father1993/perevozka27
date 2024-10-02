/* eslint-disable max-len */
'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import NavMenu from './NavMenu'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Logo from '@/components/elements/Logo/Logo'

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
          <Link
            href='tel:+79622285219'
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ease-in-out'
          >
            <FontAwesomeIcon icon={faPhone} className='mr-2' />
            <span className='hidden sm:inline'>Позвонить</span>
            <span className='sm:hidden'>+7 914 150-08-52</span>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header

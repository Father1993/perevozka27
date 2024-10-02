/* eslint-disable max-len */
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const MobileMenu = ({
  onClose,
  isScrolled,
}: {
  onClose: () => void
  isScrolled: boolean
}) => {
  const handleLinkClick = () => {
    onClose()
  }

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50 transition-all duration-300 ${isScrolled ? 'pt-16' : 'pt-20'}`}
    >
      <button
        className={`absolute top-4 right-4 p-4 text-white hover:text-blue-500 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faTimes} size='4x' />
      </button>
      <ul className='text-white text-3xl space-y-6'>
        <li>
          <Link
            href='/'
            className='hover:text-blue-500 transition duration-300 header__nav-menu'
            onClick={handleLinkClick}
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            href='/#about'
            className='hover:text-white-500 transition duration-300 header__nav-menu'
            onClick={handleLinkClick}
          >
            О нас
          </Link>
        </li>
        <li>
          <Link
            href='/#services'
            className='hover:text-white-500 transition duration-300 header__nav-menu'
            onClick={handleLinkClick}
          >
            Услуги
          </Link>
        </li>
        <li>
          <Link
            href='/#calculator'
            className='hover:text-white-500 transition duration-300 header__nav-menu'
            onClick={handleLinkClick}
          >
            Калькулятор цен
          </Link>
        </li>
        <li>
          <Link
            href='/#contacts'
            className='hover:text-white-500 transition duration-300 header__nav-menu'
            onClick={handleLinkClick}
          >
            Контакты
          </Link>
        </li>
        <li>
          <Link
            href='/blog'
            className='hover:text-white-500 transition duration-300 header__nav-menu'
            onClick={handleLinkClick}
          >
            Блог
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu

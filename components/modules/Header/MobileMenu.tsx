import Link from 'next/link'

const MobileMenu = ({ onClose }: { onClose: () => void }) => (
  <div className='fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50'>
    <ul className='text-white text-3xl space-y-6'>
      <button
        className='text-white absolute top-4 right-4 text-2xl hover:text-blue-500'
        onClick={onClose}
      >
        &times;
      </button>
      <li>
        <Link
          href='/'
          className='hover:text-blue-500 transition duration-300 header__nav-menu'
        >
          Главная
        </Link>
      </li>
      <li>
        <Link
          href='/#about'
          className='hover:text-white-500 transition duration-300 header__nav-menu'
        >
          О нас
        </Link>
      </li>
      <li>
        <Link
          href='/#services'
          className='hover:text-white-500 transition duration-300 header__nav-menu'
        >
          Услуги
        </Link>
      </li>
      <li>
        <Link
          href='/#calculator'
          className='hover:text-white-500 transition duration-300 header__nav-menu'
        >
          Калькулятор цен
        </Link>
      </li>
      <li>
        <Link
          href='/#contacts'
          className='hover:text-white-500 transition duration-300 header__nav-menu'
        >
          Контакты
        </Link>
      </li>
    </ul>
  </div>
)

export default MobileMenu

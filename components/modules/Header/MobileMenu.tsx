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
        <Link href='/' className='hover:text-blue-500 transition duration-300'>
          Главная
        </Link>
      </li>
      <li>
        <Link
          href='/about'
          className='hover:text-blue-500 transition duration-300'
        >
          О нас
        </Link>
      </li>
      <li>
        <Link
          href='/#services'
          className='hover:text-blue-500 transition duration-300'
        >
          Услуги
        </Link>
      </li>
      <li>
        <Link
          href='/#calculator'
          className='hover:text-orange-500 transition duration-300'
        >
          Калькулятор цен
        </Link>
      </li>
      <li>
        <Link
          href='/#contacts'
          className='hover:text-blue-500 transition duration-300'
        >
          Контакты
        </Link>
      </li>
    </ul>
  </div>
)

export default MobileMenu

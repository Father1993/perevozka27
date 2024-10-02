/* eslint-disable max-len */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <footer className='bg-gray-900 text-gray-300 py-8 mt-10'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap justify-between items-center'>
        <div className='w-full md:w-auto mb-4 md:mb-0'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Perevozka27. Все права защищены.
          </p>
        </div>
        <div className='w-full md:w-auto mb-4 md:mb-0 md:mr-40'>
          <div className='flex flex-col items-center md:items-center md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4'>
            <a
              href='tel:+79622285219'
              className='hover:text-white transition-colors flex items-center'
            >
              <FontAwesomeIcon icon={faPhone} className='mr-2' size='2x' />
              <span className='text-sm'>+7 (962) 228-52-19</span>
            </a>
            <a
              href='mailto:perevozka27@gmail.com'
              className='hover:text-white transition-colors flex items-center'
            >
              <FontAwesomeIcon icon={faEnvelope} className='mr-2' size='2x' />
              <span className='text-sm'>perevozka27@gmail.com</span>
            </a>
          </div>
        </div>
        <div className='w-full md:w-auto'>
          <div className='flex justify-center space-x-4'>
            <a
              href='https://t.me/perevozka27'
              className='text-xl hover:text-white transition-colors'
              aria-label='Telegram'
            >
              <FontAwesomeIcon icon={faTelegram} size='2x' />
            </a>
            <a
              href='https://wa.me/+79622285219'
              className='text-xl hover:text-white transition-colors'
              aria-label='WhatsApp'
            >
              <FontAwesomeIcon icon={faWhatsapp} size='2x' />
            </a>
          </div>
        </div>
      </div>
      <div className='mt-5 pt-2 border-t border-gray-700 flex justify-center items-center text-sm'>
        <p className='text-gray-500'>
          Разработка{' '}
          <a
            href='https://spinej.ru'
            className='hover:text-white transition-colors '
          >
            SAG
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer

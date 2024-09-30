import Logo from '@/components/elements/Logo/Logo'

const Footer = () => (
  <footer className='footer bg-grey-800 text-white py-6'>
    <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
      <div className='footer__logo mb-4 md:mb-0'>
        <Logo />
      </div>
      <div className='footer__contacts flex flex-col md:flex-row space-x-4 text-center mb-4'>
        <span>
          <a href='tel:+7'>+7 (962) 228 52 19</a>
        </span>
        <span>
          <a href='mailto:perevozka27@gmail.com'>perevozka27@gmail.com</a>
        </span>
      </div>
      <ul className='list-reset footer__socials flex space-x-4 mt-4 md:mt-0 mb-2'>
        <li className='footer__socials__item'>
          <a
            href='https://t.me/perevozka27'
            className='footer__socials__item__link'
          >
            Telegram
          </a>
        </li>
        <li className='footer__socials__item'>
          <a
            href='https://wa.me/+79622285219'
            className='footer__socials__item__link'
          >
            WhatsApp
          </a>
        </li>
        <li className='footer__socials__item'>
          <a href='https://avito.ru' className='footer__socials__item__link'>
            Avito
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer

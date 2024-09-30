import Logo from '@/components/elements/Logo/Logo'

const Footer = () => (
  <footer className='footer bg-gray-800 text-white py-6'>
    <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
      <div className='footer__logo mb-4 md:mb-0'>
        <Logo />
      </div>
      <div className='footer__contacts flex flex-col md:flex-row space-x-4'>
        <span>
          <a href='tel:+79141500852' className='hover:underline'>
            +7 (914) 150 08 52
          </a>
        </span>
        <span>
          <a href='mailto:example@mail.ru' className='hover:underline'>
            example@mail.ru
          </a>
        </span>
      </div>
      <ul className='list-reset footer__socials flex space-x-4 mt-4 md:mt-0'>
        <li className='footer__socials__item'>
          <a
            href='https://t.me/perevozka27'
            className='footer__socials__item__link hover:underline'
          >
            Telegram
          </a>
        </li>
        <li className='footer__socials__item'>
          <a
            href='https://wa.me/+79622285219'
            className='footer__socials__item__link hover:underline'
          >
            WhatsApp
          </a>
        </li>
        <li className='footer__socials__item'>
          <a
            href='https://avito.ru'
            className='footer__socials__item__link hover:underline'
          >
            Avito
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer

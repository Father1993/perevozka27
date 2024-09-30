import Logo from '@/components/elements/Logo/Logo'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__top'>
        <div className='container footer__top__container'>
          <div className='footer__logo'>
            <Logo />
          </div>
          <div className='footer__contacts'>
            <span>
              <a href='tel:+79141500852'>+7 (914) 150 08 52</a>
            </span>
            <span>
              <a href='mailto:example@mail.ru'>example@mail.ru</a>
            </span>
          </div>
          <ul className='list-reset footer__socials'>
            <li className='footer__socials__item'>
              <a
                href='https://t.me/RomanR69V'
                className='footer__socials__item__link'
              />
            </li>
            <li className='footer__socials__item'>
              <a
                href='https://vk.com'
                className='footer__socials__item__link'
              />
            </li>
            <li className='footer__socials__item'>
              <a
                href='https://youtube.com'
                className='footer__socials__item__link'
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

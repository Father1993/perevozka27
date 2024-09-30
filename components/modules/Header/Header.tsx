'use client'
import Link from 'next/link'
import Logo from '@/components/elements/Logo/Logo'

const Header = () => {
  console.log('')

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger'>text</button>
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button className='btn-reset header__links__item__btn header__links__item__btn--search' />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            ></Link>
          </li>
          <li className='header__links__item'></li>
          <li className='header__links__item'></li>
          <li className='header__links__item header__links__item--profile'></li>
        </ul>
      </div>
    </header>
  )
}

export default Header

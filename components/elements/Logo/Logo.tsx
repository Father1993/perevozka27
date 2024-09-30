/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <img src='/img/logo.png' alt='Perevozka27.ru Logo' style={{ width: 130 }} />
  </Link>
)

export default Logo

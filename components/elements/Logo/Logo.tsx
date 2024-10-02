/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <Image
      src='/img/logo.png'
      alt='Perevozka27.ru Logo'
      width={130}
      height={130}
    />
  </Link>
)

export default Logo

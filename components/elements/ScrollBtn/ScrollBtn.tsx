/* eslint-disable max-len */
import { useEffect, useState } from 'react'
import { faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons' // Импортируем иконку "вверх"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        <FontAwesomeIcon icon={faArrowUp} size='3x' color='grey' />
      </button>
      <Link
        href='+79141500852'
        className={`fixed bottom-4 right-20 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100 blink' : 'opacity-0 pointer-events-none'}`}
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        <FontAwesomeIcon icon={faPhone} size='3x' color='green' />
      </Link>
    </>
  )
}

export default ScrollBtn

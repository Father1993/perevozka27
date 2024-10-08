/* eslint-disable max-len */
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const ClientOnlyCallButton = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isMounted, setIsMounted] = useState(false)
  const isMedia768 = useMediaQuery(768)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted || isMedia768) {
    return null
  }

  return (
    <Link
      href='tel:+79622285219'
      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-500 ease-in-out
        ${isScrolled ? 'scale-90' : 'scale-100'}
      `}
    >
      <FontAwesomeIcon icon={faPhone} className='mr-2' />
      <span className='hidden sm:inline'>Позвонить</span>
      <span className='sm:hidden'>+7 962 228-52-19</span>
    </Link>
  )
}

export default ClientOnlyCallButton

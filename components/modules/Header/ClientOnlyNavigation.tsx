'use client'
import { useState, useEffect } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import NavMenu from './NavMenu'

const ClientOnlyNavigation = () => {
  const [isMounted, setIsMounted] = useState(false)
  const isMedia768 = useMediaQuery(768)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return !isMedia768 ? <NavMenu /> : null
}

export default ClientOnlyNavigation

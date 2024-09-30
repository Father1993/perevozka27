'use client'
import Footer from '../modules/Footer/Footer'
import Header from '../modules/Header/Header'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout

'use client'
import Layout from './Layout'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  console.log('')

  return (
    <html lang='ru'>
      <body>
        {/* <Next13ProgressBar height='4px' color='#9466FF' showOnShallow /> */}
        <Layout>{children}</Layout>
        {/* <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className='cookie-popup'
          > */}
        {/* <CookieAlert setCookieAlertOpen={setCookieAlertOpen} />
        <Toaster position='top-center' reverseOrder={false} /> */}
      </body>
    </html>
  )
}

export default PagesLayout

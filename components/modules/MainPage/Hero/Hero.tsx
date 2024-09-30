/* eslint-disable max-len */
'use client'
import Form from './Form'
import MainTop from './MainTop'
import Services from './Services'
import WhyUs from './WhyUs'

const Hero = () => (
  <section className='container mx-auto py-10 px-4'>
    <MainTop />
    <WhyUs />
    <Services />
    <Form />
  </section>
)

export default Hero

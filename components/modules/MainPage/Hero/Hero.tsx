/* eslint-disable max-len */
'use client'
import CalculatePage from '@/components/templates/Calculate/CalculatePage'
import Form from './Form'
import MainTop from './MainTop'
import Services from './Services'
import WhyUs from './WhyUs'

const Hero = () => (
  <section className='container mx-auto py-10 px-4'>
    <MainTop />
    <WhyUs />
    <Services />
    <CalculatePage />
    <Form />
  </section>
)

export default Hero

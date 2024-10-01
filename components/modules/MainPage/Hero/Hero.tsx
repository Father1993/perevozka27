/* eslint-disable max-len */
'use client'
import Form from './Form'
import MainTop from './MainTop'
import Services from './Services'
import WhyUs from './WhyUs'
import PriceCalculator from '../../PriceCalculator/PriceCalculator'

const Hero = () => (
  <section className='container mx-auto py-10 px-4'>
    <MainTop />
    <WhyUs />
    <Services />
    <PriceCalculator />
    <Form />
  </section>
)

export default Hero

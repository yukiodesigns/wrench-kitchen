import React from 'react'
import Hero from './shared/Hero'
import Values from './shared/Values'
import Featured from './shared/Featured'
import Product from './shared/Product'
import CTA from './shared/CTA'
import Testimonials from './shared/Testimonials'

const Landing = () => {
  return (
    <div>
        <Hero/>
        <Values/>
        <Featured />
        <Product />
        <CTA />
        <Testimonials />
    </div>
  )
}

export default Landing
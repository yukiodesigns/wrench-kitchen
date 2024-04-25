import Image from 'next/image'
import React from 'react'

const CTA = () => {
  return (
    <div className="relative bg-creamWhite py-20">
    {/* Floating Image */}
    <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
      <Image 
        src="/pastry-image.jpg" 
        alt="Pastry Image" 
        width={300} 
        height={300} 
        className="rounded-full"
      />
    </div>

    {/* Text Content */}
    <div className="text-center px-8">
      <h2 className="text-4xl text-darkGray font-semibold mb-4">Join Us!</h2>
      <p className="text-lg text-darkGray mb-8">
        Be the first to know about our latest pastries and special offers.
      </p>
      <a 
        href="#" 
        className="bg-softPink text-darkGray py-3 px-8 rounded-full font-semibold text-lg hover:bg-lightPink transition duration-300 ease-in-out"
      >
        Sign Up Now
      </a>
    </div>
  </div>
  )
}

export default CTA
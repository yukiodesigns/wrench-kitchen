import React from 'react';
import { MdVerified } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";

const Values = () => {
  return (
    <div className="relative bg-creamWhite py-10 md:py-20 flex flex-col justify-center mx-2 mb-8">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center mt-4 rounded-md"
        style={{ 
          backgroundImage: "url('/imgs/chocolate-cake.jpg')",
          width: '80%',
          height: '300px',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-left px-4 md:px-8 text-white">
        <h2 className="text-2xl md:text-4xl text-darkGray font-semibold mb-4">Best Seller</h2>
        <p className="text-lg md:text-xl text-darkGray mb-4">
          The <span className="font-semibold">Chocolate Eclair</span> is our most loved pastry. <br></br> Made with premium chocolate and fresh cream, it's a heavenly delight.
        </p>
      </div>
    </div>
  )
}

export default Values;

import React from 'react'
import Image from 'next/image';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-4 ">
          {/* First section */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="mb-2">
              <Image src="/logo.png" alt="Logo" width={120} height={40} />
            </div>
            <p className="text-sm text-center md:text-left">Spice Up Your Culinary Adventure </p>
          </div>
          
          {/* Second section */}
          <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 flex items-center">
            {/* Google Maps iframe */}
            <iframe
                className="w-full h-40 md:h-64 rounded-lg mr-10"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.1436937483996!2d36.82194661477156!3d-1.2865644990672618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f182a5b3d73ad%3A0x4b48fc9c34bf95c2!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1644938608622!5m2!1sen!2s"
                title="Map of Nairobi"
            ></iframe>
            {/* Contact details with icons */}
            <div>
              <div className="flex items-center mb-2 ">
                <Image src="/icons/maps-and-flags.png" alt='map' width={20} height={20} className='mr-4'/>
                <p>Nairobi, Kenya</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/icons/mail.png" alt='map' width={20} height={20} className='mr-4'/>
                <p>info@gmail.com</p>
              </div>
              <div className="flex items-center">
                <Image src="/icons/phone-call.png" alt='map' width={20} height={20} className='mr-4'/>
                <p>+25494843163</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Horizontal line */}
        <hr className="my-4 border-t border-gray-300" />
        
        {/* Copyright */}
        <div className="text-center text-sm">
          <p>&copy; 2024 Yukios Designs. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;

'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Hero = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [texts, setTexts] = useState({
    chef1: { heading: "Flavours of India", subheading: "We are ready to serve you." },
    chef2: { heading: "Delicious Dishes", subheading: "Experience culinary excellence." },
    chef3: { heading: "Taste Sensations", subheading: "Indulge in authentic flavors." }
  });

  const handleMouseEnter = (chef) => {
    setHoveredIcon(chef);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div>
      <header>
        <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{ backgroundPosition: '50%', backgroundImage: "url('/imgs/pexels-brigitte-tohm-239581.jpg')", height: '350px' }}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}>
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mb-6 text-5xl font-bold">{hoveredIcon ? texts[hoveredIcon].heading : texts.chef1.heading}</h1>
                <h3 className="mb-8 text-xl font-bold">{hoveredIcon ? texts[hoveredIcon].subheading : texts.chef1.subheading}</h3>

                <div className="flex justify-center">
                  <div className="mr-6">
                    <Image
                      src="/icons/chef.png"
                      alt='chef'
                      width={50}
                      height={50}
                      className={`bg-white rounded-full p-1 ${hoveredIcon === 'chef1' ? 'glow' : ''}`}
                      onMouseEnter={() => handleMouseEnter('chef1')}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <div className="mr-6">
                    <Image
                      src="/icons/chef.png"
                      alt='chef'
                      width={50}
                      height={50}
                      className={`bg-white rounded-full p-1 ${hoveredIcon === 'chef2' ? 'glow' : ''}`}
                      onMouseEnter={() => handleMouseEnter('chef2')}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <div>
                    <Image
                      src="/icons/chef.png"
                      alt='chef'
                      width={50}
                      height={50}
                      className={`bg-white rounded-full p-1 ${hoveredIcon === 'chef3' ? 'glow' : ''}`}
                      onMouseEnter={() => handleMouseEnter('chef3')}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero
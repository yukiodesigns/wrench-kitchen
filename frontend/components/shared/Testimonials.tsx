import React from 'react';
import Slider from 'react-slick';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const testimonials = [
    { id: 1, name: 'Jane Doe', avatar: '/avatar1.jpg', stars: 5, review: 'Absolutely delicious pastries! Highly recommend.' },
    { id: 2, name: 'John Smith', avatar: '/avatar2.jpg', stars: 4, review: 'Great variety and taste. Always fresh.' },
    // Add more testimonials as needed
  ];

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="px-4">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
          <h3 className="text-lg text-darkGray font-semibold mb-2">{testimonial.name}</h3>
          <div className="flex items-center mb-4">
            {Array.from({ length: testimonial.stars }).map((_, index) => (
              <svg 
                key={index} 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-yellow-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                />
              </svg>
            ))}
          </div>
          <p className="text-darkGray">{testimonial.review}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;

import React from 'react';
import '../../app/globals.css'

const Footer = () => {
  return (
    <>
      <footer className="block ">
        <div className="py-4 md:py-12 lg:py-16 mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="flex-col flex items-center">
            <a href="#" className="mb-2 inline-block max-w-full ">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d6f4e6cf96_Group%2047874-3.png"
                alt=""
                className="inline-block max-h-10"
              />
            </a>
            <div className="text-center font-semibold">
              <a href="/" className="inline-block px-4 py-2 font-normal transition ">Home</a>
              <a href="/about" className="inline-block px-4 py-2 font-normal transition ">About</a>
              <a href="/shop" className="inline-block px-4 py-2 font-normal transition">Products</a>
              <a href="/terms" className="inline-block px-4 py-2 font-normal  transition ">Terms of Service</a>
              <a href="/contact" className="inline-block px-4 py-2 font-normal transition">Contact</a>
            </div>
            <div className="my-4 grid grid-cols-3 gap-4">
              <a href="#" className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945b4ae6cf7b_Vector-1.svg"
                  alt=""
                  className="h-6"
                />
              </a>
              <a href="#" className="flex items-center justify-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945560e6cf77_Vector.svg"
                  alt=""
                  className="h-6"
                />
              </a>
              <a href="#" className="flex items-center justify-center text-black">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9433a9e6cf88_Vector-2.svg"
                  alt=""
                  className="h-6"
                />
              </a>
            </div>
            <p className="text-sm">© Copyright 2024. <span className='text-blue-400'>Yukios Designs.</span> All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

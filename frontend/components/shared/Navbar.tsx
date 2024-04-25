'use client'
import '../../app/globals.css'
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 ">
      
      <div className="flex items-center">
        <div className="mr-4">
          <img src="" alt="app logo" />
        </div>
        <ul className="hidden md:flex space-x-4 justify-center">
          <li><a href="/" className="font-openSans">Home</a></li>
          <li><a href="/about" className="font-openSans">About</a></li>
          <li><a href="/shop" className="font-openSans">Products</a></li>
          <li><a href="/contact" className="font-openSans">Contact</a></li>
        </ul>
      </div>

      <div className="flex items-center">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu color="#333333" fontSize={27} />
            </SheetTrigger>
            <SheetContent>
              <div className="w-full max-w-sm p-4 bg-white rounded-md">
                <ul className="mt-4 space-y-2">
                  <li><a href="/" className="font-openSans">Home</a></li>
                  <li><a href="/about" className="font-openSans">About</a></li>
                  <li><a href="/shop" className="font-openSans">Products</a></li>
                  <li><a href="/terms" className="font-openSans">Terms of Srevice</a></li>
                  <li><a href="/contact" className="font-openSans mb-4">Contact</a></li>
                  <button className='rounded-sm px-2 py-2'><a href="/login" className="font-openSans ">Login / Register</a></button>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <a href="/login" className="mr-4 font-openSans hidden md:flex space-x-4 justify-center  ">Login </a>
      </div>
      
    </nav>
  );
};

export default Navbar;

'use client'
import '../../app/globals.css'
import React, { useState } from 'react';
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
          <li><a href="#home" className="font-openSans">Home</a></li>
          <li><a href="/about" className="font-openSans">About</a></li>
          <li><a href="#menu" className="font-openSans">Menu</a></li>
          <li><a href="#awards" className="font-openSans">Awards</a></li>
          <li><a href="#contact" className="font-openSans">Contact</a></li>
        </ul>
      </div>

      <div className="flex items-center">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu color="#fff" fontSize={27} />
            </SheetTrigger>
            <SheetContent>
              <div className="w-full max-w-sm p-4 bg-white rounded-md">
                <ul className="mt-4 space-y-2">
                  <li><a href="#home" className="font-openSans">Home</a></li>
                  <li><a href="/about" className="font-openSans">About</a></li>
                  <li><a href="#menu" className="font-openSans">Menu</a></li>
                  <li><a href="#awards" className="font-openSans">Awards</a></li>
                  <li><a href="#contact" className="font-openSans">Contact</a></li>
                  <a href="#login" className="mr-4 font-openSans">Login / Register</a>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <a href="#login" className="mr-4 font-openSans hidden md:flex space-x-4 justify-center ">Login / Register</a>
      </div>
      
    </nav>
  );
};

export default Navbar;

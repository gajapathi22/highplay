// src/components/Navbar.js
import React, { useState } from 'react';
import backgroundImage from '../assets/images/lib4.jpg'
import image1 from '../../src/assets/images/Banner1.jpg';


const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const user_pic = "data:image/jpeg;base64,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"
  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="fixed w-full  bg-gray-100 p-8 drop-shadow-xl">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          opacity: 0.7, // Adjust opacity as needed
        }}
      />
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-black text-2xl font-semibold">
          Homopedia
        </a>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-black">Home</a></li>
          <li><a href="/about" className="text-black">About</a></li>
          <li><a href="/contact" className="text-black">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

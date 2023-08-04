// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="bg-gray-500 p-6 my-4"> {/* Add p-6 for padding and my-4 for margin on the Y-axis */}
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="font-bold text-3xl">My Website</div> {/* Increase the text size to 3xl */}
            <div className="md:hidden flex items-center">
              <button
                className="focus:outline-none"
                onClick={toggleNavbar}
              >
                {/* ... (same as before) ... */}
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              {/* ... (same as before) ... */}
            </div>
          )}
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-10 justify-center">
            <div className="ml-2">
              <a className="px-20 py-4 bg-gray-200 hover:bg-gray-300 rounded" href="#home">
                <span className="text-black text-lg font-semibold">Home</span>
              </a>
            </div>
            <div className="ml-2">
              <a className="px-20 py-4 bg-gray-200 hover:bg-gray-300 rounded" href="#about">
                <span className="text-black text-lg font-semibold">About</span>
              </a>
            </div>
            <div className="ml-2">
              <a className="px-20 py-4 bg-gray-200 hover:bg-gray-300 rounded" href="#services">
                <span className="text-black text-lg font-semibold">Services</span>
              </a>
            </div>
            <div className="ml-2">
              <a className="px-20 py-6 bg-gray-200 hover:bg-gray-300 rounded" href="#contact">
                <span className="text-black text-lg font-semibold">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

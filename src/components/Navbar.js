// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="bg-gray-500 border-b-4 border-black p-6 mt-0"> {/* Add p-6 for padding and my-4 for margin on the Y-axis */}
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="font-bold text-3xl pt-10">My Website</div> {/* Increase the text size to 3xl */}
            <div className="md:hidden flex items-center">
                <button
                  className="focus:outline-none"
                  onClick={toggleNavbar}
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isOpen ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.293 4.293a1 1 0 011.414 1.414L12.414 12l8.293 8.293a1 1 0 11-1.414 1.414L11 13.414l-8.293 8.293a1 1 0 11-1.414-1.414L9.586 12 1.293 3.707a1 1 0 111.414-1.414L11 10.586l8.293-8.293z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0-4a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 8a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z"
                      />
                    )}
                  </svg>
                </button>
            </div>
          </div>
          {/* Mobile menu */}
              {isOpen && (
              <div className="md:hidden">
                <a className="block py-2 px-4 text-black hover:bg-gray-300" href="#home">
                  Home
                </a>
                <a className="block py-2 px-4 text-black hover:bg-gray-300" href="#about">
                  About
                </a>
                <a className="block py-2 px-4 text-black hover:bg-gray-300" href="#services">
                  Services
                </a>
                <a className="block py-2 px-4 text-black hover:bg-gray-300" href="#contact">
                  Contact
                </a>
              </div>
            )}
        {/*
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-10 justify-center ">
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
              <a className="px-20 py-4 bg-gray-200 hover:bg-gray-300 rounded" href="#contact">
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

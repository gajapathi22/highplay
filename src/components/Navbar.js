import React, { useState } from 'react';
import backgroundImage from '../assets/images/lib4.jpg';

const Navbar = ({ onSignUpClick,isLoggedIn }) => {

const [isLoggedin,setisLoggedin] = useState(false);
  return (
    <nav className="fixed w-full bg-gray-100 p-8 drop-shadow-xl">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          opacity: 0.7,
        }}
      >
      <div className="container mx-auto flex justify-between items-center z-50">
        <a href="/" className="text-black text-2xl font-semibold">
          Homopedia
        </a>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-black">Home</a></li>
          <li><a href="/about" className="text-black">About</a></li>
          <li><a href="/contact" className="text-black">Contact</a></li>
          <li>
          {isLoggedIn ? (
              <button className="text-black">Hello User</button>
            ) : (
              <button onClick={onSignUpClick} className="text-black">
                SignUp/Login
              </button>
            )}
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

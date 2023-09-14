import React, { useState, useEffect,Image }  from 'react';
import './Banner.css'; // Import the custom CSS file
import image1 from '../../src/assets/images/lib5.jpg';
import image2 from '../../src/assets/images/lib2.jpg';
import image3 from '../../src/assets/images/lib3.jpg';

const images = [
  image1
];

const Banner = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className='relative mt-20  '>
    <div className="flex flex-row  justify-center items-center  opacity-100   ">        
          <img src={image1} className='h-min w-screen ' />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white opacity-90"></div>
          <div className="absolute flex flex-col items-center justify-center gap-4  text-center ">
            <h1 className='text-blue-600 text-stroke-2 font-vold text-6xl md:text-9xl'>High Play</h1>
            <p className=' inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform text-lg md:text-3xl'> Turning Ideas into Cinematic Excellence.👋</p>
         </div>
  </div>
  </div>
  );
}

export default Banner;






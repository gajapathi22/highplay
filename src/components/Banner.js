import React, { useState, useEffect,Image }  from 'react';
import './Banner.css'; // Import the custom CSS file
import image1 from '../../src/assets/images/lib1.jpg';
import image2 from '../../src/assets/images/lib2.jpg';
import image3 from '../../src/assets/images/lib3.jpg';

const images = [
  image1,
  image2,
  image3
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
    <div className='relative p-10 bg-blue-200 mt-20'>
    <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] ">
        {images.map((image, index) => (
        <div className="relative h-[750px]  float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"> 
        <img
          key={index}
          src={image}
          alt=""
          className={`block w-full  rounded-3xl ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}

          style={{ maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover'
                }}
        />
      </div>
      ))}
       
  </div>
  </div>
  );
};

export default Banner;






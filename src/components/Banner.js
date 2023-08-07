import React, { useState, useEffect,Image }  from 'react';
import './Banner.css'; // Import the custom CSS file
import image1 from '../../src/assets/images/Banner1.jpg';
import image2 from '../../src/assets/images/Banner2.jpg';
import image3 from '../../src/assets/images/Banner3.jpg';
import image4 from '../../src/assets/images/Banner4.png';
import image5 from '../../src/assets/images/Banner5.jpeg';
const images = [
  image1,
  image2,
  image3,
  image4,
  image5
  // Add more image paths as needed
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white font-bold text-xl bg-black rounded-full px-4 py-2"
        onClick={goToPreviousImage}
      >
        &lt; Previous
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white font-bold text-xl bg-black rounded-full px-4 py-2"
        onClick={goToNextImage}
      >
        Next &gt;
      </button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`absolute top-0 left-0 w-[33.33%] h-auto transition-opacity duration-1000 ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
        />
      ))}
      <div
        className={`absolute top-0 left-0 w-full h-full border-8 border-double border-transparent ${
          currentImage === 0 ? 'border-rainbow-animate' : ''
        }`}
      />
    </div>
  );
};

export default Banner;






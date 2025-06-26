"use client"
import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slides = [
    {
      src: '/banner-1.png',
      alt: '1 Slide',
    },
   
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 0); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.src} alt={slide.alt} className="w-full h-full object-contain hidden lg:block" />
          <img src={"/mobileBanner.png"} alt="banner" className="w-full h-full object-contain lg:block " />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hidden"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hidden"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;




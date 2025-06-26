import React from 'react';

const PromoBanner = () => {
  return (
    <div className='mx-10'>
       <div className="relative bg-gradient-to-r from-pink-600/90 to-pink-700/80 w-full rounded-2xl ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-4 gap-4 h-full">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border border-white rounded-lg"></div>
          ))}
        </div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 md:py-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center ">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="block">Buy. Gift. Save.</span>
            <span className="block text-yellow-300 mt-1">Repeat!</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl font-semibold text-white mb-6">
            TOP BRANDS & EXCITING OFFERS
          </p>
           
          {/* Button */}
          <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
            SHOP NOW & SAVE MORE!
          </button>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default PromoBanner;
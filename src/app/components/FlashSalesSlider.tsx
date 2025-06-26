"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const FlashSalesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const salesData = [
    {
      id: 1,
      brand: "Domino's Pizza",
      title: "Get 8 Slice vfoogfo   kfjkkm kjgkfg",
      originalPrice: "₹ 530.00",
      salePrice: "₹ 500.00",
      image: "BrandsImages/DominosPizza.png",
    },
    {
      id: 2,
      brand: "GIVA",
      title: "Fine Silver Jewellery",
      originalPrice: "₹ 1000.00",
      salePrice: "₹ 100.00",
      image: "BrandsImages/GIVA.png",
      bgColor: "bg-gray-100",
    },
    {
      id: 3,
      brand: "Myntra",
      title: "Flat ₹500 Off",
      originalPrice: "₹ 250.00",
      salePrice: "₹ 100.00",
      image: "BrandsImages/Myntra.png",
      bgColor: "bg-pink-600",
    },
    {
      id: 4,
      brand: "MakeMyTrip",
      title: "50% Off on Hotels",
      originalPrice: "₹ 299.00",
      salePrice: "₹ 120.00",
      image: "BrandsImages/MakeMyTrip.png",
      bgColor: "bg-blue-500",
    },
    {
      id: 5,
      brand: "Zomato",
      title: "Free Delivery",
      originalPrice: "₹ 60.00",
      salePrice: "₹ 0.00",
      image: "BrandsImages/Zomato.png",
      bgColor: "bg-red-500",
    },
    {
      id: 6,
      brand: "Flipkart",
      title: "Electronics Sale",
      originalPrice: "₹ 15000.00",
      salePrice: "₹ 12000.00",
      image:
        "BrandsImages/Flipkart.png",
      bgColor: "bg-yellow-500",
    },
    {
      id: 7,
      brand: "Domino's Pizza",
      title: "Get 8 Slices",
      originalPrice: "₹ 530.00",
      salePrice: "₹ 500.00",
      image: "BrandsImages/DominosPizza.webp",
      bgColor: "bg-blue-600",
    },
    {
      id: 8,
      brand: "GIVA",
      title: "Fine Silver Jewellery",
      originalPrice: "₹ 1000.00",
      salePrice: "₹ 100.00",
      image: "BrandsImages/GIVA.png",
      bgColor: "bg-gray-100",
    },
    {
      id: 9,
      brand: "Myntra",
      title: "Flat ₹500 Off",
      originalPrice: "₹ 250.00",
      salePrice: "₹ 100.00",
      image: "BrandsImages/Myntra.png",
      bgColor: "bg-pink-600",
    },
    {
      id: 10,
      brand: "MakeMyTrip",
      title: "50% Off on Hotels",
      originalPrice: "₹ 299.00",
      salePrice: "₹ 120.00",
      image: "BrandsImages/MakeMyTrip.webp",
      bgColor: "bg-blue-500",
    },
    {
      id: 11,
      brand: "Zomato",
      title: "Free Delivery",
      originalPrice: "₹ 60.00",
      salePrice: "₹ 0.00",
      image: "BrandsImages/Zomato.png",
      bgColor: "bg-red-500",
    },
    {
      id: 12,
      brand: "Flipkart",
      title: "Electronics Sale",
      originalPrice: "₹ 15000.00",
      salePrice: "₹ 12000.00",
      image:
        "BrandsImages/Flipkart.png",
      bgColor: "bg-yellow-500",
    },
  ];

  // Update slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = Math.max(0, salesData.length - slidesToShow);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slidesToShow, salesData.length]);

  const maxSlide = Math.max(0, salesData.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index: any) => {
    setCurrentSlide(Math.min(index, maxSlide));
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-pink-500/5 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-14 bg-pink-500 rounded-full"></div>
          <div>
            <span className="text-pink-500 text-sm font-medium">Trending</span>
            <h2 className="text-2xl font-bold text-gray-900">Flash Sales</h2>
          </div>
        </div>
        <button className="px-6 py-2 border-2 border-pink-500 text-pink-500 rounded-full font-medium hover:bg-pink-500 hover:text-white transition-all duration-300 hover:shadow-lg">
          View All
        </button>
      </div>

      {/* Slider Container */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors opacity-0 hover:opacity-100 group-hover:opacity-100"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors opacity-0 hover:opacity-100 group-hover:opacity-100"
          disabled={currentSlide >= maxSlide}
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden mx-8 group">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {salesData.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Card Header with Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                    {/* <div className="absolute top-3 right-3">
                      <button className="bg-white bg-opacity-80 backdrop-blur-sm rounded-full p-2 hover:bg-opacity-100 transition-colors shadow-md">
                        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                      </button>
                    </div> */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                      <div className="text-white font-bold text-lg">
                        {item.brand}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-gray-400 line-through text-sm">
                        {item.originalPrice}
                      </span>
                      <span className="text-pink-600 font-bold text-lg">
                        {item.salePrice}
                      </span>
                      <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full ml-auto">
                        {Math.round(
                          ((parseFloat(
                            item.originalPrice
                              .replace("₹ ", "")
                              .replace(",", "")
                          ) -
                            parseFloat(
                              item.salePrice.replace("₹ ", "").replace(",", "")
                            )) /
                            parseFloat(
                              item.originalPrice
                                .replace("₹ ", "")
                                .replace(",", "")
                            )) *
                            100
                        )}
                        % OFF
                      </span>
                    </div>

                    <button className="w-full bg-pink-500 text-white py-2.5 rounded-lg font-medium hover:bg-pink-600 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxSlide + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-pink-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSalesSlider;

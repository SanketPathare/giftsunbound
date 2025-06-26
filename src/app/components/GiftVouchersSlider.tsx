// @ts-nocheck
"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GiftVouchersSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);
  const intervalRef = useRef(null);

  const vouchers = [
    {
      id: 1,
      name: "Naearth E-Gift Card",
      image: "/vouchers/naearth-card.jpg",
      price: "₹ 2000.00",
      priceRange: null,
      bgColor: "bg-gradient-to-br from-blue-100 to-green-100",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      name: "MyGlamm E-Gift Cards",
      image: "/vouchers/myglamm-card.jpg",
      price: null,
      priceRange: "₹ 500.00 - ₹ 2000.00",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
      textColor: "text-amber-700",
    },
    {
      id: 3,
      name: "Nykaa E-Gift Card",
      image: "/vouchers/nykaa-card.jpg",
      price: null,
      priceRange: "₹ 500.00 - ₹ 2000.00",
      bgColor: "bg-gradient-to-br from-pink-500 to-purple-600",
      textColor: "text-white",
    },
    {
      id: 4,
      name: "Nykaa Men E-Gift Card",
      image: "/vouchers/nykaa-men-card.jpg",
      price: null,
      priceRange: "₹ 500.00 - ₹ 2000.00",
      bgColor: "bg-gradient-to-br from-pink-500 to-purple-600",
      textColor: "text-white",
    },
    {
      id: 5,
      name: "AJIO E-Gift Card",
      image: "/vouchers/ajio-card.jpg",
      price: "₹ 500.00",
      priceRange: null,
      bgColor: "bg-gradient-to-br from-gray-800 to-black",
      textColor: "text-white",
    },
    {
      id: 6,
      name: "Naearth E-Gift Card",
      image: "/vouchers/naearth-card.jpg",
      price: "₹ 2000.00",
      priceRange: null,
      bgColor: "bg-gradient-to-br from-blue-100 to-green-100",
      textColor: "text-blue-600",
    },
    {
      id: 7,
      name: "MyGlamm E-Gift Cards",
      image: "/vouchers/myglamm-card.jpg",
      price: null,
      priceRange: "₹ 500.00 - ₹ 2000.00",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
      textColor: "text-amber-700",
    },
    {
      id: 8,
      name: "Nykaa E-Gift Card",
      image: "/vouchers/nykaa-card.jpg",
      price: null,
      priceRange: "₹ 500.00 - ₹ 2000.00",
      bgColor: "bg-gradient-to-br from-pink-500 to-purple-600",
      textColor: "text-white",
    },
  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 cards
      } else {
        setItemsPerView(4); // Desktop: 4 cards
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxSlides = vouchers.length - itemsPerView + 1;

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % maxSlides);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, maxSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleVouchers = () => {
    return vouchers.slice(currentSlide, currentSlide + itemsPerView);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-2 h-14 bg-pink-500 rounded-full"></div>
          <div>
            <p className="text-pink-500 font-medium text-sm uppercase tracking-wide">
              Customized Vouchers
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              Gift Vouchers
            </h2>
          </div>
        </div>

        <button className="px-6 py-2 border-2 border-pink-500 text-pink-500 rounded-full font-medium hover:bg-pink-500 hover:text-white transition-all duration-300 hover:shadow-lg">
          View All
        </button>
      </div>

      {/* Slider Container */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Cards Container */}
        <div className="transition-all duration-500 ease-in-out">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleVouchers().map((voucher) => (
              <div
                key={`${voucher.id}-${currentSlide}`}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
              >
                {/* Voucher Card */}
                <div
                  className={`relative h-48 ${voucher.bgColor} flex items-center justify-center rounded-t-2xl overflow-hidden`}
                >
                  {/* Brand/Voucher Content */}
                  <div className={`text-center ${voucher.textColor}`}>
                    <div className="text-2xl font-bold mb-2">
                      {voucher.name.split(" ")[0]}
                    </div>
                    {voucher.name.includes("E-Gift") && (
                      <div className="text-lg font-medium opacity-90">
                        E-Gift Card
                      </div>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Card Details */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {voucher.name}
                  </h3>

                  <div className="mb-4">
                    {voucher.price ? (
                      <span className="text-xl font-bold text-gray-900">
                        {voucher.price}
                      </span>
                    ) : (
                      <span className="text-xl font-bold text-gray-900">
                        {voucher.priceRange}
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: maxSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-pink-500 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GiftVouchersSlider;

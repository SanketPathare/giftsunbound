import React from 'react';
import { Star } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sneha R.",
      location: "Delhi",
      rating: 4,
      review: "I saved so much on my shopping by using vouchers from this site. The discounts are amazing, and the process is hassle-free!"
    },
    {
      id: 2,
      name: "Satish S.",
      location: "Pune",
      rating: 4,
      review: "Buying a gift has never been easier! I just picked a voucher, sent it digitally, and my friend could redeem it easily!"
    },
    {
      id: 3,
      name: "Vikram J.",
      location: "Chennai",
      rating: 5,
      review: "I compared different platforms, and this one has the best discounts! The customer support is great too! Thank You!"
    },
    {
      id: 4,
      name: "Aarav S.",
      location: "Mumbai",
      rating: 5,
      review: "I was looking for a last-minute gift, and this platform made it so easy! The vouchers were delivered instantly, and my friend loved them!"
    }
  ];

  const renderStars = (rating:number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
   <div className="flex items-center  mb-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-14 bg-pink-500 rounded-full"></div>
          <div>
            <span className="text-pink-500 text-sm font-medium">Reviews</span>
            <h2 className="text-2xl font-bold text-gray-900">What our customers says</h2>
          </div>
        </div>
        
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-4 group-hover:scale-105 transition-transform duration-300">
              {renderStars(review.rating)}
            </div>

            {/* Customer Info */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 text-lg">
                {review.name}
              </h3>
              <p className="text-gray-500 text-sm">{review.location}</p>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 leading-relaxed text-sm">
              {review.review}
            </p>

            {/* Decorative Element */}
            <div className="mt-4 pt-4 border-t border-gray-50">
              <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Statistics */}
      <div className="mt-16 text-center">
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">4.8</div>
            <div className="flex justify-center gap-1 mb-2">
              {renderStars(5)}
            </div>
            <div className="text-sm text-gray-500">Average Rating</div>
          </div>
          <div className="w-px h-16 bg-gray-200 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">2,847</div>
            <div className="text-sm text-gray-500">Happy Customers</div>
          </div>
          <div className="w-px h-16 bg-gray-200 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">99.2%</div>
            <div className="text-sm text-gray-500">Satisfaction Rate</div>
          </div>
        </div>
      </div>
       {/* Decorative Line */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
          </div>
    </div>
  );
};

export default CustomerReviews;
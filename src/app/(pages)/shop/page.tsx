"use client"
import React, { useState } from 'react';
import { Search,  Heart, Star, X } from 'lucide-react';
import Newsletter from '@/app/components/Newsletter';

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 25000]);
  const [sortBy, setSortBy] = useState('latest');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  
  const vouchers = [
    {
      id: 1,
      brand: 'Westside',
      title: 'Mcaffience skin',
      originalPrice: 500,
      discountPrice: 50,
      discount: '90%',
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop',
      rating: 4.5,
      reviews: 1250
    },
    {
      id: 2,
      brand: 'Mamaearth',
      title: 'Natural Skincare Bundle',
      originalPrice: 200,
      discountPrice: 40,
      discount: '80%',
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop',
      rating: 4.8,
      reviews: 890
    },
    {
      id: 3,
      brand: 'redBus',
      title: 'Travel Booking Discount',
      originalPrice: 500,
      discountPrice: 50,
      discount: '90%',
      category: 'travel',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop',
      rating: 4.3,
      reviews: 2100
    },
    {
      id: 4,
      brand: 'Reliance Digital',
      title: '50% Off (Up to ₹1000) on Accessories',
      originalPrice: 299,
      discountPrice: 120,
      discount: '60%',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop',
      rating: 4.6,
      reviews: 1560
    },
    {
      id: 5,
      brand: 'Samsung',
      title: 'Flat ₹5000 Off on Samsung TV',
      originalPrice: 1999,
      discountPrice: 1500,
      discount: '25%',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
      rating: 4.7,
      reviews: 850
    },
    {
      id: 6,
      brand: 'MakeMyTrip',
      title: '50% Off on Hotels',
      originalPrice: 299,
      discountPrice: 120,
      discount: '60%',
      category: 'travel',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
      rating: 4.4,
      reviews: 1200
    },
    {
      id: 7,
      brand: 'MakeMyTrip',
      title: 'Flat ₹500 Off on Flights',
      originalPrice: 200,
      discountPrice: 100,
      discount: '50%',
      category: 'travel',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop',
      rating: 4.2,
      reviews: 980
    },
    {
      id: 8,
      brand: 'Myntra',
      title: 'Get 50% off on your order',
      originalPrice: 450,
      discountPrice: 120,
      discount: '73%',
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
      rating: 4.5,
      reviews: 1750
    }
  ];

  const categories = ['all', 'fashion', 'electronics', 'travel', 'beauty', 'food'];
  const brands = ['all', 'Westside', 'Mamaearth', 'redBus', 'Reliance Digital', 'Samsung', 'MakeMyTrip', 'Myntra'];

  const toggleFavorite = (id:any) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const filteredVouchers = vouchers.filter(voucher => {
    if (selectedCategory !== 'all' && voucher.category !== selectedCategory) return false;
    if (selectedBrand !== 'all' && voucher.brand !== selectedBrand) return false;
    if (voucher.discountPrice < priceRange[0] || voucher.discountPrice > priceRange[1]) return false;
    return true;
  });

  const VoucherCard = ({ voucher, isListView = false }:any) => (
    <div className={` rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group ${isListView ? 'flex' : ''}`}>
      <div className={`relative ${isListView ? 'w-48 flex-shrink-0' : 'h-48'} overflow-hidden`}>
        <img 
          src={voucher.image} 
          alt={voucher.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          {voucher.discount} OFF
        </div>
        <button 
          onClick={() => toggleFavorite(voucher.id)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            favorites.has(voucher.id) 
              ? 'bg-pink-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-pink-500 hover:text-white'
          }`}
        >
          <Heart size={16} fill={favorites.has(voucher.id) ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      <div className={`p-6 ${isListView ? 'flex-1' : ''}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-pink-600 bg-blue-50 px-2 py-1 rounded-lg">
            {voucher.brand}
          </span>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{voucher.rating}</span>
            <span className="text-xs text-gray-400">({voucher.reviews})</span>
          </div>
        </div>
        
        <h3 className="font-bold text-gray-800 mb-3 text-lg leading-tight ">
          {voucher.title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-800">₹{voucher.discountPrice}</span>
            <span className="text-sm text-gray-400 line-through">₹{voucher.originalPrice}</span>
          </div>
          <button className="bg-gradient-to-r from-pink-500  to-pink-600 text-white px-4 py-2 rounded-full  hover:from-pink-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer text-md">
            Get Deal
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'fixed inset-0 z-50 bg-black/50 md:relative md:bg-transparent' : 'hidden'} md:block`}>
            <div className={`${showFilters ? 'fixed left-0 top-0 h-full w-80 bg-white shadow-xl transform translate-x-0' : ''} md:relative md:w-80 md:shadow-none md:transform-none`}>
              <div className="p-6 bg-white rounded-2xl shadow-lg h-fit">
                <div className="flex items-center justify-between mb-6 md:hidden">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search vouchers..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl "
                    />
                  </div>
                </div>

                {/* Sort */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl "
                  >
                    <option value="latest">Latest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="discount">Highest Discount</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center custom-radio">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 "
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Brands</h3>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center custom-radio">
                        <input
                          type="radio"
                          name="brand"
                          value={brand}
                          checked={selectedBrand === brand}
                          onChange={(e) => setSelectedBrand(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Price Range</h3>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 25000])}
                      className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredVouchers.length}</span> results
              </p>
              <div className="hidden md:flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border border-gray-200 rounded-lg "
                >
                  <option value="latest">Latest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="discount">Highest Discount</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVouchers.map(voucher => (
                  <VoucherCard key={voucher.id} voucher={voucher} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredVouchers.map(voucher => (
                  <VoucherCard key={voucher.id} voucher={voucher} isListView={true} />
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 space-x-2">
              {[1, 2, 3, 4, 5, 6, 7].map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all ${
                    currentPage === page
                      ? 'bg-pink-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    <Newsletter/>
    </div>
  );
};

export default Page;
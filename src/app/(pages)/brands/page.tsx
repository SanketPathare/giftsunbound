"use client";
import React, { useState } from "react";
import {
  Heart,
  Star,
  Filter,
  Grid,
  List,
  Search,
  ChevronDown,
} from "lucide-react";

const BrandCategoryPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const brands = [
    {
      id: 1,
      name: "Croma",
      category: "Electronics",
      description: "Premium electronics and appliances",
      rating: 4.8,
      followers: "2.1M",
      gradient: "from-emerald-600 to-teal-700",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center",
      featured: true,
    },
    {
      id: 2,
      name: "Make My Trip",
      category: "Travel",
      description: "Your travel companion",
      rating: 4.6,
      followers: "5.2M",
      gradient: "from-blue-500 to-indigo-600",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop&crop=center",
      featured: true,
    },
    {
      id: 3,
      name: "Nykaa",
      category: "Beauty",
      description: "Beauty & wellness destination",
      rating: 4.9,
      followers: "8.7M",
      gradient: "from-pink-500 to-rose-600",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
      featured: true,
    },
    {
      id: 4,
      name: "Max Fashion",
      category: "Fashion",
      description: "Trendy fashion for all",
      rating: 4.4,
      followers: "3.8M",
      gradient: "from-blue-600 to-blue-800",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=400&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 5,
      name: "Dominos",
      category: "Food",
      description: "Delicious pizza delivered hot",
      rating: 4.5,
      followers: "12.3M",
      gradient: "from-red-500 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 6,
      name: "GIVA",
      category: "Jewelry",
      description: "Fine silver jewellery",
      rating: 4.7,
      followers: "890K",
      gradient: "from-gray-400 to-gray-600",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 7,
      name: "Ajio",
      category: "Fashion",
      description: "Fashion & lifestyle store",
      rating: 4.3,
      followers: "4.2M",
      gradient: "from-gray-700 to-gray-900",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 8,
      name: "Apollo",
      category: "Healthcare",
      description: "Healthcare & pharmacy",
      rating: 4.6,
      followers: "1.5M",
      gradient: "from-teal-600 to-cyan-700",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center",
      featured: false,
    },
  ];

  const categories = [
    "all",
    "Electronics",
    "Travel",
    "Beauty",
    "Fashion",
    "Food",
    "Jewelry",
    "Healthcare",
  ];

  const filteredBrands =
    selectedCategory === "all"
      ? brands
      : brands.filter((brand) => brand.category === selectedCategory);

  const BrandCard = ({ brand, isGrid }:any) => (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        isGrid ? "aspect-square" : "flex items-center p-6 h-32"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={brand.image}
          alt={brand.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Background Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${brand.gradient} opacity-80`}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

      {/* Heart Icon */}
      <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
        <Heart className="w-4 h-4 text-white" />
      </button>

      {/* Featured Badge */}
      {brand.featured && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold">
          Featured
        </div>
      )}

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col justify-end h-full p-6 text-white ${
          !isGrid ? "justify-center flex-row items-center space-x-6" : ""
        }`}
      >
        {isGrid ? (
          <>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight">
                {brand.name}
              </h3>
              <p className="text-white/80 text-sm">{brand.description}</p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{brand.rating}</span>
                </div>
                <div className="text-white/70">{brand.followers} followers</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{brand.name}</h3>
              <p className="text-white/80 text-sm mt-1">{brand.description}</p>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{brand.rating}</span>
              </div>
              <div className="text-white/70">{brand.followers}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen my-5">
      {/* Header */}
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Our Top Brands
              </h1>
              <p className="text-slate-600 text-sm">
                Discover your favorite brands
              </p>
            </div>

            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="hidden sm:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-400" />
                <input
                  type="text"
                  placeholder="Search brands..."
                  className="pl-10 pr-4 py-2 rounded-xl border border-pink-500  bg-white/50"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-slate-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors cursor-pointer ${
                    viewMode === "list"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className={`mb-8 ${showFilters ? "block" : "hidden sm:block"}`}>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-pink-600 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search brands..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors bg-white/70 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-slate-600">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {filteredBrands.length}
            </span>{" "}
            brands
          </p>

          {/* Sort Dropdown */}
          <div className="hidden sm:flex items-center space-x-2">
            <span className="text-sm text-slate-600">Sort by:</span>
            <button className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-colors">
              <span className="text-sm">Popularity</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Brands Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} isGrid={true} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} isGrid={false} />
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <button className=" cursor-pointer px-8 py-4 bg-pink-500 text-white rounded-2xl font-semibold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl">
            Load More Brands
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandCategoryPage;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BrowseByCategory = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "/BrowseCategory/Electronics.png",
      icon: "📱",
      href: "/categories/electronics",
    },
    {
      id: 2,
      name: "Food",
      image: "/api/placeholder/300/200", // Replace with actual image paths
      icon: "🍕",
      href: "/categories/food",
    },
    {
      id: 3,
      name: "Entertainment",
      image: "/api/placeholder/300/200", // Replace with actual image paths
      icon: "🎬",
      href: "/categories/entertainment",
    },
    {
      id: 4,
      name: "Travel",
      image: "/api/placeholder/300/200", // Replace with actual image paths
      icon: "✈️",
      href: "/categories/travel",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-2 h-14 bg-pink-500 rounded-full"></div>
          <div>
            <p className="text-pink-500 font-medium text-sm uppercase tracking-wide">
              Categories
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              Browse By Category
            </h2>
          </div>
        </div>

        <Link
          href="/categories"
          className="px-6 py-2 border-2 border-pink-500 text-pink-500 rounded-full font-medium hover:bg-pink-500 hover:text-white transition-all duration-300 hover:shadow-lg"
        >
          View All
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={category.href} className="group block">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 p-6 h-40 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-pink-600/20"></div>

              {/* Content Container */}
              <div className="relative h-full flex flex-col items-center justify-center text-center">
                {/* Icon/Emoji */}
                <div className="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {category.icon}
                </div>

                {/* Category Name */}
                <h3 className="text-white text-2xl font-bold transform transition-all duration-300 group-hover:translate-y-1">
                  {category.name}
                </h3>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full transform transition-all duration-300 group-hover:scale-125"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full transform transition-all duration-300 group-hover:scale-150"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;

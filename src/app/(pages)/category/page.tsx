
import Newsletter from '@/app/components/Newsletter';
import { ShoppingBag, Smartphone, Coffee, Play, Plane, Monitor, Sparkles } from 'lucide-react';

const Page = () => {


  const categories = [
    {
      id: 1,
      name: 'Fashion',
      description: 'Trendy clothing & accessories',
      icon: ShoppingBag,
      gradient: 'from-pink-500 via-purple-500 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50',
      items: '2.5k+ items'
    },
    {
      id: 2,
      name: 'Electronics',
      description: 'Latest tech & gadgets',
      icon: Smartphone,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      items: '1.8k+ items'
    },
    {
      id: 3,
      name: 'Food & Drinks',
      description: 'Delicious meals & beverages',
      icon: Coffee,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      items: '3.2k+ items'
    },
    {
      id: 4,
      name: 'Entertainment',
      description: 'Movies, games & fun',
      icon: Play,
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      items: '1.1k+ items'
    },
    {
      id: 5,
      name: 'Travel',
      description: 'Explore amazing destinations',
      icon: Plane,
      gradient: 'from-green-500 via-teal-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
      items: '950+ items'
    },
    {
      id: 6,
      name: 'OTT Streaming',
      description: 'Movies & series online',
      icon: Monitor,
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      items: '5k+ content'
    },
    {
      id: 7,
      name: 'Beauty & Personal Care',
      description: 'Skincare & wellness',
      icon: Sparkles,
      gradient: 'from-pink-500 via-rose-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
      items: '1.7k+ items'
    }
  ];

  return (
    <div className="min-h-screen ">
     

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explore 
              <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 bg-clip-text text-transparent">
                {" "}Categories
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Browse products by your interests and discover amazing deals across all categories
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`group relative overflow-hidden rounded-2xl ${category.bgColor} p-6 sm:p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/50`}
              
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Category Info */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs sm:text-sm font-semibold text-gray-500">
                        {category.items}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-colors duration-300"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 py-16 m-10 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of happy customers and discover amazing products today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Browse All Items
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              View Deals
            </button>
          </div>
        </div>
      </div>
      <Newsletter/>
    </div>
  );
};

export default Page;
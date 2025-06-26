import React from 'react';

const AwardsAchievement = () => {
  const awards = [
    {
      id: 1,
      name: 'DPIIT',
      subtitle: 'Recognition',
      imageUrl: '/AwardsAchievementImages/Dpiit.png', 
      year: '2023'
    },
    {
      id: 2,
      name: 'ISO',
      subtitle: '9001:2015',
      imageUrl: '/AwardsAchievementImages/iso1.png', 
      year: '2022'
    },
    {
      id: 3,
      name: 'ISO',
      subtitle: '27001:2022',
      imageUrl: '/AwardsAchievementImages/iso2.png', 
      year: '2024'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Made mobile responsive */}
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <div className="hidden sm:block w-2 h-20 bg-pink-500 rounded-full"></div>
            <div>
              <p className="text-pink-500 font-medium text-sm uppercase tracking-wide">
                Customized Vouchers
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                Celebrate Awards &<br className="hidden sm:block" />
                <span className="text-gray-800"> Achievement</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {awards.map((award) => (
            <div
              key={award.id}
              className="group relative"
            >
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                <div className="relative">
                  {/* Image Container*/}
                  <div className="flex justify-center mb-4">
                    <div className=" border-2 border-dashed rounded-xl w-30 h-30 flex items-center justify-center overflow-hidden p-2 bg-transparent">
                      {/* Placeholder for image  */}
                      <img 
                        src={award.imageUrl} 
                        alt={award.name} 
                        className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  {/* Award Content */}
                  <div className="text-center">
                    {/* Award Name */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors duration-300">
                      {award.name}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-gray-600 font-medium text-sm sm:text-base mb-2 sm:mb-3">
                      {award.subtitle}
                    </p>
                    
                    {/* Year Badge */}
                    <div className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1 text-xs sm:text-sm rounded-full font-semibold">
                      {award.year}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-pink-500/15 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Our commitment to excellence has been recognized through various prestigious awards and certifications, 
            reflecting our dedication to quality and innovation.
          </p>
          
          {/* Decorative Line */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsAchievement;
"use client"

export function BirthdayHero() {
  return (
    <div className="relative w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
      {/* Background decoration - simplified grid */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="gray" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main Heading - matches image hierarchy */}
        <h1 className="text-6xl md:text-8xl font-black mb-4 md:mb-6 leading-tight text-black">
          Happy Birthday
        </h1>

        {/* Subheading - simplified structure */}
        <div className="mb-8 md:mb-12 space-y-2">
          <p className="text-xl md:text-2xl font-semibold text-gray-800">
            Celebrate Your Special day at
          </p>
          <p className="text-3xl md:text-4xl font-black text-black tracking-wide">
            FOCUS
          </p>
        </div>

        {/* Description text */}
        <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Tell us when your birthday is and we&apos;ll hook you up with<br />
          exclusive birthday perks and VIP offers.
        </p>

        {/* Divider line */}
        <div className="mb-8 md:mb-12">
          <div className="w-48 h-1 bg-gray-300 mx-auto"></div>
        </div>

        {/* CTA Button - more prominent */}
        <button className="mb-12 md:mb-16 inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Look In Your Birthday
        </button>

        {/* Balloons and Gifts Section with PNG Images */}
        <div className="relative h-56 md:h-72 flex items-end justify-center">
          {/* Balloon PNG Images */}
          <div className="absolute inset-0 flex items-end justify-center">
            {/* Left Balloon */}
            <div className="absolute left-[15%] bottom-40 transform -rotate-6">
              <div className="relative">
                <img 
                  src="/images/balloon.png" 
                  alt="Balloon"
                  className="w-16 h-20 md:w-20 md:h-24 object-contain"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gray-300 opacity-50"></div>
              </div>
            </div>

            {/* Center-left Balloon */}
            <div className="absolute left-[30%] bottom-32 transform rotate-3">
              <div className="relative">
                <img 
                  src="/images/balloon.png" 
                  alt="Balloon"
                  className="w-20 h-24 md:w-24 md:h-28 object-contain"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gray-300 opacity-50"></div>
              </div>
            </div>

            {/* Center Balloon */}
            <div className="absolute left-[45%] bottom-36 transform -rotate-2">
              <div className="relative">
                <img 
                  src="/images/balloon.png" 
                  alt="Balloon"
                  className="w-18 h-22 md:w-22 md:h-26 object-contain"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-22 bg-gray-300 opacity-50"></div>
              </div>
            </div>

            {/* Center-right Balloon */}
            <div className="absolute right-[30%] bottom-34 transform rotate-4">
              <div className="relative">
                <img 
                  src="/images/balloon.png" 
                  alt="Balloon"
                  className="w-20 h-24 md:w-24 md:h-28 object-contain"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gray-300 opacity-50"></div>
              </div>
            </div>

            {/* Right Balloon */}
            <div className="absolute right-[15%] bottom-38 transform -rotate-3">
              <div className="relative">
                <img 
                  src="/images/balloon.png" 
                  alt="Balloon"
                  className="w-16 h-20 md:w-20 md:h-24 object-contain"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gray-300 opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Gifts Section (keeping SVG for gifts or replace with PNGs if available) */}
          <div className="absolute bottom-0 w-full flex justify-center items-end space-x-4 md:space-x-8">
            {/* Left small gift */}
            <div className="transform -rotate-3">
              <div className="w-12 h-16 md:w-16 md:h-20 bg-[#d6bcad] rounded-sm relative">
                <div className="absolute inset-1 bg-[#e8d5c4] rounded-sm"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#f4e9df]"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-[#f4e9df]"></div>
              </div>
            </div>

            {/* Center-left gift */}
            <div className="transform rotate-2">
              <div className="w-16 h-20 md:w-20 md:h-24 bg-[#b8a89f] rounded-sm relative">
                <div className="absolute inset-1 bg-[#d6bcad] rounded-sm"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#e8d5c4]"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-[#e8d5c4]"></div>
              </div>
            </div>

            {/* Center gift */}
            <div className="transform -rotate-1">
              <div className="w-14 h-18 md:w-18 md:h-22 bg-[#c9b5ad] rounded-sm relative">
                <div className="absolute inset-1 bg-[#e8d5c4] rounded-sm"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-7 h-0.5 bg-[#f4e9df]"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-7 bg-[#f4e9df]"></div>
              </div>
            </div>

            {/* Center-right gift */}
            <div className="transform rotate-3">
              <div className="w-16 h-20 md:w-20 md:h-24 bg-[#a89282] rounded-sm relative">
                <div className="absolute inset-1 bg-[#c9b5ad] rounded-sm"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#e8d5c4]"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-[#e8d5c4]"></div>
              </div>
            </div>

            {/* Right small gift */}
            <div className="transform -rotate-2">
              <div className="w-12 h-16 md:w-16 md:h-20 bg-[#d6bcad] rounded-sm relative">
                <div className="absolute inset-1 bg-[#e8d5c4] rounded-sm"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#f4e9df]"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-[#f4e9df]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
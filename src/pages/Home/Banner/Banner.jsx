import React from 'react';
import girl from '../../../assets/header.png'

const Banner = () => {
  return (
    <div className="bg-pink-100 rounded-xl max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        
        {/* Content Section */}
        <div className="p-8 md:p-16 lg:w-1/2 xl:p-24">
          <p className="uppercase text-sm tracking-wider text-pink-500 font-semibold mb-2">
            Up to 20% Discount on
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Girl's Fashion
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Discover the latest trends and express your unique style with our Women's
            Fashion website. Explore a curated collection of clothing, accessories, and
            footwear that caters to every taste and occasion.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 uppercase tracking-wider text-sm shadow-lg">
            Explore Now
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative flex justify-center items-center lg:h-auto">
         
          <img
            src={girl} // **Replace this with your actual image path**
            alt="Fashion model wearing a red coat and black hat"
            className="object-cover w-full h-full max-h-[600px] lg:max-h-none"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;
import React from "react";
import { Link } from "react-router";
import shirt from "../../../assets/card-1.png";
import dress from "../../../assets/card-2.png";
import casual from "../../../assets/card-3.png";

const trendyCollections = [
  {
    id: 1,
    title: "Women's Shirt",
    trend: "2023 Trend",
    image: shirt,
    path: "/womens-shirt",
    bg: "bg-[#eef2f6]", // soft grayish
  },
  {
    id: 2,
    title: "Women's Dresses",
    trend: "2023 Trend",
    image: dress,
    path: "/womens-dresses",
    bg: "bg-pink-50", // light pink
  },
  {
    id: 3,
    title: "Women's Casuals",
    trend: "2023 Trend",
    image: casual,
    path: "/womens-casuals",
    bg: "bg-[#f8f7f3]", // off-white
  },
];

const TrendyCollections = () => {
  return (
     <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* 🆕 Responsive padding added (px-4 sm:px-6 lg:px-8) */}

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
        {/* 🆕 Responsive text size for heading */}
        Trending Women's Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 🆕 Made grid responsive: 1 column on mobile, 2 on tablet, 3 on desktop */}

        {trendyCollections.map((item) => (
          <div
            key={item.id}
            className={`${item.bg} rounded-xl overflow-hidden relative group 
            transition-transform duration-300 hover:-translate-y-1 shadow-md`}
          >
            {/* Image Section */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 sm:h-56 md:h-64 "
            />
            {/* 🆕 Responsive image height and added object-cover for proper scaling */}

            {/* Content Section */}
            <div
              className="
                absolute top-10 sm:top-14 md:top-16 
                left-[60%] transform -translate-x-1/2 
                text-center px-2
              "
            >
              {/* 🆕 Centered content for better alignment on small screens */}
              <p className="text-pink-600 text-xs sm:text-sm font-semibold mb-1">
                {/* 🆕 Responsive text size */}
                {item.trend}
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {/* 🆕 Responsive heading size */}
                {item.title}
              </h3>
              <Link
                to={item.path}
                className="text-xs sm:text-sm text-gray-700 underline hover:text-pink-600 font-medium"
              >
                Discover More +
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendyCollections;

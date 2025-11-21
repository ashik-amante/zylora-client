import React, { useState, useEffect } from 'react';
import dealImage from '../../../assets/deals.png'; // **Update this path to your actual image**

const DealsOfMonth = () => {
  // Placeholder for countdown logic (you'd replace this with actual state and useEffect)
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 20,
    minutes: 15,
    seconds: 5,
  });

  // Example of how you might update time (uncomment and adjust for actual functionality)
  
  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate remaining time here and update setTimeLeft
      // For demonstration, let's just decrement seconds
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  

  const formatTime = (time) => String(time).padStart(2, '0');

  return (
    <div className="bg-pink-50 rounded-xl max-w-7xl mx-auto overflow-hidden my-12 shadow-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        
        {/* Image Section */}
        <div className="lg:w-1/2 relative flex justify-center items-center h-full">
          <img
            src={dealImage} // Make sure this path is correct
            alt="Fashion model wearing a red shirt and black belt"
            className="object-cover w-full h-full max-h-[500px] lg:max-h-none" // Use object-cover to match the original design crop
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-16 lg:w-1/2 xl:p-24 text-center lg:text-left">
          <p className="uppercase text-sm tracking-wider text-red-500 font-semibold mb-2">
            Get Up To 20% Discount
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
            Deals Of This Month
          </h2>
          <p className="text-gray-600 mb-10 max-w-md mx-auto lg:mx-0">
            Our Women's Fashion Deals of the Month are here to make your style
            dreams a reality without breaking the bank. Discover a curated collection
            of exquisite clothing, accessories, and footwear, all handpicked to elevate
            your wardrobe.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center lg:justify-start space-x-4 md:space-x-6">
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border border-gray-200 shadow-sm">
                <span className="text-3xl md:text-4xl font-bold text-gray-800">
                  {formatTime(timeLeft.days)}
                </span>
              </div>
              <span className="mt-2 text-sm text-gray-600">Days</span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border border-gray-200 shadow-sm">
                <span className="text-3xl md:text-4xl font-bold text-gray-800">
                  {formatTime(timeLeft.hours)}
                </span>
              </div>
              <span className="mt-2 text-sm text-gray-600">Hours</span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border border-gray-200 shadow-sm">
                <span className="text-3xl md:text-4xl font-bold text-gray-800">
                  {formatTime(timeLeft.minutes)}
                </span>
              </div>
              <span className="mt-2 text-sm text-gray-600">Mins</span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border border-gray-200 shadow-sm">
                <span className="text-3xl md:text-4xl font-bold text-gray-800">
                  {formatTime(timeLeft.seconds)}
                </span>
              </div>
              <span className="mt-2 text-sm text-gray-600">Secs</span>
            </div>
          </div> {/* End Countdown Timer */}
        </div>
      </div>
    </div>
  );
};

export default DealsOfMonth;
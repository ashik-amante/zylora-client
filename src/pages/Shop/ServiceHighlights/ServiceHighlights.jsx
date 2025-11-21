import React from 'react';
// Note: For the icons, I'll use placeholders or Tailwind's default setup.
// In a real project, you would import icons from a library like react-icons or Heroicons.
// Example: import { Truck, DollarSign, UserCheck } from 'lucide-react';

// For simplicity, we'll represent the icons using a span with basic styling,
// but in production, you should use SVG icons.

const ServiceHighlights = () => {
  const features = [
    {
      icon: '🚚', // Placeholder for Truck icon
      title: 'Free Delivery',
      description: 'Offers convenience and the ability to shop from anywhere, anytime.',
    },
    {
      icon: '💰', // Placeholder for Money icon
      title: '100% Money Back Guaranty',
      description: 'E-commerce have a review system where customers can share feedback.',
    },
    {
      icon: '🧑‍💻', // Placeholder for Support icon
      title: 'Strong Support',
      description: 'Offer customer support services to assist customers with queries and issues.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-8 md:space-y-0">
        
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center max-w-xs p-4"
          >
            {/* Icon placeholder (mimicking the original design's style) */}
            <div className="text-4xl text-red-500 mb-4">
              {/* Replace the emoji with your actual SVG or component icon */}
              {/* You can adjust the color (text-red-500) to match the exact shade */}
              {feature.icon === '🚚' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck text-red-500">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-5"/><path d="M15.7 8.7a2 2 0 0 0-1.8-1.8H2"/><path d="M12 22h2"/><path d="M22 22h-2"/><path d="M2 22h-2"/><path d="M20 18v-5h2"/>
                </svg>
              )}
              {feature.icon === '💰' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote text-red-500">
                  <rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/>
                </svg>
              )}
              {feature.icon === '🧑‍💻' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check text-red-500">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M22 10l-5 5-2-2"/><circle cx="9" cy="7" r="4"/>
                </svg>
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500">
              {feature.description}
            </p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default ServiceHighlights;
import React from 'react';

// Placeholder images for Instagram grid - **REPLACE THESE WITH YOUR ACTUAL IMAGE PATHS**
import insta1 from '../../src/assets/instagram-1.jpg'
import insta2 from '../../src/assets/instagram-2.jpg'
import insta3 from '../../src/assets/instagram-3.jpg'
import insta4 from '../../src/assets/instagram-4.jpg'

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12 pb-12">
          
          {/* Column 1: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6 uppercase tracking-wider">
              Contact Info
            </h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">
                  {/* Location Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <p>123, London Bridge Street, London</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">
                  {/* Email Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <p>support@likebaba.com</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">
                  {/* Phone Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2.07 15.92 15.92 0 0 1-6.72-2.88 15.92 15.92 0 0 1-2.88-6.72A2 2 0 0 1 4.11 2H7a2 2 0 0 1 2 2 15.92 15.92 0 0 0 .72 2.72c.26.54-.14 1.25-.68 1.54l-1.4 1.26a16 16 0 0 0 6.8 6.8l1.27-1.4c.29-.54 1-.94 1.54-.68A15.92 15.92 0 0 0 20 15h3a2 2 0 0 1 2 2z"/>
                  </svg>
                </span>
                <p>(+012) 3456 789</p>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-red-500 transition duration-200">Home</a></li>
              <li><a href="#" className="hover:text-red-500 transition duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition duration-200">Work With Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition duration-200">Our Blog</a></li>
              <li><a href="#" className="hover:text-red-500 transition duration-200">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 3: Useful Link */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6 uppercase tracking-wider">
              Useful Link
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-red-500 transition duration-200">Help</a></li>
              <li><a href="#" className="hover:text-red-500 transition duration-200">Track My Order</a></li>
              <li><a href="#" className="hover:text-red-500 transition duration-200">Men</a></li>
              <li><a href="#" className="hover:text-red-500 transition duration-200">Women</a></li>
              <li><a href="#" className="hover:text-red-500 transition duration-200">Dresses</a></li>
            </ul>
          </div>

          {/* Column 4: Instagram */}
          <div>
  <h3 className="text-lg font-bold text-gray-800 mb-6 uppercase tracking-wider">
    Instagram
  </h3>

  <div className="flex flex-wrap gap-2">
    <img
      src={insta1}
      alt="Instagram Post 1"
      className="w-24 h-24 object-cover rounded-sm"
    />
    <img
      src={insta2}
      alt="Instagram Post 2"
      className="w-24 h-24 object-cover rounded-sm"
    />
    <img
      src={insta3}
      alt="Instagram Post 3"
      className="w-24 h-24 object-cover rounded-sm"
    />
    <img
      src={insta4}
      alt="Instagram Post 4"
      className="w-24 h-24 object-cover rounded-sm"
    />
  </div>
</div>


        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-100 pt-8 mt-8 text-center text-sm text-gray-500">
          <p>Copyright © 2025 Web Design Mastery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
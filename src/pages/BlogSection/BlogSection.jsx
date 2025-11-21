import React, { useEffect, useState } from 'react';



const BlogSection = () => {
    const [blogs,setBlogs] = useState([])
//   const blogPosts = [
//     {
//       image: blogImage1,
//       category: 'Timeless Elegance',
//       title: 'Mastering the Art of Capsule Wardrobes',
//       date: '12th August 2022',
//     },
//     {
//       image: blogImage2,
//       category: 'Summer Breeze',
//       title: 'Unveiling the Hottest Beachwear Trends',
//       date: '18th January 2023',
//     },
//     {
//       image: blogImage3,
//       category: 'Power Dressing',
//       title: 'Navigating the World of Women\'s Tailoring',
//       date: '5th January 2025',
//     },
//     {
//       image: blogImage4,
//       category: 'New York Times', // Assuming this is a source/category for the last one
//       title: 'The World\'s Best Fashion Fair 2023',
//       date: '25th May 2025',
//     },
//   ];

useEffect(()=>{
    fetch('./blogs.json')
    .then(res=> res.json())
    .then(data=> {
        setBlogs(data)
    })
},[])

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 inline-block relative">
            Latest From Blog
            {/* Underline effect */}
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-red-500 w-1/3"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Elevate your wardrobe with our freshest style tips, trends, and
            inspiration on our blog.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Blog Post Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Blog Post Content */}
              <div className="p-6">
                <p className="text-xs text-red-500 font-semibold uppercase mb-2">
                  {post.category}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
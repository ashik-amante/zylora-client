import React, { useEffect, useState } from "react";

import ProductCard from "../ProductCard/ProductCard";

const HotProducts = () => {
  const [visibleCount, setVisibleCount] = useState(4); //  4 initially
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [])


  const handleLoadMore = () => {
    // 👇 show more products on click
    setVisibleCount(() => visibleCount + 4);
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Trending Products
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
          Discover the Hottest Picks: Elevate Your Style with Our Curated
          Collection of Trending Women's Fashion Products.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">
        {
          products.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))
        }
      </div>
      {/* <ProductCard products={products} visibleCount={visibleCount}></ProductCard> */}

      {/* Load More Button */}
      {visibleCount < products.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-300 "
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default HotProducts;

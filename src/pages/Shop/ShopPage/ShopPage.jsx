import React, { useState } from "react";
import productsData from "../../../../public/products.json";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/carts/cartSlice";
import ProductCard from "../ProductCard/ProductCard";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  // Reset All Filters
  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedColor("all");
    setSelectedPrice("all");
  };

  // --------------------
  // FILTER LOGIC
  // --------------------
  const filteredProducts = productsData.filter((product) => {
    const matchCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchColor =
      selectedColor === "all" || product.color === selectedColor;

    const matchPrice =
      selectedPrice === "all" ||
      (selectedPrice === "under50" && product.price < 50) ||
      (selectedPrice === "50to100" &&
        product.price >= 50 &&
        product.price <= 100) ||
      (selectedPrice === "100to200" &&
        product.price >= 100 &&
        product.price <= 200) ||
      (selectedPrice === "200above" && product.price >= 200);

    return matchCategory && matchColor && matchPrice;
  });

  console.log(filteredProducts);
  return (
    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto mt-32 px-6">

      {/* LEFT FILTERS */}
      <aside className="col-span-12 md:col-span-3 space-y-8">

        {/* Category Filter */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Category</h3>
          <div className="flex flex-col gap-2 text-gray-700">
            {["all", "accessories", "dress", "jewellery", "cosmetics"].map(
              (cat) => (
                <label key={cat}>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                  />{" "}
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </label>
              )
            )}
          </div>
        </div>

        {/* Color Filter */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Color</h3>
          <div className="flex flex-col gap-2 text-gray-700">
            {[
              "all",
              "black",
              "red",
              "gold",
              "blue",
              "silver",
              "beige",
              "green",
            ].map((color) => (
              <label key={color}>
                <input
                  type="radio"
                  name="color"
                  checked={selectedColor === color}
                  onChange={() => setSelectedColor(color)}
                />{" "}
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Price Range</h3>
          <div className="flex flex-col gap-2 text-gray-700">
            <label>
              <input
                type="radio"
                name="price"
                checked={selectedPrice === "all"}
                onChange={() => setSelectedPrice("all")}
              />{" "}
              All
            </label>

            <label>
              <input
                type="radio"
                name="price"
                onChange={() => setSelectedPrice("under50")}
              />{" "}
              Under $50
            </label>

            <label>
              <input
                type="radio"
                name="price"
                onChange={() => setSelectedPrice("50to100")}
              />{" "}
              $50 - $100
            </label>

            <label>
              <input
                type="radio"
                name="price"
                onChange={() => setSelectedPrice("100to200")}
              />{" "}
              $100 - $200
            </label>

            <label>
              <input
                type="radio"
                name="price"
                onChange={() => setSelectedPrice("200above")}
              />{" "}
              $200 and Above
            </label>
          </div>
        </div>

        {/* RESET BUTTON */}
        <div className="pt-4">
          <button
            onClick={resetFilters}
            className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Reset All Filters
          </button>
        </div>
      </aside>

      {/* RIGHT PRODUCTS */}
      <div className="col-span-12 md:col-span-9">
        <h2 className="text-xl font-semibold mb-6">
          Showing {filteredProducts.length} products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
             <ProductCard key={product.id} product={product}></ProductCard>
            // <Link to={`/shop/${product.id}`}>
             
            // </Link>

          ))}
        </div>
      </div>


    </div>
  );
};

export default ShopPage;

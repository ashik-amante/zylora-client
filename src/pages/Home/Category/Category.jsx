import React from "react";
import accessories from "../../../assets/category-1.jpg";
import dress from "../../../assets/category-2.jpg";
import jewellery from "../../../assets/category-3.jpg";
import cosmetics from "../../../assets/category-4.jpg";
import {Link} from "react-router"

const categories = [
  { id: 1, name: "Accessories", image: accessories, path: "/categories/accessories" },
  { id: 2, name: "Dress Collection", image: dress, path: "/categories/dress-collection" },
  { id: 3, name: "Jewellery", image: jewellery, path: "/categories/jewellery" },
  { id: 4, name: "Cosmetics", image: cosmetics, path: "/categories/cosmetics" },
];

const Categories = () => {
  return (
     <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium group-hover:text-pink-600 transition-colors">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

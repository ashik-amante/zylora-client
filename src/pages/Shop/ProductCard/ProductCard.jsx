import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/features/carts/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddToCart = (product)=>{
    dispatch(addToCart(product))
  }
    return (
        <div
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                />
                <button 
                onClick={(e)=>{
                    e.stopPropagation()
                    handleAddToCart(product)
                }}
                className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    <FaShoppingCart />

                </button>
            </div>

            <div className="p-4 text-center">
                <h3 className="text-gray-800 font-semibold mb-2">
                    {product.name}
                </h3>

                <div className="flex justify-center items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                            key={i}
                            className={`${i < product.rating ? "text-yellow-400" : "text-gray-300"} text-sm`}
                        />
                    ))}
                </div>

                <div className="text-gray-900 font-bold text-lg">
                    ${product.price}{" "}
                    {product.oldPrice && (
                        <span className="text-gray-400 text-sm line-through ml-2">
                            ${product.oldPrice}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

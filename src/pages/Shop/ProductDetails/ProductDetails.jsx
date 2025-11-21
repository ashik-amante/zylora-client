import React from "react";
import { Link, useParams } from "react-router";
import products from "../../../../public/products.json"; // your product file

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return (
            <div className="mt-40 text-center text-2xl font-semibold">
                Product Not Found!
            </div>
        );
    }

    return (
        <div className="mt-32 mb-20">
            {/* TOP HEADER / BREADCRUMB */}
            <div className="bg-pink-100 py-10">
                <h2 className="text-center text-3xl font-bold">Single Product Page</h2>

                <div className="text-center text-gray-700 mt-2 flex justify-center gap-2">
                    <Link to="/" className="hover:underline hover:text-pink-600 font-semibold">
                        Home
                    </Link>

                    <span>&gt;</span>

                    <Link to="/shop" className="hover:underline hover:text-pink-600 font-semibold">
                        Shop
                    </Link>

                    <span>&gt;</span>

                    <span className="font-semibold">{product.name}</span>
                </div>
            </div>


            {/* MAIN CONTENT */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 mt-16">

                {/* LEFT IMAGE */}
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-lg w-full object-cover shadow-md"
                    />
                </div>

                {/* RIGHT PRODUCT INFO */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

                    <p className="text-2xl font-semibold text-red-600">${product.price}</p>

                    <p className="mt-4 text-gray-700">{product.description}</p>

                    <div className="mt-5 space-y-2 text-gray-800">
                        <p>
                            <span className="font-semibold">Category:</span>{" "}
                            {product.category}
                        </p>

                        <p>
                            <span className="font-semibold">Color:</span>{" "}
                            {product.color}
                        </p>

                        <p>
                            <span className="font-semibold">Rating:</span>{" "}
                            <span className="text-yellow-500">
                                {"★".repeat(product.rating)}
                                {"☆".repeat(5 - product.rating)}
                            </span>
                        </p>
                    </div>

                    <button
                        className="mt-6 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
            {/* display review */}
            <div>
                reviews
            </div>
        </div>
    );
};

export default ProductDetails;

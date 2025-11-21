import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import products from '../../../public/products.json'
import ProductCard from '../Shop/ProductCard/ProductCard';

const CategoryPage = () => {
    const { categoryName } = useParams()
    const [filteredProduct, setFilteredProduct] = useState([])

    useEffect(() => {
        const filtered = products.filter((product) => product.category.toLowerCase() === categoryName.toLowerCase())
        setFilteredProduct(filtered)
    }, [categoryName])

   useEffect(()=>{
    window.scroll(0,0)
   },[])
    
    return (
        <div>
            {/* heading section */}
            <div className="bg-pink-100 py-16 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">

                    {/* Dynamic Title */}
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                        {categoryName}
                    </h2>

                    {/* Optional Description */}
                    <p className="text-lg text-gray-600 max-w-xl mx-auto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dign illum delectus porro ipsam perferendis. </p>

                </div>
            </div>
            {/* product card */}

            <div className='mt-10 p-4 md:pl-10'>
                <ProductCard products={filteredProduct}/>
            </div>
        </div>
    );
};

export default CategoryPage;
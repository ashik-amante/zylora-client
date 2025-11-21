import React, { useState } from 'react';
import products from '../../../public/products.json'
import ProductCard from '../Shop/ProductCard/ProductCard';

const Search = () => {
    const [search,setSearch] = useState('')
    const [filteredProduct,setFilteredProduct] = useState(products)
    console.log(filteredProduct);
    const handleSearch = ()=>{
        const query = search.toLowerCase()

        const filtered = products.filter((product)=> product.name.includes(query) || product.description.includes(query))

        setFilteredProduct(filtered)
    }
    return (
        <div>
             {/* heading section */}
            <div className="bg-pink-100 py-16 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">

                    {/* Dynamic Title */}
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                        Search
                    </h2>

                    {/* Optional Description */}
                    <p className="text-lg text-gray-600 max-w-xl mx-auto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dign illum delectus porro ipsam perferendis. </p>

                </div>
            </div>
            {/* search field */}
            <div className='flex gap-2 items-center p-6 md:p-8'>
                <div className='flex-1'>
                    <input 
                    type="text"
                    className='border border-gray-200 rounded w-full py-1 px-2'
                    placeholder='search for products...'
                    onChange={(e)=>setSearch(e.target.value) }
                    />
                </div>
                <button 
                onClick={handleSearch}
                className='bg-red-600 text-white  px-6 py-1.5 rounded'>Search</button>
            </div>
            {/* all products */}
            <div className='mt-4 p-2'>
                <ProductCard products={filteredProduct}></ProductCard>
            </div>
        </div>
    );
};

export default Search;
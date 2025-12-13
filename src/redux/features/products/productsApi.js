import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/products',
        credentials: 'include'
    }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        fetchAllProducts: builder.query({
            query: ({ page=1, limit=10, category, color, minPrice, maxPrice }) => {
                const queryParams = new URLSearchParams({
                    category: category || '',
                    color: color || '', 
                    minPrice: minPrice || '',
                    maxPrice: maxPrice || '',
                    page: page.toString() || '',
                    limit: limit.toString() || ''
                }).toString()
                return `/products?${queryParams}`
            },
            providesTags: ['Products']
        }),
      
    })
})
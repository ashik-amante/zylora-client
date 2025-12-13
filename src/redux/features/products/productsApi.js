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
            query: ({ page = 1, limit = 10, category, color, minPrice, maxPrice }) => {
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

        fetchProductBy: builder.query({
            query: (id) => `/product/${id}`,
            providesTags: (rsult, error, id) => [{ type: 'Products', id }]
        }),
        AddProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/create-product',
                method: 'POST',
                body: newProduct,
                credentials: 'include'
            }),
            invalidatesTags: ['Products']
        }),
        fetchRelatedProduct: builder.query({
            query: (id) => `/related/${id}`,
            providesTags: ['Products']
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/update-product/${id}`,
                method: 'PATCH',
                body: rest,
                credentials: 'include'
            }),
            invalidatesTags: ['Products']
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Products', id }]
        })

    })
})

export const {
    useFetchAllProductsQuery,
    useFetchProductByQuery,
    useAddProductMutation,
    useFetchRelatedProductQuery,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productsApi

export default productsApi  
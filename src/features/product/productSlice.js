import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/product'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/getAllProducts'
        })
    })
})

export const { useGetAllProductsQuery } = productApi
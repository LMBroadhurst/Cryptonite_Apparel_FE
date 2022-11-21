import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// This method works, but does not follow SOLID as the methods for products and members are clashing

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/product/getAllProducts'
        }),
        getAllMembers: builder.query({
            query: () => '/member/getAllMembers'
        })
    })
})

export const { useGetAllProductsQuery, useGetAllMembersQuery } = api

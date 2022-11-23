import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// This method works, but does not follow SOLID as the methods for products and members are clashing

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080'}),
    tagTypes: ['Posts', 'Members'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/product/getAllProducts',
            providesTags: ['Products']
        }),
        createProduct: builder.mutation({
            query: (product) => ({
                url: '/product/createProduct',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Products']
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `/product/deleteProduct/${productId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Products']
        }),
        getAllMembers: builder.query({
            query: () => '/member/getAllMembers',
            invalidatesTags: ['Members']
        }),
        getMemberById: builder.query({
            query: (memberId) => `/member/getMemberById/${memberId}`,
            invalidatesTags: ['Members']
        }),
        createMember: builder.mutation({
            query: (member) => ({
                url: '/member/createMember',
                method: 'POST',
                body: member
            }),
            invalidatesTags: ['Members']
        }),
        deleteMember: builder.mutation({
            query: (memberId) => ({
                url: `/member/deleteMember/${memberId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Members']
        }),
        editMember: builder.mutation({
            query: (member) => ({
                url: `/member/editMember/3`,
                method: 'PUT',
                body: member
            }),
            invalidatesTags: ['Members']
        })
    })
})

export const { 
    useGetAllProductsQuery,
    useGetAllMembersQuery, 
    useCreateProductMutation, 
    useDeleteProductMutation, 
    useCreateMemberMutation, 
    useDeleteMemberMutation,
    useGetMemberByIdQuery,
    useEditMemberMutation
} = api

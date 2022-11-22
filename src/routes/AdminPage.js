import React from 'react'
import Header from '../components/Header'
import { useGetAllMembersQuery, useGetAllProductsQuery } from '../features/api/apiSlice'
import AdminProductCard from '../features/product/AdminProductCard'
import AddProduct from '../features/product/AddProduct'
import AdminUserCard from '../features/users/AdminUserCard'


const AdminPage = () => {

  const { data: members, isLoading: memberLoading } = useGetAllMembersQuery()
  const { data: products, isLoading: productLoading } = useGetAllProductsQuery()

  const productsList = productLoading ? 'Loading...' : products.map((product, i) => <AdminProductCard key={i} product={product} />)
  const membersList = memberLoading ? 'Loading...' : members.map((member, i) => <AdminUserCard key={i} member={member} />)
  

  return (
    <section>
        <Header />
        <div className='flex flex-col items-center gap-5'>
        
            <h2>Administrator page</h2>

            <div className='flex flex-row gap-10'>
                <div className='flex flex-col gap-5'>
                    <h3>Users</h3>

                    <div className='flex flex-col gap-2'>
                        {membersList}
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <h3>Products</h3>

                    <div className='flex flex-col gap-2'>
                        {productsList}
                    </div>
                </div>

                <div className='flex flex-col gap-5 w-72'>
                    <h3>Create Product</h3>
                    <AddProduct />
                </div>
            </div>

        </div>
    </section>
  )
}

export default AdminPage
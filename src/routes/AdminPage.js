import React, { useState } from 'react'
import { useGetAllMembersQuery, useGetAllProductsQuery } from '../features/api/apiSlice'

const defaultNewProduct = {
    name: '',
    price: 0,
    quantity: 0,
    size: '',
    ownedByMembers: []
}

const AdminPage = () => {

    const [newProduct, setNewProduct] = useState(defaultNewProduct)

  const { data: members, isLoading: memberLoading } = useGetAllMembersQuery()
  const { data: products, isLoading: productLoading } = useGetAllProductsQuery()

  const productsList = productLoading ? 'Loading...' : products.map((product, i) => <span key={i}>{product.name}</span>)
  const membersList = memberLoading ? 'Loading...' : members.map((member, i) => <span key={i}>{member.email}</span>)
  

  return (
    <section>
        <div className='flex flex-col items-center gap-20'>
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

                <form className='flex flex-col gap-5'>
                    <h3>Create Product</h3>

                    <div className='flex flex-col gap-1'>
                        <input className='border-2 border-blue-300' type="text" value={defaultNewProduct.name} name={'name'} placeholder={'Product name'} />
                        <input className='border-2 border-blue-300' type="text" value={defaultNewProduct.size} name={'size'} placeholder={'Size'} />
                        <input className='border-2 border-blue-300' type="text" value={defaultNewProduct.name} name={'name'} placeholder={'Product name'} />
                        <input className='border-2 border-blue-300' type="text" value={defaultNewProduct.name} name={'name'} placeholder={'Product name'} />
                        
                    </div>
                </form>
            </div>

        </div>
    </section>
  )
}

export default AdminPage
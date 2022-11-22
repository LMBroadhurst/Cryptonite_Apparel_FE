import React from 'react'
import Header from '../components/Header'
import { useGetAllMembersQuery } from '../features/api/apiSlice'
import ProductCard from '../features/product/ProductCard'
import EditUserForm from '../features/users/EditUserForm'

const AccountPage = () => {

    const  { data: members } = useGetAllMembersQuery()
    const member = members?.find((member, i) => member.id === 3)
    // const { firstName, lastName, email, productsOwned } = member
    
    const allProductsOwned = () => {
        const { productsOwned } = member

        if (member) {
            return (
                productsOwned.map((product, index) => <ProductCard key={index} product={product} />)
            )
        }
    }

  return (
    <section>
        <Header />
        <div className='w-3/4 mx-auto'>
            <h2 className='text-center text-2xl m-4'>Your account</h2>

            <div className='flex flex-row gap-5'>
                <div className='w-1/2'>
                    <span>{member ? member.firstName : 'loading...'}</span>

                    <EditUserForm />
                </div>

                <div className='w-1/2'>
                    <h3>Owned Products</h3>

                    {allProductsOwned()}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AccountPage
import React from 'react'
import { useDeleteMemberMutation } from '../api/apiSlice'

const AdminUserCard = ({ member }) => {
    const {id, email, firstName, lastName, subscribedToInsights, productsOwned} = member

    const ownedProducts = productsOwned.map((product, index) => <li>{product.name}</li>)

    const [deleteMember] = useDeleteMemberMutation()

  return (
    <section className='bg-purple-300 p-4 rounded-md w-[400px] flex flex-col gap-2'>
        <div className='border-b-2 pb-2'>
            <div></div>

            <div className='flex flex-col'>
                <h3>Name: {`${firstName} ${lastName}`}</h3>

                <span>Email: {email}</span>
                <span>Subscribed to insights: {subscribedToInsights ? 'Yes' : 'No'}</span>
                <div>
                    <span>Products owned:</span>
                    <ul className='list-disc list-inside'>
                        {ownedProducts}
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <button className='w-32 bg-red-600 text-white rounded-md p-1' onClick={() => deleteMember(id)}>Delete Member</button>    
        </div>
    </section>
  )
}

export default AdminUserCard
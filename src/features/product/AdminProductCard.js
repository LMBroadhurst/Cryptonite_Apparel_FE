import React from 'react'

const AdminProductCard = ({product}) => {
    const { name, price, size, description, quantity } = product

  return (
    <section>
        <div className='bg-blue-200 flex flex-row gap-4 rounded-md'>
            <div className='w-40 h-40 bg-black rounded-l-md'></div>

            <div className='flex flex-col justify-center gap-1 p-2'>
                <h3>Name: {name}</h3>
                <span>Price: £{price}</span>
                <span>Quantity: {quantity}</span>
                <span>Size: {size}</span>
                <span>Description: {description.slice(0, 50)}</span>
            </div>
        </div>
    </section>
  )
}

export default AdminProductCard
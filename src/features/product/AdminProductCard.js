import React from 'react'
import { useDeleteProductMutation } from '../api/apiSlice'

const AdminProductCard = ({product}) => {
    const { id: productId, name, price, size, description, quantity } = product
    console.log(productId)

    const [deleteProduct] = useDeleteProductMutation()
    const handleDeleteProduct = async (event) => {
        event.preventDefault()
        await deleteProduct(productId)
    }

  return (
    <section>
        <div className='bg-blue-200 flex flex-row gap-4 rounded-md w-[600px]'>
            <div className='w-40 h-60 bg-black rounded-l-md'></div>

            <div className='flex flex-col justify-center gap-1 p-2'>
                <h3>Name: {name}</h3>
                <span>Price: £{price}</span>
                <span>Quantity: {quantity}</span>
                <span>Size: {size}</span>
                <span>Description: {description.slice(0, 50)}</span>

                <div className='flex gap-4'>
                    <button className='w-40 p-1 bg-yellow-300'>Edit Product</button>
                    <button className='w-40 p-1 bg-red-300' onClick={handleDeleteProduct}>Delete Product</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AdminProductCard
import React, { useState } from 'react'
import { useCreateProductMutation } from '../features/api/apiSlice'

const defaultNewProduct = {
    name: '',
    price: '',
    size: '',
    description: '',
    quantity: '',
}

const AddProduct = () => {

    const [newProduct, setNewProduct] = useState(defaultNewProduct)
    const [addproduct] = useCreateProductMutation()

    const handleNewProductFormChange = (event) => {
        event.preventDefault()

        const property = event.target.name
        const value = event.target.value
        
        setNewProduct({...newProduct, [property]: value})
        console.log(newProduct)
    }

    const handleCreateProduct = (event) => {
        event.preventDefault()
        const { name, price, size, description, quantity } = newProduct
        let quantityNum = Number(quantity)
        let priceNum = Number(price)


        addproduct({ id: 0, name, priceNum, size, description, quantityNum })
        setNewProduct(defaultNewProduct)
        alert('Added new product!')
    }

    const resetForm = () => {
        setNewProduct(defaultNewProduct)
        console.log(newProduct)
    }

  return (
    <form className='flex flex-col gap-1' onSubmit={handleCreateProduct}>
        <input required className='border-2 border-blue-300' type="text" value={newProduct.name} name={'name'} placeholder={'Product name'} onChange={handleNewProductFormChange} />
        <input required className='border-2 border-blue-300' type="number" value={newProduct.price} name={'price'} placeholder={'Price'} onChange={handleNewProductFormChange} />
        <input required className='border-2 border-blue-300' type="text" value={newProduct.size} name={'size'} placeholder={'Size'} onChange={handleNewProductFormChange} />
        <input required className='border-2 border-blue-300' type="text" value={newProduct.description} name={'description'} placeholder={'Description'} onChange={handleNewProductFormChange} />
        <input required className='border-2 border-blue-300' type="number" value={newProduct.quantity} name={'quantity'} placeholder={'Quantity'} onChange={handleNewProductFormChange} />

        <div className='flex flex-row gap-1'>
            <button type='submit' className='w-1/2 bg-green-400 p-1'>Create Product</button>
            <button type='button' className='w-1/2 bg-red-400 p-1' onClick={resetForm}>Reset</button>
        </div>
    </form>
  )
}

export default AddProduct
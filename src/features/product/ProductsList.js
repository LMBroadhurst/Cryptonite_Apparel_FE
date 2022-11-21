import React from 'react'
import { useGetAllProductsQuery } from '../api/apiSlice'
import ProductCard from './ProductCard'

const ProductsList = () => {

  const { data } = useGetAllProductsQuery()
    
  return (
    <section>
        <h1>Products List</h1>

        <div className='flex flex-row gap-5'>
        {
          !data ? 'Loading...': data.map((product, i) => {
          return <ProductCard key={i}  product={product}/>})
        }
        </div>

    </section>
  )
}

export default ProductsList
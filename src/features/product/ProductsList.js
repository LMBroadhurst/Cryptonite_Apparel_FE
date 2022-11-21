import React from 'react'
import { useGetAllProductsQuery } from './productSlice'

const ProductsList = () => {

    const { data } = useGetAllProductsQuery()

  return (
    <section>
        <h1>Products List</h1>

        <div>
            {
                !data ? 'Loading...'
                : data.map((product, i) => {
                return <span>{product.name}</span>})
            }
        </div>
    </section>
  )
}

export default ProductsList
import React from 'react'

const ProductCard = ({ product }) => {
    const {name, price, size, description} = product;
  return (
    <section>
        <div className='border-2 border-black rounded-md'>
            <div className='w-72 h-72 bg-slate-600'>
                <img src="" alt="" />
            </div>

            <div className='p-2'>
                <h3>{name}</h3>

                <div className='flex flex-row justify-between'>
                    <span>£{price}</span>
                    <span>{size}</span>
                </div>

                <p>{description}</p>
            </div>
        </div>
    </section>
  )
}

export default ProductCard
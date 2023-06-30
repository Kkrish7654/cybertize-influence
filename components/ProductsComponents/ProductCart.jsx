import React, { useState } from 'react'

const ProductCart = () => {

  const cartItems = [
    {
      id:1,
      name:'Product name',
      description:'Product description',
      price:56
    },
    {
      id:2,
      name:'Product name',
      description:'Product description',
      price:56
    },
    {
      id:3,
      name:'Product name',
      description:'Product description',
      price:56
    },
  ]

  const initialValue = 0;
  const total = cartItems.reduce((accumulator, current) => accumulator + current.price, initialValue);

  
  return (
    <div className='flex flex-col gap-2'>
      <div className='p-3'>
         <h3>Your cart</h3>
      </div>
      <div className='p-3 border-[1px] flex flex-col gap-2 m-2 text-sm'>
      {
        cartItems.map((item) => (
          
         <div key={item.id} className='flex justify-between border-b-[1px] p-2'>
            {/**name and description */}
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>

            {/**price */}
            <div>
              ${item.price}
            </div>
          </div>
          
        ))
      }
      <div className='p-2 bg-slate-200'>
        <div className='flex justify-between '>
        <h3>Promo Code</h3>
        <p>-$5</p>
        </div>
        <div>
          <p className='uppercase text-xs text-green-600'>Examplecode</p>
        </div>
      </div>

      <div className='py-2 flex justify-between'>
        <h3>Total {"(USD)"}</h3>
        <p>${total}</p>
      </div>
    </div>
    </div>
  )
}

export default ProductCart
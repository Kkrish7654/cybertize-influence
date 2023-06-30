import React from 'react'
import { useState } from 'react';
import ProductCard from '../Cards/ProdcutCard';

const RelatedProducts = () => {

  const [like, setLike] = useState({});

  const handleLike = (index) => () => {
    setLike(state => ({
      ...state,
      [index] : !state[index]
    }));
  }
  const products = [
    {
      id: 1,
      image: "https://preview.easetemplate.com/influence/html/influence/assets/images/eco-product-img-1.png",
      title: "T-Shirt Product Title",
      price: 49.00,
      star: 4,
    },
    {
      id: 2,
      image: "https://preview.easetemplate.com/influence/html/influence/assets/images/eco-product-img-2.png",
      title: "T-Shirt Product Title",
      price: 49.00,
      star: 4,
    },
    {
      id: 3,
      image: "https://preview.easetemplate.com/influence/html/influence/assets/images/eco-product-img-3.png",
      title: "T-Shirt Product Title",
      price: 49.00,
      star: 4,
    }
  ]

  return (
    <div className="w-full flex flex-grow justify-center items-center mt-8">
      <div className="w-[70%] h-auto divide-x-2 gap-4 ">
        <h2 className='my-2 font-semibold text-xl text-[#58585b] mb-4'>Related Products</h2>
      <div className="grid grid-cols-3 gap-4 col-start-1 col-end-5">
      {products.map((product, index) => {
        return (
          <div key={product.id}>
           <ProductCard title={product.title} price={product.price} image={product.image}/>
          </div>
        );
      })}
      </div>
    </div>
    </div>
  )
}

export default RelatedProducts
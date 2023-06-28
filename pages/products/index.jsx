import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import FilterBar from "../../components/ProductsComponents/FilterBar";
import Pagination from "../../components/ProductsComponents/Pagination";



const ProductPage = () => {

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
      image: "https://preview.easetemplate.com/influence/html/influence/assets/images/eco-product-img-1.png",
      title: "T-Shirt Product Title",
      price: 49.00,
      star: 4,
    },
    {
      id: 3,
      image: "https://preview.easetemplate.com/influence/html/influence/assets/images/eco-product-img-1.png",
      title: "T-Shirt Product Title",
      price: 49.00,
      star: 4,
    },
    {
      id: 4,
      image: "https://preview.easetemplate.com/influence/html/influence/assets/images/eco-product-img-1.png",
      title: "T-Shirt Product Title",
      price: 49.00,
      star: 4,
    },
  ];

  return (
    <Layout>
      <div>
        <h1 className="text-3xl text-[#454650] font-semibold tracking-wider pb-3">
          E-commerce Dashboard
        </h1>
        <hr />
        <p className="pt-3 text-[#787982] tracking-wider">
          <span>Dashboard</span> E-Commerce Dashboard Template
        </p>
      </div>

    <div className="grid grid-cols-6 gap-4 mt-12">
      <div className="grid grid-cols-3 gap-4 col-start-1 col-end-5">
      {products.map((product, index) => {
        return (
          <div key={product.id} className="relative max-w-full w-full min-h-[300px] h-auto bg-white rounded-md shadow-md p-8">
            <div className="flex flex-col gap-4 mb-2">
              <div>
                <img className="w-auto" src={product.image} alt={product.title} />
              </div>
              <hr />
              <div className="flex flex-col gap-1 mt-2 justify-start items-start">
                <h2 className="text-md font-semibold text-[#58585b]">{product.title}</h2>
                <p>{product.star}</p>
                <p className="text-blue-700">$ {product.price}</p>

                <div className="flex flex-wrap gap-2 mt-1">
                  <button className="p-3 px-4 bg-[#5969FF] text-white rounded-md active:scale-90 duration-100">Add To Cart</button>
                  <button className="p-3 px-4 border-[#5969FF] border-[1px] rounded-md text-[#5969FF] active:scale-90 duration-100">Details</button>
                  <button className="p-3 border-[1px] rounded-md border-black active:scale-90 duration-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"></path></svg></button>
                </div>
              </div>
            </div>
            <div onClick={handleLike(index)} className={`absolute top-2 cursor-pointer right-2 active:scale-90 duration-100  p-2 border-2  rounded-full ${like[index] ? 'bg-rose-600 border-rose-600' : 'bg-gray-200 border-gray-400'}`}>
            <svg className={`${like[index] ? 'text-white' : 'text-gray-700'}`} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
            </div>
          </div>
        );
      })}
      </div>
      <div className="col-start-5 col-end-7 h-auto">
        <FilterBar/>
      </div>
    </div>
    <Pagination/>
    </Layout>
  );
};

export default  ProductPage;
  ;

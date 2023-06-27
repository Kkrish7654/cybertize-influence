import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import FilterBar from "../../components/ProductsComponents/FilterBar";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      image: "https://preview.easetemplate.com/influence/html/influence/assets/images/eco-product-img-1.png",
      title: "T-Shirt Product Title",
      price: 49.00,
      star: 4,
    },
  ];

  return (
    <Layout>
    <div className="flex mr-4">
      <div className="flex flex-wrap ">
      {products.map((product) => {
        return (
          <div key={product.id} className="max-w-[220px] min-h-[300px] h-auto bg-white rounded-md shadow-md p-8">
            <div className="flex flex-col gap-4 mb-2">
              <div>
                <img className="w-auto" src={product.image} alt={product.title} />
              </div>
              <hr />
              <div className="flex flex-col gap-1 mt-2 justify-start items-start">
                <h2 className="text-md font-semibold text-[#58585b]">{product.title}</h2>
                <p>{product.star}</p>
                <p className="text-blue-700">$ {product.price}</p>

                <button className="p-3 px-5 bg-[#5969FF] text-white rounded-md">Add To Cart</button>
                <div className="flex gap-2 mt-1">
                  <button className="p-3 px-5 border-[#5969FF] border-[1px] rounded-md text-[#5969FF] ">Details</button>
                  <button className="p-4 border-[1px] rounded-md border-black"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"></path></svg></button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
      <div>
        <FilterBar/>
      </div>
    </div>
    </Layout>
  );
};

export default  ProductPage;
  ;

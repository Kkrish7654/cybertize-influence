import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import FilterBar from "../../components/ProductsComponents/FilterBar";
import Pagination from "../../components/ProductsComponents/Pagination";
import RelatedProducts from "../../components/ProductsComponents/RelatedProducts";
import ProductCard from "../../components/Cards/ProdcutCard";



const ProductPage = () => {

  
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
      {products.map((product) => {
        return (
          <div key={product.id}>
           <ProductCard title={product.title} price={product.price} image={product.image}/>
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

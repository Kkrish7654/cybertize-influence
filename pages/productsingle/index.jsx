import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import ProductSizeSelector from '../../components/ProductsComponents/ProductSizeSelector'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";
import DescriptionBox from '../../components/ProductsComponents/DescriptionBox';
import RelatedProducts from '../../components/ProductsComponents/RelatedProducts';

const Index = () => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (index) => {
    setSelected(index);
  }


  return (
    <Layout>
      <div>
        <h1 className="text-3xl text-[#454650] font-semibold tracking-wider pb-3">
          E-commerce Product Single
        </h1>
        <hr />
        <p className="pt-3 text-[#787982] tracking-wider">
          <span>E Commerce</span> E-Commerce Product Single
        </p>
      </div>
     <div className='w-full flex flex-grow justify-center items-center mt-8'>
        <div className='w-[70%] h-auto bg-white flex divide-x-2 shadow-md gap-4'>
            <div className='p-4 flex justify-center items-center w-[50%]'>
            <Swiper
             spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
             
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
                <SwiperSlide>
                  <img className='w-72' src="https://preview.easetemplate.com/influence/html/influence/assets/images/eco-slider-img-2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-72' src="https://preview.easetemplate.com/influence/html/influence/assets/images/eco-product-img-1.png" alt="" />              
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-72" src="https://preview.easetemplate.com/influence/html/influence/assets/images/eco-product-img-3.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className='p-4 flex flex-col gap-4 w-full'>
              <h1 className='text-2xl font-semibold text-[#454650]'>T-Shirt Product Title</h1>
              <div className='flex gap-4 items-center justify-between'>
                <div>
                $49.00
                </div>
                <div>
                 
                      <div class="flex items-center">
                          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      </div>

                </div>
              </div>
              <hr />
              <div>
                <h3 className='font-semibold text-[#454650]'>Select Colors</h3>
                <div className='flex gap-2 items-center p-2'>
                <button onClick={() => handleSelected(1)} className={`relative w-10 h-10 rounded-full bg-red-300`}>
                  <i className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 right-0 text-white text-xl  ${selected === 1 ? 'block' : 'hidden'} `}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg></i>  
                </button>             
                <button onClick={() => handleSelected(2)} className={`relative w-10 h-10 rounded-full bg-rose-600`}>
                   <i className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 right-0 text-white text-xl  ${selected === 2 ? 'block' : 'hidden'} `}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg></i>  
                </button>             
                <button onClick={() => handleSelected(3)} className={`relative w-10 h-10 rounded-full  bg-yellow-600`}>
                    <i className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 right-0 text-white text-xl  ${selected === 3 ? 'block' : 'hidden'} `}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg></i>  
                </button>             
                </div>
              </div>
              <div>
                <h3>Size</h3>
                <ProductSizeSelector/>
              </div>
              <div>
                <h3 className='font-semibold text-[#454650]'>Description</h3>
                <p className='text-[#6d6d70]'>
                Praesent et cursus quam. Etiam vulputate est et metus pellentesque iaculis. Suspendisse nec urna augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                </p>
              </div>
              <button className='py-3 px-6 bg-blue-600 text-white rounded-md active:scale-90 duration-150'>
                Add To Cart
              </button>
        </div>

       
     </div>
     </div>
     <DescriptionBox/>
    <RelatedProducts/>
    </Layout>
  )
}

export default Index;



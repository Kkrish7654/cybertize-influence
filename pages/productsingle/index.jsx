import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import ProductSizeSelector from '../../components/ProductsComponents/ProductSizeSelector'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper";

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
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
                <SwiperSlide>
                  <img src="https://preview.easetemplate.com/influence/html/influence/assets/images/eco-slider-img-2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://preview.easetemplate.com/influence/html/influence/assets/images/eco-slider-img-2.png" alt="" />              
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://preview.easetemplate.com/influence/html/influence/assets/images/eco-slider-img-2.png" alt="" />
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
                  star
                </div>
              </div>
              <hr />
              <div>
                <h3 className='font-semibold text-[#454650]'>Select Colors</h3>
                <div className='flex gap-2 items-center p-2'>
                <button onClick={() => handleSelected(1)} className={`w-10 h-10 rounded-full  ${selected === 1 ? 'bg-black' : 'bg-rose-600'}`}></button>             
                <button onClick={() => handleSelected(2)} className={`w-10 h-10 rounded-full  ${selected === 2 ? 'bg-black' : 'bg-red-400'}`}></button>             
                  <button onClick={() => handleSelected(3)} className={`w-10 h-10 rounded-full  ${selected === 3 ? 'bg-black' : 'bg-yellow-600'}`}></button>             
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
    </Layout>
  )
}

export default Index;



import React from 'react'
import Layout from '../../components/Layout/Layout'

const index = () => {
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
        <div className='min-w-[65%] h-auto bg-white flex divide-x-2 shadow-md gap-4'>
            <div className='p-4 flex justify-center items-center w-full'>
              <img src="https://preview.easetemplate.com/influence/html/influence/assets/images/eco-slider-img-2.png" alt="" />
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
              </div>
        </div>
     </div>
     </div>
    </Layout>
  )
}

export default index
import React from 'react'
import Layout from '../../components/Layout/Layout'

const Index = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl text-[#454650] font-semibold tracking-wider pb-3">
          E-commerce Product Checkout
        </h1>
        <hr />
        <p className="pt-3 text-[#787982] tracking-wider">
          <span>E Commerce</span> E-Commerce Product Checkout
        </p>
      </div>

      <div className='w-full flex flex-grow justify-center items-center mt-8'>
        <div className='w-[70%] h-auto bg-white flex divide-x-2 shadow-md gap-4'>
          <div className='w-[70%]'>
            <div className='px-4 py-3'>
              <h3>Billing address</h3>
            </div>
            <hr />
            <div>
            <form className="w-full max-w-lg">
  <div className="flex flex-wrap mt-6 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-username" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div clas="flex flex-wrap mt-6 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-username">
        Username
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-username" type="text" placeholder="Username"/>
    </div>
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
        Email {"(Optional)"}
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="you@example.com"/>
    </div>
    <div clas="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-address-1">
        Address
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-address-1" type="text" placeholder="123 Main st"/>
    </div>
    <div clas="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-address-2">
        Address 2 {"(Optional)"}
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-address-2" type="text" placeholder="Apartment or Suit"/>
    </div>

    <div className='flex flex-wrap p-3'>
    <label for="countries" className="block mb-2 text-sm font-medium">Country</label>
      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>

      <label for=""></label>
    </div>
    </div>
  </form>
            </div>
          </div>
          <div>

          </div>
        </div>
        </div>

    </Layout>
  )
}

export default Index
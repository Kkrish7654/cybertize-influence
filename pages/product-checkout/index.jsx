import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import ProductCart from '../../components/ProductsComponents/ProductCart'
import { Formik } from 'formik'
const Index = () => {

  const existedUser = "krish";

  const initialValues = {
    firstName:'',
    lastName:'',
    userName:'',
    address:'',
    address2:''
  }
  const validate = (values) => {
    let errors = {}
    // validation for first name
    if(!values.firstName){
      errors.firstName = "requried"
    }else if (values.firstName.trim().length <= 2){
      errors.firstName = "too short"
    } else if (/\s/.test(values.firstName.charAt(0))) {
      errors.firstName = 'Cannot start with whitespace';
    }

    // validation for last name
    if(!values.lastName){
      errors.lastName = "required"
    }else if(values.lastName.length <= 2){
      errors.lastName = "too short"
    } else if (/\s/.test(values.firstName.charAt(0))) {
      errors.firstName = 'Cannot start with whitespace';
    }


    if(!values.userName){
      errors.userName = "required"
    }else if(values.userName === existedUser){
      errors.userName = "user already exist"
    }else if(values.userName < 4){
      errors.userName = "too short not valid / must be 4 letters"
    } else if (/\s/.test(values.firstName.charAt(0))) {
      errors.firstName = 'Cannot start with whitespace';
    }

    if(!values.address){
      errors.address = "requried"
    }else if (values.address.trim().length <= 2){
      errors.address = "too short"
    } else if (/\s/.test(values.address.charAt(0))) {
      errors.address = 'Cannot start with whitespace';
    }

    return errors;
  }

const submitForm = (values) => {
  console.log(values);
};

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

                  <Formik
                     initialValues={initialValues}
                     validate={validate}
                     onSubmit={submitForm}
                  >
                    {
                      ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap mt-6 mb-6 ">
                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-[#454650] text-xs font-bold mb-2" for="firstName">
                              First Name
                            </label>
                            {errors.firstName && touched.firstName && (
                                <div className="text-red-500 text-xs">{errors.firstName}</div>
                            )}
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstName}
                              className="appearance-none block w-full bg-gray-200 text-[#454650] border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="firstName" type="text" placeholder="Jane"
                            />
                             
              
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-[#454650] text-xs font-bold mb-2" for="lastName">
                          Last Name
                        </label>
                        {errors.lastName && touched.lastName && (
                          <div className="text-red-500 text-xs">{errors.lastName}</div>

                        )}
                        <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        className="appearance-none block w-full bg-gray-200 text-[#454650] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lastName" type="text" placeholder="Doe"/>
                     
                        
                      </div>
                    </div>
                    <div clas="flex flex-wrap mt-6 mb-6">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-[#454650] text-xs font-bold mb-2" for="userName">
                          Username
                        </label>
                        {errors.userName && touched.userName && (
                        <div className="text-red-500 text-xs">{errors.userName}</div>
                      )}

                        <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.userName}
                        className="appearance-none block w-full bg-gray-200 text-[#454650] border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="userName" type="text" placeholder="Username"/>
                      </div>
                    
                    {/**Email form validation */}
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-[#454650] text-xs font-bold mb-2" for="grid-email">
                          Email {"(Optional)"}
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-[#454650] border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="you@example.com"/>
                      </div>
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-[#454650] text-xs font-bold mb-2" for="address">
                          Address
                        </label>
                        {errors.address && touched.address && (
                          <div className='text-red-500 text-xs'>{errors.address}</div>
                        )}
                        <input 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        className="appearance-none block w-full bg-gray-200 text-[#454650] border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="address" type="text" placeholder="123 Main st"/>
                      </div>
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-[#454650] text-xs font-bold mb-2" for="grid-address-2">
                          Address 2 {"(Optional)"}
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-[#454650] border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-address-2" type="text" placeholder="Apartment or Suit"/>
                      </div>
                  
                      <div className='flex gap-3 items-center flex-wrap p-3'>
                        {/** For Country */}
                        <div>
                        <label for="countries" >Country</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                          <option selected>Choose a country</option>
                          <option value="US">United States</option>
                          <option value="CA">India</option>
                        </select>
                        </div>
                  
                        {/**For State */}
                        <div>
                        <label for="state" className="block mb-2 text-sm font-medium">State</label>
                        <select id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                          <option selected>Choose a country</option>
                          <option value="Jh">Jharkhand</option>
                          <option value="SM">California</option>
                        </select>
                        </div>
                  
                        {/** ZIP code */}
                        <div>
                        <label for="zip" className="block mb-2 text-sm font-medium">Zip</label>
                        <input type="text" name="zip" id="zip" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'/>
                        </div>
                        
                  
                      </div>
                  
                      <hr />
                  
                  
                      <div className='w-full'>
                  
                            <ul class="w-full text-sm font-medium ">
                              <li class="w-full  rounded-t-lg">
                                <div class="flex items-center pl-3">
                                  <input
                                    id="vue-checkbox"
                                    type="checkbox"
                                    value=""
                                    class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                                  />
                                  <label
                                    for="vue-checkbox"
                                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                                  >
                                    <p className='text-sm'>Shipping address is the same as my billing address</p>
                                  </label>
                                </div>
                              </li>
                              <li class="w-full  rounded-t-lg ">
                                <div class="flex items-center pl-3">
                                  <input
                                    id="react-checkbox"
                                    type="checkbox"
                                    value=""
                                    class="w-6 h-6 text-blue-600 bg-gray-100 rounded "
                                  />
                                  <label
                                    for="react-checkbox"
                                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                                  >
                                    <p className='text-sm'>Save this information for next time</p>
                                  </label>
                                </div>
                                </li>
                              {/** copy <li> section and paste here to add more checkbox */}
                  
                            </ul>
                          </div>
                  
                        {/** radio */}
                          <hr />

                          <h4 className='px-4 py-2 text-sm'>Payment</h4>

                        <div className="flex items-center m-4">
                      <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "/>
                      <label for="default-radio-1" className="ml-2 text-sm font-medium text-[#454650]">Credit Card</label>
                  </div>
                  <div class="flex items-center m-4">
                      <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "/>
                      <label for="default-radio-2" className="ml-2 text-sm font-medium text-[#454650]">Debit Card</label>
                  </div>
                  
                  <div class="flex items-center m-4">
                      <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "/>
                      <label for="default-radio-2" className="ml-2 text-sm font-medium text-[#454650]">PayPal</label>
                  </div>
                      </div>
                  
                      {/**Card payment section */}
                  
                      <div className="flex flex-wrap mt-6 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-[#454650] text-xs font-bold mb-2" for="grid-card-name">
                          Name On Card
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-[#454650] border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-card-name" type="text" />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-[#454650] text-xs font-bold mb-2" for="grid-credit-number">
                          Credit Card Number
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-[#454650] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-credit-number" type="text" />
                      </div>
                    </div>
                    <div className='flex gap-3 items-center flex-wrap p-3'>
                        {/** For Country */}
                        <div>
                        <label for="expiration" >Expiration</label>
                        <input type="text" name="expiration" id="expiration" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'/>
                        </div>
                  
                        <div>
                        <label for="cvv" >CVV</label>
                        <input type="text" name="cvv" id="cvv" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'/>
                        </div>
                  
                  
                  </div>
                  <div className='p-3'>
                  <button className='bg-blue-600 p-2 text-white w-full rounded-md'>Continue To Checkout</button>
                  </div>
                  
                  
                    </form>
                      )
                    }
               
      </Formik>
                </div>
              </div>
    
    
              {/*** Product-cart side bar */}
              <div>
                  <ProductCart/>
              </div>
            </div>
            </div>
    </Layout>
  )
}

export default Index
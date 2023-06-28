import React from "react";

// product filters component
const FilterBar = () => {
  return (
    <div className="bg-white w-full p-4">
      <div className="mb-4">
        <p className="font-semibold">E-Commerce Filter</p>
      </div>
      <hr />
      <div className="flex flex-col gp-4 mt-4">

        {/**category section */}

        <div>
          <h3 className="font-semibold text-[#2E2F39]">Category</h3>
          <ul class="w-48 text-sm font-medium ">
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
                  Category#1
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
                  Category#2
                </label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center pl-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                <label
                  for="angular-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  Category#3
                </label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                <label
                  for="laravel-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  Category#4
                </label>
              </div>
            </li>

            {/** copy <li> section and paste here to add more checkbox */}

          </ul>
        </div>

        {/**Size Section start */}
        <div>
          <h3 className="font-semibold text-[#2E2F39]">Size</h3>
          <ul class="w-48 text-sm font-medium ">
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
                  Small
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
                  Medium
                </label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center pl-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                <label
                  for="angular-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  Large
                </label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                <label
                  for="laravel-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  Extra Large
                </label>
              </div>
            </li>

            {/** copy <li> section and paste here to add more checkbox */}

          </ul>
        </div>


        {/**Brand Seciton start */}

        <div>
          <h3 className="font-semibold text-[#2E2F39]">Brand</h3>
          <ul class="w-48 text-sm font-medium ">
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
                  BrandName 1
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
                 BrandName 1
                </label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center pl-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                <label
                  for="angular-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  BrandName 1
                </label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                <label
                  for="laravel-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                 BrandName 1
                </label>
              </div>
            </li>

            {/** copy <li> section and paste here to add more checkbox */}

          </ul>
        </div>

        {/**Color section Start */}

        <div>
          <h3 className="font-semibold text-[#2E2F39]">Color</h3>
          <ul class="w-48 text-sm font-medium ">
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
                  Blue
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
                  Red
                </label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center pl-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                <label
                  for="angular-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                 Yellow
                </label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                <label
                  for="laravel-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  Black
                </label>
              </div>
            </li>

            {/** copy <li> section and paste here to add more checkbox */}

          </ul>
        </div>

        {/**Price Section Start */}

        <div>
          <h3 className="font-semibold text-[#2E2F39]">Price</h3>
          <ul class="w-48 text-sm font-medium ">
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
                  12
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
                  1000
                </label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center pl-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                <label
                  for="angular-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                 3000
                </label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                <label
                  for="laravel-checkbox"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                >
                  4000
                </label>
              </div>
            </li>

            {/** copy <li> section and paste here to add more checkbox */}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

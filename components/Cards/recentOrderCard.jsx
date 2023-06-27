import React from 'react'

const RecentOrdersSection = () => {
  const recentOrders = [
    {
      id: 1,
      image:
        "https://preview.easetemplate.com/influence/html/influence/assets/images/product-pic.jpg",
      productName: "prodcut 1",
      productId: "20032",
      quantity: "20",
      price: 80,
      orderTime: "27-08-2018 01:22:12",
      customer: "pratik sharma",
      status: "Delivered",
    },
    {
      id: 2,
      image:
        "https://preview.easetemplate.com/influence/html/influence/assets/images/product-pic-2.jpg",
      productName: "prodcut 1",
      productId: "20032",
      quantity: "20",
      price: 80,
      orderTime: "27-08-2018 01:22:12",
      customer: "pratik sharma",
      status: "Delivered",
    },
    {
      id: 3,
      image:
        "https://preview.easetemplate.com/influence/html/influence/assets/images/product-pic-3.jpg",
      productName: "prodcut 1",
      productId: "20032",
      quantity: "20",
      price: 80,
      orderTime: "27-08-2018 01:22:12",
      customer: "pratik sharma",
      status: "Delivered",
    },
    {
      id: 4,
      image:
        "https://preview.easetemplate.com/influence/html/influence/assets/images/product-pic-2.jpg",
      productName: "prodcut 1",
      productId: "20032",
      quantity: "20",
      price: 80,
      orderTime: "27-08-2018 01:22:12",
      customer: "pratik sharma",
      status: "Delivered",
    },
    {
      id: 5,
      image:
        "https://preview.easetemplate.com/influence/html/influence/assets/images/product-pic-2.jpg",
      productName: "prodcut 1",
      productId: "20032",
      quantity: "20",
      price: 80,
      orderTime: "27-08-2018 01:22:12",
      customer: "pratik sharma",
      status: "Delivered",
    },
  ];
  
  return (
      <div className=" w-[70%] bg-white shadow-md px-2 overflow-x-scroll">
        <h2 className="py-4 px-4 font-medium">Recent Orders</h2>
        <table className="w-full table-auto">
          <thead className="bg-slate-200 flex text-white">
            <tr className="space-x-4 text-[#7d7e8b] font-thin">
              <th className="py-2 px-4 font-medium">#</th>
              <th className="py-2 px-4 font-medium">Image</th>
              <th className="py-2 px-4 font-medium">Product Name</th>
              <th className="py-2 px-4 font-medium">Product ID</th>
              <th className="py-2 px-4 font-medium">Quantity</th>
              <th className="py-2 px-4 font-medium">Price</th>
              <th className="py-2 px-4 font-medium">Order Time</th>
              <th className="py-2 px-4 font-medium">Customer</th>
              <th className="py-2 px-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-x-scroll overflow-y-scroll w-full max-h-[300px]">
            {recentOrders.map((item) => (
              <tr
                key={item.id}
                className="border-b-[1px] text-[#6b6d65] flex w-full mb-4"
              >
                <td className="p-4 w-1/4">{item.id}</td>
                <td className="p-4 w-1/2">
                  <img src={item.image} alt="image" />
                </td>

                {/* change product status here  */}

                <td className="p-4 w-1/4">{item.productName}</td>
                <td className="p-4 w-1/4">{item.productId}</td>
                <td className="p-4 w-1/4">{item.quantity}</td>
                <td className="p-4 w-1/4">${item.price}</td>
                <td className="p-4 w-1/4">{item.orderTime}</td>
                <td className="p-4 w-1/4">{item.customer}</td>
                <td className="p-4 w-1/4 flex flex-col gap-2 mt-3">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  <div>{item.status}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     </div>
   
  );
};

export default RecentOrdersSection;
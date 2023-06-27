import React from "react";

// all cards
const Card = ({ title, price, grow }) => {
  return (
    <div
      className={`rounded-lg py-5 px-4 bg-white flex flex-col gap-5 shadow-md w-auto overflow-hidden border-t-2 border-blue-700`}
    >
      <h3 className="font-semibold text-[#96969D]">{title}</h3>
      <div className="flex gap-4 items-center">
        <p className="text-3xl font-bold text-[#2E2F39]">{price}</p>
        <div className="flex items-center gap-2 text-[#35C757] text-xl">
          <i>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"></path>
            </svg>
          </i>
          <p
            className={`text-sm font-bold  ${
              grow < 3 ? "text-red-600" : "text-[#35C757]"
            }`}
          >
            {grow}
          </p>
        </div>
      </div>
    </div>
  );
};

// recent orders here
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

  /// top performing campaigns

  const topCampaigns = [
    {
      id: 1,
      campaigns: "campaign #1",
      visits: 12000,
      reveneu: 34000,
    },
    {
      id: 2,
      campaigns: "campaign #2",
      visits: 22000,
      reveneu: 43000,
    },
    {
      id: 3,
      campaigns: "campaign #3",
      visits: 1000,
      reveneu: 332000,
    },
  ];
  return (
    <div className="mt-8 flex gap-4 w-full">
      <div className="max-w-[70%] w-[70%] bg-white shadow-md px-2 ">
        <h2 className="py-4 px-4 font-medium">Recent Orders</h2>
        <table className="w-full table-auto">
          <thead class="bg-slate-200 flex text-white w-full">
            <tr className="space-x-4 text-[#7d7e8b] font-thin">
              <th className="py-2 px-2 font-medium">#</th>
              <th className="py-2 px-2 font-medium">Image</th>
              <th className="py-2 px-2 font-medium">Product Name</th>
              <th className="py-2 px-2 font-medium">Product ID</th>
              <th className="py-2 px-2 font-medium">Quantity</th>
              <th className="py-2 px-2 font-medium">Price</th>
              <th className="py-2 px-2 font-medium">Order Time</th>
              <th className="py-2 px-2 font-medium">Customer</th>
              <th className="py-2 px-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full max-h-[300px] scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-slate-200">
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

        {/** right container of recent Orders {performing campaigns} */}
      </div>
      <div className="bg-white shadow-md w-[30%] overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-slate-200">
        <h2 className="font-medium p-4">Top Performing Campaigns </h2>
        <div>
          <table className="table-auto w-full">
            <thead className="bg-slate-200 w-full">
              <tr className="text-[#7d7e8b] py-5">
                <th className="p-5 font-medium">Campaign</th>
                <th className="p-5 font-medium">Visits</th>
                <th className="p-5 font-medium">Revenue</th>
              </tr>
            </thead>

            <tbody>
              {topCampaigns.map((item) => (
                <tr key={item.id} className="border-b-[1px] text-[#6b6d65]">
                  <td className="p-4">{item.campaigns}</td>
                  <td className="p-4">{item.visits}</td>
                  <td className="p-4">{item.reveneu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// calling upper components inside main dashboard
const Dashboard = () => {
  return (
    <div className="mt-24 px-8">
      <div>
        <h1 className="text-3xl text-[#454650] font-semibold tracking-wider pb-3">
          E-commerce Dashboard
        </h1>
        <hr />
        <p className="pt-3 text-[#787982] tracking-wider">
          <span>Dashboard</span> E-Commerce Dashboard Template
        </p>
      </div>

      {/** Cards render start */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Card title="Sales" price={12099} grow={`${5.86}%`} />
        <Card title="New Customers" price={12099} grow={`${5.86}%`} />
        <Card title="Visitor" price={12099} grow={`${5.86}%`} />
        <Card title="Total Order" price={1350} grow={`${5.86}%`} />
      </div>
      {/**end */}

      {/**RecendOrder section start */}
      <div className="flex w-full">
        <RecentOrdersSection />
      </div>
    </div>
    // end
  );
};

export default Dashboard;
// exported to index.js

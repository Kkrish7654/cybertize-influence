import React from 'react'

// all cards
const Card = ({title,price,grow}) => {
  return (
    <div className={`rounded-lg py-5 px-4 bg-white flex flex-col gap-5 shadow-md w-[215px] overflow-hidden border-t-2 border-blue-700`}>
    <h3 className="font-semibold text-[#96969D]">{title}</h3>
    <div className='flex gap-4 items-center'>
      <p className="text-3xl font-bold text-[#2E2F39]">{price}</p>
      <div className='flex items-center gap-2 text-[#35C757] text-xl'>
        <i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"></path></svg></i>
        <p className={`text-sm font-bold  ${grow < 3 ? 'text-red-600' : 'text-[#35C757]'}`}>{grow}</p>
      </div>
      </div>
  </div>
  )
}

// recent orders here
const RecentOrdersSection = () => {
  const data = [
    {
      id:1,
      image:'',
      productName:'prodcut 1',
      productId:'20032',
      quantity:'20',
      price:80,
      orderTime:'',
      customer:'pratik sharma',
      status:'Delivered'
    },

  ]
  return (
    <div className='mt-8 flex gap-4'>
    <div className='max-w-[650px] bg-white shadow-md'>
      <h2 className='py-4 px-4 font-semibold'>Recent Orders</h2>
    <table className="w-full">
  <thead className="bg-slate-200">
    <tr className="space-x-4">
      <th className="py-2 px-2">#</th>
      <th className="py-2 px-2">Image</th>
      <th className="py-2 px-2">Product Name</th>
      <th className="py-2 px-2">Product ID</th>
      <th className="py-2">Quantity</th>
      <th className="py-2">Price</th>
      <th className="py-2">Order Time</th>
      <th className="py-2">Customer</th>
      <th className="py-2">Status</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item) => (
      <tr key={item.id}>
        <td className="py-2">{item.id}</td>
        <td className="py-2">{item.image}</td>
        <td className="py-2">{item.productName}</td>
        <td className="py-2">{item.productId}</td>
        <td className="py-2">{item.quantity}</td>
        <td className="py-2">{item.price}</td>
        <td className="py-2">{item.orderTime}</td>
        <td className="py-2">{item.customer}</td>
        <td className="py-2">{item.status}</td>
      </tr>
    ))}
  </tbody>
</table>

{/** right container of recent Orders {performing campaigns} */}

</div>
<div className='bg-white shadow-md'>
  <h2 className='font-semibold'>Top Performing Campaigns </h2>
  <div>
    <table>
      <thead>
        <tr className=''>
          <th className='p-2'>Campaign</th>
          <th className='p-2'>Visits</th>
          <th className='p-2'>Revenue</th>
        </tr>
      </thead>

      <tbody>

      </tbody>
    </table>
  </div>
</div>
</div>

  )
}


// calling upper components inside main dashboard
const Dashboard = () => {
  return (
    <div className='mt-24 px-8'>
      <div>
        <h1 className='text-3xl text-[#454650] font-semibold tracking-wider pb-3'>E-commerce Dashboard</h1>
        <hr />
        <p className='pt-3 text-[#787982] tracking-wider'><span>Dashboard</span> E-Commerce Dashboard Template</p>
      </div>

{/** Cards render start */}
      <div className='mt-8 flex flex-wrap gap-4'>
        <Card title="Sales" price={12099} grow={`${5.86}%`}/>
        <Card title="New Customers" price={12099} grow={`${5.86}%`}/>
        <Card title="Visitor" price={12099} grow={`${5.86}%`}/>
        <Card title="Total Order" price={1350} grow={`${5.86}%`}/>
      </div>
      {/**end */}

      {/**RecendOrder section start */}
      <div>
        <RecentOrdersSection/>
      </div>
    </div>
// end
  )
}

export default Dashboard;
// exported to index.js

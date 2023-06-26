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
    <table className='mt-8'>
      <thead className=' bg-slate-200'>
        <tr className='px-4'>
          <th>#</th>
          <th>image</th>
          <th>Product Name</th>
          <th>Product Id</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Order Time</th>
          <th>Customer</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.image}</td>
              <td>{item.productName}</td>
              <td>{item.productId}</td>
              <td>{item.quantity}</td>
              <td>{item.orderTime}</td>
              <td>{item.customer}</td>
              <td>{item.status}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
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

import React from 'react'

//top performing campaign section

const TopCampaigns = () => {
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
    <div className=" w-[30%] bg-white shadow-md px-2 overflow-x-scroll scrollbar scrollbar-thumb-gray-400">
    <h2 className="py-4 px-4 font-medium">Recent Orders</h2>
    <table className="w-full table-auto">
      <thead className="bg-slate-200 flex text-white">
        <tr className="space-x-4 text-[#7d7e8b] font-thin">
          <th className="py-2 px-4 font-medium">Campaigns</th>
          <th className="py-2 px-4 font-medium">Visits</th>
          <th className="py-2 px-4 font-medium">Revenue</th>
        </tr>
      </thead>
      <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-x-scroll overflow-y-scroll w-full max-h-[300px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-slate-100">
        {topCampaigns.map((item) => (
          <tr
            key={item.id}
            className="border-b-[1px] text-[#6b6d65] flex w-full mb-4"
          >
            {/* change product status here  */}
                <td className="p-4 w-1/2">{item.campaigns}</td>
                <td className="p-4 w-1/2">{item.visits}</td>
                <td className="p-4 w-1/2">{item.reveneu}</td>
          </tr>
        ))}
      </tbody>
    </table>
 </div>
  )
}

export default TopCampaigns;
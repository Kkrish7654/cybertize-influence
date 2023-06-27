import React from "react";
import Card from "./topCard";
import RecentOrdersSection from "./RecentOrderCard";
import TopCampaigns from "./CampaignCard";
// all cards

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

      {/**RecendOrder and top campaigns section start */}
      <div className="flex gap-3 items-start justify-start mt-8 w-full">
        <RecentOrdersSection />
        <TopCampaigns/>
      </div>
    </div>
    // end
  );
};

export default Dashboard;
// exported to index.js

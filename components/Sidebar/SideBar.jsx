import React, { useState } from "react";
import Link from "next/link";

// calling json for sidebar links---
const Dashboard = [
  { title: "E-commerce", path: "#" },
  { title: "Finance", path: "#" },
  { title: "Sales", path: "#" },
  { title: "Influencer", path: "#" },
  // add new links here
];


// sidebar drop down accordion
const Accordion = ({ header, items, icon, activeColor, activeBackground }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);

  // open dropdowns menu
  const toggleAction = () => {
    setIsOpen(!isOpen);
    setActive(!active);
  };


  return (
    <div className="py-2 w-full">
      <button
        style={{ color: "#878788" }}
        className={`group relative flex w-full items-center gap-24 px-2 rounded-md justify-between hover:bg-white/10 hover:text-white min-w-[150px] p-2 duration-300 ${
          !active ? "bg-transparent" : "bg-white/10"
        } ${activeBackground}` }
        onClick={toggleAction}
      >
        <div className="flex gap-2 items-center">
          <i>{icon}</i>
          <h2 className={`group-hover:text-white ${!active ? "text-[#82849F] " : "text-white"} ${activeColor}`}>
            {header}
          </h2>
        </div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height=".5em"
          width=".5em"
          xmlns="http://www.w3.org/2000/svg"

          className={`${!active ? 'rotate-0' : 'rotate-90'} duration-100 `}
        >
          <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
        </svg>
       
      </button>
      {isOpen && (
        <div className="p-3 bg-transparent duration-300">
          <ul className="flex flex-col gap-3 ml-4">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-sm"
                  style={{ color: "#82849F" }}
                  href={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
//end

/////

// side bar component
// calling all dropdown in this accordion
const SideBar = () => {
  return (
    <div className=" left-0 pt-20 px-4 fixed h-screen w-[270px] bg-[#2E2F39] flex flex-col items-start overflow-y-scroll no-scrollbar">
      <div>
        <h2 className="text-[#82849F] font-bold text-sm my-5">MENU</h2>
      </div>
      <div>
        <Accordion
          header="Dashboard"
          items={Dashboard}
          activeColor={'text-white '}
          activeBackground={'bg-white/10'}
          icon={
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                fill="currentColor"
              ></path>
            </svg>
          }
        />
        <Accordion
          header="UI Elements"
          items={Dashboard}
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
            </svg>
          }
        />
        <Accordion
          header="Chart"
          items={Dashboard}
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8-8h-26a398.57 398.57 0 0 0-282.5 117 397.47 397.47 0 0 0-85.6 127C82.6 446.2 72 498.5 72 552.5S82.6 658.7 103.4 708c20.1 47.5 48.9 90.3 85.6 127 36.7 36.7 79.4 65.5 127 85.6a396.64 396.64 0 0 0 155.6 31.5 398.57 398.57 0 0 0 282.5-117c36.7-36.7 65.5-79.4 85.6-127a396.64 396.64 0 0 0 31.5-155.6v-26c-.1-4.4-3.7-8-8.1-8zM951 463l-2.6-28.2c-8.5-92-49.3-178.8-115.1-244.3A398.5 398.5 0 0 0 588.4 75.6L560.1 73c-4.7-.4-8.7 3.2-8.7 7.9v383.7c0 4.4 3.6 8 8 8l383.6-1c4.7-.1 8.4-4 8-8.6z"></path>
            </svg>
          }
        />
        <Accordion
          header="Forms"
          items={Dashboard}
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z"></path>
            </svg>
          }
        />
        <Accordion
          header="Tables"
          items={Dashboard}
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"></path>
            </svg>
          }
        />
      </div>

      <div>
        <h2 className="text-[#82849F] font-bold text-sm my-5">FEATURES</h2>
      </div>
      <div>
        <Accordion
          header="Pages"
          items={Dashboard}
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 8V20H19V8H5ZM5 6H19V4H5V6ZM20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 10H11V14H7V10ZM7 16H17V18H7V16ZM13 11H17V13H13V11Z"></path>
            </svg>
          }
        />
        <Accordion
          header="Apps"
          items={Dashboard}
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 152H360c0-57-46.562-103.859-104-103.859S152 95 152 152H48c18.688 216 13 312 13 312h389.999c-.001 0-5.688-98 13.001-312zM256 74.105c43.008 0 77.999 34.895 77.999 77.895H178c0-43 34.991-77.895 78-77.895zM204 397.64V228.867l142.999 84.387L204 397.64z"></path>
            </svg>
          }
        />
        {/* <Accordion header="Layouts" items={Dashboard} icon={}/>
        <Accordion header="Icons" items={Dashboard} icon={}/>
        <Accordion header="Maps" items={Dashboard} icon={}/>
        <Accordion header="Docs" items={Dashboard} icon={}/> */}
      </div>
    </div>
  );
};

export default SideBar;

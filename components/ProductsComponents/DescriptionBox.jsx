import React from "react";
import { Tab } from "@headlessui/react";
import { useState } from "react";

const DescriptionBox = () => {

  const [selected, setSelected] = useState(null);

  const handleSelected = (index) => {
    setSelected(index);
  }

  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  });

  return (
    <div className="w-full flex flex-grow justify-center items-center mt-8">
      <div className="w-[70%] h-auto bg-white divide-x-2 shadow-md gap-4 ">
        <Tab.Group>
          <Tab.List className="grid grid-cols-5 border-b-2">
            <Tab onClick={() => handleSelected(1)} className={`p-2 px-4 ${selected === 1 ? 'bg-slate-200' : 'bg-transparent'}`}>Description</Tab>
            <Tab onClick={() => handleSelected(2)} className={`p-2 px-4 ${selected === 2 ? 'bg-slate-200' : 'bg-transparent'}`}>Reviews</Tab>
          </Tab.List>
          <Tab.Panels className="p-4 min-h-[300px]">
            <Tab.Panel >
              Praesent et cursus quam. Etiam vulputate est et metus pellentesque
              iaculis. Suspendisse nec urna augue. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubiliaurae.
              <br />
              Nam condimentum erat aliquet rutrum fringilla. Suspendisse
              potenti. Vestibulum placerat elementum sollicitudin. Aliquam
              consequat molestie tortor, et dignissim quam blandit nec. Donec
              tincidunt dui libero, ac convallis urna dapibus eu. Praesent
              volutpat mi eget diam efficitur, a mollis quam ultricies. Morbi eu
              turpis odio.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              elit sodales, dignissim elit et, sollicitudin nulla. Donec at leo
              sed nisl vestibulum fermentum.
            </Tab.Panel>
            <Tab.Panel>Praesent et cursus quam. Etiam vulputate est et metus pellentesque iaculis. Suspendisse nec urna augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliaurae.
Nam condimentum erat aliquet rutrum fringilla. Suspendisse potenti. Vestibulum placerat elementum sollicitudin. Aliquam consequat molestie tortor, et dignissim quam blandit nec. Donec tincidunt dui libero, ac convallis urna dapibus eu. Praesent volutpat mi eget diam efficitur, a mollis quam ultricies. Morbi eu turpis odio</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default DescriptionBox;

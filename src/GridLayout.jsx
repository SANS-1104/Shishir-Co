// LayoutGridDemo.jsx

import React from "react";
import LayoutGrid from "./components/ui/LayoutGrid";
import { transform } from "framer-motion";

const SkeletonOne = () => (
    <div>
    <p className="font-normal text-xs text-white">Name : lorem</p>
    <p className="font-normal text-xs text-white">Designation : lorem</p>
    <p className="font-normal text-xs text-white">Experience : lorem</p>
    <p className="font-normal text-xs text-white">Area of Expertise : lorem</p>
    <a href="#">Contact Now</a>
  </div>
);

const SkeletonTwo = () => (
    <div>
    <p className="font-normal text-xs text-white">Name : lorem</p>
    <p className="font-normal text-xs text-white">Designation : lorem</p>
    <p className="font-normal text-xs text-white">Experience : lorem</p>
    <p className="font-normal text-xs text-white">Area of Expertise : lorem</p>
    <a href="#">Contact Now</a>
  </div>
);

const SkeletonThree = () => (
    <div>
    <p className="font-normal text-xs text-white">Name : lorem</p>
    <p className="font-normal text-xs text-white">Designation : lorem</p>
    <p className="font-normal text-xs text-white">Experience : lorem</p>
    <p className="font-normal text-xs text-white">Area of Expertise : lorem</p>
    <a href="#">Contact Now</a>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-normal text-xs text-white">Name : lorem</p>
    <p className="font-normal text-xs text-white">Designation : lorem</p>
    <p className="font-normal text-xs text-white">Experience : lorem</p>
    <p className="font-normal text-xs text-white">Area of Expertise : lorem</p>
    <a href="#">Contact Now</a>
  </div>
);

const SkeletonFive = () => (
    <div>
    <p className="font-normal text-xs text-white">Name : lorem</p>
    <p className="font-normal text-xs text-white">Designation : lorem</p>
    <p className="font-normal text-xs text-white">Experience : lorem</p>
    <p className="font-normal text-xs text-white">Area of Expertise : lorem</p>
    <a href="#">Contact Now</a>
  </div>
);

const SkeletonSix = () => (
    <div>
    <p className="font-normal text-xs text-white">Name : lorem</p>
    <p className="font-normal text-xs text-white">Designation : lorem</p>
    <p className="font-normal text-xs text-white">Experience : lorem</p>
    <p className="font-normal text-xs text-white">Area of Expertise : lorem</p>
    <a href="#">Contact Now</a>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "https://cdn.icon-icons.com/icons2/884/PNG/512/person_2_icon-icons.com_68896.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://tse1.mm.bing.net/th?id=OIP.wBsE2Wjm3JYvbjfYvNBUnAHaHa&pid=Api&P=0&h=180",
    },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://cdn.icon-icons.com/icons2/884/PNG/512/person_2_icon-icons.com_68896.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      "https://cdn-icons-png.flaticon.com/512/6867/6867590.png",
      
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail:
      "https://cdn-icons-png.flaticon.com/512/606/606587.png",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail:
      "https://cdn-icons-png.flaticon.com/512/6867/6867590.png",
  },
];

export default function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

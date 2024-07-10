// LayoutGridDemo.jsx

import React from "react";
import LayoutGrid from "./components/ui/LayoutGrid";
import { transform } from "framer-motion";
import imageone from './assets/person.jpg';

const SkeletonOne = () => (
    <div>
    <p className="font-normal text-xl text-white">Name : lorem</p>
    <p className="font-normal text-xl text-white">Designation : lorem</p>
    <p className="font-normal text-xl text-white">Experience : lorem</p>
    <p className="font-normal text-xl text-white">Area of Expertise : lorem</p>
    <a href="#">Contact Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
);

const SkeletonTwo = () => (
    <div>
    <p className="font-normal text-xl text-white">Name : lorem</p>
    <p className="font-normal text-xl text-white">Designation : lorem</p>
    <p className="font-normal text-xl text-white">Experience : lorem</p>
    <p className="font-normal text-xl text-white">Area of Expertise : lorem</p>
    <a href="#">Contact Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
);

const SkeletonThree = () => (
    <div>
    <p className="font-normal text-xl text-white">Name : lorem</p>
    <p className="font-normal text-xl text-white">Designation : lorem</p>
    <p className="font-normal text-xl text-white">Experience : lorem</p>
    <p className="font-normal text-xl text-white">Area of Expertise : lorem</p>
    <a href="#">Contact Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-normal text-xl text-white">Name : lorem</p>
    <p className="font-normal text-xl text-white">Designation : lorem</p>
    <p className="font-normal text-xl text-white">Experience : lorem</p>
    <p className="font-normal text-xl text-white">Area of Expertise : lorem</p>
    <a href="#">Contact Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
);

const SkeletonFive = () => (
    <div>
    <p className="font-normal text-xl text-white">Name : lorem</p>
    <p className="font-normal text-xl text-white">Designation : lorem</p>
    <p className="font-normal text-xl text-white">Experience : lorem</p>
    <p className="font-normal text-xl text-white">Area of Expertise : lorem</p>
    <a href="#">Contact Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
);

const SkeletonSix = () => (
    <div>
    <p className="font-normal text-xl text-white">Name : lorem</p>
    <p className="font-normal text-xl text-white">Designation : lorem</p>
    <p className="font-normal text-xl text-white">Experience : lorem</p>
    <p className="font-normal text-xl text-white">Area of Expertise : lorem</p>
    <a href="#">Contact Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail: imageone,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: imageone,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: imageone,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail: imageone,
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail: imageone,
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail: imageone,
  },
];

export default function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

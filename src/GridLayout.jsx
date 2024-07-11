// LayoutGridDemo.jsx
import './Team.css'
import React from "react";
import LayoutGrid from "./components/ui/LayoutGrid";
import { transform } from "framer-motion";
import imageone from './assets/emp1.jpg';
import imagetwo from './assets/emp2.jpeg';
import imagethree from './assets/emp3.avif';
import imagefour from './assets/emp4.jpg';
import imagefive from './assets/emp5.webp';
import imagesix from './assets/emp6.webp';




const SkeletonOne = () => (
    <div>
    <p className="font-normal card-font text-lg text-white">Name : lorem</p>
    <p className="font-normal card-font text-lg text-white">Designation : lorem</p>
    <p className="font-normal card-font text-lg text-white">Experience : lorem</p>
    <p className="font-normal card-font text-lg text-white">Area of Expertise : lorem</p>
    <a href="#" className='card-font'>Contact Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
);

const SkeletonTwo = () => (
    <div>
    <p className="font-normal card-font text-lg text-white">Name : lorem</p>
    <p className="font-normal card-font text-lg text-white">Designation : lorem</p>
    <p className="font-normal card-font text-lg text-white">Experience : lorem</p>
    <p className="font-normal card-font text-lg text-white">Area of Expertise : lorem</p>
    <a href="#" className='card-font'>Contact Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
);

const SkeletonThree = () => (
    <div>
    <p className="font-normal card-font text-lg text-white">Name : lorem</p>
    <p className="font-normal card-font text-lg text-white">Designation : lorem</p>
    <p className="font-normal card-font text-lg text-white">Experience : lorem</p>
    <p className="font-normal card-font text-lg text-white">Area of Expertise : lorem</p>
    <a href="#" className='card-font'>Contact Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-normal card-font text-lg text-white">Name : lorem</p>
    <p className="font-normal card-font text-lg text-white">Designation : lorem</p>
    <p className="font-normal card-font text-lg text-white">Experience : lorem</p>
    <p className="font-normal card-font text-lg text-white">Area of Expertise : lorem</p>
    <a href="#" className='card-font'>Contact Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
);

const SkeletonFive = () => (
    <div>
    <p className="font-normal card-font text-lg text-white">Name : lorem</p>
    <p className="font-normal card-font text-lg text-white">Designation : lorem</p>
    <p className="font-normal card-font text-lg text-white">Experience : lorem</p>
    <p className="font-normal card-font text-lg text-white">Area of Expertise : lorem</p>
    <a href="#" className='card-font'>Contact Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
);

const SkeletonSix = () => (
    <div>
    <p className="font-normal card-font text-lg text-white">Name : lorem</p>
    <p className="font-normal card-font text-lg text-white">Designation : lorem</p>
    <p className="font-normal card-font text-lg text-white">Experience : lorem</p>
    <p className="font-normal card-font text-lg text-white">Area of Expertise : lorem</p>
    <a href="#" className='card-font'>Contact Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1 row-span-1",
    thumbnail: imageone,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 row-span-1",
    thumbnail: imagetwo,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1 row-span-1",
    thumbnail: imagethree,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1 row-span-1",
    thumbnail: imagefour,
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1 row-span-1",
    thumbnail: imagefive,
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1 row-span-1",
    thumbnail: imagesix,
  },
];

export default function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

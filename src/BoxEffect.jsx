"use client";
import React from "react";
import { Boxes } from "./components/ui/BackgroundBoxes";
import cn from "./utils/cn";
import './About.css'

export default function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full mb-24 overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg" id="contact">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      Chartered accountants committed to <br /> your financial growth and prosperity
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
      <a href="#"><button type="submit" className='underline bg-white commit-btn px-8 py-2'>Contact Now</button></a>
      </p>
    </div>
  );
}

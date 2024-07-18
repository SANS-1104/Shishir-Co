"use client";

import { motion } from "framer-motion";
import React from "react";
import AuroraBackground from "./components/ui/AuroraBackground";
import './IntroPage.css'


export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-start justify-center px-4">
        <div className="text-5xl md:text-6xl font-bold text-color text-center">
          Shishir & Co.
        </div>
        <div className="font-bold text-4xl md:text-3xl text-color py-2">
          Chartered Accountants
        </div>
        <div className="font-medium text-xl md:text-base text-color py-2">
        “Trusted advisors helping you navigate the <br /> complexities of finance”
        </div>
        <button className="btn-bg rounded-4 w-fit underline text-white px-8 py-2">
        <a href="mailto: Shishirandco01@gmail.com">Contact Now</a>
        </button>
        
      </motion.div>
    </AuroraBackground>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { GeometricRosette } from "./GeometricRosette";

export const HeroTitleCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full min-h-0 bg-[#FBEFE9] rounded-[26px] sm:rounded-[30px] p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden card-shadow card-hover-shadow border border-[#F2DDD4]/60 group select-none"
    >
      {/* Top right decorative geometric rosette */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20">
        <GeometricRosette />
      </div>

      {/* Subtle ambient light gradient background */}
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#F89B8D]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#F89B8D]/20 transition-all duration-700" />

      {/* Spacing filler */}
      <div className="h-4 sm:h-6" />

      {/* Main Title Heading */}
      <div className="relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] xl:text-[46px] leading-[1.08] font-extrabold text-[#221F1E] tracking-tight">
          <span className="block font-black">Building Smart</span>
          <span className="block my-0.5">
            <span className="font-serif-italic italic font-normal text-[1.12em] tracking-normal text-[#2A2321] pr-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
              Solutions
            </span>{" "}
            <span className="font-black">with</span>
          </span>
          <span className="block font-black">AI-Driven Data</span>
        </h1>
      </div>
    </motion.div>
  );
};

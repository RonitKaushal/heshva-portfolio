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
      className="relative w-full h-full min-h-[290px] sm:min-h-[340px] md:min-h-[360px] bg-[#FBEFE9] rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 md:p-10 flex flex-col justify-between overflow-hidden card-shadow card-hover-shadow border border-[#F2DDD4]/60 group"
    >
      {/* Top right decorative geometric rosette */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20">
        <GeometricRosette />
      </div>

      {/* Subtle ambient light gradient background */}
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#F89B8D]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#F89B8D]/20 transition-all duration-700" />

      {/* Empty space filler for top */}
      <div className="h-6 sm:h-12" />

      {/* Main Title Heading */}
      <div className="relative z-10 select-none">
        <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] leading-[1.08] font-extrabold text-[#221F1E] tracking-tight">
          <span className="block font-black">Artist Redefining</span>
          <span className="block my-0.5">
            <span className="font-serif-italic italic font-normal text-[1.12em] tracking-normal text-[#2A2321] pr-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
              Architecture
            </span>{" "}
            <span className="font-black">with</span>
          </span>
          <span className="block font-black">AI-Driven Design</span>
        </h1>
      </div>
    </motion.div>
  );
};

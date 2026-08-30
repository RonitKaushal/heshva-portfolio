"use client";

import React from "react";
import { motion } from "framer-motion";
import { PulsingBurstIcon } from "./PulsingBurstIcon";

export const BioCard: React.FC<{ onReadMore?: () => void }> = ({ onReadMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onClick={onReadMore}
      className="relative w-full h-full min-h-[220px] sm:min-h-[240px] bg-[#FBEFE9] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between card-shadow card-hover-shadow border border-[#F2DDD4]/60 group cursor-pointer overflow-hidden"
    >
      {/* Top left pulsing burst icon */}
      <div className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:scale-110">
        <PulsingBurstIcon />
      </div>

      {/* Bio text */}
      <div className="mt-4 sm:mt-6 select-none">
        <p className="text-[13.5px] sm:text-[14.5px] md:text-[15px] leading-[1.55] font-normal text-[#2A2321]/90 tracking-[-0.01em]">
          Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.
        </p>
      </div>

      {/* Ambient background glow on hover */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#F89B8D]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#F89B8D]/20 transition-all duration-500" />
    </motion.div>
  );
};

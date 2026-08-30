"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const PortraitCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full min-h-[290px] sm:min-h-[340px] md:min-h-[360px] rounded-[28px] sm:rounded-[32px] overflow-hidden card-shadow card-hover-shadow border border-[#F2DDD4]/60 bg-[#FBEFE9] group cursor-pointer"
    >
      {/* Portrait Image */}
      <div className="relative w-full h-full min-h-[290px] sm:min-h-[340px] md:min-h-[360px]">
        <Image
          src="/images/heshva_portrait.jpg"
          alt="Heshva Soni - ML Researcher & IT Engineer"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Soft subtle tint overlay for harmonious blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#221F1E]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Interactive floating pill on hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 py-2 px-3 bg-[#FBEFE9]/90 backdrop-blur-md rounded-full border border-white/40 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
        >
          <span className="text-xs font-semibold tracking-wider text-[#221F1E] uppercase">
            SAC-ISRO • Greater Ahmedabad Area
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

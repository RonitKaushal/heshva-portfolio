"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PulsingBurstIcon } from "./PulsingBurstIcon";

export const BioCard: React.FC<{ onReadMore?: () => void }> = ({ onReadMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full bg-[#FBEFE9] rounded-[24px] sm:rounded-[28px] lg:rounded-[30px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between card-shadow card-hover-shadow border border-[#F2DDD4]/60 group cursor-pointer overflow-hidden"
    >
      <Link href="/about" className="absolute inset-0 z-20" aria-label="About Heshva Soni" />

      {/* Pulsing icon */}
      <div className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-500 group-hover:scale-110 shrink-0">
        <PulsingBurstIcon />
      </div>

      {/* Bio text */}
      <div className="mt-3 sm:mt-4 select-none">
        <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] leading-[1.5] font-normal text-[#2A2321]/90 tracking-[-0.01em]">
          Heshva Soni is a researcher and engineer who transforms complex data into meaningful solutions. She&apos;s currently interning at SAC-ISRO and pursuing her B.Tech at IAR Gandhinagar — building intelligent AI systems with Python and ML.
        </p>
      </div>

      {/* Ambient glow */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#F89B8D]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#F89B8D]/20 transition-all duration-500" />
    </motion.div>
  );
};

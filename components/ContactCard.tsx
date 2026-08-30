"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ContactCardProps {
  onOpenContact: () => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({ onOpenContact }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onOpenContact}
      className="relative w-full h-full min-h-[220px] sm:min-h-[240px] bg-[#F99B8D] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between cursor-pointer overflow-hidden card-shadow group transition-all duration-300 hover:bg-[#F88F80]"
    >
      {/* Top row: Questions text and Arrow icon */}
      <div className="flex items-start justify-between">
        <div className="text-[13px] sm:text-[14px] leading-tight font-normal text-[#2A2321]/90">
          <p>Have some</p>
          <p>questions?</p>
        </div>

        {/* Top-Right Arrow */}
        <div className="p-1 text-[#221F1E] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
        </div>
      </div>

      {/* Ambient glass light streak */}
      <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

      {/* Bottom text: Contact me */}
      <div className="select-none z-10">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#221F1E] tracking-tight group-hover:tracking-normal transition-all duration-300">
          Contact me
        </h2>
      </div>
    </motion.div>
  );
};

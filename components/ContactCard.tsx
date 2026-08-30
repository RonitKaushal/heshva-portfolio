"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ContactCardProps {
  onOpenContact?: () => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({ onOpenContact }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2, scale: 1.008 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full h-full bg-[#F99B8D] rounded-[24px] sm:rounded-[28px] lg:rounded-[30px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between cursor-pointer overflow-hidden card-shadow group transition-all duration-300 hover:bg-[#F88F80]"
    >
      <Link href="/contact" className="absolute inset-0 z-20" aria-label="Contact Heshva Soni" />

      {/* Top row: text + arrow */}
      <div className="flex items-start justify-between shrink-0">
        <div className="text-[12px] sm:text-[13px] leading-tight font-normal text-[#2A2321]/90">
          <p>Have some</p>
          <p>questions?</p>
        </div>
        <div className="p-1 text-[#221F1E] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
        </div>
      </div>

      {/* Glass shimmer */}
      <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

      {/* Bottom: Contact me */}
      <div className="select-none z-10 mt-2">
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#221F1E] tracking-tight group-hover:tracking-normal transition-all duration-300">
          Contact me
        </h2>
      </div>
    </motion.div>
  );
};

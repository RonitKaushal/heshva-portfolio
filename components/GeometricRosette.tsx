"use client";

import React from "react";
import { motion } from "framer-motion";

export const GeometricRosette: React.FC<{ className?: string }> = ({ className = "" }) => {
  // Generate 16 symmetrical overlapping petal ellipses
  const petalCount = 16;
  const petals = Array.from({ length: petalCount }, (_, i) => (i * 360) / petalCount);

  return (
    <motion.div
      className={`relative flex items-center justify-center cursor-pointer select-none ${className}`}
      whileHover={{ rotate: 90, scale: 1.08 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-[#E5ACA0]/70 animate-spin-slow hover:[animation-play-state:paused]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {petals.map((deg, index) => (
          <ellipse
            key={index}
            cx="50"
            cy="50"
            rx="14"
            ry="38"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeOpacity="0.85"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.9" />
        <circle cx="50" cy="50" r="3" fill="currentColor" fillOpacity="0.6" />
      </svg>
    </motion.div>
  );
};

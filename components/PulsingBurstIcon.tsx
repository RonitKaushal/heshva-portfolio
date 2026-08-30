"use client";

import React from "react";
import { motion } from "framer-motion";

export const PulsingBurstIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  const dotCount = 8;
  const dots = Array.from({ length: dotCount }, (_, i) => (i * 360) / dotCount);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className="w-full h-full text-[#E5ACA0] animate-spin-slow"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {dots.map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 20 + 12 * Math.cos(rad);
          const cy = 20 + 12 * Math.sin(rad);
          const opacity = 0.3 + (i / dotCount) * 0.7;
          return (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r={2.2}
              fill="currentColor"
              fillOpacity={opacity}
              animate={{
                scale: [1, 1.25, 1],
                opacity: [opacity, 1, opacity],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

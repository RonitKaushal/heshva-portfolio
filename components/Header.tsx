"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  onOpenContact?: () => void;
  onOpenProjects?: () => void;
  onOpenAbout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContact,
  onOpenProjects,
  onOpenAbout,
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const navItems = [
    { label: "PROJECTS", onClick: onOpenProjects },
    { label: "ABOUT", onClick: onOpenAbout },
    { label: "CONTACT", onClick: onOpenContact },
  ];

  return (
    <header className="w-full pt-4 pb-4 px-2 sm:px-4 flex items-center justify-between">
      {/* Brand / Name Logo */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-1.5 cursor-pointer select-none group"
        onClick={onOpenAbout}
      >
        <span className="font-cormorant italic text-xl sm:text-2xl tracking-wider text-[#221F1E] font-medium transition-transform group-hover:-translate-x-0.5">
          JULIA
        </span>
        <span className="font-sans font-black text-lg sm:text-xl tracking-tight text-[#221F1E] transition-transform group-hover:translate-x-0.5">
          HUANG
        </span>
      </motion.div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-5 sm:gap-8">
        {navItems.map((item, idx) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onMouseEnter={() => setActiveItem(item.label)}
            onMouseLeave={() => setActiveItem(null)}
            onClick={item.onClick}
            className="relative font-sans text-xs sm:text-sm font-semibold tracking-widest text-[#221F1E]/85 hover:text-[#221F1E] transition-colors py-1 cursor-pointer"
          >
            <span>{item.label}</span>
            {activeItem === item.label && (
              <motion.div
                layoutId="headerNavUnderline"
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#221F1E]/80 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </nav>
    </header>
  );
};

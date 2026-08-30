"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { label: "PROJECTS", href: "/projects", onClick: onOpenProjects },
    { label: "ABOUT", href: "/about", onClick: onOpenAbout },
    { label: "CONTACT", href: "/contact", onClick: onOpenContact },
  ];

  return (
    <header className="w-full py-2.5 sm:py-3 px-2 sm:px-4 flex items-center justify-between shrink-0">
      {/* Brand / Name Logo */}
      <Link href="/" className="flex items-center gap-1.5 cursor-pointer select-none group">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-1.5"
        >
          <span className="font-sans font-black text-xl sm:text-2xl tracking-widest text-[#221F1E]">
            HESHVA SONI
          </span>
        </motion.div>
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-5 sm:gap-8">
        {navItems.map((item, idx) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.onClick) {
                  // If handler provided and wanted modal, can proceed or navigate
                }
              }}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative font-sans text-xs sm:text-sm font-semibold tracking-widest text-[#221F1E]/85 hover:text-[#221F1E] transition-colors py-1 cursor-pointer"
            >
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={isActive ? "font-bold text-[#221F1E]" : ""}
              >
                {item.label}
              </motion.span>
              {(hoveredItem === item.label || isActive) && (
                <motion.div
                  layoutId="headerNavUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#221F1E] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

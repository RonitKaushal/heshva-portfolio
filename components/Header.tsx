"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "PROJECTS", href: "/projects" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="w-full py-2.5 sm:py-3 px-2 sm:px-4 flex items-center justify-between shrink-0 relative">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center cursor-pointer select-none group" onClick={() => setMenuOpen(false)}>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-serif-italic italic text-xl sm:text-2xl lg:text-[28px] tracking-wide text-[#221F1E] font-normal transition-transform duration-300 group-hover:scale-105">
            Heshva Soni
          </span>
        </motion.div>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex items-center gap-5 sm:gap-8">
        {navItems.map((item, idx) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
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

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden p-2 rounded-xl bg-[#F4E1D7] text-[#221F1E] hover:bg-[#F99B8D] transition-colors"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-[#FBEFE9] rounded-2xl shadow-xl border border-[#F2DDD4] z-50 overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-5 py-3.5 text-sm font-bold tracking-widest transition-colors ${
                    isActive
                      ? "bg-[#F99B8D]/20 text-[#221F1E]"
                      : "text-[#221F1E]/75 hover:bg-[#F4E1D7] hover:text-[#221F1E]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

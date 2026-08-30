"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export const SocialCard: React.FC = () => {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const socials: SocialLink[] = [
    { label: "INSTAGRAM", href: "https://instagram.com", handle: "@juliahuang.ai" },
    { label: "TWITTER", href: "https://twitter.com", handle: "@juliahuang" },
    { label: "LINKEDIN", href: "https://linkedin.com", handle: "julia-huang-ai" },
  ];

  const handleClick = (social: SocialLink, e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard?.writeText(social.handle);
    setCopiedHandle(social.label);
    setTimeout(() => setCopiedHandle(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full bg-[#FBEFE9] rounded-[22px] sm:rounded-[26px] py-4 px-6 sm:px-8 flex items-center justify-between card-shadow card-hover-shadow border border-[#F2DDD4]/60 overflow-hidden"
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          onClick={(e) => handleClick(social, e)}
          target="_blank"
          rel="noopener noreferrer"
          className="relative font-sans text-xs sm:text-[13px] font-bold tracking-[0.14em] text-[#221F1E]/80 hover:text-[#221F1E] transition-colors py-1 group"
        >
          <span className="relative z-10 transition-transform inline-block group-hover:scale-105">
            {copiedHandle === social.label ? "COPIED!" : social.label}
          </span>
          <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#F99B8D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>
      ))}
    </motion.div>
  );
};

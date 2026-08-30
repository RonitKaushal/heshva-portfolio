"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroTitleCard } from "@/components/HeroTitleCard";
import { PortraitCard } from "@/components/PortraitCard";
import { BioCard } from "@/components/BioCard";
import { ContactCard } from "@/components/ContactCard";
import { ProjectsCard, ProjectItem, experiencesData } from "@/components/ProjectsCard";
import { SocialCard } from "@/components/SocialCard";
import { ContactModal } from "@/components/ContactModal";
import { ProjectModal } from "@/components/ProjectModal";
import { AboutModal } from "@/components/AboutModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenProjects = () => {
    setSelectedProject(experiencesData[0]);
  };

  return (
    <main className="min-h-screen w-full bg-[#F7E7DF] flex items-center justify-center p-3 sm:p-5 md:p-8 lg:p-10 font-sans">
      {/* Outer Rounded Container Frame */}
      <div className="w-full max-w-[1360px] bg-[#F7E7DF] rounded-[32px] sm:rounded-[40px] md:rounded-[48px] p-2 sm:p-4 md:p-6 lg:p-7 flex flex-col gap-4 sm:gap-5 transition-all">
        {/* Header Navigation */}
        <Header
          onOpenContact={() => setIsContactOpen(true)}
          onOpenProjects={handleOpenProjects}
          onOpenAbout={() => setIsAboutOpen(true)}
        />

        {/* Bento Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {/* LEFT & CENTER COMBINED / COLUMN 1 & 2 (8 Cols on LG) */}
          <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-5">
            {/* Top Row: Hero Title Card + Portrait Card */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-stretch">
              {/* Hero Title (Large Box, ~7 cols) */}
              <div className="sm:col-span-7 flex">
                <HeroTitleCard />
              </div>

              {/* Portrait Card (~5 cols) */}
              <div className="sm:col-span-5 flex">
                <PortraitCard />
              </div>
            </div>

            {/* Bottom Row: Bio Card + Contact Me Card */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-stretch">
              {/* Bio Card (~6 cols) */}
              <div className="sm:col-span-6 flex">
                <BioCard onReadMore={() => setIsAboutOpen(true)} />
              </div>

              {/* Contact Me Card (~6 cols) */}
              <div className="sm:col-span-6 flex">
                <ContactCard onOpenContact={() => setIsContactOpen(true)} />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN / COLUMN 3 (4 Cols on LG) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4 sm:gap-5">
            {/* Top: Projects Showcase Card */}
            <div className="flex-1 flex">
              <ProjectsCard onSelectProject={(p) => setSelectedProject(p)} />
            </div>

            {/* Bottom: Social Links Bar */}
            <div className="flex">
              <SocialCard />
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}

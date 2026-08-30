"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroTitleCard } from "@/components/HeroTitleCard";
import { PortraitCard } from "@/components/PortraitCard";
import { BioCard } from "@/components/BioCard";
import { ContactCard } from "@/components/ContactCard";
import { ProjectsCard } from "@/components/ProjectsCard";
import { SocialCard } from "@/components/SocialCard";
import { ProjectItem, experiencesData } from "@/lib/data";
import { ProjectModal } from "@/components/ProjectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#F7E7DF] flex items-center justify-center p-2.5 sm:p-4 md:p-5 lg:p-6 font-sans select-none">
      {/* Outer Rounded Container Frame */}
      <div className="w-full h-full max-w-[1360px] max-h-[880px] bg-[#F7E7DF] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col justify-between overflow-hidden">
        {/* Header Navigation */}
        <Header />

        {/* Bento Grid (Strict 100vh responsive flex grid, no scroll) */}
        <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-4.5 min-h-0 items-stretch py-1">
          {/* LEFT & CENTER COMBINED / COLUMN 1 & 2 (8 Cols on LG) */}
          <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4 md:gap-4.5 h-full min-h-0">
            {/* Top Row: Hero Title Card + Portrait Card (Takes ~60% height) */}
            <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 md:gap-4.5 min-h-0 items-stretch">
              {/* Hero Title (Large Box, ~7 cols) */}
              <div className="sm:col-span-7 flex h-full min-h-0">
                <HeroTitleCard />
              </div>

              {/* Portrait Card (~5 cols) */}
              <div className="sm:col-span-5 flex h-full min-h-0">
                <PortraitCard />
              </div>
            </div>

            {/* Bottom Row: Bio Card + Contact Me Card (Takes ~40% height) */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 md:gap-4.5 min-h-0 items-stretch">
              {/* Bio Card (~6 cols) */}
              <div className="sm:col-span-6 flex h-full min-h-0">
                <BioCard />
              </div>

              {/* Contact Me Card (~6 cols) */}
              <div className="sm:col-span-6 flex h-full min-h-0">
                <ContactCard />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN / COLUMN 3 (4 Cols on LG) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3 sm:gap-4 md:gap-4.5 h-full min-h-0">
            {/* Top: Projects Showcase Card */}
            <div className="flex-1 flex min-h-0">
              <ProjectsCard onSelectProject={(p) => setSelectedProject(p)} />
            </div>

            {/* Bottom: Social Links Bar */}
            <div className="flex shrink-0">
              <SocialCard />
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}

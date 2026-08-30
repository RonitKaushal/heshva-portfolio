"use client";

import React from "react";
import { Header } from "@/components/Header";
import { HeroTitleCard } from "@/components/HeroTitleCard";
import { PortraitCard } from "@/components/PortraitCard";
import { BioCard } from "@/components/BioCard";
import { ContactCard } from "@/components/ContactCard";
import { ProjectsCard } from "@/components/ProjectsCard";
import { SocialCard } from "@/components/SocialCard";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#F7E7DF] flex flex-col items-center justify-start lg:h-screen lg:overflow-hidden p-3 sm:p-4 lg:p-6 font-sans select-none">
      {/* Outer Container */}
      <div className="w-full max-w-[1360px] lg:h-full flex flex-col gap-3 sm:gap-4 lg:gap-0 lg:justify-between">

        {/* Header */}
        <div className="bg-[#FBEFE9] rounded-[24px] sm:rounded-[28px] px-5 py-2 card-shadow border border-[#F2DDD4]/60 shrink-0">
          <Header />
        </div>

        {/* Bento Grid */}
        <div className="flex-1 flex flex-col gap-3 sm:gap-4 lg:grid lg:grid-cols-12 lg:gap-4 lg:py-3 min-h-0">

          {/* LEFT + CENTER: 8 cols */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-8 lg:h-full min-h-0">

            {/* Top Row: Hero + Portrait */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:flex-[1.5] lg:min-h-0" style={{ minHeight: "200px" }}>
              {/* Hero Title */}
              <div className="col-span-2 sm:col-span-1 min-h-[180px] sm:min-h-[220px] lg:min-h-0 lg:h-full">
                <HeroTitleCard />
              </div>
              {/* Portrait */}
              <div className="col-span-2 sm:col-span-1 min-h-[220px] sm:min-h-[260px] lg:min-h-0 lg:h-full">
                <PortraitCard />
              </div>
            </div>

            {/* Bottom Row: Bio + Contact */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:min-h-0">
              {/* Bio Card */}
              <div className="col-span-2 sm:col-span-1 min-h-[130px] sm:min-h-[150px] lg:min-h-0 lg:h-full">
                <BioCard />
              </div>
              {/* Contact Card */}
              <div className="col-span-2 sm:col-span-1 min-h-[130px] sm:min-h-[150px] lg:min-h-0 lg:h-full">
                <ContactCard />
              </div>
            </div>
          </div>

          {/* RIGHT: 4 cols — Projects + Social */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-4 lg:h-full min-h-0">
            {/* Projects Card */}
            <div className="flex-1 min-h-[320px] sm:min-h-[380px] lg:min-h-0">
              <ProjectsCard />
            </div>
            {/* Social Bar */}
            <div className="shrink-0">
              <SocialCard />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

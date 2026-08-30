import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Projects",
  description:
    "Explore Heshva Soni's machine learning research at SAC-ISRO, Python data pipelines at InfoLabz, software engineering at Techno IT Hub, and AI Geodata analysis projects.",
  alternates: {
    canonical: "https://heshvasoni.vercel.app/projects",
  },
  openGraph: {
    title: "Experience & Projects | Heshva Soni",
    description:
      "Explore Heshva Soni's research at SAC-ISRO, Python ML workflows, and AI Geodata analytics.",
    url: "https://heshvasoni.vercel.app/projects",
    images: ["/images/isro_geodata.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

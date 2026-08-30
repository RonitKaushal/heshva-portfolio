import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Heshva Soni",
  description:
    "Learn about Heshva Soni's education at IAR Gandhinagar (B.Tech IT) & GTU, professional internships, Python & ML certifications, and research at SAC-ISRO.",
  alternates: {
    canonical: "https://heshvasoni.vercel.app/about",
  },
  openGraph: {
    title: "About Heshva Soni | AI & ML Engineer",
    description:
      "Education, career trajectory, and technical skills of Heshva Soni, Research Intern at SAC-ISRO.",
    url: "https://heshvasoni.vercel.app/about",
    images: ["/images/heshva_portrait.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

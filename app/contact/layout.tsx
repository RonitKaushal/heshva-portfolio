import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Heshva Soni",
  description:
    "Get in touch with Heshva Soni for Machine Learning collaborations, research opportunities, or software development inquiries. Email: heshvasoni1006@gmail.com.",
  alternates: {
    canonical: "https://heshvasoni.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Heshva Soni | AI & ML Engineer",
    description:
      "Direct communication channel with Heshva Soni: heshvasoni1006@gmail.com, Greater Ahmedabad Area, Gujarat, India.",
    url: "https://heshvasoni.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

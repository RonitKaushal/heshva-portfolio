import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif-italic",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#F7E7DF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://heshvasoni.vercel.app"),
  title: {
    default: "Heshva Soni — Research Intern @ SAC-ISRO | AI & ML Engineer",
    template: "%s | Heshva Soni",
  },
  description:
    "Official portfolio of Heshva Soni: Research Intern at Space Applications Centre (SAC-ISRO), IT Student at IAR Gandhinagar, and Machine Learning Engineer specializing in Time Series Analysis, Geodata AI, and Python software.",
  keywords: [
    "Heshva Soni",
    "Heshva",
    "SAC-ISRO",
    "Space Applications Centre",
    "ISRO Research Intern",
    "Machine Learning Engineer",
    "AI Researcher",
    "Time Series Analysis",
    "Geodata AI",
    "Python Developer",
    "Ahmedabad",
    "Gandhinagar",
    "Gujarat",
    "India",
    "IAR Gandhinagar",
    "Data Analyst",
    "QualiFrame",
    "PyPI Python Package",
    "Stock Market Prediction LSTM",
    "Computer Vision OpenCV",
    "Soil Moisture Analysis",
    "Government Girls Polytechnic",
  ],
  authors: [{ name: "Heshva Soni", url: "https://heshvasoni.vercel.app" }],
  creator: "Heshva Soni",
  publisher: "Heshva Soni",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://heshvasoni.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Heshva Soni — Research Intern @ SAC-ISRO | AI & ML Engineer",
    description:
      "Bridging the gap between complex data and user-centric applications. Research intern at SAC-ISRO specializing in Python, ML, and Time Series Geodata.",
    url: "https://heshvasoni.vercel.app",
    siteName: "Heshva Soni Portfolio",
    images: [
      {
        url: "/images/heshva_portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Heshva Soni - AI & ML Researcher",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heshva Soni — Research Intern @ SAC-ISRO | AI & ML Engineer",
    description:
      "IT Student at IAR Gandhinagar & Research Intern at SAC-ISRO building intelligent solutions with Data & Machine Learning.",
    images: ["/images/heshva_portrait.jpg"],
    creator: "@heshvaa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad, Gandhinagar, Gujarat, India",
    "geo.position": "23.0225;72.5714",
    "ICBM": "23.0225, 72.5714",
    "DC.title": "Heshva Soni Portfolio",
    "DC.creator": "Heshva Soni",
    "DC.description": "AI & Machine Learning Researcher at SAC-ISRO and IT Engineer.",
    "DC.subject": "Machine Learning, Artificial Intelligence, ISRO, Time Series Analysis, Geodata",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#F7E7DF] text-[#221F1E] selection:bg-[#F99B8D]/30 selection:text-[#221F1E]">
        {children}
      </body>
    </html>
  );
}

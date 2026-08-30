import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Heshva Soni — Research Intern @ SAC-ISRO | AI & ML Engineer",
  description:
    "Portfolio of Heshva Soni, Research Intern at SAC-ISRO and IT Student building intelligent solutions with Data & Machine Learning.",
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
      <body className="min-h-full flex flex-col font-sans bg-[#F7E7DF] text-[#221F1E] selection:bg-[#F99C8E]/30 selection:text-[#221F1E]">
        {children}
      </body>
    </html>
  );
}

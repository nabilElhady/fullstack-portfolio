import "../styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nabil Elhady | SaaS Systems Architect",
  description: "Production-grade SaaS systems and scalable web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[rgb(36,36,36)] relative`}>
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
        {/* Noise Texture */}
        <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none z-0" />
        
        <div className="relative z-10 text-white min-h-screen flex flex-col justify-between">
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

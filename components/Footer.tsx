"use client";

import React from "react";
import Link from "next/link";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-12 px-5 border-t border-gray-800 bg-[rgb(36,36,36)] z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side: Branding/Copyright */}
        <div className="text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nabil Elhady. Built with Precision.</p>
        </div>

        {/* Center: Compliance Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <Link href="/pricing" className="hover:text-[#f7ab0a] transition-colors uppercase tracking-widest">
            Pricing
          </Link>
          <Link href="/refund" className="hover:text-[#f7ab0a] transition-colors uppercase tracking-widest">
            Refund Policy
          </Link>
          <Link href="/privacy" className="hover:text-[#f7ab0a] transition-colors uppercase tracking-widest">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#f7ab0a] transition-colors uppercase tracking-widest">
            Terms of Service
          </Link>
        </nav>

        {/* Right Side: Scroll to top */}
        <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300"
              aria-label="Scroll to top"
            >
                <div className="h-10 w-10 rounded-full border border-gray-600 group-hover:border-[#f7ab0a] flex items-center justify-center transition-colors">
                    <ChevronDoubleUpIcon className="h-5 w-5 text-gray-500 group-hover:text-[#f7ab0a] transition-colors" />
                </div>
                <span className="text-[10px] uppercase tracking-[4px] text-gray-600 group-hover:text-[#f7ab0a] transition-colors">Top</span>
            </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

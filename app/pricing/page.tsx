"use client";

import { motion } from "framer-motion";
import SectionDecor from "../../components/SectionDecor";

const features = [
  "Node.js + TypeScript + Express",
  "PostgreSQL with migrations",
  "BullMQ + Redis background jobs",
  "JWT auth with refresh tokens",
  "AWS Lambda deployment config",
  "Private GitHub repo access",
];

export default function PricingPage() {
  return (
    <main className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
      <SectionDecor />
      
      <div className="text-center mb-16 z-10 max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold sm:text-5xl md:text-7xl mb-6 tracking-tight"
        >
          Simple, <span className="gradientText">transparent</span> pricing
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-xl text-gray-400 font-light"
        >
          The ultimate backend foundation for scaling to 10k+ daily requests.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="glassCard max-w-md w-full relative group"
      >
        {/* Glowing Accent Corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7ab0a]/10 blur-[50px] rounded-full group-hover:bg-[#f7ab0a]/20 transition-all duration-500" />
        
        <div className="p-10 text-center relative z-10">
          <h2 className="text-sm font-semibold text-[#f7ab0a] uppercase tracking-[4px] mb-6">
            Pro Boilerplate
          </h2>
          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="text-7xl font-bold tracking-tighter text-white">
              $149
            </span>
            <span className="text-xl font-medium text-gray-500 uppercase">
              USD
            </span>
          </div>
          <p className="mt-4 text-gray-400 font-medium">
            One-time payment, lifetime access
          </p>
        </div>

        <div className="px-10 pb-12 relative z-10">
          <ul className="space-y-5 mb-12">
            {features.map((feature, i) => (
              <motion.li 
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f7ab0a]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#f7ab0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="glowButton w-full py-5 text-lg tracking-widest uppercase">
              Get Instant Access
            </button>
          </motion.div>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secure checkout via Paddle
          </div>
        </div>
      </motion.div>
    </main>
  );
}

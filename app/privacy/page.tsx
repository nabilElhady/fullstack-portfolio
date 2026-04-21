"use client";

import { motion } from "framer-motion";
import SectionDecor from "../../components/SectionDecor";

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
      <SectionDecor />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glassCard max-w-4xl w-full p-8 md:p-16 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 gradientText">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-12 border-b border-gray-800 pb-6 uppercase tracking-widest text-sm">
          Last updated: April 2026
        </p>
        
        <div className="space-y-10 text-gray-300 text-lg leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 uppercase tracking-wider">
              Data Collection
            </h2>
            <p>
              We collect basic information (such as your name and email address) solely for the purpose of 
              delivering the digital product, granting GitHub access, and sending critical security updates 
              regarding the boilerplate.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 uppercase tracking-wider">
              Secure Payments
            </h2>
            <p>
              We process all payments securely via <span className="text-[#f7ab0a] font-medium">Paddle</span> (our Merchant of Record). 
              We do not collect, process, or store your credit card information on our servers.
            </p>
          </section>
          
          <section className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h2 className="text-xl font-semibold text-[#f7ab0a] mb-4 uppercase tracking-wider">
              Our Commitment
            </h2>
            <p>
              "We will <span className="text-white font-medium underline decoration-[#f7ab0a]/50">never</span> sell, rent, or trade your personal data to third parties. 
              Your data is used only within our internal systems to maintain your product license and provide support."
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  );
}

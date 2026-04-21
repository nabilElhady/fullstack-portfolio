"use client";

import { motion } from "framer-motion";
import SectionDecor from "../../components/SectionDecor";

export default function RefundPage() {
  return (
    <main className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
      <SectionDecor />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glassCard max-w-4xl w-full p-8 md:p-16 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 gradientText">
          Refund Policy
        </h1>
        <p className="text-gray-500 mb-12 border-b border-gray-800 pb-6 uppercase tracking-widest text-sm">
          Last updated: April 2026
        </p>
        
        <div className="space-y-8 text-gray-300 text-lg leading-relaxed font-light">
          <p>
            Because this product provides instant, irrevocable access to digital source code, 
            <span className="text-white font-medium"> all sales are final.</span> 
            We do not offer refunds once access to the GitHub repository has been granted.
          </p>
          
          <p>
            Our boilerplate is built for experienced developers, and the codebase is provided as described. 
            If you experience technical issues setting up the boilerplate, or if you lose access to the repository, 
            please contact support at <a href="mailto:nabilelhady73@gmail.com" className="text-[#f7ab0a] hover:underline transition-all">nabilelhady73@gmail.com</a>.
          </p>
          
          <p className="bg-[#f7ab0a]/5 border-l-2 border-[#f7ab0a] p-6 italic hover:bg-[#f7ab0a]/10 transition-all">
            "We are committed to ensuring you can successfully run the code on your local machine and will provide 
            reasonable technical assistance for setup issues."
          </p>
        </div>
      </motion.div>
    </main>
  );
}

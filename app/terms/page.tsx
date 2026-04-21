"use client";

import { motion } from "framer-motion";
import SectionDecor from "../../components/SectionDecor";

export default function TermsPage() {
  return (
    <main className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
      <SectionDecor />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glassCard max-w-4xl w-full p-8 md:p-16 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 gradientText">
          Terms of Service
        </h1>
        <p className="text-gray-500 mb-12 border-b border-gray-800 pb-6 uppercase tracking-widest text-sm">
          Last updated: April 2026
        </p>
        
        <div className="space-y-12 text-gray-300 text-lg leading-relaxed font-light">
          <section>
            <p>
              By purchasing the <span className="text-white font-medium">Production-Grade Node.js Boilerplate</span>, you are granted a non-exclusive, 
              non-transferable license to use the code to build unlimited personal or commercial applications 
              (SaaS, internal tools, etc.).
            </p>
          </section>
          
          <section className="border-l-2 border-[#f7ab0a]/30 pl-8 py-2">
            <h2 className="text-xl font-semibold text-white mb-4 uppercase tracking-wider">
              Restrictions
            </h2>
            <p>
              You may <span className="text-white font-medium italic underline decoration-[#f7ab0a]/30">NOT</span> resell, redistribute, or openly publish the source code 
              of this boilerplate as a competing template, UI kit, or boilerplate product. 
              You may not share your private GitHub repository access with other developers who have not purchased a license.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 uppercase tracking-wider">
              Disclaimer
            </h2>
            <p className="text-gray-400 italic">
              "The code is provided &quot;as is&quot; without warranty of any kind, express or implied. 
              In no event shall the author be liable for any claim, damages, or other liability arising 
              from your use of the software."
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  );
}

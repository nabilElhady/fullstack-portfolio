import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  img: string;
  review: React.ReactNode;
  name: string;
};

function ExperienceCard({ img, review, name }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group w-[300px] min-h-[360px] sm:w-[400px] md:w-[500px] xl:w-[600px] rounded-2xl items-center flex-shrink-0 snap-center p-6 md:p-8 xl:p-10 transition-all duration-500 overflow-hidden flex flex-col text-left justify-between relative
      bg-gradient-to-br from-[#292929]/90 via-[#1f1f1f]/90 to-[#1a1a1a]/90
      backdrop-blur-md border border-[#333]/50
      hover:border-[#f7ab0a]/40 hover:shadow-2xl hover:shadow-[#f7ab0a]/10"
    >
      {/* Decorative gradient orb */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#f7ab0a]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-full relative z-10">
        {/* Quote icon */}
        <div className="absolute -top-2 -left-2 text-[#f7ab0a]/20 text-6xl font-serif">&ldquo;</div>
        
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#f7ab0a] tracking-[8px] md:tracking-[12px] uppercase text-center font-semibold mb-6">
          Client Review
        </h2>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f7ab0a] to-[#ff6b35] rounded-full opacity-60 blur-sm" />
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full flex-shrink-0 relative overflow-hidden ring-2 ring-[#f7ab0a]/30">
              <Image
                src={img}
                alt={`${name} profile picture`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 72px"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white capitalize">
              {name}
            </h3>
            <p className="text-sm text-gray-500">Verified Client</p>
          </div>
        </div>
      </div>
      
      {/* Stars */}
      <div className="w-full flex items-center gap-1.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            aria-hidden="true"
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#f7ab0a] drop-shadow-[0_0_3px_rgba(247,171,10,0.5)]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* Review content */}
      <div className="text-sm sm:text-base md:text-lg text-gray-300 w-full leading-relaxed">
        {review}
      </div>
    </motion.article>
  );
}

export default ExperienceCard;


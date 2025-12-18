import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  text: string;
  img: string;
};

export default function Skill({ text, img }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative flex cursor-pointer"
    >
      {/* Outer glow on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#f7ab0a] to-[#ff6b35] rounded-full opacity-0 group-hover:opacity-60 blur-md transition-all duration-300" />
      
      <div className="relative rounded-full border border-[#333] p-3 w-20 h-20 sm:w-24 sm:h-24 xl:w-28 xl:h-28 bg-[#1a1a1a]/80 backdrop-blur-sm group-hover:border-[#f7ab0a]/50 transition-all duration-300 ease-in-out overflow-hidden">
        <Image
          src={img}
          alt={`${text} skill icon`}
          fill
          className="object-contain p-3 group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 640px) 80px, (max-width: 1280px) 96px, 112px"
        />
      </div>
      
      {/* Hover overlay with skill name */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-gradient-to-br from-[#f7ab0a]/90 to-[#d89909]/90 rounded-full flex items-center justify-center">
        <p className="text-xs sm:text-sm font-bold text-black text-center uppercase tracking-wider px-2">
          {text}
        </p>
      </div>
    </motion.div>
  );
}


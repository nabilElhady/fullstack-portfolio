"use client";

import React from "react";
import { motion } from "framer-motion";

function SectionDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute border border-gray-700 rounded-full h-[300px] w-[300px] animate-pulse opacity-20"></div>
        <div className="absolute border border-gray-700 rounded-full h-[500px] w-[500px] opacity-10"></div>
        <div className="absolute border border-[#f7ab0a] rounded-full h-[650px] w-[650px] opacity-5 animate-pulse"></div>
        <div className="absolute border border-gray-700 rounded-full h-[900px] w-[900px] opacity-5"></div>
      </motion.div>
      
      {/* Subtle Side Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#f7ab0a]/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#f7ab0a]/5 rounded-full blur-[100px]" />
    </div>
  );
}

export default SectionDecor;

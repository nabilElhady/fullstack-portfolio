import React from "react";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

type Props = {};

const DownloadResume = (props: Props) => {
  const handleDownload = () => {
    // You can replace this with your actual resume URL
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Nabil_Elhady_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#f7ab0a] text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#f7ab0a]/50"
    >
      <span className="relative z-10">Download Resume</span>
      <ArrowDownTrayIcon className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#f7ab0a] to-[#ffb732]"
        initial={{ x: "100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default DownloadResume;


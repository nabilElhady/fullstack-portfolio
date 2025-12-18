import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";
import DownloadResume from "./DownloadResume";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, Call me Nabil",
      "Websites promote you 24/7: No employee will do that.",
      "It's not a bug. It's an undocumented feature!",
      "Building modern web experiences 🚀",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-0 justify-center items-center text-center overflow-hidden relative">
      <BackgroundCircles></BackgroundCircles>
      
      {/* Profile Image with Animated Glow Border */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative mb-4"
      >
        {/* Animated Gradient Border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#f7ab0a] via-[#ff6b35] to-[#f7ab0a] rounded-full opacity-75 blur-sm animate-pulse"></div>
        <div className="relative rounded-full h-32 w-32 md:h-36 md:w-36 overflow-hidden ring-2 ring-[#f7ab0a]/30">
          <Image
            src="https://i.ibb.co/S7M1QK7p/1751483179968.jpg"
            alt="Nabil Elhady Profile Picture"
            width={144}
            height={144}
            className="rounded-full object-cover"
            priority
          />
        </div>
      </motion.div>
      
      <div className="z-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs sm:text-sm uppercase text-gray-500 pb-2 tracking-[10px] sm:tracking-[15px] mt-3"
        >
          Full Stack Developer
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 sm:px-10 min-h-[80px] sm:min-h-[100px] flex items-center justify-center"
        >
          <span className="mr-2 sm:mr-3 text-glow-sm">{text}</span>
          <Cursor cursorColor="#f7AB0A"></Cursor>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 flex flex-wrap gap-2 sm:gap-3 justify-center items-center px-4"
        >
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experiences">
            <button className="heroButton">Experiences</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#client-work">
            <button className="heroButton">Client Work</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#blog">
            <button className="heroButton">Blog</button>
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6"
        >
          <DownloadResume />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;


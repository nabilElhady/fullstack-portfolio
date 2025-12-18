import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedStats from "./AnimatedStats";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen h-auto py-24 md:py-32 text-[#dbdbdb] flex relative flex-col max-w-7xl px-4 md:px-10 justify-start mx-auto items-center"
    >
      <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl mb-12 md:mb-16">
        About
      </h3>
      
      {/* Main Content - Image and Text */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-8 lg:gap-12 w-full">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-[300px] xl:h-[300px] rounded-full flex-shrink-0 relative overflow-hidden"
        >
          <Image
            src="https://i.ibb.co/S7M1QK7p/1751483179968.jpg"
            alt="Nabil Elhady professional photo"
            fill
            className="object-cover rounded-full"
            sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
          />
        </motion.div>
        
        <div className="space-y-4 md:space-y-6 px-4 md:px-8 lg:px-10 max-w-full lg:max-w-2xl text-center lg:text-left">
        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold">
          Building{" "}
          <span className="underline decoration-[#f7ab0a]/50">production-grade</span>{" "}
          systems that scale
        </h4>
        <div className="text-sm sm:text-base md:text-lg leading-relaxed max-w-prose mx-auto lg:mx-0 text-center lg:text-left">
          I&apos;m <strong className="text-[#f7ab0a]">Nabil Elhady</strong>, a Full Stack Developer 
          with <strong>820+ hours</strong> on Upwork and a <strong>100% job success rate</strong>. 
          I specialize in building high-performance web applications that handle 
          real-world traffic — including a resume platform processing <strong>10K+ daily requests</strong> and 
          an event-driven CRM running <strong>8+ months with zero downtime</strong>.
          <br /><br />
          <span className="text-gray-400">Core Stack:</span>{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">TypeScript</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">React</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">Next.js</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">Node.js</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">PostgreSQL</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">MongoDB</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">Redis</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">AWS</span>, and{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">Docker</span>.
          <br /><br />
          I don&apos;t just write code — I optimize database queries by <strong>85%</strong>, 
          reduce maintenance from <strong>35 hrs/week to 6 hrs/week</strong>, and build 
          systems that clients can rely on. Whether it&apos;s serverless architectures, 
          AI integrations, or complex API designs, I deliver solutions that work.
        </div>
        </div>
      </div>
      
      {/* Stats Section - Always Full Width Below */}
      <div className="w-full mt-12 lg:mt-16">
        <AnimatedStats />
      </div>
    </motion.div>
  );
}

export default About;

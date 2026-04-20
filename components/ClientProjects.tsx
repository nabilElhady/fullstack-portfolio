import React from "react";
import { motion } from "framer-motion";
import ClientProjectCard from "./ClientProjectCard";
import { clientProjects } from "../data/clientProjectsData";

type Props = {};

function ClientProjects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen h-auto py-24 md:py-32 flex relative flex-col text-center md:text-left max-w-7xl px-4 sm:px-6 md:px-10 justify-start mx-auto items-center"
    >
      {/* Section Title */}
      <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl mb-6">
        Client Work
      </h3>

      {/* Section Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-12 text-center max-w-3xl"
      >
        <p className="text-gray-400 text-sm sm:text-base md:text-lg">
          Production systems I&apos;ve built for clients. Due to NDAs, code and
          demos cannot be shared, but here are the challenges I solved and
          results I delivered.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            In Production
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            In Development
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            Completed
          </span>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4">
        {clientProjects.map((project, index) => (
          <ClientProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Upwork Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-10"
      >
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-[#f7ab0a]">Top Rated</p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Upwork Status
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-[#f7ab0a]">100%</p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Job Success
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-[#f7ab0a]">890+</p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Hours Logged
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-[#f7ab0a]">5</p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Production Systems
          </p>
        </div>
      </motion.div>

      {/* Background Decorations */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-[#f7ab0a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-[#f7ab0a]/5 rounded-full blur-3xl pointer-events-none" />
    </motion.div>
  );
}

export default ClientProjects;

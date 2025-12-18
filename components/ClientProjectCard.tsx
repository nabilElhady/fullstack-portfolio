import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ClientProject } from "../data/clientProjectsData";

type Props = {
  project: ClientProject;
  index: number;
};

const ClientProjectCard = ({ project, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-[#292929]/80 backdrop-blur-sm rounded-xl border border-[#333] hover:border-[#f7ab0a]/50 transition-all duration-300 overflow-hidden"
    >
      {/* Confidential Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a]/90 border border-[#f7ab0a]/30 rounded-full text-xs font-medium text-[#f7ab0a]">
          <svg
            className="w-3.5 h-3.5"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          NDA Protected
        </span>
      </div>

      {/* Status Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
            project.status === "production"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : project.status === "ongoing"
              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
              : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              project.status === "production"
                ? "bg-green-400 animate-pulse"
                : project.status === "ongoing"
                ? "bg-blue-400 animate-pulse"
                : "bg-gray-400"
            }`}
          />
          {project.status === "production"
            ? "In Production"
            : project.status === "ongoing"
            ? "In Development"
            : "Completed"}
        </span>
      </div>

      <div className="p-6 pt-14">
        {/* Title & Subtitle */}
        <div className="mb-4">
          <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#f7ab0a] transition-colors">
            {project.title}
          </h4>
          <p className="text-sm text-gray-400 mt-1">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {project.achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a]/60 rounded-lg p-3 border border-[#333] group-hover:border-[#f7ab0a]/20 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{achievement.icon}</span>
                <div>
                  <p className="text-lg font-bold text-[#f7ab0a]">
                    {achievement.metric}
                  </p>
                  <p className="text-xs text-gray-400">{achievement.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Challenges */}
        <div className="mb-5">
          <h5 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            Key Contributions
          </h5>
          <ul className="space-y-1.5">
            {project.challenges.slice(0, 3).map((challenge, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-gray-400"
              >
                <span className="text-[#f7ab0a] mt-0.5">▸</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h5 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
            Technologies
          </h5>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-[#1a1a1a] rounded-md text-xs text-gray-300 border border-[#333]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f7ab0a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ClientProjectCard;

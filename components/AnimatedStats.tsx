import React from "react";
import { motion } from "framer-motion";

type Props = {};

const AnimatedStats = (props: Props) => {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "8", label: "Projects Completed" },
    { number: "16+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl mx-auto"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-6 md:p-8 bg-[#292929]/50 backdrop-blur-sm rounded-xl border border-[#f7ab0a]/20 hover:border-[#f7ab0a]/60 hover:bg-[#292929]/80 transition-all duration-300 hover:scale-105 group shadow-lg hover:shadow-[#f7ab0a]/20"
        >
          <motion.span
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f7ab0a] mb-3"
            whileHover={{ scale: 1.1 }}
          >
            {stat.number}
          </motion.span>
          <span className="text-xs md:text-sm lg:text-base text-gray-400 text-center uppercase tracking-wider group-hover:text-gray-300 transition-colors font-medium">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedStats;


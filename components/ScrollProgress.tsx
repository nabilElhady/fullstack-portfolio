import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

type Props = {};

const ScrollProgress = (props: Props) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#f7ab0a] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;


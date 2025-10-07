import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  text: string;
  img: string;
};

export default function Skill({ text, img }: Props) {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        className="rounded-full border border-gray-500 p-2 w-20 h-20 sm:w-24 sm:h-24 xl:w-26 xl:h-26 group-hover:grayscale transition-all duration-300 ease-in-out relative overflow-hidden"
      >
        <Image
          src={img}
          alt={`${text} skill icon`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 80px, (max-width: 1280px) 96px, 104px"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-70 transition-all duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:h-26 xl:w-26 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100 text-center">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

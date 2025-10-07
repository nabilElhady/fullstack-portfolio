import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen h-auto py-20 lg:py-0 lg:h-screen text-[#dbdbdb] flex relative flex-col text-center lg:text-left lg:flex-row max-w-7xl px-4 md:px-10 justify-center lg:justify-evenly mx-auto items-center gap-8 lg:gap-12"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl z-10">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-[300px] xl:h-[300px] rounded-full flex-shrink-0 relative overflow-hidden mt-16 lg:mt-0"
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
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background about me
        </h4>
        <div className="text-sm sm:text-base md:text-lg leading-relaxed max-w-prose mx-auto lg:mx-0 text-center lg:text-left">
          I&apos;m <strong>Nabil Elhady</strong>, a Full Stack Developer with a strong focus on
          Frontend Engineering. I graduated in Computer Science (2022) and have built 
          a solid track record with <strong>2+ years of freelancing experience</strong> and 
          3 years of project-based development, delivering modern, scalable, and 
          high-performance web applications.
          <br /><br />
          My core competencies include{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">HTML</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">CSS</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">SASS</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">Tailwind CSS</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">JavaScript</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">React</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">Redux</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">Next.js</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">Node.js</span>,{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">MongoDB</span>, and{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-medium">AWS</span>.
          <br /><br />
          My journey began with a passion for designing beautiful, user-friendly
          interfaces, and over time I expanded my expertise to include backend
          development and cloud/serverless architectures. Today, I bring
          together frontend creativity and backend problem-solving to deliver
          end-to-end solutions that are both functional and delightful to use.
        </div>
      </div>
    </motion.div>
  );
}

export default About;

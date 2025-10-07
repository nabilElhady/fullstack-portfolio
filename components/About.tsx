import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen text-[#dbdbdb] flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[3rem] md:top-[24] uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="-mb-[8rem] w-[5rem] h-[5rem] rounded-full opacity-0 sm:opacity-100 flex-shrink-0 md:mb-0 md:w-64 md:h-64 xl:w-[300px] xl:h-[300px] relative overflow-hidden"
      >
        <Image
          src="https://i.ibb.co/S7M1QK7p/1751483179968.jpg"
          alt="Nabil Elhady professional photo"
          fill
          className="object-cover rounded-full"
          sizes="(max-width: 768px) 5rem, (max-width: 1280px) 16rem, 300px"
        />
      </motion.div>
      <div className="space-y-3 px-0 md:px-10 relative top-10 md:top-0">
        <h4 className="text-md font-semibold md:text-4xl ">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background about me
        </h4>
        <div className="text-base md:text-lg leading-relaxed">
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

import React from "react";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";

function About({}) {
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
      <motion.img
        initial={{}}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.2 }}
        src="https://i.ibb.co/S7M1QK7p/1751483179968.jpg"
        alt=""
        className="-mb-[8rem] w-[5rem] h-[5rem] rounded-full opacity-0 sm:opacity-100 object-cover flex-shrink-0 md:mb-0 md: md:w-64 md:h-64 xl:w-[300px] xl:h-[300px] rounded-full"
      ></motion.img>
      <div className="space-y-3 px-0 md:px-10 relative top-10 md:top-0">
        <h4 className="text-md font-semibold md:text-4xl ">
          here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background about me
        </h4>
        <div className="text-l">
          {" "}
          I’m Nabil Elhady, a Full Stack Developer with a strong focus on
          Frontend Engineering. I graduated in Computer Science (2022) and since
          then have built a solid track record with 2+ years of freelancing
          experience and 3 years of project-based development, delivering
          modern, scalable, and high-performance web applications. &nbsp;
          <span className="underline decoration-[#f7ab0a]/50">HTML</span>
          &nbsp; ,<span className="underline decoration-[#f7ab0a]/50">CSS</span>
          &nbsp;,
          <span className="underline decoration-[#f7ab0a]/50">SASS</span>
          &nbsp; ,
          <span className="underline decoration-[#f7ab0a]/50">
            tailwind css
          </span>
          &nbsp;,
          <span className="underline decoration-[#f7ab0a]/50">js</span>
          &nbsp;,
          <span className="underline decoration-[#f7ab0a]/50">react</span>
          &nbsp;and &nbsp;
          <span className="underline decoration-[#f7ab0a]/50">redux</span>
          &nbsp; are some of my skills.
          <br /> <br />
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

import React from "react";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";

function About({}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[3rem] md:top-[24] uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        About
      </h3>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="https://media.licdn.com/dms/image/C4D03AQH3V8mICejh-w/profile-displayphoto-shrink_800_800/0/1660066061383?e=1677715200&v=beta&t=aOr5duEVNReWwcF2I2FFIzNA2pP6FU0ofzlu9Kdo__4"
        alt=""
        className="-mb-[8rem] w-[5rem] h-[5rem] rounded-full object-cover flex-shrink-0 md:mb-0 md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
      ></motion.img>
      <div className="space-y-3 px-0 md:px-10 relative top-10 md:top-0">
        <h4 className="text-md font-semibold md:text-4xl ">
          here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background about me
        </h4>
        <div className="text-l">
          {" "}
          Hi iam{" "}
          <span className="underline decoration-[#f7ab0a]/50">
            Nabil Elhady
          </span>
          &nbsp; iam a junior front end developer I graduated from the
          University in 2022 with a degree in Computer Science My interests are
          in Front End Engineering, and I love to create beautiful and
          performant products with delightful user experiences. my skills are
          &nbsp;
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
          &nbsp;,
          <span className="underline decoration-[#f7ab0a]/50">redux</span>
          &nbsp;.
          <br /> <br />i have developed so many beautiful websites ,i upload
          them continuously yo my github repository if you got any questions
          please let me know
        </div>
      </div>
    </motion.div>
  );
}

export default About;

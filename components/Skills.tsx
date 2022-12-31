import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      {" "}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Skills
      </h3>
      <div className="grid grid-cols-3 gap-5 relative top-10">
        <Skill
          text="html"
          img="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
        ></Skill>
        <Skill
          text="css"
          img="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-opencode-css-8.png"
        ></Skill>
        <Skill
          text="js"
          img="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
        ></Skill>
        <Skill
          text="sass"
          img="https://www.seekpng.com/png/full/141-1415689_vendor-prefixes-for-css3-animations-using-scss-sass.png"
        ></Skill>
        <Skill
          text="tailwind"
          img="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        ></Skill>
        <Skill
          text="react"
          img="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        ></Skill>
        <Skill
          text="redux"
          img="https://i.postimg.cc/KYCRBhLn/My-project-17.png"
        ></Skill>
        <Skill
          text="firebase"
          img="https://img.icons8.com/color/512/firebase.png"
        ></Skill>
        <Skill
          text="next.js"
          img="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
        ></Skill>
      </div>
    </motion.div>
  );
}

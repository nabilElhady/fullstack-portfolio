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
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 relative top-10">
        <Skill
          text="html"
          img="https://i.ibb.co/0DQ1w1L/5847f5bdcef1014c0b5e489c.png"
        ></Skill>
        <Skill
          text="css"
          img="https://i.ibb.co/Z6vFJmj/kisspng-web-development-cascading-style-sheets-css3-html-5ae480845f38f3-0110241015249245483901.png"
        ></Skill>
        <Skill
          text="js"
          img="https://i.ibb.co/BfbtQBY/pngwing-com-2.png"
        ></Skill>
        <Skill text="sass" img="https://i.ibb.co/Z222y1j/Sass-logo.png"></Skill>
        <Skill
          text="tailwind"
          img="https://i.ibb.co/Mkt537h/tailwindcss-icon.png"
        ></Skill>
        <Skill
          text="react"
          img="https://i.ibb.co/6txhVbc/1174949-js-react-js-logo-react-react-native-icon.png"
        ></Skill>
        <Skill
          text="redux"
          img="https://i.postimg.cc/KYCRBhLn/My-project-17.png"
        ></Skill>
        <Skill
          text="firebase"
          img="https://i.ibb.co/mvW4NRg/firebase-1.png"
        ></Skill>
        <Skill
          text="next.js"
          img="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
        ></Skill>
        <Skill text="Sanity" img="https://i.ibb.co/sysDtKG/Sanity.png"></Skill>
        <Skill
          text="styled C"
          img="https://i.ibb.co/j8cFrxF/file-type-styled.png"
        ></Skill>
        <Skill
          text="expressJS"
          img="https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-11217528-9200532.png?f=webp&w=256"
        ></Skill>
        <Skill
          text="mongodb"
          img="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp&w=256"
        ></Skill>
        <Skill
          text="nodeJS"
          img="https://img.icons8.com/?size=48&id=54087&format=png"
        ></Skill>
      </div>
    </motion.div>
  );
}

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
      className="min-h-screen h-auto py-24 md:py-32 flex relative flex-col text-center md:text-left max-w-[2000px] px-4 md:px-10 justify-start mx-auto items-center"
    >
      <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl mb-12 md:mb-16">
        Skills
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-5">
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
          text="next.js"
          img="https://cdn.worldvectorlogo.com/logos/next-js.svg"
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
        <Skill
          text="AWS S3"
          img="https://i.ibb.co/6c28zP5R/Simple-Storage-Service.png"
        ></Skill>
        <Skill
          text="API Gateway"
          img="https://i.ibb.co/Kp93nxtg/API-Gateway.png"
        ></Skill>
        <Skill
          text="AWS Lambda  "
          img="https://i.ibb.co/x8Hy4Mdx/Lambda.png"
        ></Skill>
        <Skill
          text="TypeScript"
          img="https://cdn.iconscout.com/icon/free/png-512/free-typescript-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-7-pack-logos-icons-2945272.png?f=webp&w=256"
        ></Skill>
        <Skill
          text="PostgreSQL"
          img="https://cdn.iconscout.com/icon/free/png-512/free-postgresql-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175119.png?f=webp&w=256"
        ></Skill>
        <Skill
          text="Redis"
          img="https://cdn.iconscout.com/icon/free/png-512/free-redis-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175105.png?f=webp&w=256"
        ></Skill>
        <Skill
          text="Docker"
          img="https://cdn.iconscout.com/icon/free/png-512/free-docker-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-2944835.png?f=webp&w=256"
        ></Skill>
        <Skill
          text="Git"
          img="https://cdn.iconscout.com/icon/free/png-512/free-git-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175218.png?f=webp&w=256"
        ></Skill>
      </div>
    </motion.div>
  );
}

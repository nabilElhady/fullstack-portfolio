import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
type Props = {};

const Projects = (props: Props) => {
  const skills1 = [
    "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
    "https://www.seekpng.com/png/full/141-1415689_vendor-prefixes-for-css3-animations-using-scss-sass.png",
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
    "https://img.icons8.com/color/512/firebase.png",
  ];
  const js = "https://i.ibb.co/BfbtQBY/pngwing-com-2.png";
  const sass = "https://i.ibb.co/Z222y1j/Sass-logo.png";
  const tailwind = "https://i.ibb.co/Mkt537h/tailwindcss-icon.png";
  const next =
    "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png";
  const sanity = "https://i.ibb.co/sysDtKG/Sanity.png";
  const redux =
    "https://cdn.iconscout.com/icon/free/png-512/free-redux-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-10-pack-icons-283024.png?f=webp&w=256";
  const react =
    "https://i.ibb.co/6txhVbc/1174949-js-react-js-logo-react-react-native-icon.png";
  const firebase = "https://i.ibb.co/mvW4NRg/firebase-1.png";
  const css =
    "https://i.ibb.co/Z6vFJmj/kisspng-web-development-cascading-style-sheets-css3-html-5ae480845f38f3-0110241015249245483901.png";
  const html = "https://i.ibb.co/0DQ1w1L/5847f5bdcef1014c0b5e489c.png";
  const nodejs = "https://img.icons8.com/?size=48&id=54087&format=png";
  const mongodb =
    "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp&w=256";
  const expressjs =
    "https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-11217528-9200532.png?f=webp&w=256";
  const extra = [
    {
      link: [,],
    },
  ];
  const images = [];
  const projectss = [
    {
      src: "https://iili.io/dMfpBlj.png",
      links: [react, tailwind, redux, nodejs, mongodb, expressjs],
      porject: "full stack ecommerce",
      descripe:
        "A responsive e-commerce platform with React, Tailwind CSS, Node.js, Express, and MongoDB. Features include product management, admin dashboard, secure authentication, shopping cart, and order processing, with payment gateway integration and a clean, modern UI.",
      git: "https://github.com/nabilElhady/ecommerce",
      demo: "https://ecommerce-full-stack-final.vercel.app/",
    },
    {
      src: "https://iili.io/HuFVXsf.png",
      links: [js, sass, react, redux, firebase],
      porject: "Amazon Clone",
      descripe:
        "Amazon Clone with Firebase Authentication Sign up and sign in for a fast, responsive site. You can add your items to your basket and check out. You can delete any items from your basket.",
      git: "https://github.com/nabilElhady/amazon-react-clone",
      demo: "https://amazoon-clone132.web.app/",
    },
    {
      src: "https://i.ibb.co/G9KPhFm/Screenshot-1-removebg-preview.png",
      links: [js, sass, react, next, sanity],
      porject: "Meduim Clone",
      descripe:
        "Meduim Clone connected with sanity backend admins can create posts and edit them and visitors can comment on the posts.",
      git: "https://github.com/nabilElhady/meduim-clone5",
      demo: "https://meduim-clone5.vercel.app/",
    },

    {
      src: "https://iili.io/HuKmNls.png",
      links: [js, react, redux, sass, firebase],
      porject: "Disney Clone",
      descripe:
        "Disney clone with Google authorization: after logging in, your Google photo will be on the header of the fully responsive web site. ",
      git: "https://github.com/nabilElhady/disney-clone-by-react",
      demo: "https://disney-4cc60.web.app ",
    },

    {
      src: "https://i.ibb.co/GP58LQC/My-project-12.png",
      links: [html, css, js, sass],
      porject: "tourism website",
      descripe:
        "Tourism company website: fully responsive website with multiple travel cards and a review section.  ",
      git: "https://github.com/nabilElhady/tourism-company-site-by-js",
      demo: "https://nabilelhady.github.io/tourism-company-site-by-js",
    },

    {
      src: "https://i.postimg.cc/pL7LKdZT/My-project-14.png",
      links: [html, css, js],
      porject: "dice game",
      descripe:
        "dice 1v1 game with JS: roll the dice and get points equal to the number on the dice; roll until you press hold and get all the points; or roll until the dice hits number 1 and you lose all. The first player to 100 points wins the game.",
      git: "https://github.com/nabilElhady/dice-game-by-js",
      demo: "https://nabilelhady.github.io/dice-game-by-js/",
    },

    {
      src: "https://i.postimg.cc/KjgNvjJM/My-project-16.png",
      links: [html, css, js],
      porject: "flight booking site",
      descripe:
        "site to book your flight, and you can book a hotel wherever you want, with a fully responsive website with reviews and a comment section.",
      git: "https://github.com/nabilElhady/hotel-booking-site-by-js",
      demo: "https://nabilelhady.github.io/hotel-booking-site-by-js/",
    },
    {
      src: "https://i.postimg.cc/KjZTvRH9/My-project-18.png",
      links: [html, css, js],
      porject: "bankist  site",
      descripe:
        "This site is a demo for actual bank transactions. You can try it by entering the first letter of his name and his father's name, as well as the passcode for the first user: (ne) code:1111 second: (am) 2222 third:(me) 3333 fourth:(n7) 4444",
      git: "https://github.com/nabilElhady/bankist-site-by-js",
      demo: "https://nabilelhady.github.io/bankist-site-by-js/",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen h-[650px]  relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto  items-center z-0"
    >
      {" "}
      <h3 className="absolute lg:top-24 top-12  uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Projects
      </h3>
      <div className="relative  items-center text-center  w-full flex overflow-x-scroll overflow-y-hidden snap-x md:snap-mandatory z-20 scrollbar scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80  -top-16 lg:-top-16 xl:top-0 h-[600px] ">
        {/* projects */}
        {projectss.map((item, i) => (
          <div
            key="1"
            className="w-screen relative top-10 lg:top-24  flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 md:h-sceen"
          >
            <div className=" text-center flex flex-col lg:flex-row ">
              <div className="text-center justify-center flex flex-col items-center  w-[400px]">
                <div className="relative text-center flex justify-center items-center">
                  <motion.img
                    className=" h-[150px] mr-10 max-w-[800px] w-[330px] xl:h-[200px]  xl:w-[400px] mb-5 relative left-5"
                    initial={{ y: -50, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    src={item.src}
                  ></motion.img>
                  <motion.div
                    className="absolute top-0  h-[150px] mr-10 max-w-[800px] w-[330px] xl:h-[200px]  xl:w-[400px] mb-5 left-5 gray-scale bg-[#181706] opacity-0 hover:opacity-80 transition-opacity flex justify-center items-center space-x-10   "
                    initial={{ y: -50 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ y: 0 }}
                  >
                    <img
                      className="cursor-pointer h-10"
                      src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                      onClick={() => {
                        window.open(item.git);
                      }}
                      alt=""
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5625/5625726.png"
                      className="cursor-pointer h-10"
                      onClick={() => {
                        window.open(item.demo);
                      }}
                      alt=""
                    />
                  </motion.div>
                </div>
                <div className="flex mb-5  space-x-10 md:space-x-10 text-center justify-center w-[500px] items-center">
                  {item.links.map((item) => (
                    <img
                      className=" h-[30px]  md:h-[40px] "
                      key="item"
                      src={item}
                    ></img>
                  ))}
                </div>
              </div>
              <div className="space-y-7 px-0 md:px-10 max-w-6xl relative z-10 w-full shrink-0 w-[400px]">
                <h4 className="text-base md:text-xl  lg:text-4xl font-semibold text-center  text-black ">
                  <span className="underline decoration-[#f7ab0a]/50">
                    Case study {i + 1} of {projectss.length}{" "}
                  </span>
                  {item.porject}
                </h4>
                <p className="text-base w-[300px] md:w-full  relative left-12 md:left-0 xl:text-lg text-center md:text-left text-[#dbdbdb] ">
                  {item.descripe}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;

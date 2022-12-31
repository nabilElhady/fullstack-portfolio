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
  const js =
    "https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png";
  const sass =
    "https://www.seekpng.com/png/full/141-1415689_vendor-prefixes-for-css3-animations-using-scss-sass.png";
  const redux =
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png";
  const react =
    "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png";
  const firebase = "https://img.icons8.com/color/512/firebase.png";
  const css =
    "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-opencode-css-8.png";
  const html =
    "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png";
  const extra = [
    {
      link: [,],
    },
  ];
  const images = [];
  const projectss = [
    {
      src: "https://iili.io/HuFVXsf.png",
      links: [js, sass, react, redux, firebase],
      porject: "Amazon Clone",
      descripe:
        "Amazon Clone with firebase authentication sign up and sign in fast responsive site you can add your items to your basket and check out you can delete any items from your basket ",
      git: "https://github.com/nabilElhady/amazon-react-clone",
      demo: "https://amazoon-clone132.web.app/",
    },
    {
      src: "https://iili.io/HuKjFAN.png",
      links: [js, react, redux, sass],
      porject: "Food Order",
      descripe:
        "restaurant website to order food online you can add your plates to your basket and you can delete any items from your basket the website is full responsive ",
      git: "https://github.com/nabilElhady/Food-Order-Site-By-React",
      demo: "https://fir-frontend-aec1e.web.app/",
    },
    {
      src: "https://iili.io/HuKt5Vn.png",
      links: [js, react, redux, css],
      porject: "note web application",
      descripe:
        "note web application you can take your note for some thing u don't want to forget responsive website and if  changed your mind you can update the note whenever you want",
      git: "https://github.com/nabilElhady/note-site-by-react",
      demo: "https://fir-49f5e.web.app/ ",
    },
    {
      src: "https://iili.io/HuKDiQ9.png",
      links: [js, react, redux, sass],
      porject: "Schedule web application",
      descripe:
        "Schedule web application to save your important dates and you can mark your purchases with dates full responsive web application  ",
      git: "https://github.com/nabilElhady/Schedule-web-application-by-react",
      demo: "https://schedule-8b95f.web.app/ ",
    },
    {
      src: "https://iili.io/HuKmNls.png",
      links: [js, react, redux, sass, firebase],
      porject: "Disney Clone",
      descripe:
        "Disney clone with google authorization after log in your google photo will be on the header full responsive web site ",
      git: "https://github.com/nabilElhady/disney-clone-by-react",
      demo: "https://disney-4cc60.web.app ",
    },
    {
      src: "https://i.ibb.co/NxmCL65/My-project-9.png",
      links: [js, react, redux, sass, firebase],
      porject: "Book Store",
      descripe:
        "Book Store web application you can put your books in your basket and delete them when ever you want full responsive web application",
      git: "https://github.com/nabilElhady/book-store-by-react",
      demo: "https://custom-c0db0.web.app/ ",
    },
    {
      src: "https://i.ibb.co/GHqTJpZ/My-project-10.png",
      links: [js, react, redux, sass],
      porject: "weather web application",
      descripe:
        "weather web application you can search weather by the city will give you the current weather and temperature and the date of the day",
      git: "https://github.com/nabilElhady/weather-site-by-city-by-react",
      demo: "https://weather-9417.web.app/  ",
    },
    {
      src: "https://i.ibb.co/f1h8W93/My-project-11.png",
      links: [js, react, redux, css],
      porject: "Shop list",
      descripe:
        "shop list web application you can take it with you to the store to remind you with stuff you want to buy you can increase item number and decrease and remove the item full responsive web application",
      git: "https://github.com/nabilElhady/shopping-list-by-react",
      demo: "https://shop-list-7eed2.web.app/",
    },
    {
      src: "https://i.ibb.co/GP58LQC/My-project-12.png",
      links: [html, css, js, sass],
      porject: "tourism website",
      descripe:
        "tourism company website full responsive website with multiple tavel planes cards and review section ",
      git: "https://github.com/nabilElhady/tourism-company-site-by-js",
      demo: "https://nabilelhady.github.io/tourism-company-site-by-js",
    },
    {
      src: "https://i.postimg.cc/9XNtRd9H/My-project-13.png",
      links: [html, css, js],
      porject: "geolocation with marker",
      descripe:
        "get your location on the map and put marker with your activities and duration and distance on it",
      git: "https://github.com/nabilElhady/geolocation-with-marker-by-js",
      demo: "https://nabilelhady.github.io/geolocation-with-marker-by-js/",
    },
    {
      src: "https://i.postimg.cc/pL7LKdZT/My-project-14.png",
      links: [html, css, js],
      porject: "dice game",
      descripe:
        "dice 1v1 game with js you can roll the dice and u get points equal to the number on the dice u can roll until u press hold you get all the points or the dice hit number 1 you lose all and first one to hit 100 points win",
      git: "https://github.com/nabilElhady/dice-game-by-js",
      demo: "https://nabilelhady.github.io/dice-game-by-js/",
    },
    {
      src: "https://i.postimg.cc/yYg5kYkn/My-project-15.png",
      links: [html, css, js],
      porject: "guess my number game",
      descripe:
        "guess my number game you can enter your guess to the number between 1 and 20 and it will tell you higher or lower until you get the number",
      git: "https://github.com/nabilElhady/guess-my-number-game-by-js",
      demo: "https://nabilelhady.github.io/guess-my-number-game-by-js/",
    },
    {
      src: "https://i.postimg.cc/KjgNvjJM/My-project-16.png",
      links: [html, css, js],
      porject: "flight booking site",
      descripe:
        "site to book your flite and u can book for a hotel wherever you want full responsive website with reviews and comment section",
      git: "https://github.com/nabilElhady/hotel-booking-site-by-js",
      demo: "https://nabilelhady.github.io/hotel-booking-site-by-js/",
    },
    {
      src: "https://i.postimg.cc/KjZTvRH9/My-project-18.png",
      links: [html, css, js],
      porject: "bankist  site",
      descripe:
        "this site is demo for areal bank transactions there are 4 users in this demo you can try by entering first letter of his name and father name and enter the passcode first user: (ne) code:1111 second: (am) 2222 third:(me) 3333 fourth:(n7) 4444",
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
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Projects
      </h3>
      <div className="relative  w-full flex overflow-x-scroll overflow-y-hidden snap-x md:snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80   ">
        {/* projects */}
        {projectss.map((item, i) => (
          <div
            key="1"
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-sceen"
          >
            <div className=" text-center flex flex-col lg:flex-row">
              <div className="text-center justify-center flex flex-col items-center">
                <div className="relative">
                  <motion.img
                    className=" h-[150px] max-w-[800px] w-[330px] md:h-[200px] md:max-w-[600px] md:w-[500px] mb-5 relative"
                    initial={{ y: -50, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    src={item.src}
                  ></motion.img>
                  <motion.div
                    className="absolute top-0  h-[150px] max-w-[800px] w-[330px] md:h-[200px] md:max-w-[600px] md:w-[500px] gray-scale bg-[#181706] opacity-0 hover:opacity-80 transition-opacity flex justify-center items-center space-x-10   "
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
                <div className="flex space-x-10 md:space-x-10 text-center justify-center">
                  {item.links.map((item) => (
                    <img
                      className="h-[27px] w-[30px] md:w-[45px] h-[50px]"
                      key="item"
                      src={item}
                    ></img>
                  ))}
                </div>
              </div>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl relative z-10 ">
                <h4 className="text-xl lg:text-4xl font-semibold text-center  text-black ">
                  <span className="underline decoration-[#f7ab0a]/50">
                    Case study {i + 1} of {projectss.length}{" "}
                  </span>
                  {item.porject}
                </h4>
                <p className="text-sm xl:text-lg text-center md:text-left text-[#dbdbdb] ">
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

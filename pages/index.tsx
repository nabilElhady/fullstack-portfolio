import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experinces from "../components/Experinces";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y   z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 "
      style={{ scrollBehavior: "smooth" }}
    >
      <Head>
        <title>portfolio</title>
      </Head>

      {/* header */}
      <Header></Header>

      {/* hero */}
      <section id="hero" className="snap-center">
        <Hero></Hero>
      </section>
      {/* about */}
      <section id="about" className="snap-start">
        <About></About>
      </section>

      {/* experinces */}
      <section id="experiencs" className="snap-start">
        <Experinces></Experinces>
      </section>

      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills></Skills>
      </section>

      {/* projects */}

      <section id="projects" className="snap-start">
        <Projects></Projects>
      </section>

      {/* contacts me */}
      <section id="contact" className="snap-start">
        <ContactMe></ContactMe>
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className=" flex items-center justify-center ">
            <ChevronDoubleUpIcon className="h-10 w-10 rounded-full grayscale hover:grayscale-0 cursor-pointer border border-[#f7ab0a] bg-[#f7ab0a]/80"></ChevronDoubleUpIcon>
            {/* <img
              src="https://media.licdn.com/dms/image/C4D03AQH3V8mICejh-w/profile-displayphoto-shrink_800_800/0/1660066061383?e=1677715200&v=beta&t=aOr5duEVNReWwcF2I2FFIzNA2pP6FU0ofzlu9Kdo__4"
              className="h-10 w-10 rounded-full grayscale hover:grayscale-0 cursor-pointer"
              alt=""
            /> */}
          </div>
        </footer>
      </Link>
    </div>
  );
}

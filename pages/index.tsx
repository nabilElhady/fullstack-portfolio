import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import ScrollProgress from "../components/ScrollProgress";
import Link from "next/link";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y z-0 overflow-y-scroll scrollbar-thin overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 md:scrollbar-track-transparent"
      style={{ scrollBehavior: "smooth" }}
    >
      <ScrollProgress />
      <Head>
        <title>Nabil Elhady - Full Stack Developer Portfolio</title>
        <meta name="description" content="Full Stack Developer with 2+ years of freelancing experience specializing in React, Next.js, Node.js, and AWS. View my projects and get in touch." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Full Stack Developer, React Developer, Next.js, Node.js, AWS, Frontend Developer, Web Development" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nabilelhady.dev/" />
        <meta property="og:title" content="Nabil Elhady - Full Stack Developer Portfolio" />
        <meta property="og:description" content="Full Stack Developer with 2+ years of freelancing experience specializing in React, Next.js, Node.js, and AWS." />
        <meta property="og:image" content="https://i.ibb.co/S7M1QK7p/1751483179968.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nabilelhady.dev/" />
        <meta property="twitter:title" content="Nabil Elhady - Full Stack Developer Portfolio" />
        <meta property="twitter:description" content="Full Stack Developer with 2+ years of freelancing experience specializing in React, Next.js, Node.js, and AWS." />
        <meta property="twitter:image" content="https://i.ibb.co/S7M1QK7p/1751483179968.jpg" />
        
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#f7ab0a" />
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

      {/* experiences */}
      <section id="experiences" className="snap-start">
        <Experiences></Experiences>
      </section>

      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills></Skills>
      </section>

      {/* projects */}

      <section id="projects" className="md:snap-start">
        <Projects></Projects>
      </section>

      {/* contacts me */}
      <section id="contact" className="snap-start">
        <ContactMe></ContactMe>
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-10 relative left-[50%] cursor-pointer" aria-label="Scroll to top">
          <div className="flex items-center justify-center">
            <ChevronDoubleUpIcon 
              className="h-10 w-10 rounded-full grayscale hover:grayscale-0 cursor-pointer border border-[#f7ab0a] bg-[#f7ab0a]/80 hover:bg-[#f7ab0a] transition-all duration-300 hover:scale-110" 
              aria-label="Scroll to top button"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

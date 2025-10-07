import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, Call me Nabil",
      "Websites promote you 24/7: No employee will do that.",
      "It&apos;s not a bug. It&apos;s an undocumented feature!",
      "Building modern web experiences 🚀",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-0 justify-center items-center text-center overflow-hidden">
      <BackgroundCircles></BackgroundCircles>
      <div className="relative rounded-full h-32 w-32 mx-auto overflow-hidden">
        <Image
          src="https://i.ibb.co/S7M1QK7p/1751483179968.jpg"
          alt="Nabil Elhady Profile Picture"
          width={128}
          height={128}
          className="rounded-full object-cover"
          priority
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] mt-5">
          Full Stack Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7AB0A"></Cursor>
        </h1>
        <div className="mt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experiences">
            <button className="heroButton">Experiences</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

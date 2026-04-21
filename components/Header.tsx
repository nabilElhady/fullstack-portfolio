"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start max-w-7xl justify-between mx-auto z-20 xl:items-center p-5" role="banner">
      <motion.nav
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
        aria-label="Social media links"
      >
        {/* social icons */}
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100003079417756"
          fgColor="gray"
          bgColor="transparent"
          aria-label="Facebook profile"
        />
        <SocialIcon
          url="https://twitter.com/NabilElhady1"
          fgColor="gray"
          bgColor="transparent"
          aria-label="Twitter profile"
        />
        <SocialIcon
          url="https://github.com/nabilElhady"
          fgColor="gray"
          bgColor="transparent"
          aria-label="GitHub profile"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/nabil-elhady-1962b4215/"
          fgColor="gray"
          bgColor="transparent"
          aria-label="LinkedIn profile"
        />
      </motion.nav>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 space-x-4"
      >
        <Link href="/pricing" className="hidden sm:inline-flex">
          <p className="uppercase text-sm text-gray-400 hover:text-[#f7ab0a] transition-colors cursor-pointer font-medium tracking-widest">
            Pricing
          </p>
        </Link>

        <Link href="/#contact" className="flex flex-row items-center group">
          <SocialIcon
            className="cursor-pointer group-hover:scale-110 transition-transform"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 group-hover:text-[#f7ab0a] transition-colors cursor-pointer font-medium tracking-widest">
            get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;

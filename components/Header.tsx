import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
type Props = {};

function Header({}: Props) {
  const router = useRouter();

  return (
    <header className="sticky top-0 flex items-start max-w-7xl justify-between mx-auto z-20 xl:items-center">
      <motion.div
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
      >
        {/* social icons */}
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100003079417756"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/NabilElhady1"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/nabilElhady"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/nabil-elhady-1962b4215/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
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
        className="flex flex-row items-center text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          onClick={() => {
            router.push("/#contact");
          }}
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;

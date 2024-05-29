import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Logo from "./logo";
import { useAnimatedScroll } from "@/animations/helper";

import { Bars2Icon } from "@heroicons/react/20/solid";

const NavBar = ({ theme }: { theme?: string }) => {
  const {
    config: {
      navbar: { animate },
    },
  } = useAnimatedScroll();

  return (
    <motion.div
      animate={animate[`${theme}`]}
      id="navbar"
      className="navbar fixed left-0 top-0 right-0 z-50 items-center"
    >
      <motion.div className="navbar-start">
        <Logo width={200} />
      </motion.div>

      {/* <div className="navbar-end [&>a]:btn [&>a]:btn-outline [&>a]:px-8 [&>a]:border-gray-100 space-x-6 hidden lg:inline-flex w-1/2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div> */}
      <div className="navbar-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-8 right-8 z-50 bg-black rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
        >

          <div className="w-screen h-4 bg-black fixed top-0 left-0 right-0 z-50"></div>
          <svg
            className="bi bi-three-dots-vertical"
            fill="#fff"
            height="100%"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavBar;

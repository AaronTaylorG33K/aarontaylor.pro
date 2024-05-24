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
      logo: { animate: animateLogo },
    },
  } = useAnimatedScroll();

  return (
    <motion.div
      animate={animate[`${theme}`]}
      data-scroll-anchor
      id="navbar"
      className="navbar fixed left-0 top-0 right-0 z-50"
    >
      <motion.div className="navbar-start">
        <Logo width={200} animate={animateLogo[`${theme}`]} />
      </motion.div>
      

      <div className="navbar-end [&>a]:btn [&>a]:btn-outline [&>a]:px-8 [&>a]:border-gray-100 space-x-6 hidden lg:inline-flex w-1/2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>     
       
       
      </div>
      <Bars2Icon className="fixed top-8 right-6 z-20 rounded-full p-3 mr-4 btn btn-circle btn-outline border-secondary fill-secondary bg-white hover:bg-white hover:border-secondary active:border-secondary" />
    </motion.div>
  );
};

export default NavBar;

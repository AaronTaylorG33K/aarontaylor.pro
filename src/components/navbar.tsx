import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Logo from "./logo";
import { useAnimatedScroll } from "@/animations/helper";

const NavBar = () => {

  const { config: { navbar: { animate } } } = useAnimatedScroll()

  return (
    <motion.div 
    animate={animate}
    data-scroll-anchor
    id="navbar"
    className="navbar fixed left-0 top-0 right-0 z-[100]">
    <motion.div className="navbar-start">
       <Logo width={200} />
    </motion.div>
    <div className="navbar-center">
        
    </div>

    <div className="navbar-end [&>a]:btn [&>a]:btn-ghost">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  
    </motion.div>
  );
};

export default NavBar;

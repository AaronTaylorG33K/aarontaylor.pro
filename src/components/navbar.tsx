import Image from "next/image";
import Link from "next/link";
import {
  cubicBezier,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import Logo from "./logo";
import { useAnimatedScroll } from "@/animations/helper";

import { Bars2Icon } from "@heroicons/react/20/solid";

const NavBar = ({ theme }: { theme?: string }) => {
  const {
    config: {
      navbar: { animate },
    },
    scrollYProgress,
  } = useAnimatedScroll();

  const cB = cubicBezier(0.17, 0.67, 0.83, 0.67);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const rotate = useTransform(
    scrollYProgress,
    [0,  0.1, 0.5, 0.6],
    ["0deg", "30deg", "-30deg", "0deg",],
    { ease: cB }
  );
  const rotate2 = useTransform(
    scrollYProgress,
    [0,  0.1, 0.5, 0.6],
    ["0deg", "-10deg", "20deg", "0deg"],
    { ease: cB }
  );
  const rotate3 = useTransform(
    scrollYProgress,
    [0,  0.1, 0.5, 0.6],
    ["0deg", "-30deg", "15deg","0deg"],
    { ease: cB }
  );
  const y = useTransform(
    scrollYProgress,
    [0,  0.1, 0.5, 0.6],
    ["0", "-5vh", "75vh", "120vh"],
    { ease: cB }
  );
  const y2 = useTransform(
    scrollYProgress,
    [0,  0.1, 0.5, 0.6],
    ["0", "-2vh", "50vh", "120vh"],
    { ease: cB }
  );
  const y3 = useTransform(
    scrollYProgress,
    [0,  0.09, 0.5, 0.8],
    ["0", "-3vh", "100vh", "120vh"],
    { ease: cB }
  );
  const scale2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 1],
    [1, 1, 1.2, 1],
    { ease: cB }
  );

  // the last menu item drops off the page at 0.7 scrollYProgress

  const opacity4 = useTransform(scrollYProgress, [0.9, 1], [1, 1], {
    ease: cB,
  });

  const opacity5 = useTransform(scrollYProgress, [0.98, 1], [0,1], {ease: cB})
  // [0, 0.2,0.95, 1],
  const y4 = useTransform(scrollYProgress, [0.2, 0.8, 0.90, 1], ["-10vh","10vh","50vh","2vh"], {
    ease: cB,
  });
  const scaleY4 = useTransform(scrollYProgress, [0.7, 0.8,.9, 1], [1, 1.4,2, 1], {
    ease: cB,
  });

  const scale4 = useTransform(scrollYProgress, [0.85, 1],[0,1], {ease: cB});
  const springScale4 = useSpring(scale4,{damping:10, stiffness:100})

  const n1 =
    "M90.44,128.93c0,24.97-20.25,45.22-45.22,45.22S0,153.9,0,128.93,17.76,0,42.73,0s47.71,103.95,47.71,128.93Z";
  const n2 =
    "M90.44,128.93c0,24.97-20.25,45.22-45.22,45.22S0,153.9,0,128.93s20.25-45.22,45.22-45.22S90.44,103.96,90.44,128.93Z";


  const n3 = "M312.69,71.74c32.94,17.78,66.6,76.5,82.3,109.2,15.8,32.7,10,75.8,11.2,125.2,1.3,49.4,9.6,105.2-16.8,125.4-26.3,20.1-87.2,4.5-138.3,17-51.1,12.5-92.3,53.1-118.8,44.8-26.4-8.4-38.2-65.7-55.6-106.6-17.4-40.8-40.4-65.2-57.4-98.2-16.9-33.1-27.7-74.9-10.8-100.8,16.9-25.8,106.63-109.41,123.76-138.39C152-15.18,162.45,10.39,194.15,3.89c31.8-6.4,49.46-2.98,89.85-2.98,12.03,0,18.09,65.12,28.68,70.83Z"
  const n4 = "M290,10.22c36.5,8.3,89.29,83.23,104.99,115.93,15.8,32.7,10,75.8,11.2,125.2,1.3,49.4,9.6,105.2-16.8,125.4-26.3,20.1-87.2,4.5-138.3,17-51.1,12.5-92.3,53.1-118.8,44.8-26.4-8.4-38.2-65.7-55.6-106.6-17.4-40.8-40.4-65.2-57.4-98.2-16.9-33.1-27.7-74.9-10.8-100.8,16.9-25.8,61.5-35.8,97.6-44.3,36.1-8.5,50.94-62.56,82.64-69.06,31.8-6.4,40.08-25.86,76.68-17.56l24.59,8.2Z"
  const n5 = "M305.59,4.11c36.5,8.3,73.7,30.8,89.4,63.5,15.8,32.7,10,75.8,11.2,125.2,1.3,49.4,9.6,105.2-16.8,125.4-26.3,20.1-87.2,4.5-138.3,17-51.1,12.5-92.3,53.1-118.8,44.8-26.4-8.4-38.2-65.7-55.6-106.6-17.4-40.8-40.4-65.2-57.4-98.2C2.39,142.11-8.41,100.31,8.49,74.41c16.9-25.8,61.5-35.8,97.6-44.3,36.1-8.5,63.6-15.6,95.3-22.1,31.8-6.4,67.6-12.2,104.2-3.9"
  
  const drop = useTransform(scrollYProgress, [0.92, 1], [n2, n2], {
    ease: cB,
  });
  return (
    <motion.div
      animate={animate[`${theme}`]}
      id="navbar"
      className="navbar fixed z-50 items-center"
    >
      <motion.div className="navbar-start">
        <Logo width={200} />
      </motion.div>

      <div
        className={`navbar-end  space-x-6 hidden lg:inline-flex w-1/2 mr-8 `}
      >
        <motion.div
          style={{ opacity, y, rotate }}
          className=" origin-top-right"
        >
          <Link
            href="/"
            className={`py-4 px-12 rounded-lg border ${
              theme === "dark"
                ? "border-white text-white bg-black"
                : "border-slate-200/50 text-slate-800 bg-white"
            }`}
          >
            Home
          </Link>
        </motion.div>
        <motion.div
          style={{ opacity, y: y2, rotate: rotate2 }}
          className=" origin-top "
        >
          <Link
            href="/about"
            className={`py-4 px-12 shadow-lg rounded-lg border ${
              theme === "dark"
                ? "border-white text-white bg-black"
                : "border-slate-200/50 text-slate-800 bg-white"
            }`}
          >
            About
          </Link>
        </motion.div>
        <motion.div
          style={{ opacity, y: y3, rotate: rotate3 }}
          className=" origin-bottom-left"
        >
          <Link
            href="/contact"
            className={`py-4 px-12 shadow-lg rounded-lg border ${
              theme === "dark"
                ? "border-white text-white bg-black"
                : "border-slate-200/50 text-slate-800 bg-white"
            }`}
          >
            Contact
          </Link>
        </motion.div>

          <motion.div
            style={{ y: y4, opacity: opacity4, scaleY: scaleY4, scale:springScale4 }}
            className="fixed top-8 right-[9.25vw] -z-10 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer bg-white"
          >
            {/* <motion.svg
              className=" "
              viewBox={`0 0 150 150`}
              // width={`${isMobile ? '50%':'100%'}`}
              fill={'#fff'}
              width=""
              // style={{ y }}
            >
              <motion.path
                className={""}
                // className={`shadow-xl`}
                d={drop}
                stroke={"#ffffff"}
                fill={"#ffffff"}
                style={{shadow: "0 0 10px rgba(0,0,0,0.5)"}}
              />
            </motion.svg> */}

            <motion.svg
              className="bi bi-three-dots-vertical "
              fill="#000"
              height="100%"
              viewBox="0 0 16 16"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
              style={{opacity:opacity5}}
            >
              <motion.path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </motion.svg>
          </motion.div>
        </div>
  

      {/* <div className="navbar-end">
        
      </div>*/}
    </motion.div>
  );
};

export default NavBar;

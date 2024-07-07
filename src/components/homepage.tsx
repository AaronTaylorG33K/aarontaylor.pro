"use client";
import useViewportSize from "@/hooks/useViewportSize";
import { Caveat, Anton } from "@next/font/google";
import {
  cubicBezier,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import TheDrip from "./home/theDrip";
import Logo from "./logo";
import Image from "next/image";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
});
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});
const Homepage = () => {
  const ref = useRef(null);

  const refs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
  };

  const inView = {
    section1: useInView(refs.section1, { amount: 0.5 }),
    section2: useInView(refs.section2, { amount: 0.5 }),
    section3: useInView(refs.section3, { amount: 0.5 }),
    section4: useInView(refs.section4, { amount: 0.5 }),
    section5: useInView(refs.section5, { amount: 0.5 }),
    section6: useInView(refs.section6, { amount: 0.5 }),
  };

  useEffect(() => {
    console.log({ inView });
  }, [inView]);

  const cB = cubicBezier(0.68, 0, 0.265, 1.55);
  const numberOfPanels = 2;

  const keyframes = [0, 0.25, 0.5, 0.75, 1];
  const { isMobile } = useViewportSize();
  // so we don't want all the keyframes

  // we just need specific ones

  // slide 1
  // 0,0.2,0.4,0.6,0.8,1
  // slide 2
  // 0,0.4,0.6,0.8,1
  // 0,0.6,0.8,1
  // 0,0.8,1

  const { scrollYProgress } = useScroll({ container: ref });

  const y = useMotionValueEvent(scrollYProgress, "change", (latest) => {
    return latest;
  });

  const animations = {
    A: {
      x: useTransform(
        scrollYProgress,
        [0, 0.2, 0.4],
        ["0vw", "200vw", "200vw"],
        { ease: cB }
      ),
      opacity: useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0, 0], {
        ease: cB,
      }),
    },
    text: {
      // x: useTransform(
      //   scrollYProgress,
      //   [0, 0.2, 0.4],
      //   ["0vw", "200vw", "200vw"],
      //   { ease: cB }
      // ),
      opacity: useTransform(scrollYProgress, [0, 0.1, 0.4], [1, 0, 0], {
        ease: cB,
      }),
    },
    clouds: {
      1: {
        x: useTransform(
          scrollYProgress,
          [0, 0.2, 0.4],
          ["0vw", "-200vw", "-200vw"],
          { ease: cB }
        ),
        opacity: useTransform(scrollYProgress, keyframes, [1, 0, 0, 0, 0], {
          ease: cB,
        }),
      },
      2: {
        x: useTransform(
          scrollYProgress,
          [0, 0.2, 0.4],
          ["0vw", "200vw", "200vw"],
          { ease: cB }
        ),
        opacity: useTransform(scrollYProgress, keyframes, [1, 0, 0, 0, 0], {
          ease: cB,
        }),
      },
    },
    aaron: {
      image: {
        y: useTransform(
          scrollYProgress,
          [0, 0.2, 0.3, 0.4],
          [isMobile ? "13dvh" : "35dvh", "100dvh", 0, 0],
          { ease: cB }
        ),
        x: useTransform(
          scrollYProgress,
          [0, 0.2, 0.3, 0.4],
          [isMobile ? "12vw" : "20vw", "50vw", "0vw", "0vw"],
          { ease: cB }
        ),
        opacity: useTransform(
          scrollYProgress,
          [0, 0.2, 0.3, 0.4],
          [1, 0, 0, 0],
          { ease: cB }
        ),
        // rotate: useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4],[0,60,0,0]),
      },
    },
    slide1: {
      dream: {
        x: useTransform(
          scrollYProgress,
          keyframes,
          ["0vw", "200vw", "200vw", "200vw", "200vw"],
          { ease: cB }
        ),
        opacity: useTransform(scrollYProgress, keyframes, [1, 0, 0, 0, 0], {
          ease: cB,
        }),
      },
      with: {
        x: useTransform(
          scrollYProgress,
          keyframes,
          ["0vw", "200vw", "200vw", "200vw", "200vw"],
          { ease: cB }
        ),
        opacity: useTransform(scrollYProgress, keyframes, [1, 0, 0, 0, 0], {
          ease: cB,
        }),
      },
      me: {
        x: useTransform(
          scrollYProgress,
          keyframes,
          ["0vw", "200vw", "200vw", "200vw", "200vw"],
          {
            ease: cB,
          }
        ),
        opacity: useTransform(scrollYProgress, keyframes, [1, 0, 0, 0, 0], {
          ease: cB,
        }),
      },
    },
    slide2: {
      lets: {
        x: useTransform(
          scrollYProgress,
          [0, 0.2, 0.3, 0.4],
          ["-200vw", "0vw", "0vw", "200vw"],
          { ease: cB }
        ),
        opacity: useTransform(
          scrollYProgress,
          [0, 0.2, 0.3, 0.4],
          [0, 1, 1, 0],
          {
            ease: cB,
          }
        ),
      },
      make: {
        x: useTransform(
          scrollYProgress,
          [0, 0.2, 0.325, 0.425],
          ["-300vw", "0vw", "0vw", "300vw"],
          { ease: cB }
        ),
      
        opacity: useTransform(
          scrollYProgress,
          [0, 0.2, 0.325, 0.425],
          [0, 1, 1, 0],
          {
            ease: cB,
          }
        ),
      },
      some: {
        x: useTransform(
          scrollYProgress,
          [0, 0.2, 0.35, 0.45],
          ["-500vw", "0vw", "0vw", "500vw"],
          { ease: cB }
        ),
        opacity: useTransform(
          scrollYProgress,
          [0, 0.2, 0.35, 0.45],
          [0, 1, 1, 0],
          {
            ease: cB,
          }
        ),
      },
      magic: {
        x: useTransform(
          scrollYProgress,
          [0, 0.2, 0.375, 0.475],
          ["-200vw", "0vw", "0vw", "200vw"],
          { ease: cB }
        ),
        opacity: useTransform(
          scrollYProgress,
          [0, 0.2, 0.375, 0.475],
          [0, 1, 1, 0],
          {
            ease: cB,
          }
        ),
      },
    },
    slide3: {
      infra: {
        x: useTransform(
          scrollYProgress,
          [0, 0.3, 0.4, 0.5, 0.6],
          ["150vw", "150vw", "0vw", "0vw", "-150vw"],
          { ease: cB }
        ),
        opacity: useTransform(
          scrollYProgress,
          [0, 0.3, 0.4, 0.5, 0.6],
          [0, 0, 1, 1, 0],
          {
            ease: cB,
          }
        ),
      },
      code: {
        x: useTransform(
          scrollYProgress,
          [0, 0.32, 0.4, 0.5, 0.62],
          ["150vw", "150vw", "0vw", "0vw", "-150vw"],
          { ease: cB }
        ),
        opacity: useTransform(
          scrollYProgress,
          [0, 0.32, 0.4, 0.5, 0.62],
          [0, 0, 1, 1, 0],
          {
            ease: cB,
          }
        ),
      },
      design: {
        x: useTransform(
          scrollYProgress,
          [0, 0.32, 0.4, 0.5, 0.62],
          ["150vw", "150vw", "0vw", "0vw", "-150vw"],
          { ease: cB }
        ),
        opacity: useTransform(
          scrollYProgress,
          [0, 0.32, 0.4, 0.5, 0.62],
          [0, 0, 1, 1, 0],
          {
            ease: cB,
          }
        ),
      },
      brand: {
        x: useTransform(
          scrollYProgress,
          [0, 0.34, 0.4, 0.5, 0.64],
          ["150vw", "150vw", "0vw", "0vw", "-150vw"],
          { ease: cB }
        ),
        opacity: useTransform(
          scrollYProgress,
          [0, 0.34, 0.4, 0.5, 0.64],
          [0, 0, 1, 1, 0],
          {
            ease: cB,
          }
        ),
      },
      ecom: {
        x: useTransform(
          scrollYProgress,
          [0, 0.36, 0.4, 0.5, 0.66],
          ["150vw", "150vw", "0vw", "0vw", "-150vw"],
          { ease: cB }
        ),
        opacity: useTransform(
          scrollYProgress,
          [0, 0.36, 0.4, 0.5, 0.66],
          [0, 0, 1, 1, 0],
          {
            ease: cB,
          }
        ),
      },
    },
    slide4: {
      jedi: {
        opacity: useTransform(
          scrollYProgress,
          [0, 0.62, 0.66, 0.75, 0.8],
          [0, 0, 1, 1, 0]
        ),
        y: useTransform(
          scrollYProgress,
          [0, 0.62, 0.66, 0.75, 0.8],
          ["-50px", "-50px", "0px", "0px", "-100px"],
          { ease: cB }
        ),
      },
      on: {
        opacity: useTransform(
          scrollYProgress,
          [0, 0.625, 0.665, 0.76, 0.81],
          [0, 0, 1, 1, 0]
        ),
        y: useTransform(
          scrollYProgress,
          [0, 0.625, 0.665, 0.76, 0.81],
          ["-50px", "-50px", "0px", "0px", "-100px"],
          { ease: cB }
        ),
      },
      any: {
        opacity: useTransform(
          scrollYProgress,
          [0, 0.63, 0.67, 0.77, 0.82],
          [0, 0, 1, 1, 0]
        ),
        y: useTransform(
          scrollYProgress,
          [0, 0.63, 0.67, 0.77, 0.82],
          ["-50px", "-50px", "0px", "0px", "-100px"],
          { ease: cB }
        ),
      },
      tech: {
        opacity: useTransform(
          scrollYProgress,
          [0, 0.635, 0.675, 0.78, 0.83],
          [0, 0, 1, 1, 0]
        ),
        y: useTransform(
          scrollYProgress,
          [0, 0.635, 0.675, 0.78, 0.83],
          ["-50px", "-50px", "0px", "0px", "-100px"],
          { ease: cB }
        ),
      },
      stack: {
        opacity: useTransform(
          scrollYProgress,
          [0, 0.64, 0.68, 0.79, 0.84],
          [0, 0, 1, 1, 0]
        ),
        y: useTransform(
          scrollYProgress,
          [0, 0.64, 0.68, 0.79, 0.84],
          ["-50px", "-50px", "0px", "0px", "-100px"],
          { ease: cB }
        ),
      },
    },
    slide5: {
      time: {
        opacity: useTransform(scrollYProgress, [0.85, 0.91, 1], [0, 1, 1]),
        x: useTransform(scrollYProgress, [0.95, 1], ["-100vw", "0"]),
        group: {
          // rotate: useTransform(
          //   scrollYProgress,
          //   [0.85, 0.91, 1],
          //   [0, isMobile ? -10 : 0, isMobile ? -10 : 0]
          // ),
        },
      },
      for: {
        opacity: useTransform(scrollYProgress, [0.85, 0.91, 1], [0, 1, 1]),
        group: {
          // rotate: useTransform(
          //   scrollYProgress,
          //   [0.85, 0.91, 1],
          //   [0, isMobile ? -10 : 0, isMobile ? -10 : 0]
          // ),
        },
      },
      that: {
        opacity: useTransform(scrollYProgress, [0.85, 0.91, 1], [0, 1, 1]),
        group: {
          // rotate: useTransform(
          //   scrollYProgress,
          //   [0.85, 0.91, 1],
          //   [0, isMobile ? -10 : 0, isMobile ? -10 : 0]
          // ),
        },
      },
      drip: {
        opacity: useTransform(scrollYProgress, [0.85, 0.91, 1], [0, 1, 1]),
        group: {
          // rotate: useTransform(
          //   scrollYProgress,
          //   [0.85, 0.91, 1],
          //   [0, isMobile ? -10 : 0, isMobile ? -10 : 0]
          // ),
        },
      },
    },
  };
  const startColors = [
    "#553c9a", // purple-800
    "#553c9a", // green
    "#1c75bc", // blue
    "#553c9a", // even lighter purple
    // "#8dc63f", // pink-600
  ];

  const endColors = [
    "#d53f8c", // pink-600
    "#00aeef", // light pink
    "#4ac8f5", // even lighter pink
    "#d53f8c", // purple-800
  ];

  const startColor = useTransform(
    scrollYProgress,
    [0, 0.05, 0.3, 0.4],
    startColors
  );

  const endColor = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], endColors);

  const bgGradient = useTransform(
    [startColor, endColor],
    ([start, end]) => `linear-gradient(to bottom right, ${start}, ${end})`
  );

  return (
    <>
      <Logo scrollYProgress={scrollYProgress} />

      <motion.div
        ref={ref}
        id="hyperPink"
        style={{ backgroundImage: bgGradient }}
        className="h-full  w-full overflow-y-auto hyperPink hide-scroll"
        layoutScroll
      >
        <div
          className="fixed z-[5] inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 0)`,
            backgroundSize: "15px 15px",
            backgroundPosition: "-16.5px -16.5px",
            maskImage: `radial-gradient(ellipse at center, rgba(0, 0, 0, 1), transparent 75%)`,
          }}
        />
        <motion.div
          layout
          id="section1"
          ref={refs.section1}
          className=" relative w-screen z-10 h-[180dvh] h-[650dvh] snap-center justify-end items-end "
        >
          <motion.div
            layout
            className="flex flex-row items-center justify-center  gap-4 pointer-events-none sticky top-0 bottom-0 left-0 right-0 overflow-hidden w-full "
          >
            <motion.div
              className="absolute top-12  z-10   flex items-start justify-start  pointer-events-none w-full h-full overflow-hidden"
              style={{ ...animations.clouds[1] }}
            >
              <Image
                className="pointer-events-none opacity-30"
                src="/cloud2.png"
                width={isMobile ? 1200 : 1200}
                height="700"
                priority
                alt="cloud"
              />
            </motion.div>
            {/* <motion.div
              className="absolute bottom-0 -right-1/4 left-1/2 top-1/2  z-40   flex items-center justify-center  pointer-events-none overflow-hidden w-full"
              style={{ ...animations.clouds[2] }}
            >
        
              <Image
                quality={100}
                src="/cloud5.png"
                width={800}
                height={500}
                alt="cloud"
                priority
                sizes="(max-width: 768px) 100vw, 50vw" 
                className=" pointer-events-none  object-fit  h-[50dvh] w-auto"
              />
            </motion.div> */}

            <div className="absolute pointer-events-none top-0 left-0 right-0 bottom-0 z-30">
              <motion.svg
                className="h-full ml-auto pointer-events-none  z-30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1868.13 2119.33"
              >
                <motion.path
                  style={{ ...animations.A }}
                  d="M1354.18,2119.33l-83.73-256.98h-666.98l-86.62,256.98H0L721.84,0h461.98l684.31,2119.33h-513.95ZM770.93,1374.39h343.6l-167.47-513.95-176.13,513.95Z"
                />
              </motion.svg>{" "}
            </div>

            <motion.div
              style={{ ...animations.text }}
              className={`absolute min-w-[330px] mx-4 lg:mt-0 lg:ml-12  text-xl lg:text-2xl leading-none overflow-hidden  flex justify-center items-center z-50  text-white p-4 w-1/2 lg:w-1/5  -mt-16  ${caveat.className}`}
            >
              {`Hey there, I'm Aaron! I\'ve been designing, coding and managing IT teams for over 25 years. I have a passion for AI and enterprise app dev using cutting edge technology.`}
            </motion.div>
            <div className="absolute z-50  -top-[30dvh] left-0 right-0 bottom-0 flex flex-col items-center justify-center pointer-events-none">
              <motion.svg
                fill="#fff"
                className="w-[80vw] max-w-[500px] pointer-events-none relative z-40 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2456.81 257.94"
              >
                <g>
                  <motion.path
                    style={{ ...animations.slide1.dream }}
                    d="M58.99.7c16.98.93,32.98,5.01,47.99,12.22,15.01,7.22,28.04,16.64,39.09,28.27,11.05,11.64,19.77,25.13,26.18,40.49,6.4,15.36,9.6,31.76,9.6,49.21s-3.14,33.33-9.42,48.34c-6.28,15.01-14.95,28.22-26,39.62-11.05,11.4-24.03,20.54-38.92,27.4-14.89,6.87-31.06,10.77-48.52,11.69H0V.35h58.99v.35ZM58.99,198.95c9.07-.93,17.51-3.32,25.3-7.17,7.79-3.85,14.54-8.81,20.24-14.87,5.7-6.06,10.18-13,13.44-20.82,3.26-7.82,4.89-16.15,4.89-25.02s-1.63-17.78-4.89-26.07c-3.26-8.28-7.8-15.63-13.61-22.04-5.82-6.41-12.57-11.67-20.24-15.74-7.68-4.08-16.06-6.59-25.13-7.53v139.26Z"
                  />
                  <motion.path
                    style={{ ...animations.slide1.dream }}
                    d="M270.85,191.62c-3.03.47-6.05.82-9.07,1.05-3.03.23-6.17.47-9.42.7v64.57h-58.99V2.79h58.99c14.66.23,28.39,2.91,41.19,8.02,12.79,5.12,24.02,11.97,33.68,20.57,9.65,8.6,17.22,18.65,22.69,30.15,5.46,11.5,8.2,23.64,8.2,36.42,0,13.94-2.91,26.73-8.73,38.34-5.82,11.62-13.96,21.73-24.43,30.32l56.54,91.32h-69.46l-41.19-66.32ZM252.35,134.38c6.28-.23,12.27-1.34,17.98-3.33,5.7-1.98,10.7-4.62,15.01-7.89,4.3-3.27,7.68-7.07,10.12-11.4,2.44-4.32,3.67-8.94,3.67-13.85s-1.22-9.47-3.67-13.68c-2.44-4.21-5.82-7.95-10.12-11.22-4.31-3.27-9.31-5.9-15.01-7.89-5.7-1.98-11.69-3.1-17.98-3.33v72.6Z"
                  />
                  <motion.path
                    style={{ ...animations.slide1.dream }}
                    d="M445.37,61.08v38.39h85.51v58.99h-85.51v40.49h105.41v58.99h-164.39V2.09l164.39-.35v59.34h-105.41Z"
                  />
                  <motion.path
                    style={{ ...animations.slide1.dream }}
                    d="M723.9,226.87h-80.63l-10.47,31.06h-62.48L657.58,1.75h55.85l82.72,256.19h-62.13l-10.12-31.06ZM705.05,167.88l-20.24-62.13-21.29,62.13h41.54Z"
                  />
                  <motion.path
                    style={{ ...animations.slide1.dream }}
                    d="M1045.7,1.4l15.01,256.54h-58.99l-6.28-104.71-35.6,104.71h-58.99l-37.7-108.9-6.98,108.9h-59.34L813.24,1.4h60.73l56.19,160.56L984.97,1.4h60.73Z"
                  />
                </g>
                <g>
                  <motion.path
                    style={{ ...animations.slide1.with }}
                    d="M1469.77,0l-75.74,257.94h-58.29l-33.86-128.44-29.32,128.44h-58.64L1128.76,0h62.13l47.47,142.75L1270.82,0h57.94l37.7,142.06L1407.99,0h61.78Z"
                  />
                  <motion.path
                    style={{ ...animations.slide1.with }}
                    d="M1524.91,257.94h-58.99V1.4h58.99v256.54Z"
                  />
                  <motion.path
                    style={{ ...animations.slide1.with }}
                    d="M1697.68,59.68h-49.21v198.25h-58.99V59.68h-48.86V.7h157.07v58.99Z"
                  />
                  <motion.path
                    style={{ ...animations.slide1.with }}
                    d="M1912.68,1.75v256.19h-58.99v-96.68h-74v96.68h-58.99V1.75h58.99v100.52h74V1.75h58.99Z"
                  />
                </g>
                <g>
                  <motion.path
                    style={{ ...animations.slide1.me }}
                    d="M2259.96,1.4l15.01,256.54h-58.99l-6.28-104.71-35.6,104.71h-58.99l-37.7-108.9-6.98,108.9h-59.34L2027.51,1.4h60.73l56.19,160.56L2199.23,1.4h60.73Z"
                  />
                  <motion.path
                    style={{ ...animations.slide1.me }}
                    d="M2351.4,61.08v38.39h85.51v58.99h-85.51v40.49h105.41v58.99h-164.4V2.09l164.4-.35v59.34h-105.41Z"
                  />
                </g>
              </motion.svg>
            </div>

            <div className="w-screen  h-[90dvh] sm:h-[90dvh] md:h-[90dvh] lg:h-[90dvh] overflow-hidden">
              <motion.div
                className="w-full h-full lg:w-[50vw] absolute bottom-[10dvh] sm:bottom-[7dvh] md:bottom-[7dvh] lg:bottom-[25dvh] z-40  overflow-hidden "
                style={{ ...animations.aaron.image }}
              >
                <Image
                  src="/aaron-fitted.png"
                  width="1200"
                  height="600"
                  alt="Aaron"
                  className="absolute  object-fit bottom-0"
                />
              </motion.div>
              <motion.svg
                className="ml-auto h-full w-full absolute right-0 z-20"
                preserveAspectRatio={"xMaxYMax meet"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2058.59 2182.94"
              >
                <g>
                  <motion.path
                    style={{ ...animations.slide2.lets }}
                    d="M966.7,524.4h-305.68V10.28h118.21v395.91h187.46v118.21Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.lets }}
                    d="M1333.23,129.89h-211.25v76.94h171.38v118.21h-171.38v81.14h211.25v118.21h-329.46V11.68l329.46-.7v118.91Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.lets }}
                    d="M1690.67,8.88v118.21h-98.63v397.31h-118.21V127.09h-97.93V8.88h314.77Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.lets }}
                    d="M1885.47,534.2c-16.3,0-32.47-2.22-48.53-6.65-16.06-4.43-31.29-11.3-45.72-20.63-25.14-16.32-44.68-37.42-58.64-63.3-13.97-25.88-20.94-54.21-20.94-84.99h118.21c0,13.99,3.03,24.83,9.09,32.53,6.06,7.69,11.42,12.94,16.09,15.74,8.39,5.6,17.49,8.63,27.28,9.09,9.79.47,19.34-1.4,28.68-5.6,6.53-2.8,11.77-6.17,15.74-10.14,3.96-3.96,7-8.04,9.09-12.24,2.1-4.2,3.38-8.15,3.85-11.89.46-3.73.7-6.75.7-9.09s-.24-5.36-.7-9.09c-.47-3.73-1.75-7.57-3.85-11.54-2.1-3.96-5.14-8.04-9.09-12.24-3.97-4.2-9.21-7.92-15.74-11.19-5.14-2.33-10.61-4.43-16.44-6.29-5.84-1.86-12.01-3.96-18.54-6.3-11.66-3.73-23.78-7.92-36.37-12.59-12.59-4.66-25.18-10.95-37.77-18.89-16.33-10.25-30.08-23.08-41.27-38.47-11.19-15.39-19.24-31.94-24.13-49.66-4.9-17.72-6.54-36.02-4.9-54.91,1.63-18.89,6.88-36.95,15.74-54.21,8.39-15.85,18.89-29.61,31.48-41.27,12.59-11.65,26.58-20.86,41.97-27.63,15.39-6.75,31.94-10.84,49.66-12.24,17.72-1.4,35.67.24,53.86,4.9,17.72,4.2,33.81,10.84,48.27,19.94,14.45,9.09,26.93,20.06,37.42,32.88,10.49,12.83,18.54,27.17,24.13,43.02,5.6,15.86,8.39,32.42,8.39,49.66h-118.21c0-10.72-3.39-18.19-10.14-22.38-6.76-4.2-12.71-7-17.84-8.39-.94,0-3.15-.23-6.64-.7-3.5-.46-7.47-.46-11.89,0-4.44.47-8.98,1.87-13.64,4.2-4.67,2.34-8.39,6.54-11.19,12.59-3.74,7.46-4.44,15.28-2.1,23.43,2.33,8.16,7,14.58,13.99,19.24,6.52,3.74,13.75,7.12,21.68,10.14,7.92,3.04,16.32,5.95,25.18,8.74,7.92,2.34,15.95,4.9,24.07,7.69,8.12,2.8,16.36,6.07,24.71,9.79,30.61,13.99,54.61,34.4,72.01,61.21,17.4,26.82,26.1,57.01,26.1,90.58s-8.73,62.5-26.18,89.54c-17.46,27.05-41.54,47.57-72.26,61.55-12.1,5.6-24.43,9.67-37,12.24-12.57,2.56-25.14,3.85-37.7,3.85Z"
                  />
                </g>
                <g>
                  <motion.path
                    style={{ ...animations.slide2.make }}
                    d="M626.74,562.89h121.71l30.08,514.13h-118.21l-12.59-209.85-71.35,209.85h-118.21l-75.54-218.24-13.99,218.24h-118.91l32.88-514.13h121.71l112.62,321.77,109.82-321.77Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.make }}
                    d="M1107.99,1077.02l-20.29-62.25h-161.58l-20.98,62.25h-125.21l174.87-513.43h111.92l165.78,513.43h-124.51ZM966.69,896.55h83.24l-40.57-124.51-42.67,124.51Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.make }}
                    d="M1721.44,562.89l-263.71,257.41,263.71,256.71h-170.68l-165.08-161.58v161.58h-118.21v-514.13h118.21v162.28l165.78-162.28h169.98Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.make }}
                    d="M2058.59,682.5h-211.25v76.94h171.38v118.21h-171.38v81.14h211.25v118.21h-329.46v-512.73l329.46-.7v118.91Z"
                  />
                </g>
                <g>
                  <motion.path
                    style={{ ...animations.slide2.some }}
                    d="M461.32,1639.42c-16.3,0-32.47-2.22-48.53-6.65-16.06-4.43-31.29-11.3-45.72-20.63-25.14-16.32-44.68-37.42-58.64-63.3-13.97-25.88-20.94-54.21-20.94-84.99h118.21c0,13.99,3.03,24.83,9.09,32.53,6.06,7.69,11.42,12.94,16.09,15.74,8.39,5.6,17.49,8.63,27.28,9.09,9.79.47,19.35-1.4,28.68-5.6,6.52-2.8,11.77-6.17,15.74-10.14,3.96-3.96,6.99-8.04,9.09-12.24,2.1-4.2,3.38-8.15,3.85-11.89.46-3.73.7-6.75.7-9.09s-.24-5.36-.7-9.09c-.47-3.73-1.75-7.57-3.85-11.54-2.1-3.96-5.14-8.04-9.09-12.24-3.97-4.2-9.21-7.92-15.74-11.19-5.14-2.33-10.61-4.43-16.44-6.29-5.84-1.86-12.01-3.96-18.54-6.3-11.66-3.73-23.78-7.92-36.37-12.59-12.59-4.66-25.18-10.95-37.77-18.89-16.33-10.25-30.08-23.08-41.27-38.47-11.19-15.39-19.24-31.94-24.13-49.66-4.9-17.72-6.54-36.02-4.9-54.91,1.63-18.89,6.87-36.95,15.74-54.21,8.39-15.85,18.89-29.61,31.48-41.27,12.59-11.65,26.58-20.86,41.97-27.63,15.39-6.75,31.94-10.84,49.66-12.24,17.72-1.4,35.67.24,53.86,4.9,17.72,4.2,33.81,10.84,48.26,19.94,14.45,9.09,26.93,20.06,37.42,32.88,10.49,12.83,18.54,27.17,24.13,43.02,5.6,15.86,8.39,32.42,8.39,49.66h-118.21c0-10.72-3.39-18.19-10.14-22.38-6.77-4.2-12.71-7-17.84-8.39-.94,0-3.15-.23-6.65-.7-3.5-.46-7.46-.46-11.89,0-4.44.47-8.98,1.87-13.64,4.2-4.67,2.34-8.39,6.54-11.19,12.59-3.74,7.46-4.44,15.28-2.1,23.43,2.33,8.16,7,14.58,13.99,19.24,6.52,3.74,13.75,7.12,21.68,10.14,7.92,3.04,16.32,5.95,25.18,8.74,7.92,2.34,15.95,4.9,24.07,7.69,8.12,2.8,16.36,6.07,24.71,9.79,30.61,13.99,54.62,34.4,72.02,61.21,17.4,26.82,26.1,57.01,26.1,90.58s-8.73,62.5-26.18,89.54c-17.45,27.05-41.54,47.57-72.26,61.55-12.1,5.6-24.43,9.67-37,12.24-12.57,2.56-25.14,3.85-37.7,3.85Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.some }}
                    d="M906.19,1115.5c35.39,0,68.68,6.77,99.89,20.29,31.2,13.53,58.45,31.83,81.73,54.91,23.28,23.08,41.67,50.25,55.18,81.49,13.51,31.25,20.26,64.59,20.26,100.03s-6.75,68.79-20.26,100.03c-13.51,31.25-31.9,58.41-55.18,81.49-23.28,23.08-50.53,41.39-81.73,54.91-31.2,13.53-64.5,20.29-99.89,20.29s-68.69-6.75-99.9-20.29c-31.2-13.52-58.33-31.83-81.38-54.91-23.05-23.08-41.32-50.24-54.83-81.49-13.51-31.24-20.25-64.58-20.25-100.03s6.74-68.78,20.25-100.03c13.51-31.24,31.78-58.41,54.83-81.49,23.05-23.08,50.18-41.38,81.38-54.91,31.2-13.52,64.51-20.29,99.9-20.29ZM906.54,1510.72c19.12,0,37.07-3.61,53.86-10.84,16.79-7.22,31.48-17.14,44.07-29.73,12.59-12.59,22.49-27.28,29.73-44.07,7.22-16.79,10.84-34.73,10.84-53.86s-3.62-37.07-10.84-53.86c-7.23-16.79-17.14-31.48-29.73-44.07-12.59-12.59-27.28-22.49-44.07-29.73-16.79-7.22-34.75-10.84-53.86-10.84s-37.07,3.62-53.86,10.84c-16.79,7.24-31.48,17.14-44.07,29.73s-22.5,27.28-29.73,44.07c-7.24,16.79-10.84,34.74-10.84,53.86s3.61,37.07,10.84,53.86c7.22,16.79,17.14,31.48,29.73,44.07s27.28,22.5,44.07,29.73c16.79,7.24,34.73,10.84,53.86,10.84Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.some }}
                    d="M1541.67,1115.5h121.71l30.08,514.13h-118.21l-12.59-209.85-71.35,209.85h-118.21l-75.55-218.24-13.99,218.24h-118.91l32.88-514.13h121.71l112.62,321.77,109.82-321.77Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.some }}
                    d="M2058.59,1235.12h-211.25v76.94h171.38v118.21h-171.38v81.14h211.25v118.21h-329.46v-512.73l329.46-.7v118.91Z"
                  />
                </g>
                <g>
                  <motion.path
                    style={{ ...animations.slide2.magic }}
                    d="M377.03,1668.12h121.71l30.08,514.13h-118.21l-12.59-209.85-71.35,209.85h-118.21l-75.54-218.24-13.99,218.24H0l32.88-514.13h121.71l112.62,321.77,109.82-321.77Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.magic }}
                    d="M858.27,2182.24l-20.29-62.25h-161.58l-20.98,62.25h-125.21l174.87-513.43h111.92l165.78,513.43h-124.51ZM716.98,2001.77h83.24l-40.57-124.51-42.67,124.51Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.magic }}
                    d="M1418.57,1894.75v287.49h-118.21v-12.59c-13.06,4.67-26.47,8.04-40.22,10.14-13.76,2.1-27.4,3.15-40.92,3.15-33.58,0-66.1-6.29-97.58-18.89s-59.81-31.48-84.99-56.66c-24.72-24.71-43.37-52.92-55.96-84.64-12.59-31.71-18.89-64.11-18.89-97.23s6.17-65.51,18.54-97.23c12.35-31.71,31.13-60.16,56.31-85.34s53.62-44.07,85.34-56.66c31.71-12.59,64.11-18.89,97.23-18.89s65.51,6.3,97.23,18.89c31.71,12.59,60.16,31.48,85.34,56.66l-83.94,83.94c-13.53-13.52-28.92-23.66-46.17-30.43-17.26-6.75-34.75-10.14-52.46-10.14s-35.21,3.39-52.46,10.14c-17.26,6.76-32.65,16.91-46.17,30.43-13.53,13.53-23.78,28.92-30.78,46.17-7,17.26-10.49,34.75-10.49,52.46s3.5,35.22,10.49,52.46c7,17.26,17.25,32.65,30.78,46.17,12.12,12.13,25.76,21.58,40.92,28.33,15.15,6.77,30.78,10.73,46.87,11.89,16.09,1.17,32.06-.35,47.92-4.55,15.85-4.2,30.54-11.19,44.07-20.98v-25.88h-102.83v-118.21h221.04Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.magic }}
                    d="M1593.43,2182.24h-118.21v-514.13h118.21v514.13Z"
                  />
                  <motion.path
                    style={{ ...animations.slide2.magic }}
                    d="M1876.72,2181.54c-33.58,0-65.99-6.18-97.23-18.54-31.25-12.35-59.46-31.13-84.64-56.31-24.25-25.18-42.79-53.04-55.61-83.59-12.82-30.54-19.24-63.3-19.24-98.28s6.42-67.96,19.24-98.98c12.82-31.01,31.36-58.64,55.61-82.89s53.51-44.07,84.99-56.66c31.48-12.59,63.65-18.89,96.53-18.89s65.16,6.3,96.88,18.89c31.71,12.59,60.16,31.48,85.34,56.66l-83.24,83.24c-13.53-13.52-28.92-23.66-46.17-30.43-17.26-6.75-34.75-10.14-52.46-10.14s-35.09,3.39-52.11,10.14c-17.03,6.77-32.3,16.91-45.82,30.43-13.06,13.53-23.08,28.68-30.08,45.47-7,16.79-10.49,34.52-10.49,53.16s3.5,36.26,10.49,52.81c7,16.56,17.02,31.6,30.08,45.12,13.52,13.53,28.79,23.67,45.82,30.43,17.02,6.77,34.38,10.14,52.11,10.14s35.2-3.38,52.46-10.14c17.25-6.75,32.64-16.9,46.17-30.43l83.24,83.94c-25.18,25.18-53.4,43.96-84.64,56.31-31.25,12.36-63.65,18.54-97.23,18.54Z"
                  />
                </g>
              </motion.svg>
            </div>
          
          </motion.div>
        </motion.div>

        <motion.div
          layout
          id="section6"
          ref={refs.section6}
          className=" w-screen flex relative snap-center items-start justify-start  "
        >
          <div className="absolute left-0 top-0 right-0 bottom-12 lg:bottom-0 pointer-events-none z-50">
            <div className="max-w-screen mx-8 flex flex-col items-center gap-8 ">
              <h1 className="text-7xl leading-none text-white font-bold pb-6 border-b-4 border-white w-full">
                Recent Web
              </h1>

              <div className="w-full  flex flex-col-reverse md:flex-row gap-0 md:gap-8">
                <div className="w-full md:w-1/2  lg:w-1/2 flex items-center justify-center md:min-h-[70dvh]">
                  <div className="bg-black/20 md:bg-black/0 p-4 md:p-0">
                    <h3
                      className={`text-5xl md:text-7xl text-white ${anton.className} uppercase`}
                    >
                      Run Rabbit Tattoos
                    </h3>
                    <div className={`text-3xl text-white ${caveat.className}`}>
                      Branding & merch design
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full md:w-1/2">
                  <div className="w-full h-[30vh] md:h-[60vh] md:w-[35vw] flex justify-center items-center bg-black/50 md:bg-black/20 backdrop-blur-sm overflow-hidden ">
                    
                    <Image
                    className="object-fit"
                    width={1200}
                    height={1200}
                    src="/runrabbit-logo.png"
                    alt="runrabbit-logo"
                  />

                  </div>
                </div>
              </div>


              <div className="w-full  flex flex-col md:flex-row gap-0 md:gap-8">
                
                <div className="flex justify-center items-center w-full md:w-1/2">
                  <div className="w-full h-[30vh] md:h-[60vh] md:w-[35vw] flex justify-center items-center bg-black/50 md:bg-black/20 backdrop-blur-sm overflow-hidden ">
                    
                    <Image
                    className="object-fit -rotate-12 scale-125"
                    width={1200}
                    height={1200}
                    src="/slam-campbell-logo.png"
                    alt="slam-campbell-logo"
                  />

                  </div>
                </div>
                <div className="w-full md:w-1/2  lg:w-1/2 flex items-center justify-center md:min-h-[90dvh]">
                  <div className="bg-black/20 md:bg-black/0 p-4 md:p-0 w-full">
                    <h3
                      className={`text-5xl md:text-7xl text-white ${anton.className} uppercase`}
                    >
                      Slam Campbell
                    </h3>
                    <div className={`text-3xl text-white ${caveat.className}`}>
                      Branding & merch design
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="max-w-screen mx-8 flex flex-col items-center gap-8 py-36 ">
              
              
              <h1 className="text-7xl leading-none text-white font-bold pb-6 border-b-4 border-white w-full mx-4">
                Recent Branding
              </h1>

              <div className="w-full  flex flex-col-reverse md:flex-row gap-0 md:gap-8">
                <div className="w-full md:w-1/2  lg:w-1/2 flex items-center justify-center md:min-h-[70dvh]">
                  <div className="bg-black/20 md:bg-black/0 p-4 md:p-0">
                    <h3
                      className={`text-5xl md:text-7xl text-white ${anton.className} uppercase`}
                    >
                      Run Rabbit Tattoos
                    </h3>
                    <div className={`text-3xl text-white ${caveat.className}`}>
                      Branding & merch design
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full md:w-1/2">
                  <div className="w-full h-[30vh] md:h-[60vh] md:w-[35vw] flex justify-center items-center bg-black/50 md:bg-black/20 backdrop-blur-sm overflow-hidden ">
                    
                    <Image
                    className="object-fit"
                    width={1200}
                    height={1200}
                    src="/runrabbit-logo.png"
                    alt="runrabbit-logo"
                  />

                  </div>
                </div>
              </div>


              <div className="w-full  flex flex-col md:flex-row gap-0 md:gap-8">
                
                <div className="flex justify-center items-center w-full md:w-1/2">
                  <div className="w-full h-[30vh] md:h-[60vh] md:w-[35vw] flex justify-center items-center bg-black/50 md:bg-black/20 backdrop-blur-sm overflow-hidden ">
                    
                    <Image
                    className="object-fit -rotate-12 scale-125"
                    width={1200}
                    height={1200}
                    src="/slam-campbell-logo.png"
                    alt="slam-campbell-logo"
                  />

                  </div>
                </div>
                <div className="w-full md:w-1/2  lg:w-1/2 flex items-center justify-center md:min-h-[90dvh]">
                  <div className="bg-black/20 md:bg-black/0 p-4 md:p-0 w-full">
                    <h3
                      className={`text-5xl md:text-7xl text-white ${anton.className} uppercase`}
                    >
                      Slam Campbell
                    </h3>
                    <div className={`text-3xl text-white ${caveat.className}`}>
                      Branding & merch design
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full  flex flex-col-reverse md:flex-row gap-0 md:gap-8">
                <div className="w-full md:w-1/2  lg:w-1/2 flex items-center justify-center md:min-h-[70dvh]">
                  <div className="bg-black/20 md:bg-black/0 p-4 md:p-0 w-full">
                    <h3
                      className={`text-5xl md:text-7xl text-white ${anton.className} uppercase`}
                    >
                      {`Sugarsmith\'s`}
                    </h3>
                    <div className={`text-3xl text-white ${caveat.className}`}>
                      Branding & package design
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full md:w-1/2">
                  <div className="w-full h-[30vh] md:h-[60vh] md:w-[35vw] flex justify-center items-center bg-black/50 md:bg-black/20 backdrop-blur-sm overflow-hidden ">
                  <div className="absolute inset-0 bg-black/20 transition-all duration-300 z-40"></div>
                    <Image
                    className="object-fit  scale-125 before:content('') before:bg-black/50 before:w-full before:h-full"
                    width={1200}
                    height={1200}
                    src="/sugarsmiths-package2.jpeg"
                    alt="sugarsmiths-logo"
                  />

<Image
                    className="object-fit  absolute scale-75 top-4 z-50 "
                    width={1200}
                    height={1200}
                    src="/sugarsmiths-logo.png"
                    alt="sugarsmiths-logo"
                  />

                  </div>
                </div>
              </div>


              <div className="w-full  flex flex-col md:flex-row gap-0 md:gap-8">
                
                <div className="flex justify-center items-center w-full md:w-1/2">
                  <div className="w-full h-[30vh] md:h-[60vh] md:w-[35vw] flex justify-center items-center bg-black/50 md:bg-black/20 backdrop-blur-sm overflow-hidden ">
                    
                    <Image
                    className="object-fit -rotate-12 scale-125"
                    width={1200}
                    height={1200}
                    src="/khalifamints-logo.png"
                    alt="khalifamints-logo"
                  />

                  </div>
                </div>
                <div className="w-full md:w-1/2  lg:w-1/2 flex items-center justify-center md:min-h-[90dvh]">
                  <div className="bg-black/20 md:bg-black/0 p-4 md:p-0 w-full">
                    <h3
                      className={`text-5xl md:text-7xl text-white ${anton.className} uppercase`}
                    >
                      Headwater
                    </h3>
                    <div className={`text-3xl text-white ${caveat.className}`}>
                      Sticker design
                    </div>
                  </div>
                </div>
              </div>


              <div className="w-full  flex flex-col-reverse md:flex-row gap-0 md:gap-8">
                <div className="w-full md:w-1/2  lg:w-1/2 flex items-center justify-center md:min-h-[70dvh]">
                  <div className="bg-black/20 md:bg-black/0 p-4 md:p-0">
                    <h3
                      className={`text-5xl md:text-7xl text-white ${anton.className} uppercase`}
                    >
                      {`Overgrown Hydroponics`}
                    </h3>
                    <div className={`text-3xl text-white ${caveat.className}`}>
                      Branding, packaging & merch design
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full md:w-1/2">
                  <div className="w-full h-[30vh] md:h-[60vh] md:w-[35vw] flex justify-center items-center bg-black/50 md:bg-black/20 backdrop-blur-sm overflow-hidden ">
                    
                    <Image
                    className="object-fit rotate-12 scale-125"
                    width={1200}
                    height={1200}
                    src="/overgrown-logo.png"
                    alt="overgrown-logo"
                  />

                  </div>
                </div>
              </div>




              <div className="w-full  flex flex-col md:flex-row gap-0 md:gap-8">
                
                <div className="flex justify-center items-center w-full md:w-1/2">
                  <div className="w-full h-[30vh] md:h-[60vh] md:w-[35vw] flex justify-center items-center bg-black/50 md:bg-black/20 backdrop-blur-sm overflow-hidden ">
                    
                    <Image
                    className="object-fit -rotate-12 scale-125"
                    width={1200}
                    height={1200}
                    src="/seedbeast-logo.png"
                    alt="seedbeast-logo"
                  />

                  </div>
                </div>
                <div className="w-full md:w-1/2  lg:w-1/2 flex items-center justify-center md:min-h-[90dvh]">
                  <div className="bg-black/20 md:bg-black/0 p-4 md:p-0 w-full">
                    <h3
                      className={`text-5xl md:text-7xl text-white ${anton.className} uppercase`}
                    >
                      Seed Beast
                    </h3>
                    <div className={`text-3xl text-white ${caveat.className}`}>
                      Branding & merch design
                    </div>
                  </div>
                </div>
              </div>

</div>
              

            {/* <motion.svg
              className="ml-auto h-full w-full relative z-40"
              preserveAspectRatio={"xMaxYMax meet"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 337.67 497.01"
            >
              <motion.g style={{ ...animations.slide5.time.group }}>
                <motion.path
                  style={{ ...animations.slide5.time }}
                  d="M88.3,0v27.03h-22.55v90.86h-27.03V27.03h-22.39V0h71.98Z"
                />
                <motion.path
                  style={{ ...animations.slide5.time }}
                  d="M125.09,117.89h-27.03V.32h27.03v117.57Z"
                />
                <motion.path
                  style={{ ...animations.slide5.time }}
                  d="M219.46.32h27.83l6.88,117.57h-27.03l-2.88-47.99-16.32,47.99h-27.03l-17.28-49.91-3.2,49.91h-27.19L140.76.32h27.83l25.75,73.58L219.46.32Z"
                />
                <motion.path
                  style={{ ...animations.slide5.time }}
                  d="M337.67,27.67h-48.31v17.6h39.19v27.03h-39.19v18.56h48.31v27.03h-75.34V.64l75.34-.16v27.19Z"
                />
              </motion.g>
              <motion.g style={{ ...animations.slide5.for.group }}>
                <motion.path
                  style={{ ...animations.slide5.for }}
                  d="M117.89,153.89h-43.83v17.76h34.71v27.03h-34.71v45.59h-27.03v-117.41h70.86v27.03Z"
                />
                <motion.path
                  style={{ ...animations.slide5.for }}
                  d="M184.51,126.69c8.09,0,15.71,1.55,22.84,4.64,7.14,3.09,13.37,7.28,18.69,12.56s9.53,11.49,12.62,18.64c3.09,7.15,4.63,14.77,4.63,22.87s-1.54,15.73-4.63,22.87c-3.09,7.15-7.3,13.36-12.62,18.64s-11.55,9.46-18.69,12.56c-7.14,3.09-14.75,4.64-22.84,4.64s-15.71-1.54-22.84-4.64c-7.14-3.09-13.34-7.28-18.61-12.56s-9.45-11.49-12.54-18.64c-3.09-7.14-4.63-14.77-4.63-22.87s1.54-15.73,4.63-22.87c3.09-7.14,7.27-13.36,12.54-18.64s11.47-9.46,18.61-12.56c7.14-3.09,14.75-4.64,22.84-4.64ZM184.59,217.07c4.37,0,8.48-.82,12.32-2.48,3.84-1.65,7.2-3.92,10.08-6.8s5.14-6.24,6.8-10.08c1.65-3.84,2.48-7.94,2.48-12.32s-.83-8.48-2.48-12.32c-1.65-3.84-3.92-7.2-6.8-10.08s-6.24-5.14-10.08-6.8c-3.84-1.65-7.95-2.48-12.32-2.48s-8.48.83-12.32,2.48c-3.84,1.65-7.2,3.92-10.08,6.8s-5.15,6.24-6.8,10.08c-1.65,3.84-2.48,7.95-2.48,12.32s.82,8.48,2.48,12.32c1.65,3.84,3.92,7.2,6.8,10.08s6.24,5.15,10.08,6.8c3.84,1.65,7.94,2.48,12.32,2.48Z"
                />
                <motion.path
                  style={{ ...animations.slide5.for }}
                  d="M286.96,213.87c-1.39.22-2.77.37-4.16.48-1.39.11-2.83.21-4.32.32v29.59h-27.03v-116.93h27.03c6.72.11,13.01,1.33,18.88,3.67,5.86,2.34,11.01,5.49,15.44,9.43,4.42,3.94,7.89,8.55,10.4,13.82,2.5,5.27,3.76,10.83,3.76,16.69,0,6.39-1.33,12.25-4,17.57-2.67,5.32-6.4,9.96-11.2,13.9l25.91,41.85h-31.83l-18.88-30.39ZM278.49,187.64c2.88-.1,5.62-.61,8.24-1.53,2.61-.91,4.9-2.12,6.88-3.62,1.97-1.5,3.52-3.24,4.64-5.22,1.12-1.98,1.68-4.1,1.68-6.35s-.56-4.34-1.68-6.27c-1.12-1.93-2.67-3.64-4.64-5.14-1.97-1.5-4.27-2.7-6.88-3.62-2.61-.91-5.36-1.42-8.24-1.53v33.27Z"
                />
              </motion.g>
              <motion.g style={{ ...animations.slide5.that.group }}>
                <motion.path
                  style={{ ...animations.slide5.that }}
                  d="M71.98,252.74v27.03h-22.55v90.86h-27.03v-90.86H0v-27.03h71.98Z"
                />
                <motion.path
                  style={{ ...animations.slide5.that }}
                  d="M142.68,253.22h27.03v117.41h-27.03v-44.31h-33.91v44.31h-27.03v-117.41h27.03v46.07h33.91v-46.07Z"
                />
                <motion.path
                  style={{ ...animations.slide5.that }}
                  d="M249.22,370.64l-4.64-14.24h-36.95l-4.8,14.24h-28.63l39.99-117.41h25.59l37.91,117.41h-28.47ZM216.9,329.37h19.04l-9.28-28.47-9.76,28.47Z"
                />
                <motion.path
                  style={{ ...animations.slide5.that }}
                  d="M337.67,252.74v27.03h-22.55v90.86h-27.03v-90.86h-22.39v-27.03h71.98Z"
                />
              </motion.g>
              <motion.g style={{ ...animations.slide5.drip.group }}>
                <motion.path
                  style={{ ...animations.slide5.drip }}
                  d="M72.3,379.12c7.78.43,15.12,2.29,21.99,5.6,6.88,3.31,12.85,7.63,17.92,12.96,5.06,5.33,9.06,11.52,12,18.56,2.93,7.04,4.4,14.56,4.4,22.55s-1.44,15.28-4.32,22.15-6.85,12.93-11.92,18.16c-5.07,5.23-11.01,9.41-17.84,12.56-6.83,3.15-14.24,4.93-22.23,5.36h-27.03v-118.05h27.03v.16ZM72.3,469.97c4.16-.43,8.02-1.52,11.6-3.29,3.57-1.76,6.66-4.04,9.28-6.82,2.61-2.78,4.66-5.96,6.16-9.54,1.49-3.58,2.24-7.4,2.24-11.47s-.75-8.15-2.24-11.95c-1.49-3.79-3.57-7.16-6.24-10.1-2.67-2.94-5.76-5.35-9.28-7.22-3.52-1.87-7.36-3.02-11.52-3.45v63.82Z"
                />
                <motion.path
                  style={{ ...animations.slide5.drip }}
                  d="M170.36,466.62c-1.39.22-2.77.37-4.16.48-1.39.11-2.83.21-4.32.32v29.59h-27.03v-116.93h27.03c6.72.11,13.01,1.33,18.88,3.67,5.86,2.34,11.01,5.49,15.44,9.43,4.42,3.94,7.89,8.55,10.4,13.82,2.5,5.27,3.76,10.83,3.76,16.69,0,6.39-1.33,12.25-4,17.57-2.67,5.32-6.4,9.96-11.2,13.9l25.91,41.85h-31.83l-18.88-30.39ZM161.88,440.38c2.88-.1,5.62-.61,8.24-1.53,2.61-.91,4.9-2.12,6.88-3.62,1.97-1.5,3.52-3.24,4.64-5.22,1.12-1.98,1.68-4.1,1.68-6.35s-.56-4.34-1.68-6.27-2.67-3.64-4.64-5.14c-1.97-1.5-4.27-2.7-6.88-3.62-2.61-.91-5.36-1.42-8.24-1.53v33.27Z"
                />
                <motion.path
                  style={{ ...animations.slide5.drip }}
                  d="M246.18,497.01h-27.03v-117.57h27.03v117.57Z"
                />
                <motion.path
                  style={{ ...animations.slide5.drip }}
                  d="M337.67,429.02c0,6.72-1.25,13.04-3.76,18.96-2.51,5.92-5.97,11.12-10.4,15.6-4.43,4.48-9.57,8.03-15.44,10.64-5.87,2.61-12.16,3.97-18.88,4.08v18.72h-27.03v-117.41h27.03c6.72.11,13.01,1.49,18.88,4.16,5.86,2.67,11.01,6.24,15.44,10.72,4.42,4.48,7.89,9.68,10.4,15.6,2.5,5.92,3.76,12.24,3.76,18.96ZM289.2,451.1c2.98-.1,5.78-.77,8.4-2,2.61-1.22,4.88-2.82,6.8-4.8,1.92-1.97,3.44-4.29,4.56-6.96,1.12-2.66,1.68-5.49,1.68-8.48s-.56-5.81-1.68-8.48c-1.12-2.66-2.64-4.98-4.56-6.96-1.92-1.97-4.19-3.57-6.8-4.8-2.61-1.22-5.41-1.89-8.4-2v44.47Z"
                />
              </motion.g>
            </motion.svg> */}

            {/* <TheDrip scrollYProgress={scrollYProgress} /> */}
          </div>
        </motion.div>
        <motion.div
          layout
          id="section5"
          ref={refs.section5}
          className=" h-[90dvh] text-white lg:h-[90dvh] w-screen flex relative snap-center items-center justify-center  z-50"
        >
         
        </motion.div>
      </motion.div>
    </>
  );
};

export default Homepage;

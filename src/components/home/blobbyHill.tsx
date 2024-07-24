"use client";
import useViewportSize from "@/hooks/useViewportSize";
import {
  cubicBezier,
  motion,
  useAnimation,
  useInView,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const BlobbyHill = ({ scrollYProgress }: { scrollYProgress?: any }) => {
  const getYourHandsOffMyPurse = useRef(null);
  const areYourHandsOnMyPurse = useInView(getYourHandsOffMyPurse, {});

  const { isMobile } = useViewportSize();
  const timing = [0, 0.9, 1];
  const cB = cubicBezier(0.17, 0.67, 0.83, 0.67);

  const animations = {
    blueBlob: { 
      x: useTransform(scrollYProgress, timing, ['100vw','100vw',isMobile?'85vw':'75vw'], { ease: cB }),
      y: useTransform(scrollYProgress, timing, ['100vh','100vh',isMobile ? '35vh':'7vh'], { ease: cB }),
      scale: useTransform(scrollYProgress, timing, [2, 2, isMobile?2:1.2], { ease: cB}),
      // rotate: useTransform(scrollYProgress, timing, ['0deg', '0deg', '-30deg'], { ease: cB,  }),
    },
    yellowBlob: {
      x: useTransform(scrollYProgress, timing, ['-100vw','-100vw','-25vw']),
      y: useTransform(scrollYProgress, timing, ['100vh','100vh',isMobile ? '-30vh':'10vh']),
      scale: useTransform(scrollYProgress, timing, [0, isMobile ? 5:0, isMobile ? 1.5:1]),
      // rotate: useTransform(scrollYProgress, timing, ['-90deg', '-90deg', isMobile ? '-10deg':'10deg'], { ease: cB,  }),
    },
  };

  return (
    <motion.div
      className="w-full h-[90dvh] absolute  bottom-0 left-0 right-0 z-[11] overflow-hidden  "
      ref={getYourHandsOffMyPurse}
    >
      {/* --- blue blob --- */}
      <motion.div
        className="absolute right-0 top-12 w-full"
        style={{ ...animations.blueBlob }}
      >
        <svg
          id="Isolation_Mode"
          data-name="Isolation Mode"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 591.6 518.78"
          width="60%"
        >
          <defs>
            <style>
              {`
                .cls-2 {
                fill: url(#grad2);
                stroke-width: 0px;
                animation: blobAnimation 22s infinite;
                transform-origin: top center;
                }
                @keyframes blobAnimation {
                  0%, 100% {
                    d: path('M2.31,415.9c14.95-50.31,92.77-36.14,115.75-86.89,24.99-55.2-52.47-104.19-29.27-179.91,10.51-34.3,40.75-71.04,74.3-73.76,47.25-3.83,71.36,62.19,105.1,53.59,34.31-8.74,20.02-79.73,68.75-112.67,36.36-24.59,99.38-22.28,132.07,13.81,28.17,31.1,27.14,79.89,12.43,113.57-28.39,64.99-94.62,43.71-165.27,106.59-91.5,81.44-48.33,177.58-144.59,238.99-11.48,7.32-75.16,47.96-125.33,19.68-31.34-17.66-53.71-60.14-43.94-92.99Z');
                    transform: rotate(0deg);
                    filter: blur(0px) drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
                    box-shadow: 10px 10px 10px rgba(0,0,0,0.8);
                  }
                  25% {
                    d: path('M10,410c20-60,90-20,110-70,30-50-50-110-20-180,10-30,40-70,70-70,50-4,70,60,110,50,30-10,30-80,70-110,40-20,100-20,130,10,30,30,30,80,10,110-30,60-90,50-160,100-90,80-50,180-140,240-10,10-80,40-130,10-30-20-60-50-50-90Z');
                    transform: rotate(3deg);
                    filter: blur(10px);
                  }
                  50% {
                    d: path('M20,420c15-55,95-25,120-75,25-55-55-100-25-170,15-35,35-70,65-70,45-5,75,55,105,45,40-5,25-80,75-110,35-20,90-20,120,10,25,30,25,70,10,100-25,60-95,45-160,100-90,85-45,175-135,230-10,5-75,40-120,20-25-15-55-60-45-90Z');
                    transform: rotate(0deg);
                    filter: blur(0px) drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
                  }
                  75% {
                    d: path('M5,405c10-45,80-30,110-80,20-60-60-90-30-160,15-35,45-65,75-70,45-5,70,60,105,55,35-5,20-75,65-105,40-30,95-25,125,5,25,30,25,75,5,110-25,60-100,40-170,90-80,75-45,175-130,230-5,5-70,35-115,15-30-10-55-55-45-85Z');
                    transform: rotate(-3deg);
                    filter: blur(20px);
                  }
                }
            `}
            </style>
            <radialGradient
              id="grad2"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#46C4D9", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#46C4D9", stopOpacity: 1 }}
              />
            </radialGradient>
          </defs>
          <path
            className="cls-2"
            d="M2.31,415.9c14.95-50.31,92.77-36.14,115.75-86.89,24.99-55.2-52.47-104.19-29.27-179.91,10.51-34.3,40.75-71.04,74.3-73.76,47.25-3.83,71.36,62.19,105.1,53.59,34.31-8.74,20.02-79.73,68.75-112.67,36.36-24.59,99.38-22.28,132.07,13.81,28.17,31.1,27.14,79.89,12.43,113.57-28.39,64.99-94.62,43.71-165.27,106.59-91.5,81.44-48.33,177.58-144.59,238.99-11.48,7.32-75.16,47.96-125.33,19.68-31.34-17.66-53.71-60.14-43.94-92.99Z"
          />
        </svg>
      </motion.div>
      <motion.div
        className={`absolute  -translate-x-1/4 ${
          isMobile ? "top-1/2 left-0" : "-top-[11vh] left-0"
        } w-full`}
        style={{ ...animations.yellowBlob }}
      >
        <svg
          id="Isolation_Mode"
          data-name="Isolation Mode"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 591.6 518.78"
        >
          <defs>
            <style>
              {`
                .cls-1 {
                fill: url(#grad1);
                stroke-width: 0px;
                animation: blobAnimation2 30s infinite;
                transform-origin: center;
                }
                @keyframes blobAnimation2 {
                  0%, 100% {
                    d: path('M2.31,415.9c14.95-50.31,92.77-36.14,115.75-86.89,24.99-55.2-52.47-104.19-29.27-179.91,10.51-34.3,40.75-71.04,74.3-73.76,47.25-3.83,71.36,62.19,105.1,53.59,34.31-8.74,20.02-79.73,68.75-112.67,36.36-24.59,99.38-22.28,132.07,13.81,28.17,31.1,27.14,79.89,12.43,113.57-28.39,64.99-94.62,43.71-165.27,106.59-91.5,81.44-48.33,177.58-144.59,238.99-11.48,7.32-75.16,47.96-125.33,19.68-31.34-17.66-53.71-60.14-43.94-92.99Z');
                    transform: rotate(0deg);
                    filter: blur(0px) drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
                  }
                  25% {
                    d: path('M10,410c20-60,90-20,110-70,30-50-50-110-20-180,10-30,40-70,70-70,50-4,70,60,110,50,30-10,30-80,70-110,40-20,100-20,130,10,30,30,30,80,10,110-30,60-90,50-160,100-90,80-50,180-140,240-10,10-80,40-130,10-30-20-60-50-50-90Z');
                    transform: rotate(0deg);
                    filter: blur(10px);
                  }
                  50% {
                    d: path('M20,420c15-55,95-25,120-75,25-55-55-100-25-170,15-35,35-70,65-70,45-5,75,55,105,45,40-5,25-80,75-110,35-20,90-20,120,10,25,30,25,70,10,100-25,60-95,45-160,100-90,85-45,175-135,230-10,5-75,40-120,20-25-15-55-60-45-90Z');
                    transform: rotate(0deg) scale(1.1);
                    filter: blur(0px) drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
                  }
                  75% {
                    d: path('M5,405c10-45,80-30,110-80,20-60-60-90-30-160,15-35,45-65,75-70,45-5,70,60,105,55,35-5,20-75,65-105,40-30,95-25,125,5,25,30,25,75,5,110-25,60-100,40-170,90-80,75-45,175-130,230-5,5-70,35-115,15-30-10-55-55-45-85Z');
                    transform: rotate(0deg);
                    filter: blur(10px);
                  }
                }
            `}
            </style>
            <radialGradient
              id="grad1"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#FFCC00", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FFCC00", stopOpacity: 1 }}
              />
            </radialGradient>
          </defs>
          <path
            className="cls-1"
            d="M2.31,415.9c14.95-50.31,92.77-36.14,115.75-86.89,24.99-55.2-52.47-104.19-29.27-179.91,10.51-34.3,40.75-71.04,74.3-73.76,47.25-3.83,71.36,62.19,105.1,53.59,34.31-8.74,20.02-79.73,68.75-112.67,36.36-24.59,99.38-22.28,132.07,13.81,28.17,31.1,27.14,79.89,12.43,113.57-28.39,64.99-94.62,43.71-165.27,106.59-91.5,81.44-48.33,177.58-144.59,238.99-11.48,7.32-75.16,47.96-125.33,19.68-31.34-17.66-53.71-60.14-43.94-92.99Z"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default BlobbyHill;

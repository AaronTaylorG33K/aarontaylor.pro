"use client";
import { useSpring, animated } from "@react-spring/web";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import SVGMorph from "../components/svgMorph";
import { useEffect, useState } from "react";
import { useFlubber, getIndex } from "@/animations/use-flubber";


const flat = "M0,11h900V0H0v11Z"
const flat2 = "M0,11h859c13.85,0,27.3.1,34.2,0h6.8V0H0v11Z"
const allat11pt = "M0,11s5.1.37,6.8,0c6.9-1.51,20.5-.8,34.2,0,13.7.9,27.3-6.4,41,0,13.7,6.3,27.3,1.3,41,0,13.7-1.4,27.3,5.9,41,0,13.7-5.8,27.3-5.8,40.8,0,13.5,5.9,26.9-3.2,40.4,0,13.5,3.2,27.1,6.8,40.8,0s27.3,2,41,0,27.3-3.3,41,0,27.3,1,41,0,27.3-.5,41,0,27.3.9,41,0c13.7-.8,27.3,2.3,41,0,13.7-2.4,27.3-7.1,41,0,13.7,7.2,27.3-.8,41,0,13.7.9,27.3,1.6,40.8,0,13.5-1.7,26.9-2,40.4,0s27.1,5.3,40.8,0c13.7-5.4,27.3,2.5,41,0s27.3,0,41,0,27.3,2,41,0c13.7-2,27.3.1,34.2,0h6.8V0H0v11Z"
const svg1 =
  "M0,11l6.8-1.5c6.9-1.5,20.5-4.5,34.2-3.7,13.7.9,27.3,5.5,41,11.9,13.7,6.3,27.3,14.3,41,13,13.7-1.4,27.3-12,41-17.9,13.7-5.8,27.3-6.8,40.8-1,13.5,5.9,26.9,18.5,40.4,21.7,13.5,3.2,27.1-3.2,40.8-10s27.3-14.2,41-16.2,27.3,1.4,41,4.7,27.3,6.7,41,5.7,27.3-6.4,41-5.9,27.3,6.9,41,6c13.7-.8,27.3-8.8,41-11.1,13.7-2.4,27.3,1,41,8.1,13.7,7.2,27.3,18.2,41,19,13.7.9,27.3-8.5,40.8-10.1,13.5-1.7,26.9,4.3,40.4,6.3s27.1,0,40.8-5.3c13.7-5.4,27.3-14,41-16.5s27.3,1.1,41,1.1,27.3-3.6,41-5.6c13.7-2,27.3-2.4,34.2-2.5l6.8-.2V0H0v11Z";
const svg2 =
  "M0,11l6.8-1.5c6.9-1.5,20.5-4.5,34.2-3.7,13.7.9,27.3,5.5,41,11.9,13.7,6.3,25.76,32.51,39.46,31.21,13.7-1.4,28.84-30.21,42.54-36.11,13.7-5.8,30.89-.71,44.39,5.09,13.5,5.9,23.67,17.29,37.17,20.49,13.5,3.2,26.74-8.08,40.44-14.88s27.23-10.05,40.93-12.05,27.37-2.75,41.07.55,28.06,16.55,41.76,15.55,26.54-16.25,40.24-15.75,27.13,27.18,40.83,26.28c13.7-.8,28.45-20.53,42.15-22.83,13.7-2.4,26.1-1.25,39.8,5.85,13.7,7.2,26.69,30.81,40.39,31.61,13.7.9,28.13-27.42,41.63-29.02,13.5-1.7,26.9,4.3,40.4,6.3s27.1,0,40.8-5.3c13.7-5.4,27.3-14,41-16.5s28.52,13.49,42.22,13.49,26.08-15.99,39.78-17.99c13.7-2,27.3-2.4,34.2-2.5l6.8-.2V0H0v11Z";
const ellipseVariants = {
  start: {
    d: svg1,
  },
  end: {
    d:
      svg1
  }
};
// Splitting the SVG path string into segments
const segments = svg1.split(/[A-Za-z]/).filter(Boolean);

// Mapping each segment to an array
const arrayFormat = segments.map(segment => {
    const values = segment.split(/[, ]/).filter(Boolean).map(parseFloat);
    return values;
});



const paths = [flat, flat2, allat11pt, svg1, svg2];
const colors = [
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
  ];
const FlubberBar = () => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      }
    });

    return () => animation.stop();
  }, [pathIndex]);

  return (
    <>
     <svg width="1200" height="200">
      <g transform="translate(10 10) scale(1 1)">
        <motion.path fill={fill} d={path} />
      </g>
    </svg>
    
    </>
  );
};

export default FlubberBar;

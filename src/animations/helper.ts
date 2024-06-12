// central config for all scroll based animations

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

interface ConfigTypes {
  logo?: any;
  navbar?: any;
  hero?: any;
  hyper?: any;
  footer?: any;
}
interface ScrollConfig {
  [key: string]: any[]; // Define the type of values in scrollConfig as any array for now
}

interface FoundConfig {
  [key: string]: any; // Define the type of values in foundConfig as any for now
}
// This config object contains our animations and animation chains

// specify a startY and endY to contain within a range
// ommit the endY if you want the state to apply for the rest of the page


export const useAnimatedScroll = () => {
  const { scrollYProgress, scrollY } = useScroll();

  const [scrollState, setScrollState] = useState<
    "initial" | "scrolling" | "end"
  >("initial");
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  // scroll handlers
  useMotionValueEvent(scrollY, "change", (latest) => {
    setY(latest);
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPercentage(Math.round(latest * 100));
  });

  return {
    scrollYProgress,
    scrollY,
    scrollState,
    setScrollState,
    scrollPercentage,
    y,
  };
};

export const layoutTransitions = ({ pathname }: { pathname?: string }) => {
  // the pathname is passed here to create page specific transitions
  if (pathname && pathname === "/") {
    return {
      initial: {
        opacity: 0,
        transition: { duration: 0.5, easing: "easeInOut" },

        // clipPath: "circle(0% at 50% 50%)", // starting with a small circle at the center
      },
      animate: {
        opacity: 1,
        transition: { duration: 0.5, easing: "easeInOut" },
        // clipPath: "circle(100% at 50% 50%)", // expanding to cover the entire screen
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.5, easing: "easeInOut" },
        // clipPath: "circle(0% at 50% 50%)", // shrinking back to a small circle
      },
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    };
  } else if (pathname && pathname === "/about") {
    return {
      initial: { opacity: 0.5 },
      animate: { opacity: 1 },
      exit: { opacity: 0.5 },
      transition: { duration: 0.4, type: "tween" },
    };
  } else {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.4, type: "tween" },
    };
  }
};

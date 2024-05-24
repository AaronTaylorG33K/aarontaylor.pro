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

export const scrollConfig = {
  logo: [
    {
      startY: 0,
      endY: 180,
      animate: {
        light: { fill: "#46C4D9", scale: 1, rotate: 0 },
        dark: { fill: "#FFFFFF", scale: 1, rotate: 0 },
      },
    },
    {
      startY: 180,
      animate: {
        light: { fill: "#000000", scale: 1.1, rotate: -5 },
        dark: { fill: "#FFFFFF", scale: 1.1, rotate: -5 },
      },
    },
  ],
  navbar: [
    { startY: 0, endY: 100, animate: { light: { color: "#000000" }, dark: { color: "#ffffff" } } },
    { startY: 100, animate: { light: { color: "#ffffff" }, dark: {color:'#000000'} }},
  ],
  hero: [{ startY: 0, endY: 100, properties: { opacity: 0.5, y: 0 } }],
  hyper: [{ startY: 0, endY: 100, properties: { opacity: 0.5, y: 0 } }],
  footer: [{ startY: 0, endY: 100, properties: { opacity: 0.5, y: 0 } }],
};

function getDistanceFromTop(elem: Element) {
  var rect = elem.getBoundingClientRect();
  return rect.top;
}

export const useAnimatedScroll = () => {
  const { scrollYProgress, scrollY } = useScroll();

  const [scrollState, setScrollState] = useState<
    "initial" | "scrolling" | "end"
  >("initial");
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const getConfigForRange = useCallback(
    (
      configArray: {
        config?: any;
        startY: number;
        endY?: number;
        properties: any; // Assuming properties are always present
      }[],
      y: number
    ) => {
      return (
        configArray.find(
          (config) =>
            config.startY <= y &&
            (config.endY === undefined || config.endY >= y)
        ) || configArray[0]
      );
    },
    [y]
  );

  // scroll handlers
  useMotionValueEvent(scrollY, "change", (latest) => {
    setY(latest);
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPercentage(Math.round(latest * 100));
  });

  const config = useMemo(() => {
    let foundConfig: FoundConfig = {};
    for (const key in scrollConfig) {
      if (Object.hasOwnProperty.call(scrollConfig, key)) {
        const configArray = (scrollConfig as ScrollConfig)[key] as any[];
        const configForRange = getConfigForRange(configArray, y);
        if (configForRange) {
          foundConfig[key] = configForRange;
        }
      }
    }
    return foundConfig;
  }, [getConfigForRange]);

  return {
    scrollYProgress,
    scrollY,
    scrollState,
    setScrollState,
    scrollPercentage,
    y,
    config: config as ConfigTypes,
  };
};

export const layoutTransitions = ({ pathname }: { pathname?: string }) => {
  // the pathname is passed here to create page specific transitions
  if (pathname && pathname === "/") {
    return {
      initial: { opacity: 0, y: -500 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -500 },
      transition: { type: "spring" },
    };
  } else if (pathname && pathname === "/about") {
    return {
      initial: { opacity: 0.5, y: -500 },
      animate: { opacity: 1, y:0 },
      exit: { opacity: 0.5, y:500},
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

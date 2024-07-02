'use client'
import { useState, useEffect } from "react";

interface ViewportSize {
  width: number;
  height: number;
}

interface ViewportType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

const useViewportSize = (): ViewportType => {
  const [viewportSize, setViewportSize] = useState<ViewportSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  // const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize to set initial size if the component is mounted in the browser
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {

    const { width } = viewportSize;
    setIsMobile(width < 640);
    setIsTablet(width >= 640 && width < 1024);
    setIsDesktop(width >= 1024);
  }, [viewportSize]);

  const { width } = viewportSize;
  return { isMobile, isTablet, isDesktop, width };
};

export default useViewportSize;

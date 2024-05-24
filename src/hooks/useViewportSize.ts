import { useState, useEffect } from "react";

interface ViewportSize {
  width: number;
  height: number;
}

interface ViewportType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useViewportSize = (): ViewportType => {
  const [viewportSize, setViewportSize] = useState<ViewportSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

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

  return { isMobile, isTablet, isDesktop };
};

export default useViewportSize;

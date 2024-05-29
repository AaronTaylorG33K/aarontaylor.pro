"use client";
import { cubicBezier, motion, useTransform } from "framer-motion";
import { scrollConfig, useAnimatedScroll } from "@/animations/helper";
import useViewportSize from "@/hooks/useViewportSize";

type LogoProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  animate?: any;
};

const Logo = (props: LogoProps) => {
  const { animate } = props;
  const { scrollYProgress } = useAnimatedScroll();
  const { isMobile } = useViewportSize();

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6],
    [isMobile ? 1.1 : 1.5, isMobile ? 1.2 : 1.6, isMobile ? 1.2 : 1.6]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6],
    ["-20deg", "-10deg", "-10deg"]
  );

  const cB = cubicBezier(0.17, 0.67, 0.83, 0.67);
  const transformers = [0, 0.5, 0.8, 1]
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [1, 1, 1, 0], {ease: cB});
  const x = useTransform(scrollYProgress, [0, 0.3, 0.6], ["0%", "0%", "0%"], {ease: cB});
  const y = useTransform(scrollYProgress, [0,0.5, 0.9, 1], ['0vh', '-10vh','5vh','-50vh'], {ease: cB});
  const color = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9, 1],
    ["#000000", "#46C4D9", "#46C4D9", "#46C4D9", "#ffffff"],
    {ease: cB}
  );


  return (
    <motion.div>
      <motion.svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 160.53 120"
        xmlSpace="preserve"
        width="200"
        style={{ x, y, opacity, scale, rotate, color, fill:color} }
      >
        <motion.path style={{ color, fill:color }} d="M138.03,45.8c-0.1-0.15-0.2-0.27-0.3-0.37c-0.63-0.55-1.45-0.69-2.44-0.44c-1.01,0.32-1.85,0.9-2.55,1.75    c-0.69,0.85-1.28,1.74-1.77,2.69c-0.39,0.72-0.81,1.56-1.24,2.52c-0.02-1.21-0.11-2.44-0.27-3.71c-0.2-1.28-0.58-2.22-1.15-2.81    c-0.57-0.59-1.26-0.93-2.07-1c-0.81-0.07-1.66,0.03-2.57,0.32c-0.9,0.29-1.79,0.67-2.65,1.14c-0.04-0.28-0.19-0.5-0.45-0.65    c-0.26-0.15-0.54-0.16-0.83-0.05c-0.76,0.44-1.41,1.13-1.95,2.08c-0.54,0.95-0.93,2-1.19,3.15c-0.01,0.04-0.01,0.09-0.02,0.13    c-0.27,0.5-0.65,1.14-1.14,1.93c-0.56,0.9-1.15,1.7-1.77,2.41c-0.3,0.34-0.63,0.63-0.99,0.89c-0.36,0.26-0.68,0.38-0.98,0.38    c-0.45-0.06-0.78-0.51-1-1.36c-0.22-0.85-0.35-1.95-0.4-3.29s-0.03-2.8,0.04-4.35c0.07-1.56,0.18-3.07,0.31-4.53    c0.14-1.46,0.28-2.73,0.42-3.81c0.14-1.08,0.26-1.82,0.35-2.21c0.02-0.4-0.11-0.69-0.38-0.87c-0.27-0.18-0.57-0.22-0.91-0.13    c-0.34,0.1-0.59,0.36-0.76,0.77c-0.39,1.16-0.7,2.89-0.92,5.2c-0.22,2.31-0.33,4.63-0.33,6.98c0,0.59,0.01,1.14,0.03,1.66    c-0.04,0.01-0.08,0-0.12,0.02c-1.02,0.44-2.09,0.99-3.23,1.64c-0.02,0.01-0.04,0.02-0.05,0.03c-0.17,0.1-0.35,0.21-0.52,0.31    c-0.28-2.32-0.72-4.6-1.32-6.86c0-0.02-0.01-0.04-0.02-0.06c-0.02-0.09-0.05-0.17-0.09-0.24c-0.04-0.07-0.12-0.1-0.24-0.11    c-0.27-0.01-0.57,0.03-0.88,0.13c-0.31,0.1-0.51,0.23-0.59,0.39c-0.16,0.39-0.43,1-0.81,1.82c-0.38,0.83-0.82,1.7-1.31,2.61    c-0.5,0.91-0.99,1.69-1.48,2.33c-0.49,0.64-0.93,0.97-1.3,0.98c-0.28-0.02-0.5-0.26-0.63-0.74c-0.14-0.47-0.23-1.06-0.27-1.77    c-0.04-0.71-0.06-1.43-0.04-2.18c0.02-0.75,0.04-1.41,0.07-1.99c0.01-0.39,0.02-0.7,0.03-0.93c-0.01-0.29-0.16-0.48-0.45-0.59    c-0.29-0.11-0.58-0.12-0.88-0.04c-0.29,0.09-0.47,0.28-0.52,0.59c0,0.09,0,0.18-0.01,0.27c-0.11,1.06-0.17,2.21-0.18,3.46    c0,0.46,0.02,0.89,0.06,1.31c-0.03,0.04-0.06,0.07-0.08,0.12c-0.43,1.33-0.87,2.41-1.3,3.22c-0.44,0.81-0.85,1.4-1.25,1.77    c-0.4,0.37-0.76,0.55-1.09,0.55c-0.56-0.03-1.03-0.47-1.42-1.34c-0.39-0.86-0.7-1.98-0.92-3.35c-0.23-1.37-0.37-2.83-0.42-4.38    c0.21-0.61,0.18-1.07-0.08-1.39c-0.27-0.32-0.65-0.53-1.15-0.65c-0.5-0.12-0.98-0.18-1.45-0.19c-1.34-0.01-2.49,0.38-3.46,1.15    s-1.73,1.76-2.3,2.95c-0.57,1.19-0.92,2.41-1.06,3.66c-0.13,1.25-0.04,2.33,0.29,3.26c0.33,0.93,0.9,1.52,1.73,1.77    c0.75,0.17,1.46,0,2.12-0.5c0.66-0.51,1.25-1.19,1.78-2.04c0.53-0.86,0.98-1.72,1.36-2.6c0.38-0.88,0.66-1.61,0.86-2.18    c0.26,1.82,0.58,3.25,0.95,4.28c0.37,1.04,0.83,1.76,1.36,2.18c0.53,0.42,1.15,0.63,1.86,0.63c0.63,0,1.21-0.21,1.73-0.62    c0.52-0.41,0.99-0.93,1.39-1.56c0.4-0.63,0.75-1.31,1.04-2.02c0.05-0.13,0.09-0.25,0.14-0.37c0.24,0.42,0.56,0.74,0.96,0.94    c0.51,0.26,1.06,0.35,1.64,0.27c0.58-0.08,1.11-0.34,1.59-0.77c1.17-1.11,2.33-3.03,3.51-5.76c0.06,0.3,0.12,0.61,0.17,0.92    c0.01,0.07,0.02,0.14,0.03,0.21l0.09,0.5c0,0.03,0.01,0.06,0.02,0.08c0.19,1.01,0.38,2.3,0.58,3.89c-0.77,0.5-1.53,1.02-2.27,1.55    c-2.37,1.71-4.15,3.35-5.32,4.91c-1.22,1.62-1.91,3.1-2.08,4.43c-0.05,0.37-0.06,0.72-0.05,1.06c-3.6-0.14-7.21-0.26-10.81-0.33    c-4.21-0.08-8.41-0.12-12.62-0.09c2.57-5.51,4.9-11.12,7.01-16.81c9.81-6.94,17.58-16.68,22.19-27.84    c1.73-4.19,2.96-8.56,3.79-13.01c0.16-0.88,0.38-2.64-0.14-3.42c-0.52-0.78-0.68,0.39-0.77,0.88C98.74,19.33,89.91,32.8,78.05,41.84    c-2.41,1.83-4.95,3.47-7.6,4.92c0.33-1.6,0.55-3.23,0.64-4.91c0.24-4.28-0.31-8.35-1.65-12.21c-1.34-3.86-3.46-7.06-6.37-9.6    c-2.91-2.54-6.61-3.93-11.09-4.19c-4.53-0.13-8.46,0.93-11.8,3.2c-3.33,2.26-6,5.25-7.98,8.97c-1.99,3.72-3.22,7.71-3.7,11.98    s-0.12,8.35,1.07,12.24c1.19,3.89,3.3,7.13,6.34,9.72c2.06,1.76,4.59,3,7.57,3.73c-4.48,0.3-8.95,0.67-13.41,1.13    C21,67.77,11.59,68.75,3.39,73.01c-0.16,0.06-0.26,0.17-0.29,0.33c0.48,1.14,1.47,1.73,2.58,2.16c1.59,0.61,3.25,1.09,4.87,1.62    c3.45,1.14,6.9,2.27,10.35,3.41c6.82,2.24,13.65,4.47,20.47,6.69c2.97,0.97,6.24,2.55,9.41,2.47c1.69-0.04,3.75-0.33,5.21-1.26    c1.21-0.77,1.86-2.09,2.58-3.28c3.51-5.82,6.74-11.8,9.69-17.93c0.17-0.35,0.32-0.7,0.49-1.05c8.12,0,16.23,0.2,24.34,0.57    c0.1,0.27,0.21,0.54,0.36,0.78c0.56,0.91,1.33,1.54,2.32,1.89s2.04,0.35,3.16,0.01c1.1-0.34,2.1-1.08,3.03-2.22    c0.55,0.03,1.11,0.06,1.66,0.09c9.37,0.58,18.73,1.26,28.12,1.09c0.9-0.02,2.65-0.12,3.33-0.79c0.67-0.65-0.51-0.59-1.01-0.59    c-8.63,0.16-17.25-0.48-25.86-1.02c-1.76-0.11-3.53-0.21-5.29-0.31c0.52-1.01,0.95-2.21,1.27-3.63c0.28-1.37,0.43-2.78,0.44-4.23    c0.01-1.44-0.06-2.82-0.2-4.13c0.37-0.22,0.72-0.44,1.07-0.64c0.98-0.56,1.89-1.02,2.75-1.41c0.07,0.91,0.17,1.68,0.31,2.32    c0.17,0.72,0.41,1.35,0.7,1.88c0.29,0.53,0.64,0.95,1.06,1.24c0.41,0.29,0.9,0.44,1.46,0.44c0.56,0,1.12-0.16,1.69-0.48    c0.57-0.32,1.1-0.77,1.58-1.36c0.46-0.57,0.9-1.21,1.34-1.88c0.1,1.05,0.41,1.92,0.92,2.59c0.52,0.69,1.28,1.05,2.28,1.08    c0.5-0.01,0.97-0.17,1.41-0.47c0.44-0.3,0.8-0.75,1.09-1.35c0.41-0.87,0.65-2.07,0.71-3.62c0.03-0.92-0.06-1.82-0.27-2.68    c-0.21-0.86-0.53-1.61-0.98-2.24c1.04-0.61,1.98-1.07,2.84-1.36c0.86-0.29,1.56-0.25,2.1,0.14c0.54,0.38,0.85,1.29,0.94,2.71    c0.04,1.12,0.08,2.31,0.12,3.58c0.04,1.99,0.1,3.52,0.2,4.59c0.03,0.23,0.1,0.4,0.22,0.49c0.12,0.09,0.26,0.14,0.42,0.13    c0.11,0.01,0.22,0.02,0.34,0.01c0.17,0.01,0.34,0.01,0.5,0.01c0.18,0,0.31-0.04,0.38-0.13c0.07-0.09,0.13-0.2,0.18-0.34    c0.01-0.04,0.02-0.08,0.03-0.11c0.23-0.57,0.46-1.17,0.7-1.8c0.44-1.19,0.93-2.4,1.46-3.64c0.53-1.24,1.12-2.33,1.76-3.29    c0.64-0.96,1.35-1.6,2.12-1.93c0.35-0.12,0.67-0.17,0.98-0.13c0.31,0.04,0.57,0.08,0.79,0.14c0.06,0.02,0.12,0.04,0.17,0.05    c0.24,0.05,0.37,0.02,0.39-0.08C138.17,46.08,138.13,45.95,138.03,45.8z M83.27,51.76c-0.86,1.86-1.71,3.32-2.55,4.38    c-0.27,0.36-0.53,0.53-0.78,0.52c-0.24-0.01-0.41-0.36-0.51-1.05c-0.09-0.69-0.06-1.55,0.08-2.57c0.15-1.02,0.44-2.03,0.88-3.03    c0.43-1,1.03-1.8,1.79-2.41c0.76-0.61,1.69-0.85,2.81-0.72C84.71,48.27,84.13,49.9,83.27,51.76z M33.54,51.48    c-0.9-3.51-1.13-7.19-0.68-11.04c0.45-3.85,1.48-7.48,3.12-10.88c1.63-3.4,3.79-6.17,6.47-8.31c2.68-2.14,5.8-3.26,9.35-3.37    c3.25,0.38,5.99,1.59,8.23,3.65c2.23,2.05,3.94,4.64,5.11,7.75c1.18,3.12,1.83,6.44,1.95,9.99c0.11,3.12-0.23,6.16-0.96,9.13    c-1.58-0.04-3.17-0.68-4.3-1.72c-0.05-0.05-0.09-0.1-0.14-0.15c-0.38-0.69-0.7-1.46-0.96-2.32c-0.46-1.51-0.8-3.07-1.02-4.67    c-0.22-1.6-0.39-3.05-0.51-4.34c-0.04-0.47-0.09-0.9-0.14-1.26c0.26,0.03,0.48-0.12,0.66-0.46c0.19-0.34,0.3-0.72,0.34-1.15    c0.04-0.43-0.03-0.75-0.22-0.98c-0.82-0.85-1.87-1.53-3.14-2.02c-1.27-0.5-2.6-0.78-3.99-0.87c-2.1-0.11-3.95,0.26-5.55,1.13    s-3.01,2.12-4.24,3.77c-1.41,1.83-2.53,4-3.35,6.52c-0.82,2.51-1.18,5.01-1.1,7.48c0.12,2.16,0.63,3.88,1.53,5.18    c0.9,1.3,2.07,2,3.51,2.1c0.84,0.04,1.73-0.14,2.68-0.54c0.95-0.4,1.87-1.1,2.75-2.09c1.5-1.85,2.91-3.98,4.23-6.4    c1.32-2.41,2.23-4.4,2.72-5.95c0.11,1.85,0.51,3.7,1.18,5.53c0.67,1.83,1.67,3.36,2.99,4.58c0.38,0.35,0.8,0.65,1.25,0.9    c1.03,0.86,2.27,1.42,3.56,1.59c-0.89,2.19-2.03,4.17-3.44,5.93c-1.56,1.93-3.45,3.47-5.67,4.61c-2.22,1.14-4.77,1.74-7.66,1.81    c-4.04-0.48-7.26-1.91-9.65-4.29C36.08,57.94,34.44,54.99,33.54,51.48z M55.14,32.86c-0.28,1-0.74,2.15-1.39,3.46    c-0.65,1.31-1.38,2.72-2.2,4.26c-0.49,0.88-0.98,1.8-1.47,2.74c-0.63,1.24-1.34,2.51-2.12,3.81c-0.78,1.3-1.54,2.41-2.29,3.34    s-1.36,1.38-1.83,1.36c-0.49-0.02-0.88-0.36-1.17-1.02c-0.28-0.66-0.4-1.58-0.35-2.76c0.1-1.74,0.46-3.67,1.07-5.79    c0.62-2.12,1.48-4.08,2.59-5.87c1.11-1.79,2.43-3.07,3.97-3.83C51.5,31.79,53.23,31.89,55.14,32.86z M60.35,63.03    c3.35-2.32,5.91-5.36,7.7-9.12c0.19-0.41,0.37-0.82,0.55-1.23c0.61-0.31,1.21-0.62,1.8-0.95c-1.71,4.43-3.57,8.81-5.57,13.12    c-2.79,0.04-5.58,0.1-8.37,0.2C57.86,64.53,59.16,63.86,60.35,63.03z M52.05,88.28C51.5,88.85,51.61,88.5,52.05,88.28L52.05,88.28z     M52.55,88.15c0.2-0.01,0.43,0.02,0.67,0.14C53.06,88.21,52.78,88.18,52.55,88.15z M56.58,80.91c-0.69,1.21-1.38,2.41-2.09,3.61    c-0.69,1.16-1.34,2.54-2.26,3.56c-0.73-0.19-1.44-0.44-2.16-0.67c-1.57-0.51-3.14-1.02-4.71-1.53c-6.2-2.02-12.4-4.04-18.59-6.08    c-3.45-1.13-6.9-2.27-10.35-3.4c-1.72-0.57-3.45-1.13-5.17-1.71c-1.22-0.41-2.55-0.84-3.15-2.05c6.56-3.29,14.13-3.84,21.32-4.57    c8.16-0.83,16.35-1.35,24.54-1.64c3.41-0.12,6.82-0.18,10.23-0.22C61.84,71.2,59.31,76.11,56.58,80.91z M97.57,68.22    c-0.99,0.18-1.81-0.05-2.45-0.69c-0.2-0.2-0.36-0.44-0.49-0.7c1.66,0.08,3.32,0.16,4.97,0.26C98.92,67.7,98.25,68.09,97.57,68.22z     M94.24,65.28c-0.01-0.16-0.03-0.32-0.02-0.5c0.04-1.19,0.6-2.54,1.66-4.02c1.08-1.49,2.81-3.09,5.19-4.82    c0.54-0.39,1.08-0.76,1.63-1.12c0.09,1.12,0.13,2.27,0.1,3.45c-0.03,1.18-0.16,2.33-0.39,3.45c-0.36,1.63-0.88,2.9-1.53,3.88    C98.67,65.47,96.46,65.37,94.24,65.28z M120.88,55.35c-0.27,0.76-0.65,1.15-1.16,1.16c-0.48-0.07-0.85-0.58-1.1-1.54    c-0.26-0.95-0.29-2.13-0.09-3.51c0.19-1.39,0.72-2.76,1.58-4.13c0.46,0.46,0.79,1.17,0.99,2.15c0.2,0.98,0.28,2.01,0.25,3.1    C121.3,53.66,121.15,54.58,120.88,55.35z"></motion.path>
      </motion.svg>
    </motion.div>
  );
};

export default Logo;

"use client";
import {
  cubicBezier,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import useViewportSize from "@/hooks/useViewportSize";
import { useAnimatedScroll } from "@/animations/helper";

const n6 =
  "M0 289L9.3 272.5C18.7 256 37.3 223 56.2 212.2C75 201.3 94 212.7 112.8 249C131.7 285.3 150.3 346.7 169 343.5C187.7 340.3 206.3 272.7 225 244.5C243.7 216.3 262.3 227.7 281.2 235C300 242.3 319 245.7 337.8 248.3C356.7 251 375.3 253 394 261.2C412.7 269.3 431.3 283.7 450 271.5C468.7 259.3 487.3 220.7 506.2 234C525 247.3 544 312.7 562.8 327.5C581.7 342.3 600.3 306.7 619 310.8C637.7 315 656.3 359 675 346.8C693.7 334.7 712.3 266.3 731.2 258.8C750 251.3 769 304.7 787.8 312.8C806.7 321 825.3 284 844 291.7C862.7 299.3 881.3 351.7 890.7 377.8L900 404L900 0L890.7 0C881.3 0 862.7 0 844 0C825.3 0 806.7 0 787.8 0C769 0 750 0 731.2 0C712.3 0 693.7 0 675 0C656.3 0 637.7 0 619 0C600.3 0 581.7 0 562.8 0C544 0 525 0 506.2 0C487.3 0 468.7 0 450 0C431.3 0 412.7 0 394 0C375.3 0 356.7 0 337.8 0C319 0 300 0 281.2 0C262.3 0 243.7 0 225 0C206.3 0 187.7 0 169 0C150.3 0 131.7 0 112.8 0C94 0 75 0 56.2 0C37.3 0 18.7 0 9.3 0L0 0Z";
const n7 =
  "M0 9L9.3 9C18.7 9 37.3 9 56.2 9C75 9 94 9 112.8 9C131.7 9 150.3 9 169 9C187.7 9 206.3 9 225 9C243.7 9 262.3 9 281.2 9C300 9 319 9 337.8 9C356.7 9 375.3 9 394 9C412.7 9 431.3 9 450 9C468.7 9 487.3 9 506.2 9C525 9 544 9 562.8 9C581.7 9 600.3 9 619 9C637.7 9 656.3 9 675 9C693.7 9 712.3 9 731.2 9C750 9 769 9 787.8 9C806.7 9 825.3 9 844 9C862.7 9 881.3 9 890.7 9L900 9L900 0L890.7 0C881.3 0 862.7 0 844 0C825.3 0 806.7 0 787.8 0C769 0 750 0 731.2 0C712.3 0 693.7 0 675 0C656.3 0 637.7 0 619 0C600.3 0 581.7 0 562.8 0C544 0 525 0 506.2 0C487.3 0 468.7 0 450 0C431.3 0 412.7 0 394 0C375.3 0 356.7 0 337.8 0C319 0 300 0 281.2 0C262.3 0 243.7 0 225 0C206.3 0 187.7 0 169 0C150.3 0 131.7 0 112.8 0C94 0 75 0 56.2 0C37.3 0 18.7 0 9.3 0L0 0Z";


const TheDrip = ({scrollYProgress}:{scrollYProgress?: any}) => {

  const { isMobile } = useViewportSize();

  const quadRanges = [
    0,
    isMobile ? 0.6 : 0.5,
    isMobile ? 1 : 0.75,
    isMobile ? 1 : 1,
  ];
  const cB = cubicBezier(0.17, 0.67, 0.83, 0.67);

  const drip = useTransform(
    scrollYProgress,
    [0.9, 1],
    [n6, n7],
    {
      ease: cB,
    }
  );

 
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.9, 1],
    [0.5, isMobile? 5:1.5, 0],
    { ease: cubicBezier(0.67, 0.37, 0.13, 0.37)}
  );

  const springScaleY = useSpring(scaleY, {damping: 10, stiffness: 100});

  const y = useTransform(
    scrollYProgress,
    [0, 0.2,0.95, 1],
    ["0",isMobile ? "500":"200", "0", "0vh"],
    { ease: cB }
  );
  const color = useTransform(scrollYProgress, [0,1],['#000000','#ffffff']);
  const shadowValue = useTransform(
    scrollYProgress,
    [...quadRanges],
    [
      "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
      "drop-shadow(10px 10px 15px rgba(0, 0, 0, 0.4))",
      "drop-shadow(10px 10px 15px rgba(0, 0, 0, 0.4))",
      "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
    ],
    {
      ease: cB,
    }
  );

  return (
    <motion.div
      id="theDrip"
      className={`w-full fixed pointer-events-none  z-40`}
      // style={{y}}
    >
      <motion.svg
        className=" origin-top  "
        viewBox={`0 0 ${isMobile ? 900 : 900} 500`}
        // width={`${isMobile ? '50%':'100%'}`}
        style={{ scaleY:springScaleY }}
        
      >
        <motion.path
        className={'origin-top'}
          // className={`shadow-xl`}
          d={drip}
          fill={"#ffffff"}
          style={{ filter: shadowValue }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default TheDrip;

"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Logo from "../logo";
import TheDrip from "./theDrip";
import BlobbyHill from "./blobbyHill";
import HalfToneLayer from "./halftone";

const HyperPinkBreakpoints = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const snapPanelClass = `w-screen h-full overflow-hidden snap-center`;
  return (
    <>
      <Logo width={200} scrollYProgress={scrollYProgress} />
      <TheDrip scrollYProgress={scrollYProgress} />
      <HalfToneLayer scrollYProgress={scrollYProgress} />
      <motion.div
        className="overflow-y-auto w-screen h-[80vh] lg:h-[90vh] snap-mandatory snap-y hyperPink"
        layout
        ref={ref}
      >
        {/* These are individual divs so we can set snap-center on them */}
        <motion.div viewport={{ amount: 0.5 }} className={snapPanelClass} />
        <motion.div viewport={{ amount: 0.5 }} className={snapPanelClass} />
        <motion.div viewport={{ amount: 0.5 }} className={snapPanelClass} />
        <motion.div viewport={{ amount: 0.5 }} className={snapPanelClass} />
        <motion.div viewport={{ amount: 0.5 }} className={snapPanelClass} />
        <motion.div viewport={{ amount: 0.5 }} className={snapPanelClass}>
          <BlobbyHill scrollYProgress={scrollYProgress} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HyperPinkBreakpoints;

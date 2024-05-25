'use client';

import { motion, useScroll, useTransform } from "framer-motion";

const SubHero = () => {
  const { scrollY } = useScroll();
  const top = useTransform(scrollY, [300, 1800], [-400, 700]);

  return (
    <motion.div id="subHero" className="absolute h-full w-full top-0 w-full lg:w-1/2 z-50 flex flex-col px-4 lg:px-0 gap-4 items-center justify-center text-white"  style={{ top }}>
      <motion.div
        className=" bg-[rgba(255,255,255,0.2)] border border-white rounded-lg w-full lg:w-1/2 items-center flex h-[500px] justify-center"
      >
        <div>Component</div>
      </motion.div>
    </motion.div>
  );
};

export default SubHero;

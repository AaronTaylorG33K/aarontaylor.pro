'use client';

import { motion, useScroll, useTransform } from "framer-motion";

const SubHero = () => {
  const { scrollY } = useScroll();
  const top = useTransform(scrollY, [300, 1800], [-400, 700]);

  return (
    <motion.div id="subHero" className="absolute h-[200vh] w-full top-0 w-full z-50 flex flex-col px-4 lg:px-0 gap-4 items-center justify-center text-white"  style={{ top }}>
      <motion.div
        className="  rounded-lg w-full lg:w-1/2 items-center flex h-[500px] justify-center"
      >
        <div>&nbsp;</div>
      </motion.div>
    </motion.div>
  );
};

export default SubHero;

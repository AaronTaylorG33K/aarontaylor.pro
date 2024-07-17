'use client'
import Image from "next/image";
import { Caveat, Anton } from "@next/font/google";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import useViewportSize from "@/hooks/useViewportSize";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
});
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

interface MediaCardProps {
  url: string;
  title: string;
  subtitle: string;
  orientation: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  url,
  title,
  subtitle,
  orientation,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isMobile } = useViewportSize();
  return (
    <div
      ref={ref}
      className={`w-full  flex flex-col-reverse  ${orientation === 'left' ? 'md:flex-row':'md:flex-row-reverse'} gap-0 md:gap-8`}
    >
      <div className="w-full md:w-1/2  lg:w-1/2 flex items-center justify-center md:min-h-[70dvh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="bg-black/20 md:bg-black/0 p-4 md:p-0 w-full md:w-auto"
        >
          <h3
            className={`text-5xl md:text-7xl text-white ${anton.className} uppercase`}
          >
            {title}
          </h3>
          <div className={`text-3xl text-white ${caveat.className}`}>
            {subtitle}
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2">
        <div className="w-full h-[30vh] md:h-[60vh] md:w-[35vw] flex justify-center items-center bg-black/50 md:bg-black/20v w-full backdrop-blur-sm overflow-hidden ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1.2 : 1, rotate: isInView ? orientation === 'left' ? '12deg':'-12deg':'0deg' }}
            transition={{ duration: 1.5 }}
            className="w-full"
          >
            <Image
              className="object-contain"
              width={1200}
              height={1200}
              src={url}
              alt="runrabbit-logo"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;

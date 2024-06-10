import { Open_Sans } from "next/font/google";
import TheDrip from "./theDrip";

const open_sans = Open_Sans({ subsets: ["latin"] });

const Hero = ({scrollYProgress}) => {
  return (
    <div
      className={`snap-none relative h-[400px] w-full bg-white text-black text-5xl pt-28 lg:pt-0 lg:text-7xl flex flex-col items-center justify-between ${open_sans.className}`}
      id="hero"
    >

      <div className=" grow-1">Hero</div>
      
      
      
    </div>
  );
};

export default Hero;

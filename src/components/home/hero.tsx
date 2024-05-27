import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div
      className={` relative h-[400px] w-full bg-white text-black text-5xl pt-28 lg:pt-0 lg:text-7xl flex items-center justify-center ${open_sans.className}`}
      id="hero"
    >
      Brilliant
      <br />
      Design &<br />
      Branding
    </div>
  );
};

export default Hero;

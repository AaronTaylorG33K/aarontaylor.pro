import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div
      className={` relative h-[400px] w-full bg-white text-black text-5xl pt-28 lg:pt-0 lg:text-7xl flex items-center justify-center ${open_sans.className}`}
      id="hero"
    >

{/* <!-- Sliding Text animation --> */}
                {/* <div className="pl-12 font-extrabold text-3xl md:text-7xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-50% to-black ">Brilliant Design & <span className="text-pink-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
                    <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
                        <li>Web</li>
                        <li>Branding</li>
                        <li>AI</li>
                        <li>eCommerce</li>
                        <li>Product</li>
                        <li aria-hidden="true">eCommerce</li>
                    </ul>
                </span></div> */}
                {/* <!-- End: Sliding Text animation --> */}

</div>
   
  );
};

export default Hero;

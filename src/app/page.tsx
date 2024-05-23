import { Metadata } from "next";
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-full">
      <div
        className={`h-[400px] w-full bg-white text-black text-5xl pt-20 lg:pt-0 lg:text-7xl flex items-center justify-center ${open_sans.className}`}
        data-scroll-anchor
        id="hero"
      >
Brilliant<br/>
Design &<br/>
Branding

        
      </div>

      <div className="h-full w-full relative" data-scroll-anchor id="hyper">
        <div className="hyper z-10">
          <div className="halftone opacity-10 z-10"></div>
        </div>
        <div className="absolute top-0 z-20 w-full h-full ">
          {/* What up here?
          <button className="btn btn-primary text-white">Button Text</button> */}
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Aaron Taylor | Professional IT & Media Services",
  description: "Web design, application development, IT consultation and more.",
};

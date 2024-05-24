import { Metadata } from "next";

import FlubberBar from "@/components/flubberBar";
import TheDrip from "@/components/theDrip";



export default function Home() {

 

  return (
    <div className="h-full">
      

    
      <div className="w-full relative" data-scroll-anchor id="hyper">
       
       
        <div className="hyper z-10">
          
          <div className="halftone opacity-10 z-50 h-screen w-full"></div>
        
        </div>

        <div className="absolute top-0 z-20 w-full h-full flex flex-col gap-4 items-center justify-center text-white ">
          <div>What up here? </div>
          <button className="btn btn-primary text-white">Button Text</button>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Aaron Taylor | Professional IT & Media Services",
  description: "Web design, application development, IT consultation and more.",
};


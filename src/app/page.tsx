import { Metadata } from "next";
import Hero from "@/components/hero";
import HyperPink from "@/components/hyper";
import TheDrip from "@/components/theDrip";
export const metadata: Metadata = {
  title: "Aaron Taylor | Professional IT & Media Services",
  description: "Web design, application development, IT consultation and more.",
};

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <HyperPink>

      <TheDrip/>
        <div className="absolute h-full  w-full top-0 w-1/2 z-50 flex flex-col gap-4 items-center justify-center text-white  ">
          
          <div className=" backdrop-blur-sm bg-[rgba(255,255,255,0.1)] border border-white rounded-lg w-1/2 items-center flex h-[500px] justify-center ">
          <div>What up here? </div>
          <button className="btn btn-primary text-white">Button Text</button>
          </div>
        </div>
      </HyperPink>
    </div>
  );
}

import { Metadata } from "next";

export default function Home() {
  return (
    <div className="h-full">
      <div
        className="h-[400px] w-full bg-white"
        data-scroll-anchor
        id="hero"
      ></div>

      <div className="h-full w-full relative" data-scroll-anchor id="hyper">
        <div className="hyper z-10">
          <div className="halftone opacity-10 z-10"></div>
        </div>
        <div className="absolute top-0 z-20 w-full h-full ">
          What up here?
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

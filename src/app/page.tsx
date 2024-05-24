import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aaron Taylor | Professional IT & Media Services",
  description: "Web design, application development, IT consultation and more.",
};

export default function Home() {
  return (
   

        <div className="absolute top-0 z-20 w-full h-full flex flex-col gap-4 items-center justify-center text-white ">
          <div>What up here? </div>
          <button className="btn btn-primary text-white">Button Text</button>
        </div>
  );
}


import { Metadata } from "next";
import Hero from "@/components/home/hero";
import HyperPink from "@/components/home/hyper";
import TheDrip from "@/components/home/theDrip";
import SubHero from "@/components/home/subHero";
import BlobbyHill from "@/components/home/blobbyHill";
export const metadata: Metadata = {
  title: "Aaron Taylor | Professional IT & Media Services",
  description: "Web design, application development, IT consultation and more.",
};

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <HyperPink>
        <TheDrip />
        <BlobbyHill />
        <SubHero />
      </HyperPink>
    </div>
  );
}

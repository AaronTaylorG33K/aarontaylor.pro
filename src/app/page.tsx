import { Metadata } from "next";
import { useContext } from "react";
import { cubicBezier, motion, MotionValue, useScroll, useTransform } from "framer-motion";
import WaveComponent from "@/components/wave";
import Homepage from "@/components/homepage";


interface LayoutRouterContextType {
  scrollableContainerRef: React.RefObject<HTMLElement> | null;
  scrollYProgress: MotionValue<number>;
}

export const metadata: Metadata = {
  title: "Aaron Taylor | Professional IT & Media Services",
  description: "Web design, application development, IT consultation and more.",
};

export default function Home() {

  return (
    <>
    <Homepage />
    <div className="h-[3000px] bg-[rgba(255,255,255,0.1)]">
 
    </div>
    </>
  );
}

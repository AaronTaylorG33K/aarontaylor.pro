import { Metadata } from "next";
import Homepage from "@/components/homepage";

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

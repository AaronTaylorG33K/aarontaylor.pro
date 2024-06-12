import TheStage from "@/components/home/theStage";
import HyperPinkBreakpoints from "@/components/home/hyperPinkBreakpoints";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aaron Taylor | Professional IT & Media Services",
  description: "Web design, application development, IT consultation and more.",
};

export default function Home() {
  return (
    <>
      <TheStage />
      <HyperPinkBreakpoints />
    </>
  );
}

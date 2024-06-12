import { Open_Sans } from "next/font/google";
const open_sans = Open_Sans({ subsets: ["latin"] });

const TheStage = () => {
  return (
    <div className="flex w-full h-full">
      <div className="absolute z-[100]  w-full h-[80vh] lg:h-[90vh] text-white pointer-events-none">
        <div
          className={`snap-none relative h-[400px] w-full text-black text-5xl pt-28 lg:pt-0 lg:text-7xl flex flex-col items-center justify-between ${open_sans.className}`}
          id="hero"
        >
          <div className=" grow-1">Hero</div>
        </div>{" "}
      </div>
    </div>
  );
};

export default TheStage;

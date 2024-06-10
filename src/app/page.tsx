"use client";

import TheDrip from "@/components/home/theDrip";
import Hero from "@/components/home/hero";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";
import Logo from "@/components/logo";

export default function Home() {
  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({ container: ref });
  const [currentSlide, setCurrentSlide] = useState(1);
  const r3 = useRef(null);
  const r4 = useRef(null);
  const r5 = useRef(null);
  const d1 = useInView(r3, { root: ref, amount: 0.5 });
  const d2 = useInView(r4, { root: ref, amount: 0.5 });
  const d3 = useInView(r5, { root: ref, amount: 0.5 });
  const hX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  const horizontalArea = d1 || d2 || d3;

  console.log(scrollY.get(), scrollYProgress.get(), currentSlide);
  return (
    <motion.div
      className="overflow-y-auto w-screen h-[90vh] snap-mandatory snap-y "
      layout
      ref={ref}
    >
      <Logo  scrollYProgress={scrollYProgress} width={200} />
      {/* <TheDrip scrollYProgress={scrollYProgress} /> */}
      <motion.div
        layout
        id="1"
        onViewportEnter={() => {
          setCurrentSlide(1);
        }}
        viewport={{ amount: 0.5 }}
        className="h-full w-screen overflow-hidden snap-center flex flex-col justify-between "
      >
      {/* <Hero scrollYProgress={scrollYProgress} /> */}
        <TheDrip scrollYProgress={scrollYProgress} />
      </motion.div>
      <motion.div
        id="2"
        layout
        onViewportEnter={() => {
          setCurrentSlide(2);
        }}
        viewport={{ amount: 0.5 }}
        className="h-full w-screen overflow-hidden snap-center "
      >
        2
      </motion.div>

    
      <motion.div
        id="3"
        layout
        onViewportEnter={() => {
          setCurrentSlide(3);
        }}
        viewport={{ amount: 0.5 }}
        ref={r3}
        className="w-screen h-full overflow-y-scroll snap-center "
      >3</motion.div>
      <motion.div
        id="4"
        ref={r4}
        layout
        onViewportEnter={() => {
          setCurrentSlide(4);
        }}
        viewport={{ amount: 0.5 }}
        className="w-screen h-full overflow-y-scroll snap-center"
      >4</motion.div>
      <motion.div
        id="5"
        ref={r5}
        layout
        onViewportEnter={() => {
          setCurrentSlide(5);
        }}
        viewport={{ amount: 0.5 }}
        className="w-screen h-full overflow-y-scroll snap-center "
      >5</motion.div>
      <motion.div
        id="6"
        layout
        onViewportEnter={() => {
          setCurrentSlide(6);
        }}
        viewport={{ amount: 0.5 }}
        className="h-full w-screen overflow-hidden snap-center  "
      >
        6
      </motion.div>
    </motion.div>
  );
}

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["0", "-200vw"]);
  
    return (
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
  };
  
  const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[95vh] w-[100vw] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
    );
  };
  
const cards = [
    {
      url: "/imgs/abstract/1.jpg",
      title: "Title 1",
      id: 1,
    },
    {
      url: "/imgs/abstract/1.jpg",
      title: "Title 2",
      id: 2,
    },
    {
      url: "/imgs/abstract/1.jpg",
      title: "Title 3",
      id: 3,
    },
   
  ];
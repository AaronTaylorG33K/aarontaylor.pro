"use client";
import "./globals.css";
import { AnimatePresence, motion, useAnimation, useScroll } from "framer-motion";
import NavBar from "@/components/navbar";
import { usePathname } from "next/navigation";
import {
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { layoutTransitions } from "@/animations/helper";
import Footer from "@/components/footer";
import NavBarNew from "@/components/navbarNew";
import TheDrip from "@/components/home/theDrip";

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export default function RootLayout(props: PropsWithChildren<{}>) {
  // window
  // const wHeight = window?.innerHeight;
  // const wWidth = window?.innerWidth;

  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef(null);



  // const controls = useAnimation();
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     controls.start({
  //       y: -scrollY,
  //       transition: { type: 'spring', stiffness: 50, damping: 20 },
  //     });

  //     console.log('handleScroll', scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [controls]);


  const pathname = usePathname();
  // we use lightPages to determine if the nav should be light or dark.
  const lightPages = ["/", "/contact", "/test"];

  const [navTheme, setNavTheme] = useState<"dark" | "light">("light"); // Assuming default theme is light
  const determinePageTheme = (pathname: string) => {
    setNavTheme(lightPages.includes(pathname) ? "light" : "dark");
  };

  

  useEffect(() => {
    determinePageTheme(pathname);
  }, [pathname]);
  return (
    <html lang="en" className="scroll-smooth">
      <body className="">
        <AnimatePresence>
          <NavBarNew theme={navTheme} />
       
          <motion.div
            className=""
            key={pathname || "home"}
            {...layoutTransitions({ pathname })}
            ref={constraintsRef}
          >
            <FrozenRouter><motion.div className="hyperPink">{props.children}</motion.div></FrozenRouter>
          </motion.div>

          <Footer pathname={pathname} />
        </AnimatePresence>
      </body>
    </html>
  );
}

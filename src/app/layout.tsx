"use client";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
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
import TheDrip from "@/components/theDrip";
import Hero from "@/components/hero";
import HyperPink from "@/components/hyper";
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
  const pathname = usePathname();
  // we use lightPages to determine if the nav should be light or dark.
  const lightPages = ["/"];

  const [navTheme, setNavTheme] = useState<"dark" | "light">("light"); // Assuming default theme is light
  const determinePageTheme = (pathname: string) => {
    setNavTheme(lightPages.includes(pathname) ? "light" : "dark");
  };
  useEffect(() => {
    determinePageTheme(pathname);
  }, [pathname]);
  return (
    <html lang="en">
      <body>
        <NavBar theme={navTheme} />
        <Hero pathname={pathname} />
        <AnimatePresence mode="popLayout">
          <motion.div key={pathname} {...layoutTransitions({ pathname })}>
            <TheDrip pathname={pathname} />
            <FrozenRouter>
              <div className="h-full h-[100vh]">
                <div className="w-full relative h-full">
                  <HyperPink pathname={pathname} />
                  {props.children}{" "}
                </div>
              </div>
            </FrozenRouter>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}

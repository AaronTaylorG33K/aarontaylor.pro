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
  const lightPages = ["/","/contact"];

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
        <AnimatePresence mode="popLayout">
        <NavBar theme={navTheme} />
          
          <motion.div key={pathname} {...layoutTransitions({ pathname })}>
           
            <FrozenRouter>
                {props.children}
            </FrozenRouter>
          </motion.div>

        <Footer pathname={pathname} />
        </AnimatePresence>
      </body>
    </html>
  );
}

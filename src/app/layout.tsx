"use client";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
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
import Menu from "@/components/menu";

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
          <Menu theme={navTheme} />
          <motion.div
            className=""
            key={pathname || "home"}
            {...layoutTransitions({ pathname })}
          >
            <FrozenRouter>{props.children}</FrozenRouter>
          </motion.div>
          <Footer pathname={pathname} />
        </AnimatePresence>
      </body>
    </html>
  );
}

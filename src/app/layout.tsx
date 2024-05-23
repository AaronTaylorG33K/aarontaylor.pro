"use client";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "@/components/navbar";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { layoutTransitions } from "@/animations/helper";


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
  return (
    <html lang="en">
      <body >
        <NavBar />
        <AnimatePresence mode="popLayout">


          {/* Page transition animation */}

          <motion.div
            key={pathname}
            {...layoutTransitions({pathname})}
          >
            <FrozenRouter>{props.children}</FrozenRouter>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}

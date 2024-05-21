import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { motion } from "framer-motion";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
interface AnimVariants {
  initial: string;
  animate: string;
  exit: string;
  variants: any; // Replace 'any' with the actual type of 'variants' if known
}
export const metadata: Metadata = {
  title: "Aaron Taylor | Professional IT & Media Services",
  description: "Web design, application development, IT consultation and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const anim = (variants: any): AnimVariants => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants

    }
  }

  const opacity = {
    intial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    }
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "calc(100vw - 50%)" }}
        >
          {children}
        </motion.div>
      </body>
    </html>
  );
}

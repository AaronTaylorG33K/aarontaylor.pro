import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import GitHubButton from "react-github-btn";
import { useState } from "react";
const Footer = () => {
  const { scrollYProgress } = useScroll();
  const [showFooter, setShowFooter] = useState(false);
  const [expandFooter, setExpandFooter] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.5) setShowFooter(false);
    if (latest > 0.5) setShowFooter(true);
  });

  const variants = {

    closed: {
      bottom: "-50%",
      opacity: 0,
      position: "fixed",
      width: "100%",
      zIndex: "99",
    },
    open: {
      bottom: 0,
      opacity: 1,
      position: "fixed",
      width: "100%",
      zIndex: "99",
    },
  };

  return (
    <AnimatePresence
    >
      {showFooter && (
        <motion.div 
        initial={{ bottom: "-20vh", opacity: 0, height: "5vh" }}
        animate={{ bottom: "-20vh", opacity: 1, height: "25vh" }}
        exit={{ bottom: "-20vh", opacity: 0, height: "5vh" }}
        transition={{type: "spring",  }}
        className="h-[10vh] min-h-[10vh] bg-black fixed bottom-0 left-0 right-0 z-50 w-full text-white flex flex-row gap-4 w-full justify-between p-2">
         
        <div>
<GitHubButton href="https://github.com/AaronTaylorG33K" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Follow @AaronTaylorG33K on GitHub">Follow @AaronTaylorG33K</GitHubButton></div>
        <div className="flex flex-row gap-4"><div>Facebook</div>
        <div>Instagram</div>
        <div>Email</div>
        </div>
        <div></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Footer;

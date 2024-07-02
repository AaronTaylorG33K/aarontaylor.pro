import {
  motion,
} from "framer-motion";

const Menu = ({ theme }: { theme?: string }) => {


  
  return (

    <>
     
     <motion.div
             initial={{opacity:0, scale:0}}
             animate={{scale: 1, opacity:1}}
             exit={{opacity:0, scale:0}}
             transition={{type: "spring", stiffness: 200, damping: 10}}
            className="fixed top-8 right-8  rounded-full w-16 h-16 flex items-center justify-center cursor-pointer z-50 bg-white"
          >
            

            <motion.svg
              className="bi bi-three-dots-vertical "
              fill="#000"
              height="100%"
              viewBox="0 0 16 16"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </motion.svg>
          </motion.div>
    </>
  
  );
};

export default Menu;

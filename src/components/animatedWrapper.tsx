import { motion } from "framer-motion";

interface AnimatedWrapperProps {
    children: React.ReactNode;
}
interface AnimVariants {
    initial: string;
    animate: string;
    exit: string;
    variants: any; // Replace 'any' with the actual type of 'variants' if known
}

const AnimatedWrapper = ({ children }: AnimatedWrapperProps): JSX.Element => {
    
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
            opacity:0,
        },
        enter: {
            opacity:1,
        },
        exit: {
            opacity:0,
        }
    }
    
    return (
        <div className="inner">
        <div className="bg-red-500 bg-layer" />
        <motion.div {...anim(opacity)} className="page">
            {children}
        </motion.div>
        </div>
    );
}

export default AnimatedWrapper;

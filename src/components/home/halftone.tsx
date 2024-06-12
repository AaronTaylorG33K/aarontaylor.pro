import { cubicBezier, motion, useTransform } from "framer-motion";
export default function HyperPinkBreakpoints({ scrollYProgress }: { scrollYProgress?: any }){
    const cB = cubicBezier(0.17, 0.67, 0.83, 0.67);
    const y = useTransform(scrollYProgress, [0,1],['-50vh','100vh'], {ease: cB})
    return (
        <motion.div className="w-full h-full z-[10s] absolute pointer-events-none card overflow-hidden">
            <motion.div className="halftone  absolute top-0 left-0 right-0 bottom-0" style={{y}}></motion.div>
        </motion.div>
    );
};

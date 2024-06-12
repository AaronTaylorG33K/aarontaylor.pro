import { cubicBezier, motion, useTransform } from "framer-motion";
export default function HyperPinkBreakpoints({ scrollYProgress }: { scrollYProgress?: any }){
    const cB = cubicBezier(0.17, 0.67, 0.83, 0.67);
    const y = useTransform(scrollYProgress, [0,1],['0vh','-50vh'], {ease: cB})
    const height = useTransform(scrollYProgress, [0,1],['100%','200%'], {ease: cB})
    return (
        <motion.div className="w-full h-[full] z-[10s] absolute pointer-events-none card overflow-hidden">
            <motion.div className="halftone  w-full h-[400vh]" style={{y}}></motion.div>
        </motion.div>
    );
};

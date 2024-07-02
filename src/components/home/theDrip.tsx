"use client";
import {
  cubicBezier,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  MotionValue,
  transform,
} from "framer-motion";
import useViewportSize from "@/hooks/useViewportSize";

const n6 =
  "M0,46l5.3-2.8c5.4-2.9,16-8.5,26.7-12.9,10.7-4.3,21.3-7.3,31.8-2.6,10.5,4.6,20.9,17,31.4,22.6,10.5,5.7,21.1,4.7,31.8.7s21.3-11,32-12.2c10.7-1.1,21.3,3.5,31.8,4.7s20.9-1.2,31.4-2.3c10.5-1.2,21.1-1.2,31.8-1.5,10.7-.4,21.3-1,32-2.9,10.7-1.8,21.3-4.8,31.8-2.6,10.5,2.1,20.9,9.5,31.4,8s21.1-11.9,31.8-15.9,21.3-1.6,32-1.8,21.3-2.8,31.8,2.3c10.5,5.2,20.9,18.2,31.4,22.4,10.5,4.1,21.1-.5,31.8-1.9,10.7-1.3,21.3.7,26.7,1.7l5.3,1V0H0v46Z";

const n6b =
  "M 0,289L 9.3,272.5C 18.7,256 37.3,223 56.2,212.2C 75,201.3 94,212.7 112.8,249C 131.7,285.3 150.3,346.7 169,343.5C 187.7,340.3 206.3,272.7 225,244.5C 243.7,216.3 262.3,227.7 281.2,235C 300,242.3 319,245.7 337.8,248.3C 356.7,251 375.3,253 394,261.2C 412.7,269.3 431.3,283.7 450,271.5C 468.7,259.3 487.3,220.7 506.2,234C 525,247.3 544,312.7 562.8,327.5C 581.7,342.3 600.3,306.7 619,310.8C 637.7,315 656.3,359 675,346.8C 693.7,334.7 712.3,266.3 731.2,258.8C 750,251.3 769,304.7 787.8,312.8C 806.7,321 825.3,284 844,291.7C 862.7,299.3 881.3,351.7 890.7,377.8L 900,404L 900,0L 890.7,0C 881.3,0 862.7,0 844,0C 825.3,0 806.7,0 787.8,0C 769,0 750,0 731.2,0C 712.3,0 693.7,0 675,0C 656.3,0 637.7,0 619,0C 600.3,0 581.7,0 562.8,0C 544,0 525,0 506.2,0C 487.3,0 468.7,0 450,0C 431.3,0 412.7,0 394,0C 375.3,0 356.7,0 337.8,0C 319,0 300,0 281.2,0C 262.3,0 243.7,0 225,0C 206.3,0 187.7,0 169,0C 150.3,0 131.7,0 112.8,0C 94,0 75,0 56.2,0C 37.3,0 18.7,0 9.3,0L 0,0Z";




const TheDrip = ({ scrollYProgress }: {scrollYProgress: MotionValue}) => {
  const { isMobile, width } = useViewportSize();
  

  const scaleFactor = width / 900; // Calculate the scale factor based on original SVG width

  
  // const [y, setY] = useState(0);
  const y = useMotionValue(0)

  useMotionValueEvent(scrollYProgress, 'change', (event) => {
    // console.log('event',event)
    // return event
    // setY(event)
    // return event

    y.set(event)
  
  })

  const path = useTransform(y, [0, 1], [n6, n6b]);
  // const path = useFlubber(scrollYProgress, [n6,n6b]);
  // const path = useFlubber(scrollYProgress, [scaledN6r, scaledN8])

  // const path = useFlubber(scrollYProgress,[scaledN6r, scaledN8]);

  return (
        <>
    <motion.svg className={'w-full h-full fixed z-10 top-0'} fill="#fff" id="visual" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 404.36">
      <motion.path d={path}/>
    </motion.svg>

        </>

    // <motion.div className="w-screen h-full  origin-top fixed top-0">
    //   <motion.path fill={"#ffffff"} d={path} />
    // </motion.div>
  );
};

export default TheDrip;

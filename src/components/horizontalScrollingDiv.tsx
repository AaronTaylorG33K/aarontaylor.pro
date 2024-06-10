'use client'
import { motion, useSpring, useTransform, useViewportScroll } from "framer-motion"
import { useCallback, useLayoutEffect, useRef, useState } from "react"

const HorizontalScrollingDiv = () => {
    const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef?.current?.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useViewportScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <>
    <div className="relative w-screen  border-4 border-red-500 bg-gradient-to-br snap-start  from-blue-500 via-green-500 to-purple-500 flex items-start justify-center gap-8  overflow-x-scroll">
        <div className="sticky top-0 border-4 border-red-500 p-8 gap-4  w-screen h-screen bg-white">
          <div className=" w-2/3 h-full bg-white p-4 inline-block"></div>
          <div className=" w-full h-full bg-white p-4 inline-block"></div>
        </div>

      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
      </div>
      {/* <div className="scroll-container">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
        >
          <div className="thumbnails">
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
          </div>
        </motion.section>
      </div> */}
    </>
  )
}


export default HorizontalScrollingDiv
'use client'
import React, { useEffect, useState } from 'react';
import { motion, MotionValue, useMotionValueEvent, useScroll } from 'framer-motion';
import Wave from 'react-wavify';

  const WaveComponent = ({ width = 900, height = 500, points = 30}) => {
    const { scrollYProgress } = useScroll();

    return (
      <div className="wave-container fixed top-0 left-0 right-0 " style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
  
      </div>
    );
  };

export default WaveComponent;
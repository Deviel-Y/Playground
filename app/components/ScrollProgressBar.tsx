"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ScrollProgressBar = () => {
 const targetRef = useRef<HTMLDivElement | null>(null);
 const { scrollYProgress } = useScroll();

 const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

 return (
  <motion.div
   style={{ width: x }}
   className="bg-blue-500 h-0.5 sticky top-0"
   ref={targetRef}
  />
 );
};

export default ScrollProgressBar;

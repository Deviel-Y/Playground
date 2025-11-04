"use client";

import { motion, useAnimationControls, useInView } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  width?: "w-fit" | "w-full";
}

const RevealText = ({ children, width = "w-fit" }: Props) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef);
  const mainControl = useAnimationControls();
  const slideControl = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={targetRef} className={`${width}  overflow-hidden relative`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0 z-10 bg-blue-600"
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.3, delay: 0.25 }}
      />
    </div>
  );
};

export default RevealText;

"use client";

import { motion } from "motion/react";

interface Props {
 children: string;
 href: string;
}

const AnimatedLink = ({ children, href }: Props) => {
 return (
  <motion.a
   initial="initial"
   whileHover="hovered"
   href={href}
   className="flex flex-col overflow-hidden gap-4 text-8xl font-black text-black relative whitespace-nowrap uppercase"
  >
   <div>
    {children.split("").map((letter, index) => (
     <motion.span
      transition={{ delay: 0.025 * index, duration: 0.25 }}
      className="inline-block"
      variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
      key={index}
     >
      {letter}
     </motion.span>
    ))}
   </div>

   <div className="absolute">
    {children.split("").map((letter, index) => (
     <motion.span
      transition={{ delay: 0.025 * index, duration: 0.25 }}
      className="inline-block"
      variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
      key={index}
     >
      {letter}
     </motion.span>
    ))}
   </div>
  </motion.a>
 );
};

export default AnimatedLink;

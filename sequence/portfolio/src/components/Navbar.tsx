"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 h-20 z-50 flex items-center justify-between px-6 md:px-12 mix-blend-difference text-white pointer-events-none"
    >
      <div className="text-xl font-bold tracking-widest uppercase pointer-events-auto cursor-pointer">
        YD.
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase pointer-events-auto">
        <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
        <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
        <a href="#skills" className="hover:opacity-70 transition-opacity">Skills</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
      </div>
    </motion.nav>
  );
}

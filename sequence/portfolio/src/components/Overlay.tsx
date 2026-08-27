"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: Hero (0% to 15%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -30]);
  const display1 = useTransform(scrollYProgress, (p) => p > 0.16 ? "none" : "flex");

  // Section 2: Narrative 1 (25% to 45%)
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.27, 0.40, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.22, 0.27, 0.40, 0.45], [30, 0, 0, -30]);
  const display2 = useTransform(scrollYProgress, (p) => p < 0.20 || p > 0.48 ? "none" : "flex");

  // Section 3: Narrative 2 (55% to 75%)
  const opacity3 = useTransform(scrollYProgress, [0.52, 0.57, 0.70, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.52, 0.57, 0.70, 0.75], [30, 0, 0, -30]);
  const display3 = useTransform(scrollYProgress, (p) => p < 0.50 || p > 0.78 ? "none" : "flex");

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1, display: display1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-[clamp(4rem,7vw,7rem)] font-semibold tracking-tight text-white mix-blend-difference mb-4">
            YOKESH D
          </h1>
          <p className="text-[clamp(1.2rem,2vw,1.8rem)] text-white/80 tracking-wide font-light mix-blend-difference">
            Software Engineer • AI/ML Developer • Cloud Enthusiast
          </p>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
            <span className="text-[10px] tracking-[0.3em] uppercase mb-2">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2, display: display2 }}
          className="absolute inset-0 flex flex-col items-start justify-end pb-32 text-left px-8 md:px-16 pointer-events-none"
        >
          <h2 className="text-[clamp(2rem,4vw,4.5rem)] font-bold text-white max-w-[800px] leading-[1.1] mix-blend-difference tracking-tight drop-shadow-lg">
            I build scalable, <br/>secure, and AI-driven<br/>applications.
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3, display: display3 }}
          className="absolute inset-0 flex flex-col items-end justify-end pb-32 text-right px-8 md:px-16 pointer-events-none"
        >
          <h2 className="text-[clamp(2rem,4vw,4.5rem)] font-bold text-white max-w-[800px] leading-[1.1] mix-blend-difference tracking-tight drop-shadow-lg">
            Solving real-world<br/>problems with elegant<br/>engineering.
          </h2>
        </motion.div>
        
      </div>
    </div>
  );
}

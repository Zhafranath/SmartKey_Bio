import React from "react";
import { motion } from "framer-motion";
const BiologyAmbient = () => {
  const safeW = typeof window !== "undefined" ? window.innerWidth : 1200;
  const safeH = typeof window !== "undefined" ? window.innerHeight : 800;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            {/* 🧬 DNA HELIX ICONS */}     {" "}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`dna-${i}`}
          className="absolute text-emerald-400/30"
          initial={{
            x: Math.random() * safeW,
            y: safeH + 100,
            rotate: Math.random() * 180,
            scale: 0.8 + Math.random() * 0.6,
          }}
          animate={{
            y: -200,
            rotate: 360,
          }}
          transition={{
            duration: 40 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: i * 6,
          }}
        >
                    {/* DNA SVG (inline, ringan) */}         {" "}
          <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
                       {" "}
            <path
              d="M10 0 C50 20, 10 40, 50 60 C10 80, 50 100, 10 120"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
                       {" "}
            <path
              d="M50 0 C10 20, 50 40, 10 60 C50 80, 10 100, 50 120"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
                     {" "}
          </svg>
                 {" "}
        </motion.div>
      ))}
            {/* 🔬 MICRO CELLS */}     {" "}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`cell-${i}`}
          className="absolute rounded-full border border-teal-300/30"
          style={{
            width: `${40 + Math.random() * 60}px`,
            height: `${40 + Math.random() * 60}px`,
            left: Math.random() * safeW,
            top: Math.random() * safeH,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
            {/* 🍃 SPORES / POLLEN */}     {" "}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`spore-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/40"
          initial={{
            x: Math.random() * safeW,
            y: safeH + Math.random() * 200,
          }}
          animate={{
            y: -100,
            x: ["-20px", "20px", "-10px"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 18 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
         {" "}
    </div>
  );
};

export default BiologyAmbient;
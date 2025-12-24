import React from "react";
import { motion } from "framer-motion";

const useReduceMotion = () => {
  const [reduce, setReduce] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const handler = () => setReduce(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduce;
};

const MoleculeAmbient = () => {
  const safeW = typeof window !== "undefined" ? window.innerWidth : 1200;
  const safeH = typeof window !== "undefined" ? window.innerHeight : 800;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  if (isMobile) return null;
  const reduceMotion = useReduceMotion();
  if (reduceMotion) return null;

  const molecules = [
    { label: "H₂O", color: "text-cyan-400/40" },
    { label: "CO₂", color: "text-slate-400/40" },
  ];

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
           {" "}
      {[...Array(8)].map((_, i) => {
        const mol = molecules[i % molecules.length];
        return (
          <motion.div
            key={`mol-${i}`}
            className={`absolute font-bold tracking-widest ${mol.color}`}
            initial={{
              x: Math.random() * safeW,
              y: safeH + Math.random() * 200,
              scale: 0.8 + Math.random() * 0.6,
              rotate: Math.random() * 180,
              opacity: 0,
            }}
            animate={{
              y: -120,
              opacity: [0, 0.5, 0],
              rotate: 360,
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
            style={{
              filter: "blur(0.3px)",
            }}
          >
                        {mol.label}         {" "}
          </motion.div>
        );
      })}
         {" "}
    </div>
  );
};

export default MoleculeAmbient;

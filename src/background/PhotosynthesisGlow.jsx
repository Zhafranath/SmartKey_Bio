import React from 'react';
import { motion } from 'framer-motion';

const PhotosynthesisGlow = () => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  const safeW = window.innerWidth;
  const safeH = window.innerHeight;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 140 + Math.random() * 180,
            height: 140 + Math.random() * 180,
            background:
              'radial-gradient(circle, rgba(34,197,94,0.35), rgba(34,197,94,0.05), transparent)',
            left: Math.random() * safeW,
            bottom: -250,
            filter: 'blur(22px)',
          }}
          animate={{
            y: [-50, -safeH - 300],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 35 + Math.random() * 20,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 12,
          }}
        />
      ))}
    </div>
  );
};

export default PhotosynthesisGlow;

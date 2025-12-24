import React from 'react';
import { motion } from 'framer-motion';

const FloatingBackground = () => {
  const safeW = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const safeH = typeof window !== 'undefined' ? window.innerHeight : 800;

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-slate-50">
      
      {/* 1️⃣ Dynamic Mesh Gradient (Aurora Effect) */}
      <motion.div 
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            'radial-gradient(at 0% 0%, hsla(160,60%,70%,1) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(140,70%,70%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,80%,80%,1) 0, transparent 50%)',
            'radial-gradient(at 100% 100%, hsla(160,60%,70%,1) 0, transparent 50%), radial-gradient(at 0% 0%, hsla(140,70%,70%,1) 0, transparent 50%), radial-gradient(at 50% 50%, hsla(180,80%,80%,1) 0, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      />

      {/* 2️⃣ Cellular Grid Pattern (Microscope Slide Look) */}


      {/* 3️⃣ Floating Orbs (Lebih Berwarna & Besar) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[80px] opacity-40 mix-blend-multiply`}
          style={{
            background: i % 2 === 0 ? '#34d399' : '#2dd4bf', // Emerald & Teal yang lebih kuat
            width: `${300 + Math.random() * 200}px`,
            height: `${300 + Math.random() * 200}px`,
          }}
          initial={{
            x: Math.random() * safeW,
            y: Math.random() * safeH,
          }}
          animate={{
            x: [null, Math.random() * safeW],
            y: [null, Math.random() * safeH],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 4️⃣ Noise Overlay (Supaya lebih natural/kertas) */}
      
    </div>
  );
};

export default FloatingBackground;

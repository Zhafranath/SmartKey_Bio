import React from 'react';
import { motion } from 'framer-motion';

const ModeCard = ({ icon, title, desc, onClick, color = "bg-emerald-500" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="group bg-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-emerald-500 text-center flex flex-col items-center"
    >
      <div
        className={`w-20 h-20 ${color} text-white rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>

      <h3 className="text-2xl font-black text-slate-800 mb-2">
        {title}
      </h3>

      {desc && (
        <p className="text-slate-500 font-medium">
          {desc}
        </p>
      )}
    </motion.button>
  );
};

export default ModeCard;

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Mail, Globe, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-green-50 pt-16 pb-8 border-t border-white/10 overflow-hidden">

      {/* Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-xl">
                <Leaf className="text-emerald-400" size={22} />
              </div>
              <h3 className="text-2xl font-black">
                SmartKey <span className="text-emerald-400">Bio</span>
              </h3>
            </div>
            <p className="text-green-200/60 text-sm leading-relaxed max-w-xs">
              Interactive biology learning platform using modern digital dichotomous keys.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-green-200/60">
              <li><a href="/" className="hover:text-emerald-400">Home</a></li>
              <li><a href="/identify" className="hover:text-emerald-400">Identify</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex gap-3">
              <button className="p-2 bg-white/5 rounded-full hover:bg-emerald-500/20 transition">
                <Mail size={18} />
              </button>
              <button className="p-2 bg-white/5 rounded-full hover:bg-emerald-500/20 transition">
                <Globe size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-green-200/40">
          <span>© {year} Project Biology Team. All rights reserved.</span>

          <span className="flex items-center gap-1">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="text-red-500 fill-red-500" size={14} />
            </motion.span>
            for Education
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  Activity, Hexagon, Layers, Users, Tag,
  Fingerprint, Globe, ArrowRight, Leaf, Sparkles,
  Dna, Beaker, Microscope
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HomePage = () => {
  const steps = [
    { title: "Kingdom", desc: "Broadest classification (e.g., Animal vs Plant).", icon: Globe, color: "from-blue-400 to-blue-600" },
    { title: "Phylum", desc: "Based on basic body plans.", icon: Activity, color: "from-cyan-400 to-cyan-600" },
    { title: "Class", desc: "Specific groups (Mammals, Reptiles).", icon: Layers, color: "from-teal-400 to-teal-600" },
    { title: "Order", desc: "Diet or lifestyle patterns (Carnivore/Herbivore).", icon: Hexagon, color: "from-emerald-400 to-emerald-600" },
    { title: "Family", desc: "Close relatives (e.g., Cat family).", icon: Users, color: "from-green-400 to-green-600" },
    { title: "Genus", desc: "Generic name (Panthera).", icon: Tag, color: "from-lime-400 to-lime-600" },
    { title: "Species", desc: "Unique individuals (Panthera leo).", icon: Fingerprint, color: "from-orange-400 to-orange-600" },
  ];

  // Parallax Setup (Sama dengan AboutPage)
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // sinkronkan state ke elemen video
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = isMuted;
    if (isPlaying) v.play().catch(() => {});
    else v.pause();
  }, [isPlaying, isMuted]);

  const togglePlay = () => setIsPlaying((p) => !p);
  const toggleMute = () => setIsMuted((m) => !m);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100 min-h-screen"
    >
      {/* --- BACKGROUND DECORATIONS (Copied & Adapted from AboutPage) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239CA3AF' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }}>
        </div>

        {/* Floating Blobs with Parallax */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px]" 
        />

        {/* Floating Science Icons (Visual Consistency) */}
        

{/* Image of the taxonomic hierarchy */}

        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }} 
          className="absolute top-40 right-[15%] opacity-[0.07] text-slate-900 hidden lg:block"
        >
          <Dna size={180} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 30, 0] }} 
          transition={{ duration: 8, repeat: Infinity }} 
          className="absolute bottom-20 left-[10%] opacity-[0.07] text-slate-900 hidden lg:block"
        >
          <Microscope size={150} />
        </motion.div>

        <motion.div 
          animate={{ x: [0, 20, 0] }} 
          transition={{ duration: 10, repeat: Infinity }} 
          className="absolute top-1/4 left-5 opacity-[0.05] text-slate-900 hidden lg:block"
        >
          <Beaker size={100} />
        </motion.div>
      </div>
      {/* --- END BACKGROUND DECORATIONS --- */}

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 min-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 relative z-10 pt-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:w-3/5 text-center lg:text-left z-10"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
            Explore <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 drop-shadow-sm">
              the World <br /> of Biology
            </span>
          </h1>

          <div className="relative inline-block">
            <p className="text-xl md:text-2xl text-slate-700 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Uncover nature's secrets with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 font-extrabold italic">SmartKey</span> identification tool. Fast, accurate, and completely interactive.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/identify"
                className="group relative px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-slate-900/20 hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-4 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Start Identification</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: INTERACTIVE VISUAL CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.17, 0.67, 0.83, 0.67] }}
          className="lg:w-2/5 relative z-10 hidden lg:block"
        >
          <div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-white/70 backdrop-blur-3xl border border-white/90 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] p-8 flex flex-col group
                      hover:shadow-[0_48px_96px_-24px_rgba(0,0,0,0.2)] hover:border-white transition-all duration-300">
            
            <div className="flex-1 bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700 rounded-[2rem] mb-6 flex items-center justify-center relative overflow-hidden shadow-xl cursor-pointer
                        transform group-hover:scale-[1.02] transition-transform duration-300">
              <motion.div
                animate={{ rotate: [0, 8, -8, 0], y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Leaf size={180} className="text-white drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)]" />
              </motion.div>
              
              <div className="absolute bottom-4 left-4 right-4 h-20 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-4 flex justify-between items-center shadow-md">
                <div className="flex flex-col">
                  <span className="text-base uppercase font-semibold text-emerald-100 opacity-80">Live Scan</span>
                  <span className="text-xl md:text-2xl font-black text-white tracking-tight">Identifying...</span>
                </div>
                <Sparkles className="text-emerald-200 animate-pulse" size={28} />
              </div>
            </div>

            <div className="space-y-4 px-2">
              <div className="flex gap-2">
                <div className="h-2 w-20 bg-emerald-500/50 rounded-full"></div>
                <div className="h-2 w-full bg-slate-200/60 rounded-full"></div>
              </div>
              <div className="h-2 w-4/5 bg-slate-200/60 rounded-full"></div>
              
              <div className="flex items-center gap-3 pt-2">
                 <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-slate-400 text-sm font-semibold">
                       <Users size={14}/>
                     </div>
                   ))}
                 </div>
                 <span className="text-slate-500 text-sm font-medium">+100 Species</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl relative">
           {/* === TAXONOMIC VIDEO SECTION === */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="max-w-4xl mx-auto mb-20 px-6"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-300/30 border border-white/60 bg-white/40 backdrop-blur-xl group">
                  {/* Video Element */}
                  <video
                    ref={videoRef} // Menghubungkan ref agar useEffect bekerja
                    src="/assets/video/Video_introduction.mp4"
                    loop
                    playsInline
                    className="w-full h-auto object-cover"
                  />

                  {/* Custom Controls Overlay - Muncul saat hover di desktop */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    {/* Play/Pause Button */}
                    <button 
                      onClick={togglePlay}
                      className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all scale-90 hover:scale-110"
                    >
                      {isPlaying ? (
                        <div className="flex gap-1">
                          <div className="w-2 h-6 bg-white rounded-full"></div>
                          <div className="w-2 h-6 bg-white rounded-full"></div>
                        </div>
                      ) : (
                        <div className="ml-1 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent"></div>
                      )}
                    </button>

                    {/* Mute/Unmute Button */}
                    <button 
                      onClick={toggleMute}
                      className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all scale-90 hover:scale-110"
                    >
                      {isMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                      )}
                    </button>
                  </div>

                  
                </div>
              </motion.div>
           {/* === END VIDEO SECTION === */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              The <span className="bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text">Taxonomic Hierarchy</span>
            </h2>
            <p className="text-slate-600 mt-4 text-lg font-medium max-w-2xl mx-auto">
              Unlock the secrets of life's classification from the broadest categories to unique species.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-teal-200 to-emerald-200 -translate-x-1/2 hidden md:block opacity-50 rounded-full z-0"></div>

            <div className="space-y-16 md:space-y-24">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`w-full md:w-1/2 flex justify-center ${idx % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.03, y: -5, rotate: (idx % 2 === 0 ? 1 : -1) }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="group relative bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white hover:shadow-2xl hover:shadow-emerald-200/60 transition-all duration-300 w-full max-w-md"
                    >
                      <div className={`absolute -top-6 ${idx % 2 !== 0 ? '-right-6' : '-left-6'} w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center text-white transform rotate-6 group-hover:rotate-12 transition-transform duration-300`}>
                        <step.icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mt-2">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed mt-3">{step.desc}</p>
                    </motion.div>
                  </div>

                  <div className="relative flex-shrink-0 z-20">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${step.color} shadow-lg ring-8 ring-white flex items-center justify-center text-white font-black text-2xl md:text-3xl`}>
                      {idx + 1}
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;

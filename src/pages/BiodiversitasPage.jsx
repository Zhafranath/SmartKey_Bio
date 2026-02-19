// src/pages/BiodiversitasPage.jsx
import React, { useRef, useState } from "react"; 
import { motion } from "framer-motion";
import { 
  TreePine, 
  Target, 
  Puzzle, 
  Thermometer, 
  ArrowDown, 
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  PlayCircle 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const THREATS_DATA = [
  {
    id: "deforestation",
    title: "Deforestation",
    icon: TreePine,
    image: "/assets/image/deforestation.png", 
    color: "emerald",
    whatIsIt: "Deforestation is the permanent removal of forests for agriculture, plantations, mining, infrastructure, and urban development.",
    keyFacts: [
      "Tropical forests store large amounts of carbon in trees and soil.",
      "Deforestation contributes around 10% of global carbon emissions annually.",
      "Indonesia contains one of the largest tropical forest areas in the world."
    ],
    impacts: [
      "Loss of habitat for endemic species",
      "Decline in wildlife populations",
      "Disruption of the water cycle",
      "Increased forest fire risk",
      "Reduced carbon storage capacity"
    ]
  },
  {
    id: "hunting",
    title: "Illegal Wildlife Hunting",
    icon: Target,
    image: "/assets/image/hunting.png",
    color: "red",
    whatIsIt: "The illegal capture or killing of wildlife for trade, traditional medicine, trophies, or consumption.",
    keyFacts: [
      "Illegal wildlife trade is one of the largest environmental crimes globally.",
      "Large predators and rare species are especially vulnerable."
    ],
    impacts: [
      "Herbivore populations increase (trophic cascade)",
      "Overgrazing occurs on forest floor",
      "Forest regeneration slows down",
      "Food webs destabilize",
      "Ecosystem balance is disrupted"
    ]
  },
  {
    id: "fragmentation",
    title: "Habitat Fragmentation",
    icon: Puzzle,
    image: "/assets/image/HABITAT FRAGMENTATION.png",
    color: "amber",
    whatIsIt: "Occurs when large ecosystems are divided into smaller patches due to roads, plantations, urbanization, and infrastructure.",
    keyFacts: [
      "Many large animals require wide territories to survive.",
      "Fragmented habitats create 'edge effects'—changes in temperature/light at forest edges."
    ],
    impacts: [
      "Isolated wildlife populations",
      "Reduced genetic diversity",
      "Increased inbreeding",
      "Higher local extinction risk"
    ]
  },
  {
    id: "climate",
    title: "Climate Change",
    icon: Thermometer,
    image: "/assets/image/CLIMATE.png",
    color: "blue",
    whatIsIt: "Long-term global temperature increases caused by greenhouse gas emissions from human activities.",
    keyFacts: [
      "Global temperature has increased by ~1°C since the pre-industrial era.",
      "Coral reefs are extremely sensitive to rising ocean temperatures.",
      "Climate shifts alter species distribution patterns."
    ],
    impacts: [
      "Coral bleaching",
      "Changes in flowering and breeding seasons",
      "Disrupted migration patterns",
      "Increased drought and wildfire frequency"
    ]
  }
];

const BiodiversitasPage = () => {
  const navigate = useNavigate();
  const infoSectionRef = useRef(null);
  
  // --- State & Ref untuk Video ---
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToThreats = () => {
    infoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden font-sans">
      
      {/* 1) HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            src="/assets/image/deforestation.png" 
            className="w-full h-full object-cover opacity-40"
            alt="Biodiversity Threats"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-all font-black uppercase tracking-widest text-xs bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm"
          >
            <ArrowLeft size={16} /> Back to hub
          </motion.button>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white mb-6 leading-none italic tracking-tighter uppercase"
          >
            Threats to <span className="text-emerald-500">Biodiversity</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Understanding the Human Pressures Driving Ecosystem Decline. 
            Biodiversity loss is occurring at a rate far above natural levels.
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToThreats}
            className="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black flex items-center gap-3 mx-auto transition-all shadow-2xl shadow-emerald-900/40 uppercase text-xs tracking-widest"
          >
            Explore the Threats <ArrowDown size={20} className="animate-bounce" />
          </motion.button>
        </div>
      </section>

      {/* 2) VIDEO SECTION */}
      <section className="py-24 bg-slate-900/50 border-y border-white/5 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 mb-8 text-emerald-400 font-black uppercase tracking-[0.3em] text-xs">
            <PlayCircle size={16} /> Documentary Evidence
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tighter italic uppercase">
            Witnessing the <span className="text-emerald-500">Impact</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-4xl mx-auto mb-20 px-6"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-300/30 border border-white/60 bg-white/40 backdrop-blur-xl group">
              <video
                ref={videoRef}
                src="/assets/video/biodiversitas.MOV"
                loop
                playsInline
                className="w-full h-auto object-cover"
              />
          
              {/* Custom Controls Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
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
          
          <p className="mt-10 text-slate-400 font-medium italic max-w-2xl mx-auto">
            Footage documentation showing the reality of habitat decline and the urgent need for global intervention.
          </p>
        </div>
      </section>

      {/* 3) MAIN CONTENT SECTION: Threats Card */}
      <section ref={infoSectionRef} className="py-32 px-6 container mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 italic uppercase tracking-tighter leading-none">
            What Is Driving <br /> <span className="text-emerald-500">Biodiversity Loss?</span>
          </h2>
          <div className="w-20 h-2 bg-emerald-500 mx-auto rounded-full opacity-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {THREATS_DATA.map((threat) => (
            <motion.div
              key={threat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-[3.5rem] overflow-hidden hover:border-emerald-500/40 transition-all flex flex-col group shadow-2xl backdrop-blur-sm"
            >
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={threat.image} 
                  alt={threat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-8 left-10 flex items-center gap-5">
                  <div className="p-5 bg-emerald-500 text-white rounded-[1.5rem] shadow-xl shadow-emerald-500/20">
                    <threat.icon size={32} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">
                    {threat.title}
                  </h3>
                </div>
              </div>

              <div className="p-10 md:p-14 space-y-10">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h4 className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.3em] mb-3 flex items-center gap-2">
                    <AlertTriangle size={14} /> The Problem
                  </h4>
                  <p className="text-slate-200 text-xl leading-relaxed font-bold italic">
                    "{threat.whatIsIt}"
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-5">
                    <h5 className="text-white font-black text-[10px] uppercase tracking-[0.3em] opacity-40">Key Facts</h5>
                    <ul className="space-y-4">
                      {threat.keyFacts.map((fact, i) => (
                        <li key={i} className="flex items-start gap-4 text-sm text-slate-400 font-bold leading-snug">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-5">
                    <h5 className="text-white font-black text-[10px] uppercase tracking-[0.3em] opacity-40">Ecological Impacts</h5>
                    <ul className="space-y-4">
                      {threat.impacts.map((impact, i) => (
                        <li key={i} className="flex items-start gap-4 text-sm text-slate-400 font-bold leading-snug">
                          <span className="text-red-500 font-black shrink-0">→</span>
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BiodiversitasPage;
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Cat, Leaf, Activity, Hexagon, Layers, Users, Tag,
  Fingerprint, Search, Settings, Star, Globe,
  ArrowRight, ArrowLeft, ChevronRight, Database,
  HelpCircle, Info, GitBranch, BookOpen, Ghost,
  Menu, X, Sparkles, Sprout, Volume2, VolumeX,
  Mail,Heart,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// PENTING: Pastikan path file ini benar sesuai struktur folder Anda
import { taksonomiData as speciesDatabase } from './data/taxonomyData';
import { branchingLogic } from './data/branchingData';
import { navigationStructure } from './data/navigationStructurenew';
import IdentificationPage from './pages/IdentificationPage';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';

const levelOrder = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];
const normalize = (str) => str.toLowerCase().replace(/\s+/g, "_");
const initialOrganisms = [];

/* =========================================================
   [PATCH] Tailwind Safe Class Map (ANTI PURGE)
   - Menghindari class dinamis seperti: bg-${colorName}-50/50
   - Menghindari: group-hover:${textClass}, replace(...) pada class
========================================================= */
const TW_COLOR_MAP = {
  emerald: {
    hoverBg: 'bg-emerald-50/50',
    hoverText: 'group-hover:text-emerald-600',
    pill: 'bg-emerald-100/40 text-emerald-700',
    borderLight: 'border-emerald-100',
  },
  green: {
    hoverBg: 'bg-green-50/50',
    hoverText: 'group-hover:text-green-600',
    pill: 'bg-green-100/40 text-green-700',
    borderLight: 'border-green-100',
  },
  teal: {
    hoverBg: 'bg-teal-50/50',
    hoverText: 'group-hover:text-teal-600',
    pill: 'bg-teal-100/40 text-teal-700',
    borderLight: 'border-teal-100',
  },
  cyan: {
    hoverBg: 'bg-cyan-50/50',
    hoverText: 'group-hover:text-cyan-600',
    pill: 'bg-cyan-100/40 text-cyan-700',
    borderLight: 'border-cyan-100',
  },
  blue: {
    hoverBg: 'bg-blue-50/50',
    hoverText: 'group-hover:text-blue-600',
    pill: 'bg-blue-100/40 text-blue-700',
    borderLight: 'border-blue-100',
  },
  indigo: {
    hoverBg: 'bg-indigo-50/50',
    hoverText: 'group-hover:text-indigo-600',
    pill: 'bg-indigo-100/40 text-indigo-700',
    borderLight: 'border-indigo-100',
  },
  purple: {
    hoverBg: 'bg-purple-50/50',
    hoverText: 'group-hover:text-purple-600',
    pill: 'bg-purple-100/40 text-purple-700',
    borderLight: 'border-purple-100',
  },
  lime: {
    hoverBg: 'bg-lime-50/50',
    hoverText: 'group-hover:text-lime-600',
    pill: 'bg-lime-100/40 text-lime-700',
    borderLight: 'border-lime-100',
  },
  yellow: {
    hoverBg: 'bg-yellow-50/50',
    hoverText: 'group-hover:text-yellow-600',
    pill: 'bg-yellow-100/40 text-yellow-700',
    borderLight: 'border-yellow-100',
  },
  orange: {
    hoverBg: 'bg-orange-50/50',
    hoverText: 'group-hover:text-orange-600',
    pill: 'bg-orange-100/40 text-orange-700',
    borderLight: 'border-orange-100',
  },
  red: {
    hoverBg: 'bg-red-50/50',
    hoverText: 'group-hover:text-red-600',
    pill: 'bg-red-100/40 text-red-700',
    borderLight: 'border-red-100',
  },
  slate: {
    hoverBg: 'bg-slate-50/50',
    hoverText: 'group-hover:text-slate-700',
    pill: 'bg-slate-100/40 text-slate-700',
    borderLight: 'border-slate-100',
  },
};

const getTwColorKeyFromBgClass = (bgClass) => {
  // bgClass contoh: "bg-orange-100"
  // return "orange"
  const match = bgClass?.match(/bg-([a-z]+)-\d+/);
  return match?.[1] || 'emerald';
};

const getTwPackFromItem = (item) => {
  // item.color contoh: "bg-orange-100 text-orange-600"
  const bgClass = item?.color?.split(' ')?.[0] || 'bg-emerald-100';
  const key = getTwColorKeyFromBgClass(bgClass);
  return TW_COLOR_MAP[key] || TW_COLOR_MAP.emerald;
};

// --- 1. GLOBAL COMPONENTS & STYLES ---

// Scroll To Top saat pindah halaman
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const useReduceMotion = () => {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(mq.matches);
    const handler = () => setReduce(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduce;
};

// Background animasi partikel melayang
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

const BiologyAmbient = () => {
  const safeW = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const safeH = typeof window !== 'undefined' ? window.innerHeight : 800;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

      {/* 🧬 DNA HELIX ICONS */}
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
            ease: 'linear',
            delay: i * 6,
          }}
        >
          {/* DNA SVG (inline, ringan) */}
          <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
            <path
              d="M10 0 C50 20, 10 40, 50 60 C10 80, 50 100, 10 120"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M50 0 C10 20, 50 40, 10 60 C50 80, 10 100, 50 120"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </motion.div>
      ))}

      {/* 🔬 MICRO CELLS */}
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
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* 🍃 SPORES / POLLEN */}
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
            x: ['-20px', '20px', '-10px'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 18 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10,
          }}
        />
      ))}

    </div>
  );
};

const MoleculeAmbient = () => {
  const safeW = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const safeH = typeof window !== 'undefined' ? window.innerHeight : 800;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  if (isMobile) return null;
  const reduceMotion = useReduceMotion();
  if (reduceMotion) return null;

  const molecules = [
    { label: 'H₂O', color: 'text-cyan-400/40' },
    { label: 'CO₂', color: 'text-slate-400/40' },
  ];

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
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
              ease: 'linear',
              delay: Math.random() * 10,
            }}
            style={{
              filter: 'blur(0.3px)',
            }}
          >
            {mol.label}
          </motion.div>
        );
      })}
    </div>
  );
};

const PhotosynthesisGlow = () => {
  const safeW = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const safeH = typeof window !== 'undefined' ? window.innerHeight : 800;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  if (isMobile) return null;
  const reduceMotion = useReduceMotion();
  if (reduceMotion) return null;
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`photo-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${120 + Math.random() * 180}px`,
            height: `${120 + Math.random() * 180}px`,
            background: 'radial-gradient(circle, rgba(34,197,94,0.35), rgba(34,197,94,0.05), transparent)',
            left: Math.random() * safeW,
            bottom: -200,
            filter: 'blur(20px)',
          }}
          animate={{
            y: [-50, -safeH - 200],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 30 + Math.random() * 20,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 12,
          }}
        />
      ))}
    </div>
  );
};



/* =========================================================
   [PATCH] useAudio yang aman (tidak new Audio di render)
========================================================= */
const useAudio = (url) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying((p) => !p);

  useEffect(() => {
    // create audio saat mount / url berubah
    audioRef.current = new Audio(url);
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.5;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [url]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay dicegah oleh browser, user harus klik play manual.");
          setPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [playing]);

  return [playing, toggle];
};

// [UPDATE] Navbar dengan Tombol Mute/Unmute
const Navbar = () => {
  // Ganti 'backsound.mp3' dengan nama file audio kamu di folder public
  const [playing, toggle] = useAudio('/backsound.mp3');

  return (
    <nav className="bg-nature-900 text-white p-4 shadow-lg sticky top-0 z-50 w-full backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          🍃 SmartKey Bio
        </Link>
        <div className="flex items-center gap-4 md:gap-6 font-medium">
          <Link to="/" className="hover:text-nature-200 transition hidden md:block">Home</Link>
          <Link to="/identify" className="hover:text-nature-200 transition bg-nature-700 px-4 py-2 rounded-full hover:bg-nature-600 flex items-center gap-1">
            <Search size={18} /> <span className="hidden md:inline">Identify</span>
          </Link>
          <Link to="/about" className="hover:text-nature-200 transition">About Us</Link>

          {/* TOMBOL AUDIO PLAYER */}
{/*           <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-nature-700 transition text-nature-200 hover:text-white border border-nature-700 hover:border-nature-500"
            title={playing ? "Mute Music" : "Play Music"}
            aria-label={playing ? "Mute music" : "Play music"}
          >
            {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-nature-900 text-green-50 pt-16 pb-8 mt-auto border-t border-green-800/50 overflow-hidden">
      {/* Background Decor (Awan/Blob tipis untuk kedalaman visual) */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/5 opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Konten Utama: 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* KOLOM 1: BRAND (4 bagian) */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <Leaf className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-2xl font-black tracking-tighter text-white uppercase">
                SmartKey <span className="text-emerald-400">Bio</span>
              </h3>
            </div>
            <p className="text-sm text-green-200/60 leading-relaxed max-w-sm">
              An interactive educational platform powered by digital dichotomous keys 
              to help explore biodiversity in a modern way.
            </p>
          </div>

          {/* KOLOM 2: OUR PARTNERS (5 bagian) */}
          <div className="md:col-span-5 flex flex-col items-start md:items-end space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Our Partners</h4>
            <div className="bg-white/5 p-5 md:p-6 rounded-[2.5rem] border border-white/10 backdrop-blur-md flex flex-row items-center gap-6 md:gap-10 shadow-xl">
              <img src="/Logo-school.png" alt="School" className="h-10 md:h-12 w-auto object-contain brightness-110" />
              <div className="w-px h-10 bg-white/20" />
              <img src="/ISPO.png" alt="ISPO" className="h-14 md:h-20 w-auto object-contain brightness-110" />
            </div>
            
            
          </div>

          {/* KOLOM 3: NAVIGATION (3 bagian) */}
          <div className="md:col-span-3 flex flex-col md:items-center">
            <div className="w-full md:w-fit text-left">
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Navigation</h4>
              <ul className="text-sm space-y-4 text-green-200/50">
                <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link to="/identify" className="hover:text-emerald-400 transition-colors">Identify</Link></li>
                <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              </ul>
            </div>
          </div>

          
        </div>

        {/* Divider Tipis */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Baris Hak Cipta & Info Tambahan */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] text-green-200/30 font-bold uppercase tracking-widest">
            © {currentYear} <span className="text-green-200/50">Project Kharisma Bangsa Team</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const TAXONOMY_KEY_MAP = {
  kingdom: "kingdom",
  phylum: "filum",
  class: "kelas",
  order: "ordo",
  family: "famili",
  genus: "genus",
  species: "spesies"
};

// Sub-component untuk Menu Card
const ModeCard = ({ icon, title, desc, onClick, color }) => (
  <button 
    onClick={onClick}
    className="group bg-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-emerald-500 text-center flex flex-col items-center"
  >
    <div className={`w-20 h-20 ${color} text-white rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-2xl font-black text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-500 font-medium">{desc}</p>
  </button>
);

// --- MAIN APP COMPONENT ---
function App() {
  const [organisms, setOrganisms] = useState(initialOrganisms);

  /* =========================================================
     [PATCH] Fetch Supabase benar-benar jalan + set state
  ========================================================= */
  useEffect(() => {
    const fetchOrganisms = async () => {
      const { data, error } = await supabase.from('organisms').select('*');
      if (!error && data) {
        console.log("Data loaded from Supabase:", data.length, "items");
        setOrganisms(data); // [PATCH]
      } else if (error) {
        console.error("Supabase fetch error:", error.message);
      }
    };

    fetchOrganisms(); // [PATCH] dipanggil
  }, []);

  return (
    <Router>
  <ScrollToTop />

  {/* 🌿 BACKGROUND LAYERS */}
  <FloatingBackground />
  <BiologyAmbient />
  <MoleculeAmbient />
  <PhotosynthesisGlow />

  <div className="font-sans text-slate-900 min-h-screen w-full flex flex-col relative z-0 isolate">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/identify" element={<IdentificationPage />} />
        <Route path="/about" element={<AboutPage />} /> {/* Tambahkan ini */}
      </Routes>
    </main>
    <Footer />
  </div>
</Router>


  );
}

export default App;
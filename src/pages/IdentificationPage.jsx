import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { 
  Search, ArrowLeft, GitBranch, Database, 
  Layers, Ghost, ChevronRight, Sprout, Feather, Bug, Droplets, PawPrint, Activity, HelpCircle, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Impor Data (Pastikan path benar sesuai struktur proyek Anda)
import { taksonomiData as speciesDatabase } from '../data/taxonomyData';
import { branchingLogic } from '../data/branchingData';

const normalize = (str) => str?.toLowerCase().replace(/\s+/g, "_") || "";

const TAXONOMY_KEY_MAP = {
  kingdom: "kingdom",
  phylum: "filum",
  class: "kelas",
  order: "ordo",
  family: "famili",
  genus: "genus",
  species: "spesies"
};

const levelOrder = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];

const getDynamicIcon = (name, active = false) => {
  const n = name.toLowerCase();
  const colorClass = active ? {
    mammalia: "text-blue-500",
    aves: "text-orange-500",
    reptilia: "text-emerald-500",
    amphibia: "text-lime-500",
    actinopterygii: "text-cyan-500",
    chondrichthyes: "text-indigo-500",
    plantae: "text-green-600",
    animalia: "text-red-500"
  }[n] || "text-emerald-500" : "text-slate-400";

  if (n.includes('animal') || n.includes('mammal')) return <PawPrint size={40} className={colorClass} />;
  if (n.includes('plantae') || n.includes('sprout')) return <Sprout size={40} className={colorClass} />;
  if (n.includes('aves') || n.includes('bird')) return <Feather size={40} className={colorClass} />;
  if (n.includes('insect') || n.includes('arthropoda')) return <Bug size={40} className={colorClass} />;
  if (n.includes('fish') || n.includes('actinopterygii')) return <Droplets size={40} className={colorClass} />;
  return <Layers size={40} className={colorClass} />;
};

const ModeCard = ({ icon, title, desc, onClick, color }) => (
  <motion.button 
    whileHover={{ scale: 1.05, y: -10 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="group bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-white/80 text-center flex flex-col items-center relative overflow-hidden"
  >
    <div className={`w-20 h-20 ${color} text-white rounded-3xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg`}>
      {icon}
    </div>
    <h3 className="text-2xl font-black text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
    <div className="absolute -bottom-2 -right-2 opacity-5 group-hover:opacity-10 transition-opacity">
        {icon}
    </div>
  </motion.button>
);

const IdentificationPage = () => {
  const [activeMode, setActiveMode] = useState(null); 
  const [navigationPath, setNavigationPath] = useState([]);
  const [currentNode, setCurrentNode] = useState('start');
  const [history, setHistory] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Background Parallax Effects
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const progressPercentage = activeMode === 'manual' 
    ? (navigationPath.length / (levelOrder.length - 1)) * 100
    : (history.length / 5) * 100;

  const getCurrentLevelOptions = () => {
    const currentLevelIndex = navigationPath.length;
    if (currentLevelIndex >= levelOrder.length) return [];
    const currentLevelName = levelOrder[currentLevelIndex].toLowerCase();
    const taxKey = TAXONOMY_KEY_MAP[currentLevelName];

    const availableSpecies = speciesDatabase.root.filter(org => {
      return navigationPath.every((selectedVal, index) => {
        const prevLevelName = levelOrder[index].toLowerCase();
        const prevTaxKey = TAXONOMY_KEY_MAP[prevLevelName];
        return normalize(org.taksonomi[prevTaxKey]) === normalize(selectedVal);
      });
    });

    const uniqueValues = [...new Set(availableSpecies.map(org => org.taksonomi[taxKey]))].filter(Boolean);

    return uniqueValues.map(val => ({
      id: val,
      name: val.replace(/_/g, " "),
    }));
  };

  const resetAll = () => {
    setActiveMode(null);
    setNavigationPath([]);
    setCurrentNode('start');
    setHistory([]);
    setShowResult(false);
    setResultData(null);
    setSearchTerm("");
  };

  const displayResult = (organism) => {
  setResultData({
    commonName: organism.nama_umum,
    scientificName: organism.taksonomi.spesies,
    description: organism.deskripsi,
    taxonomy: levelOrder.map(level => {
      const key = TAXONOMY_KEY_MAP[level.toLowerCase()];
      return organism.taksonomi[key]
        ? String(organism.taksonomi[key]).replace(/_/g, " ")
        : "-";
    }),
    traits: organism.ciri_utama,
    imageUrl: organism.image_url || null,
    videoUrl: organism.video_url || null,
    soundUrl: organism.sound_url || null
  });
  setShowResult(true);
};


  const handleManualSelection = (selectedId) => {
    const nextPath = [...navigationPath, selectedId];
    if (nextPath.length >= 7) { 
        const found = speciesDatabase.root.find(org => 
            normalize(org.taksonomi.spesies) === normalize(selectedId)
        );
        if (found) displayResult(found);
    } else {
      setNavigationPath(nextPath);
    }
  };

  const handleOption = (nextNode) => {
    setHistory([...history, currentNode]);
    const nodeData = branchingLogic[nextNode];
    if (nodeData && nodeData.resultId !== undefined) {
      const found = speciesDatabase.root.find(org => org.no === nodeData.resultId);
      if (found) displayResult(found);
    } else {
      setCurrentNode(nextNode);
    }
  };

  const handleBackBranching = () => {
    if (history.length > 0) {
      const prevNode = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentNode(prevNode);
    } else {
      resetAll();
    }
  };

  const filteredSpecies = speciesDatabase.root.filter(org => {
    const matchesSearch = org.nama_umum?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          org.taksonomi.spesies?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 px-4 pb-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100">
      
      {/* --- CONSISTENT BACKGROUND DECORATIONS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239CA3AF' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }}>
        </div>
        <motion.div style={{ y: y1 }} animate={{ x: [0, 40, 0] }} transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-[120px]" />
        <motion.div style={{ y: y2 }} animate={{ x: [0, -40, 0] }} transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Progress Bar UI */}
        {(activeMode === 'manual' || activeMode === 'branching') && !showResult && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 max-w-2xl mx-auto px-4">
            <div className="flex justify-between items-end mb-3">
              <span className="text-xs font-black text-emerald-600 uppercase tracking-widest flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm border border-emerald-100">
                <Activity size={14} className="animate-pulse" /> 
                {activeMode === 'manual' ? 'Dichotomous Path' : 'Branching Logic'}
              </span>
              <span className="text-xs font-black text-slate-500 bg-white/50 px-3 py-1 rounded-full uppercase">
                Step {activeMode === 'manual' ? navigationPath.length + 1 : history.length + 1}
              </span>
            </div>
            <div className="h-4 w-full bg-white/50 backdrop-blur-sm rounded-full overflow-hidden shadow-inner border border-white p-1">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progressPercentage + 5, 100)}%` }}
                className="h-full bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500 rounded-full"
              />
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {showResult ? (
            <motion.div 
    key="result" 
    initial={{ opacity: 0, y: 40 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, scale: 0.95 }}
    className="max-w-6xl mx-auto"
  >
    {/* Tombol Kembali */}
    <button 
      onClick={() => setShowResult(false)} 
      className="mb-8 flex items-center gap-3 font-black text-slate-500 hover:text-emerald-600 transition-all group"
    >
      <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:bg-emerald-50 border border-slate-100 transition-colors">
        <ArrowLeft size={20} />
      </div>
      <span className="text-lg">Back to Lab</span>
    </button>

    <div className="bg-white/90 backdrop-blur-3xl rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-white/80 relative">
      
      {/* HEADER SECTION: Image & Title Area */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        {resultData.imageUrl ? (
          <img 
            src={resultData.imageUrl} 
            alt={resultData.commonName} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
            <Ghost size={120} strokeWidth={1} />
          </div>
        )}
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
        
        {/* Floating Title Info */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-2">
              {resultData.commonName}
            </h1>
            <p className="text-2xl md:text-3xl text-emerald-400 font-serif italic mb-6">
              {resultData.scientificName}
            </p>
            
            {/* Play Sound Button - Styled like the reference image */}
            {resultData.soundUrl && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => new Audio(resultData.soundUrl).play()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-black shadow-lg shadow-emerald-500/30 transition-all text-sm uppercase tracking-wider"
              >
                <Volume2 size={18} /> Play Sound
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>

      {/* CONTENT SECTION: Description & Classification Tree */}
      <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
        
        {/* Left Column: Details (Col-7) */}
        <div className="lg:col-span-7 space-y-12">
          {/* Description */}
          <section>
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                 <Layers size={24} />
               </div>
               <h3 className="text-3xl font-black text-slate-800">Description</h3>
            </div>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              {resultData.description}
            </p>
          </section>

          {/* Key Characteristics */}
          <section>
            <h3 className="text-3xl font-black text-slate-800 mb-8">Key Characteristics</h3>
            <div className="grid grid-cols-1 gap-4">
              {resultData.traits.map((trait, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100 flex items-start gap-4 hover:bg-white hover:shadow-md transition-all group"
                >
                  <div className="mt-1.5 w-3 h-3 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                  <span className="font-bold text-slate-700 text-lg">{trait}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Classification Tree (Col-5) */}
        <div className="lg:col-span-5">
          <div className="bg-slate-50/80 backdrop-blur-md p-8 md:p-10 rounded-[3rem] border border-white shadow-xl">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-10 text-center">
              Classification Tree
            </h4>
            
            <div className="space-y-4">
              {resultData.taxonomy.map((tax, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-emerald-100 group-hover:scale-110 transition-transform" />
                    {i < resultData.taxonomy.length - 1 && (
                      <div className="w-0.5 h-8 bg-slate-200" />
                    )}
                  </div>
                  <div className="flex-1 bg-white/50 p-3 px-5 rounded-2xl border border-white/50 group-hover:border-emerald-200 transition-colors">
                    <p className="text-[10px] text-slate-400 font-black uppercase mb-0.5">
                      {levelOrder[i]}
                    </p>
                    <p className="font-black text-slate-800 text-lg leading-tight">
                      {tax}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ y: -5 }}
              onClick={resetAll} 
              className="w-full mt-12 py-5 bg-slate-900 text-white rounded-[2rem] font-black hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3"
            >
              New Discovery <Sparkles size={20} className="text-emerald-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
          ) : (
            <>
              {!activeMode && (
                <motion.div key="menu" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="text-center py-12">
                  <h2 className="text-5xl md:text-7xl font-black mb-4 text-slate-900 tracking-tighter">
                    Identification <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Lab</span>
                  </h2>
                  <p className="text-slate-500 text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                    Choose your preferred scientific method to identify species with precision.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <ModeCard icon={<Layers size={45}/>} title="Dichotomous Path" desc="Navigate through taxonomic ranks manually" onClick={() => setActiveMode('manual')} color="bg-blue-600" />
                    <ModeCard icon={<GitBranch size={45}/>} title="Smart Branching" desc="Answer key questions to narrow down species" onClick={() => setActiveMode('branching')} color="bg-emerald-600" />
                    <ModeCard icon={<Database size={45}/>} title="Encyclopedia" desc="Direct access to our complete database" onClick={() => setActiveMode('list')} color="bg-orange-600" />
                  </div>
                </motion.div>
              )}

              {activeMode === 'manual' && (
                <motion.div key="manual" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                   <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
                    <button onClick={resetAll} className="font-black text-slate-500 flex items-center gap-2 hover:text-emerald-600 transition-colors bg-white/50 px-6 py-3 rounded-2xl border border-white">
                      <ArrowLeft size={20}/> Exit Mode
                    </button>
                    
                    <div className="flex items-center gap-2 overflow-x-auto py-2 px-4 bg-white/40 backdrop-blur-md rounded-3xl border border-white max-w-full">
                       <span className="text-[10px] font-black text-slate-400">START</span>
                       {navigationPath.map((p, idx) => (
                         <div key={idx} className="flex items-center gap-2">
                           <ChevronRight size={14} className="text-slate-300" />
                           <span className="text-xs font-black text-emerald-700 whitespace-nowrap uppercase bg-emerald-100 px-3 py-1 rounded-lg">
                             {p.replace(/_/g, " ")}
                           </span>
                         </div>
                       ))}
                    </div>

                    <div className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-black uppercase text-sm tracking-widest shadow-lg flex items-center gap-3">
                      <Sparkles size={18} className="text-emerald-400" />
                      {levelOrder[navigationPath.length]} Rank
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {getCurrentLevelOptions().map(item => (
                      <motion.button 
                        key={item.id} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
                        onClick={() => handleManualSelection(item.id)} 
                        className="p-10 bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-xl hover:shadow-emerald-100 transition-all group flex flex-col items-center"
                      >
                        <div className="mb-6 transform group-hover:rotate-12 transition-transform">
                          {getDynamicIcon(item.name, true)}
                        </div>
                        <p className="font-black text-slate-800 text-2xl capitalize text-center leading-tight mb-2">{item.name}</p>
                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">{levelOrder[navigationPath.length]}</p>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {activeMode === 'branching' && (
                 <motion.div key="branch" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-10">
                      <button onClick={handleBackBranching} className="flex items-center gap-2 font-black text-slate-500 hover:text-emerald-600 transition-colors">
                        <ArrowLeft size={18} /> {history.length > 0 ? 'Previous' : 'Back'}
                      </button>
                      <div className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-2xl shadow-sm border border-white font-black text-xs text-slate-400 uppercase tracking-widest">
                        Interactive Key
                      </div>
                    </div>

                    <div className="bg-white/70 backdrop-blur-2xl p-10 md:p-20 rounded-[4rem] shadow-2xl border border-white relative">
                      <motion.div key={currentNode} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-emerald-100">
                          <HelpCircle size={14} /> Question #{history.length + 1}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-16 text-slate-900 leading-[1.1] tracking-tight">
                          {branchingLogic[currentNode].question}
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {branchingLogic[currentNode].options.map((opt, i) => (
                            <motion.button 
                              key={i} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                              onClick={() => handleOption(opt.next)} 
                              className="group p-8 text-left bg-white rounded-[2.5rem] border-2 border-slate-50 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 shadow-sm relative overflow-hidden"
                            >
                                <span className="relative z-10 font-black text-xl text-slate-700 group-hover:text-emerald-700 transition-colors block mb-2">
                                    {opt.label}
                                </span>
                                <div className="absolute right-6 bottom-6 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                    <ChevronRight size={24} />
                                </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeMode === 'list' && (
                <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                   <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
                    <button onClick={resetAll} className="font-black text-slate-500 flex items-center gap-2 hover:text-emerald-600 bg-white/50 px-6 py-3 rounded-2xl border border-white shadow-sm transition-all"><ArrowLeft size={20}/> Back</button>
                    <div className="relative flex-1 max-w-2xl w-full">
                      <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                      <input 
                        type="text" 
                        placeholder="Explore species by name..." 
                        className="w-full pl-16 pr-8 py-6 rounded-[2rem] bg-white border-none focus:ring-4 focus:ring-emerald-500/10 outline-none font-bold text-lg shadow-xl" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredSpecies.map(org => (
                      <motion.div layout key={org.no} className="bg-white/80 backdrop-blur-xl p-8 rounded-[3.5rem] shadow-xl border border-white hover:shadow-2xl transition-all group flex flex-col h-full">
                        <div className="h-64 bg-slate-100 rounded-[2.5rem] mb-8 overflow-hidden relative">
                           <div className="absolute top-5 right-5 z-10 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-emerald-600 shadow-sm border border-emerald-50">
                             {org.taksonomi.kelas}
                           </div>
                          {org.image_url ? (
                            <img
                              src={org.image_url}
                              alt={org.nama_umum}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          ) : org.video_url ? (
                            <video
                              src={org.video_url}
                              muted
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full">
                              <Ghost className="text-slate-300" size={60} />
                            </div>
                          )}
                        </div>
                        <h3 className="text-3xl font-black text-slate-800 mb-1">{org.nama_umum}</h3>
                        <p className="text-emerald-600 italic font-medium text-lg mb-8">{org.taksonomi.spesies}</p>
                        <div className="mt-auto">
                            <button onClick={() => displayResult(org)} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-emerald-600 transition shadow-lg flex items-center justify-center gap-3">
                                View Specification <ChevronRight size={18} />
                            </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IdentificationPage;
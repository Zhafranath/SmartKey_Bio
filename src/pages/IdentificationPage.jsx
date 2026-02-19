// src/pages/IdentificationPage.jsx
import React, { useState, useMemo } from 'react';
import { 
  Volume2, Search, ArrowLeft, GitBranch, Database, 
  Layers, Ghost, ChevronRight, Sprout, Feather, Bug, 
  Droplets, PawPrint, Activity, HelpCircle, Sparkles, MapPin, Wind 
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Impor Data terbaru Anda
import { newTaksonomiData as speciesDatabase } from '../data/taxonomyData';
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

// Helper untuk ikon dinamis berdasarkan taksonomi
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
      habitat: organism.habitat,
      ecosystem: organism.ekosistem,
      taxonomy: levelOrder.map(level => {
        const key = TAXONOMY_KEY_MAP[level.toLowerCase()];
        return organism.taksonomi[key] ? String(organism.taksonomi[key]).replace(/_/g, " ") : "-";
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
        const found = speciesDatabase.root.find(org => normalize(org.taksonomi.spesies) === normalize(selectedId));
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

  const filteredSpecies = speciesDatabase.root.filter(org => {
    return org.nama_umum?.toLowerCase().includes(searchTerm.toLowerCase()) || 
           org.taksonomi.spesies?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen pt-24 px-4 pb-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-[120px]" />
        <motion.div style={{ y: y2 }} className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Progress Bar */}
        {(activeMode === 'manual' || activeMode === 'branching') && !showResult && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 max-w-2xl mx-auto">
            <div className="flex justify-between items-end mb-3">
              <span className="text-xs font-black text-emerald-600 uppercase tracking-widest flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-100">
                <Activity size={14} className="animate-pulse" /> {activeMode === 'manual' ? 'Dichotomous Path' : 'Branching Logic'}
              </span>
              <span className="text-xs font-black text-slate-500">Step {activeMode === 'manual' ? navigationPath.length + 1 : history.length + 1}</span>
            </div>
            <div className="h-3 w-full bg-white/50 rounded-full overflow-hidden border border-white shadow-inner">
              <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(progressPercentage + 5, 100)}%` }} className="h-full bg-gradient-to-r from-emerald-400 to-blue-500" />
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {showResult ? (
            <motion.div key="result" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto">
              <button onClick={() => setShowResult(false)} className="mb-8 flex items-center gap-3 font-black text-slate-500 hover:text-emerald-600 transition-all group">
                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:bg-emerald-50 border border-slate-100"><ArrowLeft size={20} /></div>
                <span className="text-lg">Back to Lab</span>
              </button>

              <div className="bg-white/90 backdrop-blur-3xl rounded-[3.5rem] shadow-2xl overflow-hidden border border-white/80 relative">
                {/* Visual Header */}
                <div className="relative h-[450px] overflow-hidden">
                  {resultData.imageUrl ? (
                    <img src={resultData.imageUrl} alt={resultData.commonName} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400"><Ghost size={120} /></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-12">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                        <Wind size={12} /> {resultData.ecosystem}
                      </div>
                      <h1 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter mb-2 leading-none">{resultData.commonName}</h1>
                      <p className="text-2xl md:text-3xl text-emerald-400 font-serif italic mb-6">{resultData.scientificName}</p>
                      {resultData.soundUrl && (
                        <button onClick={() => new Audio(resultData.soundUrl).play()} className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-900 rounded-xl font-black shadow-xl hover:bg-emerald-50 transition-all text-xs uppercase tracking-widest">
                          <Volume2 size={18} /> Play Specimen Sound
                        </button>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-7 space-y-12">
                    {/* Visual Habitat Box */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-8 bg-emerald-50/50 rounded-[2.5rem] border border-emerald-100 relative overflow-hidden group">
                        <MapPin className="absolute -right-4 -bottom-4 text-emerald-100 rotate-12 group-hover:scale-110 transition-transform" size={120} />
                        <h4 className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-3">Habitat Range</h4>
                        <p className="font-bold text-slate-800 text-xl leading-relaxed relative z-10">{resultData.habitat}</p>
                      </div>
                      <div className="p-8 bg-blue-50/50 rounded-[2.5rem] border border-blue-100 relative overflow-hidden group">
                        <Wind className="absolute -right-4 -bottom-4 text-blue-100 rotate-12 group-hover:scale-110 transition-transform" size={120} />
                        <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">Ecological System</h4>
                        <p className="font-bold text-slate-800 text-xl leading-relaxed relative z-10">{resultData.ecosystem}</p>
                      </div>
                    </div>

                    <section>
                      <h3 className="text-3xl font-black text-slate-900 mb-6">Discovery Notes</h3>
                      <p className="text-slate-600 text-xl leading-relaxed font-medium bg-slate-50/50 p-8 rounded-3xl border border-slate-100">{resultData.description}</p>
                    </section>

                    <section>
                      <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3"><Sparkles className="text-amber-500" /> Distinctive Traits</h3>
                      <div className="space-y-4">
                        {resultData.traits.map((trait, i) => (
                          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }} className="p-6 bg-white rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all">
                            <div className="mt-2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <span className="font-bold text-slate-700 text-lg leading-tight">{trait}</span>
                          </motion.div>
                        ))}
                      </div>
                    </section>
                  </div>

                  {/* Taxonomy Sidebar */}
                  <div className="lg:col-span-5">
                    <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden sticky top-8">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
                      <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em] mb-12 text-center italic">Taxonomic Hierarchy</h4>
                      <div className="space-y-4">
                        {resultData.taxonomy.map((tax, i) => (
                          <div key={i} className="flex items-center gap-5 group">
                            <div className="flex flex-col items-center">
                              <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                              {i < resultData.taxonomy.length - 1 && <div className="w-px h-8 bg-white/10" />}
                            </div>
                            <div className="flex-1 bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-all">
                              <p className="text-[9px] text-emerald-500 font-black uppercase mb-0.5 tracking-widest">{levelOrder[i]}</p>
                              <p className="font-bold text-white text-lg tracking-tight">{tax}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <>
              {!activeMode && (
                <motion.div key="menu" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
                  <h2 className="text-6xl md:text-8xl font-black mb-6 text-slate-900 tracking-tighter italic leading-none">Identification <span className="text-emerald-600">Lab</span></h2>
                  <p className="text-slate-500 text-xl font-medium mb-20 max-w-2xl mx-auto leading-relaxed">Systematic specimen analysis through dichotomous keys and comprehensive databases.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ModeCard icon={<Layers size={45}/>} title="Dichotomous Path" desc="Rank-based taxonomic navigation" onClick={() => setActiveMode('manual')} color="bg-blue-600" />
                    <ModeCard icon={<GitBranch size={45}/>} title="Smart Branching" desc="Logic-driven identification" onClick={() => setActiveMode('branching')} color="bg-emerald-600" />
                    <ModeCard icon={<Database size={45}/>} title="Encyclopedia" desc="Complete species database" onClick={() => setActiveMode('list')} color="bg-orange-600" />
                  </div>
                </motion.div>
              )}

              {activeMode === 'manual' && (
                <motion.div key="manual" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                   <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-16">
                    <button onClick={resetAll} className="font-black text-slate-500 flex items-center gap-2 hover:text-emerald-600 transition-colors bg-white/80 px-8 py-3 rounded-2xl border border-white shadow-sm uppercase text-xs tracking-widest"><ArrowLeft size={18}/> Exit Lab</button>
                    <div className="flex items-center gap-3 py-2 px-6 bg-white/40 backdrop-blur-md rounded-full border border-white shadow-sm overflow-x-auto max-w-full">
                       <span className="text-[10px] font-black text-slate-400">ROOT</span>
                       {navigationPath.map((p, idx) => (
                         <div key={idx} className="flex items-center gap-3">
                           <ChevronRight size={14} className="text-slate-300" />
                           <span className="text-[10px] font-black text-emerald-700 uppercase bg-emerald-100 px-3 py-1 rounded-lg whitespace-nowrap">{p.replace(/_/g, " ")}</span>
                         </div>
                       ))}
                    </div>
                    <div className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-3 shadow-xl">
                      <Sparkles size={16} className="text-emerald-400" /> {levelOrder[navigationPath.length]} Rank
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {getCurrentLevelOptions().map(item => (
                      <motion.button key={item.id} whileHover={{ y: -8 }} onClick={() => handleManualSelection(item.id)} className="p-10 bg-white border border-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all group flex flex-col items-center">
                        <div className="mb-8 transform group-hover:rotate-12 transition-transform">{getDynamicIcon(item.name, true)}</div>
                        <p className="font-black text-slate-800 text-2xl capitalize text-center mb-1 leading-tight">{item.name}</p>
                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest opacity-60">{levelOrder[navigationPath.length]}</p>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeMode === 'branching' && (
                 <motion.div key="branch" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="max-w-4xl mx-auto">
                    <button onClick={() => history.length > 0 ? (setHistory(history.slice(0, -1)), setCurrentNode(history[history.length-1])) : resetAll()} className="mb-10 flex items-center gap-2 font-black text-slate-500 hover:text-emerald-600 transition-all uppercase text-xs tracking-widest"><ArrowLeft size={16} /> Back</button>
                    <div className="bg-white/70 backdrop-blur-2xl p-12 md:p-24 rounded-[4rem] shadow-2xl border border-white relative text-center">
                      <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-12 border border-emerald-100">
                        <HelpCircle size={14} /> Question #{history.length + 1}
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black mb-20 text-slate-900 tracking-tighter leading-none italic">{branchingLogic[currentNode].question}</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {branchingLogic[currentNode].options.map((opt, i) => (
                          <motion.button key={i} whileHover={{ scale: 1.02 }} onClick={() => handleOption(opt.next)} className="group p-8 text-left bg-white rounded-[2.5rem] border-2 border-slate-50 hover:border-emerald-500 hover:shadow-2xl transition-all shadow-sm relative">
                            <span className="font-black text-xl text-slate-700 group-hover:text-emerald-700 block mb-2">{opt.label}</span>
                            <div className="absolute right-8 bottom-8 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all"><ChevronRight size={24} /></div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeMode === 'list' && (
                <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                   <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
                    <button onClick={resetAll} className="font-black text-slate-500 flex items-center gap-2 hover:text-emerald-600 bg-white/80 px-8 py-3 rounded-2xl border border-white shadow-sm uppercase text-xs tracking-widest"><ArrowLeft size={20}/> Back</button>
                    <div className="relative flex-1 max-w-2xl w-full">
                      <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                      <input type="text" placeholder="Search by name or scientific rank..." className="w-full pl-16 pr-8 py-6 rounded-[2.5rem] bg-white border-none focus:ring-4 focus:ring-emerald-500/10 outline-none font-bold text-lg shadow-2xl" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredSpecies.map(org => (
                      <motion.div layout key={org.no} className="bg-white/80 backdrop-blur-xl p-8 rounded-[3.5rem] shadow-xl border border-white hover:shadow-2xl transition-all group flex flex-col h-full">
                        <div className="h-72 bg-slate-100 rounded-[3rem] mb-8 overflow-hidden relative shadow-inner">
                           <div className="absolute top-5 left-5 z-10 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase text-white flex items-center gap-2 tracking-widest"><Wind size={10} /> {org.ekosistem}</div>
                           <div className="absolute top-5 right-5 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase text-emerald-600 shadow-sm">{org.taksonomi.kelas}</div>
                           {org.image_url ? <img src={org.image_url} alt={org.nama_umum} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /> : <div className="flex items-center justify-center h-full"><Ghost className="text-slate-300" size={60} /></div>}
                        </div>
                        <h3 className="text-3xl font-black text-slate-800 mb-1 leading-tight italic">{org.nama_umum}</h3>
                        <p className="text-emerald-600 italic font-medium text-lg mb-6">{org.taksonomi.spesies}</p>
                        <div className="flex items-center gap-2 text-slate-400 text-xs mb-10"><MapPin size={14} className="text-emerald-500" /><span className="line-clamp-1">{org.habitat}</span></div>
                        <button onClick={() => displayResult(org)} className="mt-auto w-full py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-emerald-600 transition shadow-xl flex items-center justify-center gap-3 uppercase text-[10px] tracking-[0.2em]">Analyze Profile <ChevronRight size={18} /></button>
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
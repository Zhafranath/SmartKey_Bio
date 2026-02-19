// src/pages/HabitatPage.jsx
import React, { useState, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Hook untuk navigasi
import { motion, AnimatePresence } from "framer-motion";
import {
  Trees, Waves, Mountain, Leaf, Fish, Wind, 
  Search, MapPin, ArrowRight, ShieldAlert, Sparkles, 
  Droplets, AlertTriangle, Info, ArrowLeft
} from "lucide-react";

// Import data taksonomi dari path sesuai gambar struktur folder Anda
import { newTaksonomiData } from "../data/taxonomyData";

// --- DATA KONFIGURASI EKOSISTEM (EDUKASI STATIS) ---
const ECOSYSTEM_INFO = {
  rainforest: {
    id: "rainforest",
    keyword: "rainforest",
    title: "Tropical Rainforest",
    emoji: "🌳",
    icon: Trees,
    color: "from-green-700 to-emerald-900",
    found: "Lowland & hilly forests across Sumatra, Kalimantan & Java",
    characteristics: [
      "Very high rainfall (>2000 mm/year)",
      "Multi-layered canopies supporting diverse life",
      "Complex food webs with interconnected species",
      "Record-breaking biodiversity"
    ],
    importance: [
      "Store large amounts of carbon above and below ground",
      "Regulate regional climate and rainfall patterns",
      "Support entire food webs from insects to apex predators"
    ],
    declineImpact: [
      { subject: "Javan Leopard", effect: "Herbivore populations increase → Overgrazing of seedlings → Reduced forest regeneration." },
      { subject: "Dipterocarp Trees", effect: "Canopy gaps increase → Microclimate changes (warmer/drier) → Loss of forest-dependent species." }
    ]
  },
  peatswamp: {
    id: "peatswamp",
    keyword: "swamp",
    title: "Freshwater & Peat Swamp",
    emoji: "🌊",
    icon: Waves,
    color: "from-blue-700 to-indigo-900",
    found: "Peatlands of Kalimantan, Sumatra, Papua, and Lake Sentarum",
    characteristics: [
      "Thick waterlogged soils rich in organic material",
      "Acidic, low-nutrient conditions suited to rare specialists",
      "Slow decomposition creating deep carbon stores",
      "Takes thousands of years to develop"
    ],
    importance: [
      "Store vast carbon reserves to mitigate climate change",
      "Regulate water flow, reducing flood risk",
      "Natural water filter trapping pollutants"
    ],
    declineImpact: [
      { subject: "Red Arowana", effect: "Disruption of small fish populations → Disturbed freshwater food webs." },
      { subject: "Peat System", effect: "Water quality degradation → Loss of carbon sinks → Massive greenhouse gas release." }
    ]
  },
  highland: {
    id: "highland",
    keyword: "montane",
    title: "Montane & Highland",
    emoji: "🏔",
    icon: Mountain,
    color: "from-slate-600 to-blue-900",
    found: "High volcanic mountains of Java, Bali & Lombok",
    characteristics: [
      "Cooler temperatures than lowland areas",
      "Thin volcanic soils",
      "Specialized plants adapted to wind and cold",
      "High endemism — species found nowhere else"
    ],
    importance: [
      "Critical water catchment areas for lowlands",
      "Soil stabilization on steep slopes",
      "Habitat for rare alpine flora"
    ],
    declineImpact: [
      { subject: "Edelweiss Jawa", effect: "Reduced plant cover on slopes → Increased soil erosion after rain." },
      { subject: "Alpine Flora", effect: "Loss of high-altitude biodiversity → Reduced ecological uniqueness of peaks." }
    ]
  },
  mangrove: {
    id: "mangrove",
    keyword: "mangrove",
    title: "Mangrove",
    emoji: "🌿",
    icon: Leaf,
    color: "from-emerald-800 to-teal-900",
    found: "Coastal tropical estuaries across the archipelago",
    characteristics: [
      "Salt-tolerant tree species",
      "Intertidal zones with complex root systems",
      "Nursery grounds for marine life"
    ],
    importance: [
      "Trap sediments and protect coasts from erosion",
      "Blue Carbon sequestration (high efficiency)",
      "Linked to healthy coral reef systems"
    ],
    declineImpact: [
      { subject: "Coastal Line", effect: "Increased erosion → Fish stocks collapse → Community livelihoods impacted." }
    ]
  },
  coralreef: {
    id: "coralreef",
    keyword: "marine", 
    title: "Coral Reef & Ocean",
    emoji: "🪸",
    icon: Fish,
    color: "from-cyan-600 to-blue-800",
    found: "Shallow warm coastal waters and open oceans",
    characteristics: [
      "Highly diverse marine systems",
      "Symbiotic relationships (coral & algae)",
      "Natural breakwater structures"
    ],
    importance: [
      "Provide habitat for 25% of all marine species",
      "Coastal protection from storm surges",
      "Major hub for sustainable tourism"
    ],
    declineImpact: [
      { subject: "Coral Health", effect: "Fisheries collapse → Coastal damage increase → Tourism decline." }
    ]
  },
  savanna: {
    id: "savanna",
    keyword: "savanna",
    title: "Savanna & Grassland",
    emoji: "🌾",
    icon: Wind,
    color: "from-amber-600 to-orange-800",
    found: "Baluran, Komodo Island, and parts of Eastern Indonesia",
    characteristics: [
      "Open grasslands with scattered trees",
      "Distinct wet and dry seasons",
      "Fire-adapted vegetation"
    ],
    importance: [
      "Supports large herbivore populations",
      "Unique biodiversity adapted to drought",
      "Cultural and eco-tourism significance"
    ],
    declineImpact: [
      { subject: "Grassland Balance", effect: "Invasive species spread → Reduced grazing area → Herbivore decline." }
    ]
  }
};

// --- KOMPONEN KARTU SPESIES ---
const SpeciesCard = ({ item }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden hover:bg-white/20 transition-all shadow-xl"
  >

    <div className="p-5 text-white">
      <h4 className="text-xl font-black mb-1">{item.nama_umum}</h4>
      <p className="text-xs italic opacity-60 mb-3">{item.taksonomi.spesies}</p>
      <div className="flex items-center gap-2 text-[11px] font-medium opacity-80">
        <MapPin size={12} className="text-emerald-400" />
        <span className="line-clamp-1">{item.habitat}</span>
      </div>
    </div>
  </motion.div>
);

export default function HabitatPage() {
  const navigate = useNavigate(); // Hook untuk navigasi back
  const [activeTab, setActiveTab] = useState("rainforest");
  const [search, setSearch] = useState("");
  const contentRef = useRef(null);

  const activeEco = ECOSYSTEM_INFO[activeTab];

  // Logika Filter: Mencari kecocokan data taksonomi dengan ekosistem terpilih
  const filteredSpecies = useMemo(() => {
    let results = newTaksonomiData.root.filter(sp => {
      const spData = (sp.ekosistem + " " + sp.habitat).toLowerCase();
      const matchEco = spData.includes(activeEco.keyword.toLowerCase());
      const matchSearch = sp.nama_umum.toLowerCase().includes(search.toLowerCase());
      return matchEco && matchSearch;
    });

    // Fallback: Jika kosong, ambil data acak agar visual tidak kosong
    if (results.length === 0 && search === "") {
      results = newTaksonomiData.root
        .slice()
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
    }
    return results;
  }, [activeTab, search]);

  const scrollToContent = () => contentRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30">
      
      {/* 1) HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Tombol Back Melayang */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="absolute top-10 left-6 md:left-12 z-50 flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-black hover:bg-white/20 transition-all group shadow-2xl"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase text-xs tracking-widest">Back</span>
        </motion.button>

        <div className={`absolute inset-0 bg-gradient-to-br ${activeEco.color} opacity-60 transition-colors duration-1000`} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 mb-6 font-black uppercase text-xs tracking-widest">
            <Sparkles size={14} /> Habitat & Ecosystem Insight
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 italic tracking-tighter leading-none">
             {activeEco.emoji} {activeEco.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto italic mb-10">
            “A species cannot survive without its ecosystem.”
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={scrollToContent} className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-black transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 uppercase text-sm">
              Explore Ecosystems <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2) ECOSYSTEM FILTER SECTION */}
      <section ref={contentRef} className="py-20 px-6 bg-slate-900 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 text-white">
            <div>
              <h2 className="text-4xl font-black mb-2 flex items-center gap-3 tracking-tight">
                <span className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400">🧭</span>
                Explore Ecosystems
              </h2>
              <p className="text-slate-400 font-medium">Select an ecosystem to view profiles and inhabitants.</p>
            </div>
            
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search species..."
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.values(ECOSYSTEM_INFO).map((eco) => (
              <button 
                key={eco.id} onClick={() => setActiveTab(eco.id)}
                className={`group relative p-6 rounded-[2.5rem] transition-all duration-500 border-2 overflow-hidden ${
                  activeTab === eco.id ? 'border-emerald-500 bg-emerald-500/10 scale-105 shadow-2xl' : 'border-white/5 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="relative z-10 text-center">
                  <eco.icon size={40} className={`mx-auto mb-4 transition-transform group-hover:scale-125 ${activeTab === eco.id ? 'text-emerald-400' : 'text-slate-500'}`} />
                  <h3 className="text-white font-black text-[10px] uppercase tracking-widest leading-tight">{eco.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3) ECOSYSTEM DETAIL & SPECIES LIST */}
      <section className="py-24 px-6 bg-slate-950 relative">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-7 space-y-16 text-white">
            <motion.div key={`${activeTab}-info`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-3 mb-6 text-emerald-400">
                <MapPin size={32} />
                <h2 className="text-4xl font-black italic tracking-tighter">Where It’s Found</h2>
              </div>
              <p className="text-2xl text-slate-300 font-medium leading-relaxed border-l-4 border-emerald-500 pl-6">
                {activeEco.found}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-xl font-black uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-2 italic">
                  <Sparkles size={20}/> Characteristics
                </h3>
                <ul className="space-y-4">
                  {activeEco.characteristics.map((c, i) => (
                    <li key={i} className="flex items-start gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                      <span className="text-slate-200 font-bold leading-snug">{c}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-black uppercase tracking-widest text-blue-400 mb-6 flex items-center gap-2 italic">
                  <Droplets size={20}/> Ecological Roles
                </h3>
                <ul className="space-y-4">
                  {activeEco.importance.map((imp, i) => (
                    <li key={i} className="flex items-start gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                      <span className="text-slate-200 font-bold leading-snug">{imp}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="p-8 rounded-[3rem] bg-red-500/10 border border-red-500/20">
              <h3 className="text-2xl font-black text-red-400 mb-8 flex items-center gap-3 uppercase tracking-tighter">
                <AlertTriangle size={28}/> If Key Species Decline
              </h3>
              <div className="space-y-6">
                {activeEco.declineImpact.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="text-red-500 font-black text-xl">→</div>
                    <div>
                      <span className="text-white font-black uppercase text-xs tracking-widest block mb-1">{item.subject}</span>
                      <p className="text-slate-300 font-medium leading-relaxed">{item.effect}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-8">
              <div className="flex items-center justify-between text-white mb-6 border-b border-white/10 pb-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic">🐾 Example Inhabitants</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-emerald-500/20">
                <AnimatePresence mode="popLayout">
                  {filteredSpecies.map(sp => (
                    <SpeciesCard key={sp.no} item={sp} />
                  ))}
                </AnimatePresence>
                {search === "" && !newTaksonomiData.root.some(sp => (sp.ekosistem + sp.habitat).toLowerCase().includes(activeEco.keyword)) && (
                   <p className="text-[10px] text-slate-500 uppercase tracking-widest text-center mt-4">
                     *Showing suggested species from database
                   </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) INFOGRAFIS ECOSYSTEM COLLAPSE CHAIN */}
      <section className="py-32 px-6 bg-gradient-to-b from-slate-950 to-red-950/40 border-t border-white/5">
        <div className="container mx-auto text-center">
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter italic leading-none">
              🔥 Ecosystem Collapse Chain
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-20 font-medium">
              Understanding the domino effect: when one species falls, the entire foundation trembles.
            </p>

            <div className="flex flex-col items-center gap-2 max-w-lg mx-auto">
              {[
                { label: "Species Decline", color: "bg-red-400 text-red-950", icon: "🐾" },
                { label: "Food Web Disruption", color: "bg-red-500 text-white", icon: "🌐" },
                { label: "Habitat Function Loss", color: "bg-red-600 text-white", icon: "🌳" },
                { label: "Biodiversity Loss", color: "bg-red-700 text-white", icon: "🧬" },
                { label: "Climate Impact", color: "bg-red-900 text-white", icon: "🌍" }
              ].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`w-full p-6 rounded-3xl ${step.color} font-black text-xl shadow-2xl flex items-center justify-center gap-4 border border-white/10`}
                  >
                    <span className="text-2xl">{step.icon}</span> {step.label}
                  </motion.div>
                  {i < arr.length - 1 && (
                    <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-700 opacity-50" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
// src/pages/EndangeredPage.jsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PawPrint,
  X,
  Search,
  Info,
  MapPin,
  Sparkles,
  ArrowDown,
  TrendingUp,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { SPESIES_LANGKA } from "../data/spesiesLangka";

const STATUS_STYLE = {
  CR: { badge: "bg-red-500/15 text-red-200 border-red-400/20", dot: "bg-red-400" },
  EN: { badge: "bg-orange-500/15 text-orange-200 border-orange-400/20", dot: "bg-orange-400" },
  VU: { badge: "bg-amber-500/15 text-amber-200 border-amber-400/20", dot: "bg-amber-400" },
  NT: { badge: "bg-lime-500/15 text-lime-200 border-lime-400/20", dot: "bg-lime-400" },
  LC: { badge: "bg-emerald-500/15 text-emerald-200 border-emerald-400/20", dot: "bg-emerald-400" },
};

function StatusBadge({ status }) {
  const st = STATUS_STYLE[status] ?? STATUS_STYLE.VU;
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${st.badge} font-black`}>
      <span className={`w-2 h-2 rounded-full ${st.dot}`} />
      <span className="text-[11px] tracking-[0.18em]">{status}</span>
    </span>
  );
}

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
        <Icon size={18} />
      </div>
      <div>
        <h3 className="text-lg font-black text-white">{title}</h3>
        {subtitle ? <p className="mt-1 text-white/70 font-medium">{subtitle}</p> : null}
      </div>
    </div>
  );
}

/** Helper: safely read iucn code */
function getIucnCode(item) {
  return item?.iucn?.code ?? item?.status ?? "";
}

/** Helper: get a value from hero.keyFacts by label (case-insensitive contains) */
function getHeroFact(item, labelIncludes) {
  const facts = item?.hero?.keyFacts;
  if (!Array.isArray(facts)) return null;
  const needle = String(labelIncludes || "").toLowerCase();
  const hit = facts.find((f) => String(f?.label || "").toLowerCase().includes(needle));
  return hit?.value ?? null;
}

function SpeciesCard({ item, onOpen }) {
  const iucnCode = getIucnCode(item);
  const trend = getHeroFact(item, "population trend");

  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpen(item)}
      className="group text-left w-full rounded-3xl bg-white/75 backdrop-blur-xl border border-white/70 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.18)] overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              {item.type} • {item.category}
            </div>

            <div className="mt-1 text-xl font-black text-slate-900 leading-tight">
              {item.emoji ? `${item.emoji} ` : ""}
              {item.name}
            </div>

            <div className="text-sm text-slate-600 font-medium italic">{item.scientificName}</div>

            {trend ? (
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 border border-black/5">
                <TrendingUp size={14} className="text-slate-700" />
                <span className="text-xs font-black text-slate-700 line-clamp-1">Trend: {trend}</span>
              </div>
            ) : null}
          </div>

          <StatusBadge status={iucnCode} />
        </div>

        <p className="mt-4 text-slate-600 font-medium leading-relaxed line-clamp-3">
          {item?.hero?.tagline || item?.hero?.summary || item?.description || "Open to read species profile."}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-slate-600">
            <MapPin size={16} />
            <span className="text-sm font-medium line-clamp-1">
              {item?.habitat?.ecosystemType || item?.habitat || "—"}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 text-slate-900 font-black">
            <span className="text-xs uppercase tracking-[0.2em]">Open</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-emerald-500/40 via-blue-500/40 to-amber-500/40" />
    </motion.button>
  );
}

function SpeciesDetailModal({ item, onClose }) {
  if (!item) return null;

  const iucnCode = getIucnCode(item);
  const iucnLabel = item?.iucn?.label ?? "Conservation Status";
  const iucnIcon = item?.iucn?.icon ?? "";
  const riskLevel = item?.iucn?.riskLevel ?? "";
  const popTrend = getHeroFact(item, "population trend");

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button className="absolute inset-0 bg-black/60" onClick={onClose} aria-label="Close detail" />

        <motion.div
          className="relative w-full max-w-5xl max-h-[88vh] overflow-hidden rounded-[2.5rem] bg-slate-950 text-white border border-white/10 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.6)]"
          initial={{ y: 18, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 14, scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 opacity-80 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 15% 20%, rgba(16,185,129,0.22), transparent 55%), radial-gradient(circle at 85% 30%, rgba(59,130,246,0.18), transparent 60%)",
            }}
          />

          {/* Header bar */}
          <div className="relative px-6 md:px-10 pt-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 flex-wrap text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 font-black">
                  <Info size={16} />
                  <span className="text-xs uppercase tracking-[0.2em]">Species Profile</span>
                </div>

                <StatusBadge status={iucnCode} />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 font-black">
                  <span className="text-[11px] tracking-[0.18em]">{item.type}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-[11px] tracking-[0.18em]">{item.category}</span>
                </div>

                {riskLevel ? (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 font-black">
                    <Sparkles size={14} />
                    <span className="text-[11px] tracking-[0.18em]">{riskLevel}</span>
                  </div>
                ) : null}

                {popTrend ? (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 font-black">
                    <TrendingUp size={14} />
                    <span className="text-[11px] tracking-[0.18em] line-clamp-1">Trend: {popTrend}</span>
                  </div>
                ) : null}
              </div>

              <button
                onClick={onClose}
                className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white"
                aria-label="Close"
              >
                <X />
              </button>
            </div>
          </div>

          {/* Body scroll */}
          <div className="relative px-6 md:px-10 pb-8 pt-6 overflow-auto max-h-[80vh]">
            {/* HERO */}
            <div className="rounded-[2.25rem] overflow-hidden border border-white/10 bg-white/5">
              <div className="p-7 md:p-9">
                <div className="text-xs font-black uppercase tracking-[0.28em] text-white/60">
                  {item.emoji ? `${item.emoji} ` : ""}
                  {item.localName || item.name}
                </div>

                <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight">
                  {item?.hero?.title || item.name}
                </h2>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 font-black">
                    <span className="text-sm">{iucnIcon ? `${iucnIcon} ` : ""}{iucnLabel}</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 font-black">
                    <span className="text-sm">{item?.hero?.statusText || iucnLabel}</span>
                  </div>

                  {popTrend ? (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 font-black">
                      <TrendingUp size={16} />
                      <span className="text-sm">Population Trend: {popTrend}</span>
                    </div>
                  ) : null}
                </div>

                {item?.hero?.tagline ? (
                  <p className="mt-5 text-xl md:text-2xl font-black text-white/90">“{item.hero.tagline}”</p>
                ) : null}

                {item?.hero?.summary ? (
                  <p className="mt-4 text-white/80 leading-relaxed font-medium text-lg">{item.hero.summary}</p>
                ) : null}

                {Array.isArray(item?.hero?.keyFacts) && item.hero.keyFacts.length > 0 ? (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {item.hero.keyFacts.map((f, idx) => (
                      <div key={idx} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                        <div className="text-xs uppercase tracking-[0.22em] font-black text-white/60">{f.label}</div>
                        <div className="mt-1 text-white font-black">{f.value}</div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-emerald-500/40 via-blue-500/40 to-amber-500/40" />
            </div>

            {/* QUICK SNAPSHOT */}
            {Array.isArray(item.snapshot) && item.snapshot.length > 0 ? (
              <div className="mt-6 rounded-[2rem] bg-white/5 border border-white/10 p-6 md:p-7">
                <SectionTitle icon={Info} title="Quick Species Snapshot" subtitle="Key facts at a glance" />

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.snapshot.map((row, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-slate-950/40 border border-white/10 p-4 flex items-start justify-between gap-4"
                    >
                      <div className="text-xs uppercase tracking-[0.22em] font-black text-white/60">{row.label}</div>
                      <div className="text-white font-black text-right">{row.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* STORY */}
            {item?.story ? (
              <div className="mt-6 rounded-[2rem] bg-white/5 border border-white/10 p-6 md:p-7">
                <SectionTitle icon={Sparkles} title={`Story — ${item.story.title || "Species Story"}`} />

                <div className="mt-5 space-y-4 text-white/80 font-medium leading-relaxed text-lg text-white">
                  {(item.story.paragraphs || []).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {item?.story?.didYouKnow ? (
                  <div className="mt-6 rounded-3xl bg-white/5 border border-white/10 p-6">
                    <div className="text-xs uppercase tracking-[0.22em] font-black text-white/70">
                      {item.story.didYouKnow.title || "Did You Know?"}
                    </div>
                    <ul className="mt-3 space-y-2 text-white/80 font-medium">
                      {(item.story.didYouKnow.points || []).map((x, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-300/70" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* THREATS */}
            {Array.isArray(item.threats) && item.threats.length > 0 ? (
              <div className="mt-6 rounded-[2rem] bg-white/5 border border-white/10 p-6 md:p-7">
                <SectionTitle icon={ShieldAlert} title="Main Threats" subtitle="What pushes the species toward extinction" />

                <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {item.threats.map((t, idx) => (
                    <div key={idx} className="rounded-3xl bg-white/5 border border-white/10 p-5">
                      <div className="text-3xl">{t.icon || "⚠️"}</div>
                      <div className="mt-3 text-white font-black text-lg">{t.title}</div>
                      <p className="mt-2 text-white/75 font-medium leading-relaxed">{t.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* ECOLOGICAL ROLE + TROPHIC CASCADE */}
            {item?.ecologicalRole ? (
              <div className="mt-6 rounded-[2rem] bg-white/5 border border-white/10 p-6 md:p-7">
                <SectionTitle icon={MapPin} title={item.ecologicalRole.title || "Ecological Role"} />

                {item?.ecologicalRole?.intro ? (
                  <p className="mt-4 text-white/80 font-medium leading-relaxed text-lg">{item.ecologicalRole.intro}</p>
                ) : null}

                {Array.isArray(item?.ecologicalRole?.cascade?.steps) && item.ecologicalRole.cascade.steps.length > 0 ? (
                  <div className="mt-6 rounded-3xl bg-slate-950/40 border border-white/10 p-6">
                    <div className="text-xs uppercase tracking-[0.22em] font-black text-white/70">Trophic Cascade</div>

                    <div className="mt-4 space-y-3">
                      {item.ecologicalRole.cascade.steps.map((s, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1.5 w-7 h-7 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center font-black text-white">
                            {idx + 1}
                          </div>
                          <div className="text-white/85 font-medium leading-relaxed">{s}</div>
                        </div>
                      ))}
                    </div>

                    {item?.ecologicalRole?.cascade?.note ? (
                      <div className="mt-5 inline-flex items-start gap-2 rounded-2xl bg-white/5 border border-white/10 p-4 text-white">
                        <ArrowDown className="mt-0.5" size={18} />
                        <p className="text-white/75 font-medium leading-relaxed">{item.ecologicalRole.cascade.note}</p>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* HABITAT */}
            {item?.habitat ? (
              <div className="mt-6 rounded-[2rem] bg-white/5 border border-white/10 p-6 md:p-7">
                <SectionTitle icon={MapPin} title={item.habitat.title || "Habitat"} />

                {item?.habitat?.intro ? (
                  <p className="mt-4 text-white/80 font-medium leading-relaxed text-lg">{item.habitat.intro}</p>
                ) : null}

                {Array.isArray(item?.habitat?.types) && item.habitat.types.length > 0 ? (
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.habitat.types.map((h, idx) => (
                      <div key={idx} className="rounded-2xl bg-slate-950/40 border border-white/10 p-4">
                        <div className="text-white font-black">{h}</div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {item?.habitat?.requirement ? (
                  <p className="mt-5 text-white/80 font-medium leading-relaxed">
                    <span className="font-black text-white">Requirement:</span> {item.habitat.requirement}
                  </p>
                ) : null}

                {item?.habitat?.ecosystemType ? (
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 font-black text-white">
                    <span className="text-xs uppercase tracking-[0.22em] text-white/70">Ecosystem Type</span>
                    <span className="text-white">{item.habitat.ecosystemType}</span>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* EXTINCTION IMPACT */}
            {item?.extinctionImpact ? (
              <div className="mt-6 rounded-[2rem] bg-white/5 border border-white/10 p-6 md:p-7">
                <SectionTitle icon={ShieldAlert} title={item.extinctionImpact.title || "If It Goes Extinct…"} />

                {Array.isArray(item?.extinctionImpact?.points) && item.extinctionImpact.points.length > 0 ? (
                  <ul className="mt-5 space-y-2 text-white/80 font-medium">
                    {item.extinctionImpact.points.map((x, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-300/70" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item?.extinctionImpact?.closing ? (
                  <p className="mt-5 text-white/80 font-medium leading-relaxed">{item.extinctionImpact.closing}</p>
                ) : null}
              </div>
            ) : null}

            {item?.statusScale?.text ? (
              <div className="mt-6 rounded-[2rem] bg-white/5 border border-white/10 p-6">
                <div className="text-xs uppercase tracking-[0.22em] font-black text-white/70">
                  {item.statusScale.title || "Conservation Status Scale"}
                </div>
                <div className="mt-3 text-white font-black">{item.statusScale.text}</div>
              </div>
            ) : null}

            <div className="mt-8 flex items-center justify-end">
              <button onClick={onClose} className="px-6 py-3 rounded-full bg-white text-slate-900 font-black hover:opacity-95">
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function EndangeredPage() {
  const [tab, setTab] = useState("All"); // All | Fauna | Flora
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIucn, setSelectedIucn] = useState("All");
  const [selected, setSelected] = useState(null);

  const categoryOptions = useMemo(() => {
    const set = new Set(SPESIES_LANGKA.map((x) => x.category));
    return ["All", ...Array.from(set)];
  }, []);

  const iucnOptions = useMemo(() => {
    const set = new Set(SPESIES_LANGKA.map((x) => getIucnCode(x)).filter(Boolean));
    const order = ["CR", "EN", "VU", "NT", "LC"];
    const presentOrdered = order.filter((c) => set.has(c));
    const rest = Array.from(set).filter((c) => !order.includes(c)).sort();
    return ["All", ...presentOrdered, ...rest];
  }, []);
  const navigate = useNavigate();
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return SPESIES_LANGKA.filter((x) => {
      const matchTab = tab === "All" ? true : x.type === tab;
      const matchCategory = selectedCategory === "All" ? true : x.category === selectedCategory;

      const code = getIucnCode(x);
      const matchIucn = selectedIucn === "All" ? true : code === selectedIucn;

      const matchQuery =
        !q ||
        (x.name || "").toLowerCase().includes(q) ||
        (x.scientificName || "").toLowerCase().includes(q) ||
        (x.category || "").toLowerCase().includes(q) ||
        (x.localName || "").toLowerCase().includes(q);

      return matchTab && matchCategory && matchIucn && matchQuery;
    });
  }, [tab, query, selectedCategory, selectedIucn]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-6 md:px-10 py-10 md:py-14">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <motion.button
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate(-1)} // Fungsi -1 berarti kembali ke halaman sebelumnya
              className="mb-10 flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl font-black hover:text-emerald-600 hover:border-emerald-200 transition-all group shadow-sm"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="uppercase text-xs tracking-widest">Back</span>
            </motion.button>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/70 border border-emerald-100 text-emerald-800 font-black">
              <PawPrint size={16} />
              <span className="text-xs uppercase tracking-[0.2em]">Endangered Species</span>
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-slate-900">
              Explore the biodiversity crisis through <span className="text-emerald-600">species profiles</span>
            </h1>

            <p className="mt-3 text-slate-600 font-medium max-w-3xl">
              Click a species card to view conservation status, threats, and ecological roles—building stronger conservation literacy.
            </p>
          </div>

          {/* Optional: kalau kamu mau tombol back, bisa ganti jadi Link atau navigate(-1) */}
          {/* <button className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:opacity-90">
            <X />
          </button> */}
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search species (name / local / scientific / category)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 rounded-2xl bg-white border border-black/10 shadow-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-emerald-300"
            aria-label="Filter by category"
          >
            {categoryOptions.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>

          <select
            value={selectedIucn}
            onChange={(e) => setSelectedIucn(e.target.value)}
            className="px-4 py-3 rounded-2xl bg-white border border-black/10 shadow-sm font-bold text-slate-800 outline-none focus:ring-2 focus:ring-emerald-300"
            aria-label="Filter by IUCN status"
          >
            {iucnOptions.map((s) => (
              <option key={s} value={s}>
                {s === "All" ? "All IUCN" : `IUCN: ${s}`}
              </option>
            ))}
          </select>

          <div className="inline-flex bg-white border border-black/10 rounded-2xl p-1 shadow-sm">
            {["All", "Fauna", "Flora"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-xl font-black ${
                  tab === t ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-900/5"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-600 font-medium">
          Showing <span className="font-black text-slate-900">{filtered.length}</span> species.
        </div>

        {/* List */}
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <SpeciesCard key={item.id} item={item} onOpen={setSelected} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-3xl bg-white/80 border border-black/5 p-8 text-center">
            <div className="text-2xl font-black text-slate-900">No results</div>
            <p className="mt-2 text-slate-600 font-medium">Try changing the keyword, tab, category, or IUCN filter.</p>
          </div>
        )}
      </div>

      <SpeciesDetailModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

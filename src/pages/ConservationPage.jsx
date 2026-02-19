// src/pages/ConservationPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { PawPrint, Mountain, GraduationCap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CARD_ITEMS = [
  {
    key: "spesies",
    title: "Endangered Species",
    icon: PawPrint,
    colorClass: "emerald",
    desc: "Discover rare species across various ecosystems, their conservation status, and why protecting them is vital for ecological balance.",
  },
  {
    key: "habitat",
    title: "Habitat & Ecosystems",
    icon: Mountain,
    colorClass: "blue",
    desc: "Learn about different habitats—forests, wetlands, mountains, coasts—and the ecosystem services they provide for our daily lives.",
  },
  {
    key: "biodiversitas",
    title: "Biodiversity Education",
    icon: GraduationCap,
    colorClass: "amber",
    desc: "Practical materials on biodiversity: basic concepts, current threats, and simple actions we can take to protect our planet.",
  },
];

const FlipCard = ({ title, icon: Icon, desc, index, colorClass, onClick }) => {
  const colors = {
    emerald: {
      light: "from-emerald-100/60",
      iconBg: "bg-emerald-100/60",
      iconBorder: "border-emerald-100",
      iconText: "text-emerald-700",
      btnText: "text-emerald-700",
      backGlow: "rgba(16,185,129,0.25)",
      backBadge: "bg-emerald-500/20 border-emerald-400/20 text-emerald-200",
    },
    blue: {
      light: "from-blue-100/60",
      iconBg: "bg-blue-100/60",
      iconBorder: "border-blue-100",
      iconText: "text-blue-700",
      btnText: "text-blue-700",
      backGlow: "rgba(59,130,246,0.25)",
      backBadge: "bg-blue-500/20 border-blue-400/20 text-blue-200",
    },
    amber: {
      light: "from-amber-100/60",
      iconBg: "bg-amber-100/60",
      iconBorder: "border-amber-100",
      iconText: "text-amber-700",
      btnText: "text-amber-700",
      backGlow: "rgba(245,158,11,0.25)",
      backBadge: "bg-amber-500/20 border-amber-400/20 text-amber-200",
    },
  };

  const theme = colors[colorClass] || colors.emerald;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="flip-card h-[380px] w-full cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      aria-label={`Open ${title}`}
    >
      <div className="flip-inner relative w-full h-full transition-transform duration-700">
        {/* FRONT */}
        <div className="flip-face flip-front absolute inset-0 rounded-[2.5rem] bg-white/70 backdrop-blur-2xl border border-white/70 shadow-[0_28px_60px_-18px_rgba(0,0,0,0.12)] overflow-hidden">
          <div className={`absolute inset-0 opacity-70 bg-gradient-to-b ${theme.light} to-transparent`} />
          <div className="relative h-full w-full p-10 flex flex-col items-center justify-center text-center">
            <div className={`w-20 h-20 rounded-3xl ${theme.iconBg} border ${theme.iconBorder} flex items-center justify-center shadow-inner`}>
              <Icon className={theme.iconText} size={34} />
            </div>
            <h3 className="mt-6 text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{title}</h3>
            <p className="mt-3 text-slate-600 font-medium max-w-sm">
              Hover to see explanation and click.
            </p>
            <div className={`mt-6 inline-flex items-center gap-2 ${theme.btnText} font-black`}>
              <span className="text-sm uppercase tracking-[0.2em]">Details</span>
              <ArrowRight size={18} />
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-face flip-back absolute inset-0 rounded-[2.5rem] bg-slate-900 text-white border border-white/10 shadow-[0_28px_60px_-18px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="relative h-full w-full p-10 flex flex-col">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                <Icon className="text-white" size={26} />
              </div>
              <h3 className="text-xl md:text-2xl font-black tracking-tight">{title}</h3>
            </div>
            <p className="mt-6 text-white/80 leading-relaxed font-medium text-lg">{desc}</p>
            <div className="mt-auto pt-8">
              <div className={`inline-flex items-center gap-2 px-5 py-3 rounded-full ${theme.backBadge} font-black`}>
                <span className="text-[10px] uppercase tracking-[0.2em]">Back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ConservationPage() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Preserving Life, <br />
            <span className="text-emerald-600">Nurturing Biodiversity</span>
          </h1>

          <p className="mt-6 text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
            Explore in-depth information on nature conservation efforts through our three primary educational pillars.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {CARD_ITEMS.map((item, idx) => (
            <FlipCard
              key={item.key}
              {...item}
              index={idx}
              onClick={() => {
                                if (item.key === "spesies") navigate("/endangered");
                                if (item.key === "habitat") navigate("/habitat");
                                if (item.key === "biodiversitas") navigate("/biodiversitas")
                              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

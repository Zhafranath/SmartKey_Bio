import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Target, Lightbulb, Award, Heart, 
  Github, Instagram, Twitter, Sparkles,
  Dna, Beaker, Leaf, Microscope, Fingerprint
} from 'lucide-react';

const TeamMember = ({ name, role, image, sentence, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.15 }}
    whileHover={{ y: -15 }}
    className="bg-white/70 backdrop-blur-2xl p-10 rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/80 flex flex-col items-center text-center relative overflow-hidden group min-h-[600px] justify-center transition-all duration-500 hover:shadow-emerald-200/50"
  >
    {/* --- DECORATION INSIDE CARD --- */}
    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-emerald-100/40 to-transparent opacity-60" />
    
    {/* Subtle Grid Pattern inside card */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")` }} />

    {/* --- AVATAR SECTION --- */}
    <div className="relative mb-8">
      <div className="w-52 h-52 rounded-full flex items-center justify-center relative z-10 border-[6px] border-white shadow-2xl overflow-hidden bg-white">
        {/* Animated Background behind photo */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
             <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#10b981,#34d399,#6ee7b7,#10b981)] animate-[spin_8s_linear_infinity]" />
        </div>
        
        <motion.img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover relative z-10"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Outer Glow */}
      <div className="absolute inset-0 bg-emerald-400/20 blur-[50px] rounded-full scale-90 group-hover:scale-110 transition-transform duration-700" />
      
      {/* Floating Sparkle Badge */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-2 -right-2 z-20 bg-white p-3.5 rounded-2xl shadow-xl border border-emerald-50 text-emerald-500"
      >
        <Sparkles size={24} fill="currentColor" />
      </motion.div>
    </div>

    {/* --- CONTENT --- */}
    <div className="relative z-10">
      <h4 className="text-3xl font-black text-slate-900 leading-tight mb-2">{name}</h4>
      <div className="inline-block px-4 py-1 bg-emerald-100/50 rounded-full mb-6">
        <p className="text-emerald-700 font-black text-xs uppercase tracking-[0.2em]">{role}</p>
      </div>
      
      <div className="relative">
        <span className="absolute -top-4 -left-2 text-6xl text-emerald-100 font-serif opacity-50">“</span>
        <p className="text-slate-600 text-lg leading-relaxed font-medium relative z-10 px-4">
          {sentence}
        </p>
      </div>
    </div>
  </motion.div>
);

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const teamData = [
    {
      name: "Elifa Billien Revita",
      role: "Member 1",
      image: "/team/elifa.png", 
      sentence: "An eleventh-grade student at SMA Karisma Bangsa. I am passionate about bridging the gap between biological sciences and modern technology."
    },
    {
      name: "Muhamad Budiwan, S.Si., M.Pd., Gr.",
      role: "Project Supervisor",
      image: "/team/pak-budi.png",
      sentence: "Principal of SMA Karisma Bangsa. Providing strategic vision and academic guidance to ensure this project achieves meaningful educational impact."
    },
    {
      name: "Karima Zuleika Putri Noor",
      role: "Tech Member 2",
      image: "/team/karima.png",
      sentence: "A Grade 11 student with a deep-rooted interest in computer science. Focused on building a seamless and interactive user experience for the website."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100">
      
      {/* --- CONSISTENT DYNAMIC BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239CA3AF' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }} />

        {/* Floating Blobs (Consistent with other pages) */}
        <motion.div style={{ y: y1 }} className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[120px]" />
        <motion.div style={{ y: y2 }} className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px]" />
        
        {/* Floating Science Icons */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute top-40 right-[15%] opacity-[0.07] text-slate-900">
          <Dna size={180} />
        </motion.div>
        <motion.div animate={{ y: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-20 left-[10%] opacity-[0.07] text-slate-900">
          <Microscope size={150} />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-slate-900">
          <Fingerprint size={400} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 🌿 HERO SECTION */}
        <section className="text-center mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-10">
              Bringing Biology to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600">Digital Era</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              SmartKey Bio was born out of a passion to simplify biodiversity identification through interactive and modern technology.
            </p>
          </motion.div>
        </section>

        {/* 👥 THE TEAM SECTION */}
        <section>
          <div className="flex flex-col items-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 text-center">
              The Minds Behind <br className="md:hidden" /> <span className="text-emerald-600">SmartKey Bio</span>
            </h2>
            <div className="flex items-center gap-4">
                <div className="h-1.5 w-20 bg-emerald-500 rounded-full shadow-lg shadow-emerald-200" />
                <div className="h-3 w-3 bg-emerald-300 rounded-full animate-ping" />
                <div className="h-1.5 w-10 bg-slate-200 rounded-full" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">
            {teamData.map((member, index) => (
              <TeamMember key={index} index={index} {...member} />
            ))}
          </div>
        </section>

        {/* --- FOOTER DECORATION --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 text-center"
        >
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;

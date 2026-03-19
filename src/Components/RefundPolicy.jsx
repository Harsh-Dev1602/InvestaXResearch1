import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, AlertTriangle, Scale, Ban, 
  ChevronRight, ShieldAlert, FileCheck, 
  Gavel, Info, ArrowRight
} from 'lucide-react';

/* ─── Animation Utility ─────────────────────────── */
const RevealText = ({ children, delay = 0 }) => (
  <div className="overflow-hidden">
    <motion.span
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="block"
    >
      {children}
    </motion.span>
  </div>
);

/* ─── MITC Card Component ────────────────────────── */
const MITCCard = ({ icon: Icon, title, points, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-[#0f172a]/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem] hover:border-emerald-500/30 transition-all group relative overflow-hidden h-full"
  >
    {/* Decorative Background Icon */}
    <div className="absolute top-0 right-0 p-8 text-emerald-500/5 group-hover:text-emerald-500/10 transition-colors pointer-events-none">
      <Icon size={120} />
    </div>

    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-black italic uppercase tracking-tight text-white">{title}</h3>
    </div>

    <ul className="space-y-5 relative z-10">
      {points.map((point, idx) => (
        <li key={idx} className="flex gap-4 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
          <ChevronRight size={16} className="text-emerald-500 flex-shrink-0 mt-1" />
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function MITC() {
  return (
    <div className="bg-[#020617] text-slate-300 min-h-screen selection:bg-emerald-500/30 font-sans pb-32">
      
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-[#0f172a] to-transparent border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-8"
          >
            <FileCheck size={12} className="animate-pulse" /> Standard Regulatory Disclosure
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-10 italic uppercase">
            <RevealText>MOST IMPORTANT</RevealText>
            <RevealText delay={0.1}><span className="text-emerald-500 text-outline">TERMS & CONDITIONS</span></RevealText>
          </h1>
          
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            In compliance with SEBI guidelines, we maintain zero ambiguity regarding our research framework, 
            risk parameters, and institutional service boundaries.
          </p>
        </div>
      </section>

      {/* ── CORE MITC GRID ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          <MITCCard 
            icon={Scale}
            title="01. Service Nature"
            delay={0.1}
            points={[
              "Investa-X provides independent equity research and multi-timeframe recommendations.",
              "Registered Entity: Pavan Choubey (SEBI RA: INH000022792). We do not provide PMS or Portfolio Advisory services.",
              "Execution of trades remains the exclusive right and responsibility of the client through their chosen broker."
            ]}
          />

          <MITCCard 
            icon={ShieldAlert}
            title="02. Risk Parameters"
            delay={0.2}
            points={[
              "Capital markets involve inherent risks. Securities market investments are subject to fluctuations.",
              "Past performance metrics shared by Investa-X are historical and do not guarantee future results.",
              "We provide no assured returns, capital protection guarantees, or profit-sharing arrangements."
            ]}
          />

          <MITCCard 
            icon={Ban}
            title="03. Liability & Usage"
            delay={0.3}
            points={[
              "Research reports are for the exclusive use of the paid subscriber and strictly prohibited from redistribution.",
              "Investa-X and its associates shall not be held liable for any financial impact resulting from trade execution.",
              "Subscribers are advised to verify research against their own risk profile before deployment."
            ]}
          />

          <MITCCard 
            icon={FileText}
            title="04. Financial Protocol"
            delay={0.4}
            points={[
              "All fees collected are strictly for research intelligence and digital dashboard access.",
              "Fees are inclusive of GST as per current mandates. No cash or personal account transfers are accepted.",
              "Refunds are processed on a pro-rata basis for unused service tenure as per SEBI regulations."
            ]}
          />

        </div>
      </section>

      {/* ── COMPLIANCE CALLOUT ────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-emerald-500 p-12 md:p-16 rounded-[3rem] text-[#020617] flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group">
           <Gavel size={180} className="absolute -bottom-10 -left-10 opacity-10 group-hover:scale-110 transition-transform pointer-events-none" />
           
           <div className="flex-grow relative z-10">
              <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-4 text-[#020617]">Grievance Redressal</h4>
              <p className="text-sm font-bold opacity-80 leading-relaxed max-w-md italic text-[#020617]">
                Our commitment to transparency extends to your concerns. If you have any feedback or grievances, our compliance desk is ready to assist.
              </p>
           </div>
           
           <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#020617] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 whitespace-nowrap shadow-2xl relative z-10"
           >
              Lodge Grievance <ArrowRight size={16} className="text-emerald-500" />
           </motion.button>
        </div>
      </section>

      {/* ── FOOTER STAMP ─────────────────────────────── */}
      <div className="mt-24 text-center">
        <div className="inline-block border border-white/5 bg-white/[0.02] px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          SEBI Registration Stamp: INH000022792
        </div>
      </div>
    </div>
  );
}
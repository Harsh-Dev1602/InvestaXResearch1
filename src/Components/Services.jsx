import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, BarChart3, Coins, Zap, 
  ArrowRight, ShieldCheck, Globe, TrendingUp 
} from 'lucide-react';

const serviceData = [
  {
    id: 0,
    title: 'Equity Market',
    tag: 'Cash Delivery',
    Icon: LineChart,
    content: 'Deep-dive analysis on value picks and growth stocks. We focus on fundamental rigor to help you build a sustainable long-term delivery portfolio.',
  },
  {
    id: 1,
    title: 'Future & Options',
    tag: 'Derivatives',
    Icon: BarChart3,
    content: 'Precision research covering price action, Open Interest (OI) analysis, and hedging strategies for stock and index contracts.',
  },
  {
    id: 2,
    title: "Commodity Market",
    tag: 'MCX / NCDEX',
    Icon: Coins,
    content: "Expert insights into Gold, Silver, and Crude Oil. Data-backed research synchronized with global commodity price movements.",
  },
  {
    id: 3,
    title: 'Algorithmic Trading',
    tag: 'Execution Tech',
    Icon: Zap,
    content: "Advanced quantitative solutions to reduce emotional bias and optimize execution speed for high-frequency market environments.",
  },
];

/* ─── Animated Service Card ────────────────────────────── */
const ServiceCard = ({ Icon, title, tag, content, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="group relative bg-[#0f172a]/40 border border-white/5 p-10 rounded-[2.5rem] hover:border-emerald-500/30 transition-all duration-500 flex flex-col h-full overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/5 blur-[80px] group-hover:bg-emerald-500/10 transition-colors" />

    <div className="flex justify-between items-start mb-10">
      <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-[#020617] transition-all duration-500">
        <Icon size={28} />
      </div>
      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 group-hover:text-emerald-500 transition-colors">
        {tag}
      </span>
    </div>

    <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-4">
      {title}
    </h3>
    
    <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow group-hover:text-slate-200 transition-colors">
      {content}
    </p>

    <div className="pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-emerald-500/20 transition-colors">
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
        View Intelligence Hub
      </span>
      <ArrowRight size={16} className="text-emerald-500 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
    </div>
  </motion.div>
);

export default function Services() {
  return (
    <div className="bg-[#020617] text-slate-300 min-h-screen font-sans selection:bg-emerald-500/30 pb-32">
      
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-10"
          >
            <ShieldCheck size={12} /> SEBI Registered Research Vertical
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-8 italic uppercase">
            Intelligent <br />
            <span className="text-emerald-500 text-outline">Solutions</span> for Wealth.
          </h1>
          
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-20">
            We provide the data, the rigor, and the research. You make the moves. 
            Explore our specialized market intelligence verticals.
          </p>
        </div>

        {/* ── SERVICES GRID ───────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* ── DATA STATS BAR ─────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="text-center">
            <div className="text-2xl font-black text-white italic">98%</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Data Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-white italic">24/7</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Market Monitor</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-white italic">15k+</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Active Subscriptions</div>
          </div>
          <div className="text-center border-emerald-500/20 pl-4 border-l">
            <div className="text-2xl font-black text-emerald-500 italic">SEBI</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Compliant</div>
          </div>
        </div>
      </section>
    </div>
  );
}
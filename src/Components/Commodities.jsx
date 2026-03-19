import React from 'react';
import { 
  BarChart3, 
  Flame, 
  Coins, 
  Activity, 
  Globe2, 
  Layers, 
  Sprout, 
  Zap,
  TrendingUp
} from 'lucide-react';

const services = [
  {
    title: "Precious Metals",
    icon: <Coins size={24} />,
    desc: "Daily & weekly research for Gold and Silver, tracking global hedge demand and inflation cues.",
    color: "group-hover:text-yellow-400",
    border: "hover:border-yellow-400/50"
  },
  {
    title: "Energy Sector",
    icon: <Flame size={24} />,
    desc: "Trend reports and trade levels for Crude Oil & Natural Gas based on OPEC+ and inventory data.",
    color: "group-hover:text-red-500",
    border: "hover:border-red-500/50"
  },
  {
    title: "Base Metals",
    icon: <Layers size={24} />,
    desc: "Deep-dive research on Copper, Zinc, and Aluminum linked to industrial demand and LME inventories.",
    color: "group-hover:text-slate-400",
    border: "hover:border-slate-400/50"
  },
  {
    title: "Agri Commodities",
    icon: <Sprout size={24} />,
    desc: "Fundamental reports on Soybeans, Wheat, and Sugar tracking monsoon patterns and seasonal cycles.",
    color: "group-hover:text-emerald-400",
    border: "hover:border-emerald-400/50"
  }
];

const Commodities = () => {
  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen selection:bg-emerald-500/30">
      
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden border-b border-white/5">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#1e293b]/50 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <Activity size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
              SEBI Registered Research Advisory
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
            COMMODITY MARKET <br />
            <span className="text-emerald-500">INTELLIGENCE.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Navigating MCX and International exchanges with data-backed technical and fundamental analysis for the serious trader.
          </p>
        </div>
      </section>

      {/* ── CORE CONTENT ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        
        {/* Market Definition Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              What is the Commodity Market?
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              The Commodity Market is the backbone of global trade, where essential goods like Gold, Crude Oil, and Agricultural products are traded. In India, primary exchanges like <strong className="text-white">MCX</strong> and <strong className="text-white">NCDEX</strong> allow investors to hedge risks and speculate on price movements.
            </p>
            <div className="flex items-center gap-4 text-emerald-500 font-bold group cursor-pointer">
              <span>Explore Trading Levels</span>
              <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 p-8 bg-[#0f172a]/50 border border-white/5 rounded-[2.5rem]">
            <div className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all">
              <Globe2 className="text-emerald-500 shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-white mb-1">Global Tracking</h4>
                <p className="text-sm text-slate-400">Monitoring LME, COMEX, and NYMEX cues in real-time for precise entry points.</p>
              </div>
            </div>
            <div className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all">
              <Zap className="text-emerald-500 shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-white mb-1">High Precision</h4>
                <p className="text-sm text-slate-400">Technical chart analysis combined with inventory and supply-chain data metrics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="text-center mb-16">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">
            Our Specialized Research
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div 
              key={i}
              className={`group p-10 bg-[#1e293b]/30 border border-white/5 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:bg-[#1e293b]/50 ${s.border}`}
            >
              <div className={`mb-8 transition-colors duration-300 ${s.color}`}>
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{s.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commodities;
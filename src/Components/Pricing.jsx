import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, ShieldAlert, Zap, Shield, 
  Crown, ArrowRight, Star, Sparkles 
} from 'lucide-react';

/* ─── Animation Component ─────────────────────────── */
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

/* ─── Pricing Card Sub-Component ──────────────────── */
const PriceCard = ({ title, desc, icon: Icon, features, isFeatured, ctaText, badge }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full ${
      isFeatured 
      ? 'bg-emerald-500/[0.03] border-emerald-500/30 shadow-[0_20px_50px_rgba(16,185,129,0.05)]' 
      : 'bg-[#0f172a]/40 border-white/5 hover:border-white/20'
    }`}
  >
    {badge && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald-500 text-[#020617] text-[10px] font-black uppercase tracking-widest rounded-full">
        {badge}
      </div>
    )}

    <div className={`mb-8 p-4 rounded-2xl w-fit ${isFeatured ? 'bg-emerald-500/10 text-emerald-500' : 'bg-white/5 text-slate-400'}`}>
      <Icon size={28} />
    </div>

    <h3 className="text-2xl font-black text-white italic uppercase tracking-tight mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-8">{desc}</p>

    <div className="space-y-4 mb-10 flex-grow">
      {features.map((feat, i) => (
        <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
          <div className="mt-1 bg-emerald-500/10 p-0.5 rounded-full">
            <Check size={12} className="text-emerald-500" />
          </div>
          <span className="leading-tight">{feat}</span>
        </div>
      ))}
    </div>

    <button className={`w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
      isFeatured 
      ? 'bg-emerald-500 text-[#020617] hover:bg-emerald-400 shadow-lg shadow-emerald-500/20' 
      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
    }`}>
      {ctaText} <ArrowRight size={14} />
    </button>
  </motion.div>
);

export default function Pricing() {
  const plans = [
    {
      title: "Normal Service",
      icon: Shield,
      desc: "Essential research for steady-state equity & commodity trading.",
      features: [
        "Daily Cash recommendations",
        "Short-term positional (2-5/wk)",
        "Live Entry & Exit alerts",
        "Weekly Market Outlook PDF"
      ],
      ctaText: "Begin Standard",
      isFeatured: false
    },
    {
      title: "Advanced Plus",
      icon: Zap,
      badge: "Institutional Favorite",
      desc: "Aggressive strategies for high-frequency derivative specialists.",
      features: [
        "Advanced F&O strategies",
        "Intraday Index Analysis (Nifty/BN)",
        "Priority 1-on-1 Support",
        "Sectoral Rotation Alpha Reports",
        "Proprietary Volatility Dashboard"
      ],
      ctaText: "Upgrade to Advanced",
      isFeatured: true
    },
    {
      title: "HNI Bespoke",
      icon: Crown,
      desc: "Custom-tailored research for high-capital institutional deployment.",
      features: [
        "Personal Research Manager",
        "Portfolio Risk Assessment",
        "Custom Strike Optimization",
        "Direct Analyst Consultation",
        "Quarterly Performance Review"
      ],
      ctaText: "Enquire for HNI",
      isFeatured: false
    }
  ];

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen selection:bg-emerald-500/30 font-sans pb-32">
      
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-[#0f172a] to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-8"
          >
            <Sparkles size={12} /> Strategic Access
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-8 italic uppercase">
            <RevealText>CHOOSE YOUR</RevealText>
            <RevealText delay={0.1}><span className="text-emerald-500 text-outline">TRADING EDGE</span></RevealText>
          </h1>
          
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Transparent, performance-driven research. No hidden costs. 
            All plans are designed to fit specific trading styles while maintaining 100% SEBI compliance.
          </p>
        </div>
      </section>

      {/* ── PRICING GRID ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {plans.map((plan, i) => (
          <PriceCard key={i} {...plan} />
        ))}
      </div>

      {/* ── COMPLIANCE FOOTER ────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-white/[0.02] border border-white/5 p-10 md:p-14 rounded-[3rem] relative overflow-hidden">
          <div className="flex items-center gap-4 mb-10 text-emerald-500">
            <ShieldAlert size={24} />
            <h4 className="text-sm font-black uppercase italic tracking-widest">Regulatory Disclosures</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px] text-slate-500 leading-relaxed uppercase tracking-wider font-bold italic">
            <div className="space-y-4">
              <p>• Registration: Pavan Choubey, SEBI Reg No: <span className="text-slate-300">INH000022792</span>. Past performance is no guarantee of future returns.</p>
              <p>• Market Risk: Trading involves substantial capital risk. We do not provide profit sharing or handle client funds.</p>
            </div>
            <div className="space-y-4">
              <p>• Refund Policy: Subscription fees are non-refundable, except on a <span className="text-slate-300 underline underline-offset-4 decoration-emerald-500/50">pro-rata basis</span> as per SEBI guidelines.</p>
              <p>• Advisory: We act as Research Analysts, not Investment Advisors. All data is for research purposes only.</p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-slate-600">Investa-X Research © 2026 | SEBI Registered Research Analyst</p>
          </div>
        </div>
      </section>
    </div>
  );
}
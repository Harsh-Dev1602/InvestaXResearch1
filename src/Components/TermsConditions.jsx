import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Shield, Scale, AlertCircle, 
  Globe, BookOpen, Clock, ChevronRight, 
  Gavel, Lock, Info 
} from 'lucide-react';

const PolicySection = ({ icon: Icon, title, children, delay = 0, variant = "default" }) => {
  const isAlert = variant === "alert";
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`p-8 md:p-12 rounded-[2.5rem] border transition-all duration-500 mb-8 ${
        isAlert 
          ? "bg-red-500/5 border-red-500/20 hover:border-red-500/40" 
          : "bg-[#0f172a]/40 border-white/5 hover:border-emerald-500/30"
      }`}
    >
      <div className={`flex items-center gap-4 mb-8 ${isAlert ? "text-red-500" : "text-emerald-500"}`}>
        <div className={`p-3 rounded-xl ${isAlert ? "bg-red-500/10" : "bg-emerald-500/10"}`}>
          <Icon size={24} />
        </div>
        <h3 className={`text-xl font-black italic uppercase tracking-tight ${isAlert ? "text-red-500" : "text-white"}`}>
          {title}
        </h3>
      </div>
      <div className="space-y-4 text-slate-400 text-sm leading-relaxed md:text-base">
        {children}
      </div>
    </motion.section>
  );
};

export default function TermsConditions() {
  return (
    <div className="bg-[#020617] text-slate-300 min-h-screen font-sans selection:bg-emerald-500/30 pb-32">
      
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 text-center border-b border-white/5 bg-gradient-to-b from-[#0f172a] to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            <BookOpen size={12} /> Service Protocol & Governance
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-8 italic uppercase">
            Terms <br />
            <span className="text-emerald-500 text-outline">& Governance</span>
          </h1>
          
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed italic font-medium">
            The legal framework governing your relationship with Pavan Choubey & Investa-X Research.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        
        {/* ── META INFO BAR ────────────────────────────── */}
        <div className="bg-[#020617] border border-white/10 p-6 rounded-3xl flex flex-wrap justify-between items-center gap-6 mb-12 shadow-2xl shadow-emerald-500/5">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Clock size={16} className="text-emerald-500" /> 
            Last Protocol Update: March 2026
          </div>
          <div className="bg-emerald-500/10 px-4 py-2 rounded-lg text-emerald-500 text-[10px] font-black tracking-widest border border-emerald-500/20">
            SEBI REG: INH000022792
          </div>
        </div>

        {/* ── SECTIONS ────────────────────────────────── */}
        <PolicySection icon={FileText} title="01. The Agreement" delay={0.1}>
          <p>
            By accessing <span className="text-white font-bold italic">Investa-X Research</span>, you irrevocably agree to be bound by these Governance Terms. This digital contract represents the entire agreement between the user and Pavan Choubey (SEBI RA).
          </p>
          <p className="pt-4 border-t border-white/5 flex items-start gap-3">
            <Info size={16} className="text-emerald-500 flex-shrink-0 mt-1" />
            Unauthorized use of our service parameters, research templates, or proprietary algorithms will result in immediate termination of access without prior notice.
          </p>
        </PolicySection>

        <PolicySection icon={Lock} title="02. Proprietary Rights" delay={0.2}>
          <p>
            All research reports, volatility signals, and "Owner Materials" are protected under the <span className="text-white">Copyright Act of India</span>. Your subscription grants a single-user, non-transferable, non-commercial license.
          </p>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5 italic">
            <span className="text-emerald-500 font-black tracking-widest text-[10px] block mb-2 underline uppercase">Strict Enforcement</span>
            Redistribution of research calls via Telegram, WhatsApp, or third-party digital forums is strictly prohibited. We employ digital forensic watermarking to track unauthorized leaks.
          </div>
        </PolicySection>

        <PolicySection icon={AlertCircle} title="03. Risk & Finality" variant="alert" delay={0.3}>
          <div className="space-y-6">
            <div className="p-6 bg-red-500/10 rounded-2xl border border-red-500/10">
              <h4 className="text-red-500 font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                <Gavel size={14}/> Strict No-Refund Policy
              </h4>
              <p className="text-red-200/70 text-sm italic leading-relaxed">
                Due to the immediate delivery of digital intelligence, all sales are final. Investa-X does not offer partial or full refunds under any circumstances once the Research Hub has been accessed.
              </p>
            </div>
            <p className="text-slate-400">
              <strong className="text-white uppercase italic tracking-tighter mr-2">Market Risk:</strong> 
              Trading in securities market is subject to market risks. All research is provided for information purposes. The user assumes 100% responsibility for financial outcomes and potential capital loss.
            </p>
          </div>
        </PolicySection>

        <PolicySection icon={Scale} title="04. Acceptable Conduct" delay={0.4}>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "No automated data collection (scraping).",
              "No credential sharing with 3rd parties.",
              "No use of research for sub-advisory.",
              "No infrastructure disruption/DDoS."
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5 text-xs font-bold uppercase tracking-tight text-slate-500">
                <ChevronRight size={14} className="text-emerald-500" /> {item}
              </li>
            ))}
          </ul>
        </PolicySection>

        <PolicySection icon={Globe} title="05. Jurisdiction" delay={0.5}>
          <p>
            These Governance Terms are interpreted under the laws of the Republic of India. In the event of a legal dispute, you agree to submit to the exclusive jurisdiction of the courts in:
          </p>
          <div className="text-2xl font-black italic text-white tracking-tighter pt-4">
            JABALPUR, MADHYA PRADESH, INDIA
          </div>
        </PolicySection>

      </main>

      {/* ── FOOTER STAMP ─────────────────────────────── */}
      <footer className="mt-20 text-center flex flex-col items-center gap-6 px-6">
        <div className="h-[1px] w-20 bg-emerald-500/30" />
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 max-w-sm leading-loose">
          Digital Signature Logged via IP Protocol • Secure Infrastructure by Investa-X
        </p>
      </footer>
    </div>
  );
}
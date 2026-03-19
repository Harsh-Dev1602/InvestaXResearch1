import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Database, Globe, Gavel, Cookie, 
  Mail, Phone, Download, Lock, Shield, ArrowRight
} from 'lucide-react';

/* ─── Animation Utility ─────────────────────────── */
const RevealText = ({ children, delay = 0 }) => (
  <div className="overflow-hidden">
    <motion.span
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="block"
    >
      {children}
    </motion.span>
  </div>
);

const SectionHeader = ({ icon: Icon, title, id }) => (
  <h2 id={id} className="group flex items-center gap-4 text-white text-2xl font-black italic uppercase tracking-tight mb-8 mt-16 scroll-mt-32">
    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500 group-hover:scale-110 transition-transform">
      <Icon size={20} />
    </div>
    {title}
    <div className="h-[1px] flex-grow bg-white/5 ml-4" />
  </h2>
);

export default function PrivacyPolicy() {
  const sections = [
    { id: "definitions", title: "Key Terms", icon: Gavel },
    { id: "collection", title: "Data Gathering", icon: Database },
    { id: "cookies", title: "Tracking Tech", icon: Cookie },
    { id: "disclosure", title: "Legal Disclosure", icon: Globe }
  ];

  return (
    <div className="bg-[#020617] text-slate-300 min-h-screen selection:bg-emerald-500/30 font-sans">
      
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 text-center border-b border-white/5 bg-gradient-to-b from-[#0f172a] to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-8"
          >
            <ShieldCheck size={12} className="animate-pulse" /> Data Protection Active
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter mb-8 italic uppercase">
            <RevealText>YOUR PRIVACY IS OUR</RevealText>
            <RevealText delay={0.1}><span className="text-emerald-500 text-outline">PRIORITY</span></RevealText>
          </h1>
          
          <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.3em]">
            Last Revised: September 2025 • Compliance Ref: RA-PR-09
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* ── MAIN CONTENT ───────────────────────────── */}
        <div className="lg:col-span-8 space-y-12">
          
          <section className="bg-emerald-500/5 border border-emerald-500/10 p-8 rounded-[2rem]">
            <p className="text-lg text-slate-200 leading-relaxed italic">
              "At Investa-X, we hold your trust in the highest regard. This document details how we handle your digital footprint to provide a secure and regulated research environment."
            </p>
          </section>

          {/* 01. DEFINITIONS */}
          <section>
            <SectionHeader id="definitions" title="01. Key Terms" icon={Gavel} />
            <div className="space-y-4">
              {[
                { label: "Service", val: "The Investa-X research terminal and associated web platforms." },
                { label: "Analyst", val: "Pavan Choubey (SEBI Registered Research Analyst: INH000022792)." },
                { label: "Usage Data", val: "Metadata collected automatically via browser headers and interaction logs." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-emerald-500 font-black uppercase text-[10px] tracking-widest block mb-2">{item.label}</span>
                  <p className="text-sm text-slate-300">{item.val}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 02. COLLECTION */}
          <section>
            <SectionHeader id="collection" title="02. Information Gathering" icon={Database} />
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">Personally Identifiable Information (PII)</h3>
            <p className="text-sm leading-relaxed mb-8">
              To comply with SEBI regulations (Anti-Money Laundering) and provide professional advisory, we collect contact details (Email, Phone), KYC documents, and PAN details for premium onboarding.
            </p>
            
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">Technical Footprint</h3>
            <p className="text-sm leading-relaxed">
              When you access our terminal, we log device identifiers (UUID), IP addresses, and OS versions. This is critical to prevent unauthorized account sharing and "Credential Stuffing" attacks.
            </p>
          </section>

          {/* 03. COOKIES */}
          <section>
            <SectionHeader id="cookies" title="03. Cookies & Tracking" icon={Cookie} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-[#0f172a]/40 border border-white/5 rounded-3xl group hover:border-emerald-500/30 transition-all">
                <Lock className="text-emerald-500 mb-6" size={24} />
                <h4 className="text-white font-black italic uppercase text-sm mb-3 tracking-tighter">Essential Session</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Required for maintaining secure encrypted handshakes between your browser and our research servers.</p>
              </div>
              <div className="p-8 bg-[#0f172a]/40 border border-white/5 rounded-3xl group hover:border-emerald-500/30 transition-all">
                <Shield className="text-emerald-500 mb-6" size={24} />
                <h4 className="text-white font-black italic uppercase text-sm mb-3 tracking-tighter">Security Monitoring</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Used to detect fraudulent access patterns and ensure high-frequency data integrity.</p>
              </div>
            </div>
          </section>

          {/* 04. DISCLOSURE */}
          <section className="pb-20">
            <SectionHeader id="disclosure" title="04. Legal Disclosure" icon={Globe} />
            <p className="text-sm leading-relaxed mb-6">
              We do <span className="text-white font-bold underline decoration-emerald-500 underline-offset-4">not</span> sell your data to third-party marketers. Disclosure occurs only under:
            </p>
            <ul className="space-y-4">
              {["Statutory requirements by SEBI or Law Enforcement.", "Protection and defense of the Company's legal assets.", "Subscription verification via Razorpay/Authorized Gateways."].map((li, i) => (
                <li key={i} className="flex gap-4 items-center text-sm">
                  <ArrowRight size={14} className="text-emerald-500" />
                  {li}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ── SIDEBAR ─────────────────────────────────── */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32 space-y-8">
            
            {/* Nav Card */}
            <div className="bg-[#0f172a]/40 border border-white/5 p-8 rounded-[2.5rem]">
              <h3 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8">On-Page Navigation</h3>
              <nav className="space-y-4">
                {sections.map((sec, i) => (
                  <a 
                    key={sec.id} 
                    href={`#${sec.id}`}
                    className="flex items-center justify-between group py-2"
                  >
                    <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                      0{i+1}. {sec.title}
                    </span>
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-emerald-500" />
                  </a>
                ))}
              </nav>

              <div className="mt-10 pt-8 border-t border-white/5 space-y-6">
                <div>
                  <h4 className="text-white text-[10px] font-black uppercase mb-4">Support Channels</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <Mail size={14} className="text-emerald-500" /> compliance@investaxresearch.com
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <Phone size={14} className="text-emerald-500" /> +91 62692 02505
                    </div>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-emerald-500 text-[#020617] rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Download size={14} /> Full Legal PDF
                </motion.button>
              </div>
            </div>

            {/* SEBI ID Card */}
            <div className="bg-emerald-500 border border-emerald-400 p-6 rounded-[2rem] text-[#020617] relative overflow-hidden group">
               <ShieldCheck size={80} className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform" />
               <p className="text-[10px] font-black uppercase mb-1">Registered Intermediary</p>
               <h4 className="text-xl font-black italic">INH000022792</h4>
            </div>

          </div>
        </aside>

      </main>
    </div>
  );
}
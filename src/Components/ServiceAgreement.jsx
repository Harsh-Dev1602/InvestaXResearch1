import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, MapPin, CreditCard, Calendar, 
  Briefcase, DollarSign, UploadCloud, CheckCircle2, 
  ShieldAlert, Fingerprint, ArrowRight, FileCheck, ShieldCheck
} from 'lucide-react';

const InputField = ({ label, icon: Icon, type = "text", placeholder, readOnly = false, value }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2">
      {Icon && <Icon size={12} />} {label}
    </label>
    <input 
      type={type}
      readOnly={readOnly}
      value={value}
      placeholder={placeholder}
      className={`bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-all ${readOnly ? 'opacity-60 cursor-not-allowed bg-transparent' : ''}`}
    />
  </div>
);

const UploadSlot = ({ title, subtitle, icon: Icon }) => (
  <label className="relative group cursor-pointer">
    <input type="file" className="hidden" />
    <div className="border-2 border-dashed border-white/10 group-hover:border-emerald-500/30 bg-white/[0.02] group-hover:bg-emerald-500/[0.02] rounded-2xl p-6 transition-all text-center">
      <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <Icon size={20} className="text-emerald-500" />
      </div>
      <div className="text-[11px] font-black uppercase text-slate-300 mb-1">{title}</div>
      <div className="text-[9px] text-slate-500 uppercase tracking-tighter">{subtitle}</div>
    </div>
  </label>
);

export default function ServiceAgreement() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-emerald-500/30 pb-32">
      
      {/* ── HEADER ─────────────────────────────────── */}
      <section className="pt-24 pb-16 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
        >
          <Fingerprint size={12} className="animate-pulse" /> Secure KYC Terminal v2.4
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4">
          Service <span className="text-emerald-500 text-outline">Agreement</span>
        </h1>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
          Onboarding Date: 17 March 2026 • Reference: IX-2026-KYC
        </p>
      </section>

      {/* ── FORM TERMINAL ────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0f172a]/40 border border-white/5 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 text-white/[0.02] pointer-events-none">
            <ShieldCheck size={300} />
          </div>

          <form className="relative z-10 space-y-16">
            
            {/* 01. PROFILE INFO */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-[#020617]">
                  <span className="font-black italic">01</span>
                </div>
                <h3 className="text-white font-black italic uppercase tracking-tight text-xl">Identity Verification</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Full Name" icon={User} placeholder="As per PAN card" />
                <InputField label="Father's Name" placeholder="Legal guardian name" />
                <InputField label="Date of Birth" icon={Calendar} type="date" />
                <InputField label="Email Address" icon={Mail} type="email" placeholder="client@investax.com" />
                <div className="md:col-span-2">
                  <InputField label="Permanent Address" icon={MapPin} placeholder="Full residential details including PIN code" />
                </div>
                <InputField label="PAN Number" icon={CreditCard} placeholder="ABCDE1234F" />
              </div>
            </div>

            {/* 02. SUBSCRIPTION */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-[#020617]">
                  <span className="font-black italic">02</span>
                </div>
                <h3 className="text-white font-black italic uppercase tracking-tight text-xl">Plan Selection</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Service Tier</label>
                  <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none appearance-none">
                    <option className="bg-[#020617]">Equity Intraday</option>
                    <option className="bg-[#020617]">Nifty Options</option>
                    <option className="bg-[#020617]">HNI Platinum</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Duration</label>
                  <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none appearance-none">
                    <option className="bg-[#020617]">Quarterly (3M)</option>
                    <option className="bg-[#020617]">Annual (12M)</option>
                  </select>
                </div>
                <InputField label="Billing Total" icon={DollarSign} value="₹ 45,000" readOnly={true} />
              </div>
            </div>

            {/* 03. KYC UPLOAD */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-[#020617]">
                  <span className="font-black italic">03</span>
                </div>
                <h3 className="text-white font-black italic uppercase tracking-tight text-xl">Compliance Vault</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <UploadSlot title="PAN Card" subtitle="Front View .JPG/.PNG" icon={CreditCard} />
                <UploadSlot title="Aadhar Front" subtitle="UID Primary .PDF" icon={ShieldAlert} />
                <UploadSlot title="Aadhar Back" subtitle="UID Reverse .PDF" icon={ShieldAlert} />
              </div>
            </div>

            {/* CONSENT & SUBMIT */}
            <div className="space-y-8 pt-8 border-t border-white/5">
              <div className="flex gap-4 p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/10">
                <input type="checkbox" className="mt-1 accent-emerald-500 h-5 w-5 rounded border-white/10" />
                <div className="space-y-2">
                  <p className="text-sm leading-relaxed">
                    I solemnly declare that the information provided is accurate. I acknowledge that <span className="text-white font-bold italic">Investa-X Research</span> operates as a SEBI Registered Analyst and I have read the <span className="text-emerald-500 underline underline-offset-4 cursor-pointer">Risk Disclosures</span>.
                  </p>
                  <div className="text-[10px] font-black uppercase text-slate-500">
                    Consent Logged: 43.243.36.172 • TS: 170326.1540
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#10b981' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-emerald-500 text-[#020617] rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3"
              >
                Execute Digital Agreement <FileCheck size={18} />
              </motion.button>
            </div>

          </form>
        </motion.div>
      </main>

      {/* ── SECURITY FOOTER ────────────────────────── */}
      <footer className="mt-20 text-center px-6">
        <div className="flex items-center justify-center gap-8 opacity-40">
           <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/SEBI_logo.svg/1200px-SEBI_logo.svg.png" className="h-6 grayscale contrast-200" alt="SEBI" />
           <div className="h-4 w-[1px] bg-white/20" />
           <div className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
             <ShieldCheck size={14} className="text-emerald-500" /> AES-256 Bit Encryption Active
           </div>
        </div>
      </footer>
    </div>
  );
}
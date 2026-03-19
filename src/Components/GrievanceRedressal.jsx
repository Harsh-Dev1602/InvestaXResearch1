import React from 'react';
import { 
  ShieldCheck, Mail, Phone, ExternalLink, 
  AlertOctagon, ChevronRight, Gavel, 
  Fingerprint, Landmark, Scale 
} from 'lucide-react';

/* ─── Level Card Component ─────────────────────────── */
const EscalationLevel = ({ level, title, description, icon: Icon, children }) => (
  <div className="bg-[#1e293b]/20 border border-white/5 p-8 rounded-[2.5rem] transition-all hover:border-emerald-500/30 group">
    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 tracking-widest uppercase mb-6">
      Stage {level}
    </div>
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-emerald-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} className="text-emerald-500" />
      </div>
      <h3 className="text-xl font-bold text-white tracking-tight italic uppercase">{title}</h3>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed mb-8">
      {description}
    </p>
    {children}
  </div>
);

export default function GrievanceRedressal() {
  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen selection:bg-emerald-500/30 font-sans">
      
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 text-center bg-gradient-to-b from-[#0f172a] to-[#020617]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-emerald-500 mb-6">
            <Gavel size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Compliance & Integrity</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-8 italic uppercase">
            INVESTOR <span className="text-emerald-500">RIGHTS</span> <br />
            MATRIX
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A structured framework designed to ensure every concern is addressed with absolute professional accountability and transparency.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* ── REGISTRATION HEADER ─────────────────────── */}
        <section className="mb-12">
          <div className="bg-[#0f172a] border border-emerald-500/20 rounded-[2.5rem] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 relative overflow-hidden group">
            {/* Visual background accent */}
            <div className="absolute -right-20 -top-20 opacity-5 group-hover:opacity-10 transition-opacity">
              <Landmark size={300} className="text-emerald-500" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 text-emerald-500">
                <Fingerprint size={20} />
                <h4 className="text-[10px] font-black uppercase tracking-widest">SEBI Identity</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500 text-xs uppercase font-bold">Registered Analyst</span>
                  <span className="text-white font-bold text-sm">Pavan Choubey</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500 text-xs uppercase font-bold">RA Reg No.</span>
                  <span className="text-emerald-500 font-mono font-black text-sm">INH000022792</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 border-l border-white/5 pl-0 md:pl-12">
              <div className="flex items-center gap-3 mb-6 text-emerald-500">
                <ShieldCheck size={20} />
                <h4 className="text-[10px] font-black uppercase tracking-widest">Exchange Enrollment</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500 text-xs uppercase font-bold">BSE Enlistment</span>
                  <span className="text-white font-bold text-sm">ID: 6643</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500 text-xs uppercase font-bold">Verification</span>
                  <a href="https://www.sebi.gov.in" className="text-emerald-500 hover:text-white transition-colors flex items-center gap-1 text-xs font-black italic uppercase">
                    Official SEBI Portal <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── ESCALATION STEPS ─────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <EscalationLevel 
            level="01" 
            title="Internal Desk" 
            icon={Mail}
            description="Address your initial query directly to our internal resolution team for immediate intervention."
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <Mail size={16} className="text-emerald-500" />
                <span className="text-sm font-bold text-white">info@investaxresearch.com</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <Phone size={16} className="text-emerald-500" />
                <span className="text-sm font-bold text-white">+91 6269202505</span>
              </div>
            </div>
          </EscalationLevel>

          <EscalationLevel 
            level="02" 
            title="SEBI SCORES" 
            icon={Scale}
            description="If your grievance remains unresolved after 7 working days, escalate to the official SEBI portal."
          >
            <a href="https://scores.sebi.gov.in/" target="_blank" rel="noreferrer" 
               className="flex items-center justify-between w-full p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl hover:bg-emerald-500/20 transition-all group/link">
              <span className="text-xs font-black uppercase text-emerald-500 tracking-widest italic">File via SCORES</span>
              <ChevronRight size={18} className="text-emerald-500 group-hover/link:translate-x-1 transition-transform" />
            </a>
            <div className="mt-6 text-[10px] text-slate-500 text-center font-bold tracking-widest uppercase">
              Toll Free: 1800 266 7575
            </div>
          </EscalationLevel>

          <EscalationLevel 
            level="03" 
            title="Smart ODR" 
            icon={Landmark}
            description="Utilize the Online Dispute Resolution portal for independent arbitration and professional mediation."
          >
            <a href="https://smartodr.in/" target="_blank" rel="noreferrer" 
               className="block w-full text-center py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-emerald-900/20 transition-all">
              Launch Smart ODR <ExternalLink size={14} className="inline ml-2" />
            </a>
          </EscalationLevel>
        </div>

        {/* ── FRAUD ALERT ─────────────────────────── */}
        <div className="mt-12 p-8 bg-red-500/5 border border-red-500/20 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center">
          <div className="p-5 bg-red-500/10 rounded-3xl animate-pulse">
            <AlertOctagon size={40} className="text-red-500" />
          </div>
          <div>
            <h4 className="text-red-500 font-black text-lg uppercase tracking-widest italic mb-2">Impersonation & Fraud Warning</h4>
            <p className="text-slate-400 text-sm leading-relaxed max-w-4xl">
              Investa-X Research operates <span className="text-white font-bold underline decoration-red-500/50">EXCLUSIVELY</span> through official channels. Any other entity claiming to represent Pavan Choubey is fraudulent. We do not accept fees in personal accounts. Always verify the payment link on our official portal before transacting.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
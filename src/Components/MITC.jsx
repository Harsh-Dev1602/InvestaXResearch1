import React from 'react';
import { 
  ShieldCheck, AlertTriangle, Scale, CreditCard, 
  ChevronRight, ExternalLink, ShieldAlert, Fingerprint,
  Verified, Ban, Landmark,Mail
} from 'lucide-react';

/* ─── Term Card Component ─────────────────────────── */
const TermCard = ({ id, title, desc, icon: Icon }) => (
  <div className="bg-[#0f172a]/40 border border-white/5 p-10 rounded-[2.5rem] hover:border-emerald-500/30 transition-all group relative overflow-hidden">
    <div className="absolute top-6 right-8 text-5xl font-black text-white opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
      {id}
    </div>
    <div className="mb-8 p-4 bg-emerald-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
      <Icon size={24} className="text-emerald-500" />
    </div>
    <h3 className="text-2xl font-black text-white italic uppercase tracking-tight mb-4">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function MITC() {
  const coreTerms = [
    {
      id: "01",
      icon: Ban,
      title: "No Execution Power",
      desc: "As a Research Analyst (RA), we strictly cannot execute trades on your behalf. We do not manage personal accounts or handle client funds for investment purposes."
    },
    {
      id: "02",
      icon: CreditCard,
      title: "Fee Compliance",
      desc: "Fees are capped at ₹1,51,000/- per family/annum. All payments must be digital; cash transactions are strictly prohibited and non-compliant."
    },
    {
      id: "03",
      icon: ShieldCheck,
      title: "No Performance Guarantee",
      desc: "Assured or fixed returns are illegal under SEBI regulations. All recommendations are research-based and subject to inherent market volatility."
    }
  ];

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen selection:bg-emerald-500/30 font-sans pb-24">
      
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-[#0f172a] to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-8">
            <Fingerprint size={12} /> Official RA Protocol
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-8 italic uppercase">
            MOST IMPORTANT <br />
            <span className="text-emerald-500 text-outline">TERMS & CONDITIONS</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Essential SEBI-mandated guidelines ensuring absolute transparency and professional distance between the Research Analyst and the Investor.
          </p>
        </div>
      </section>

      {/* ── CORE TERMS GRID ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {coreTerms.map((term) => (
          <TermCard key={term.id} {...term} />
        ))}
      </section>

      {/* ── SCAM ALERT BOX ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-red-500/5 border border-red-500/20 rounded-[3rem] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none uppercase font-black text-red-500 text-9xl leading-none">
            SCAM ALERT SCAM ALERT SCAM ALERT
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 text-red-500 mb-8">
              <ShieldAlert size={48} />
              <h3 className="text-4xl font-black italic uppercase tracking-tighter">Fraud <br />Warning</h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Beware of fraudulent Telegram/WhatsApp groups impersonating <strong>Investa-X Research</strong>. We <span className="text-white font-bold underline decoration-red-500">NEVER</span> ask for your trading OTPs, login credentials, or portfolio access.
            </p>
          </div>
          
          <div className="relative z-10 space-y-4">
            {[
              "Verify Registration: INH000022792",
              "Payment: CeFCoM mechanism only",
              "Privacy: Never share Trading Passwords"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-black/40 border border-red-500/10 rounded-2xl group hover:border-red-500/40 transition-all">
                <div className="bg-red-500/10 p-2 rounded-lg text-red-500">
                  <Verified size={18} />
                </div>
                <span className="text-sm font-bold text-slate-200 uppercase tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRIEVANCE STEPS ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-white text-center italic uppercase tracking-tight mb-16">
          Standard <span className="text-emerald-500 italic">Redressal</span> Pathway
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { level: "01", icon: Mail, label: "Compliance Desk", link: "mailto:info@investaxresearch.com" },
            { level: "02", icon: Landmark, label: "SEBI SCORES Portal", link: "https://scores.sebi.gov.in" },
            { level: "03", icon: Scale, label: "Smart ODR Platform", link: "https://smartodr.in" }
          ].map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noreferrer" className="bg-[#0f172a]/30 border border-white/5 p-8 rounded-[2rem] hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all group text-center">
              <div className="text-[10px] font-black text-slate-500 mb-6 uppercase tracking-widest">Level {item.level}</div>
              <h4 className="text-xl font-bold text-white mb-6 uppercase italic">{item.label}</h4>
              <div className="flex justify-center text-emerald-500 group-hover:translate-x-1 transition-transform">
                <ExternalLink size={20} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FOOTER DISCLAIMER ───────────────────────── */}
      <footer className="mt-24 px-6 border-t border-white/5 pt-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-widest font-bold">
            Registration granted by SEBI, membership of RAASB and NISM certification in no way guarantee 
            performance of the intermediary or provide assurance of returns to investors. 
            <br className="hidden md:block" />
            Investments in securities market are subject to market risks. Read all related documents carefully before investing.
          </p>
        </div>
      </footer>
    </div>
  );
}
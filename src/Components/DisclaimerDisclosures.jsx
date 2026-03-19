import React from 'react';
import { 
  ShieldCheck, AlertTriangle, Fingerprint, Activity, 
  Scale, Cpu, Banknote, ExternalLink, ShieldAlert
} from 'lucide-react';

const DisclosureCard = ({ icon: Icon, title, children }) => (
  <div className="bg-[#1e293b]/20 border border-white/5 p-8 rounded-[2rem] transition-all hover:border-emerald-500/30 group">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
        <Icon size={20} className="text-emerald-500" />
      </div>
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white italic">{title}</h3>
    </div>
    <div className="text-slate-400 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

export default function DisclaimerDisclosures() {
  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen selection:bg-emerald-500/30">
      
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic uppercase">
            LEGAL DISCLAIMER <br />
            <span className="text-emerald-500">& MATERIAL DISCLOSURES</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Official regulatory filings and mandatory risk disclosures for Investa-X Research (SEBI Registration: INH000022792).
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ── LEFT COLUMN: REGULATORY INFO (5 Cols) ───── */}
          <div className="lg:col-span-5 space-y-8 sticky top-32">
            <div className="bg-[#0f172a] p-10 rounded-[2.5rem] border border-emerald-500/20 shadow-2xl shadow-emerald-900/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Fingerprint size={120} className="text-emerald-500" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                <Fingerprint size={28} className="text-emerald-500" />
                Entity Profile
              </h2>
              
              <div className="space-y-6">
                {[
                  { label: "Registration Name", value: "Pavan Choubey" },
                  { label: "Trade Name", value: "Investa – X Research" },
                  { label: "SEBI Reg No", value: "INH000022792", highlight: true },
                  { label: "BSE Enlistment", value: "6643" },
                  { label: "Type", value: "Individual Analyst" },
                  { label: "Validity", value: "20 August 2030" }
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/5 pb-4 group cursor-default">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className={`text-base font-bold transition-colors ${item.highlight ? 'text-emerald-500' : 'text-slate-200 group-hover:text-white'}`}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <DisclosureCard icon={ShieldCheck} title="Disciplinary History">
              No disciplinary actions, penalties, or regulatory measures have been taken against <strong className="text-white">Pavan Choubey (INH000022792)</strong> or its associates by SEBI or any other regulatory authority to date.
            </DisclosureCard>
          </div>

          {/* ── RIGHT COLUMN: DISCLOSURES (7 Cols) ──────── */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Market Risk Banner */}
            <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-3xl flex gap-6 items-start">
              <div className="p-3 bg-red-500/10 rounded-xl">
                <AlertTriangle className="text-red-500" size={24} />
              </div>
              <div>
                <h4 className="text-red-500 font-black text-xs uppercase tracking-widest mb-2 italic">Standard Market Warning</h4>
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  “Investment in securities market are subject to market risks. Read all the related documents carefully before investing.”
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DisclosureCard icon={Activity} title="Recommendation Risks">
                Recommendations may involve open positions without guaranteed stop-losses. We strictly advise exiting positions with a <strong className="text-emerald-500">20% loss</strong> from the entry side to protect capital.
              </DisclosureCard>

              <DisclosureCard icon={Banknote} title="CeFCoM Compliance">
                All fees must be processed through the <strong className="text-white text-xs font-black uppercase">Investa X Research</strong> bank account or CeFCoM. Cash payments or personal transfers are strictly prohibited.
              </DisclosureCard>

              <DisclosureCard icon={Cpu} title="AI & Tech Disclosure">
                Our analysis integrates <strong className="text-white">AI-driven data processing</strong>. Note that AI outputs are subject to algorithm biases and system vulnerabilities; use as one factor in decision making.
              </DisclosureCard>

              <DisclosureCard icon={Scale} title="Conflict of Interest">
                Analysts hold <strong className="text-white">zero financial interest</strong> in recommended subject companies. No analyst owns 1% or more of the securities in any company under active coverage.
              </DisclosureCard>
            </div>

            {/* SEBI External Link */}
            <a 
              href="https://www.sebi.gov.in" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between p-6 bg-[#1e293b]/40 border border-white/5 rounded-2xl group hover:border-emerald-500/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <ShieldAlert className="text-emerald-500" size={20} />
                <span className="text-sm font-bold text-white">Verify Registration on SEBI Portal</span>
              </div>
              <ExternalLink size={16} className="text-slate-500 group-hover:text-emerald-500 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* ── RATINGS LEGEND ───────────────────────────── */}
      <section className="px-6 py-24 bg-gradient-to-t from-[#0f172a] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Securities Ratings Legend</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { tag: 'BUY', desc: 'Purchase within defined price range only.' },
              { tag: 'SELL', desc: 'Exit as per the range defined in calls.' },
              { tag: 'HOLD', desc: 'Maintain position until further update.' },
              { tag: 'EXIT', desc: 'Close all quantities immediately.' },
              { tag: 'BOOK PROFIT', desc: 'Sell quantities equivalent to profit.' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[#020617] border border-white/5 rounded-2xl hover:border-emerald-500/50 transition-all text-center">
                <div className="text-emerald-500 font-black text-lg mb-2 italic tracking-tighter">{item.tag}</div>
                <div className="text-[11px] text-slate-500 leading-relaxed uppercase tracking-wider">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
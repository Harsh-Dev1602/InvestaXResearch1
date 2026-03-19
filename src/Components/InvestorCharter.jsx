import React, { useState } from 'react';
import { 
  FileText, ChevronDown, ShieldCheck, Scale, 
  ExternalLink, UserCheck, AlertCircle, Info 
} from 'lucide-react';

/* ─── Accordion Component ───────────────────────────────── */
const AccordionItem = ({ index, title, content, isOpen, onToggle }) => (
  <div className="mb-4 group">
    <button
      onClick={onToggle}
      className={`w-full text-left px-8 py-6 rounded-3xl border transition-all duration-300 flex items-center justify-between ${
        isOpen ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-[#0f172a] border-white/5 hover:border-white/10'
      }`}
    >
      <div className="flex items-center gap-6">
        <span className={`text-[10px] font-black tracking-widest ${isOpen ? 'text-emerald-500' : 'text-slate-500'}`}>
          0{index + 1}
        </span>
        <span className={`text-base font-bold italic uppercase tracking-tight ${isOpen ? 'text-white' : 'text-slate-400'}`}>
          {title}
        </span>
      </div>
      <ChevronDown 
        size={18} 
        className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} 
      />
    </button>
    <div 
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-12 py-8 text-slate-400 text-sm leading-relaxed border-l-2 border-emerald-500/20 ml-8 my-2">
        {content}
      </div>
    </div>
  </div>
);

/* ─── Main Page ─────────────────────────────────────────── */
export default function InvestorCharter() {
  const [openIndex, setOpenIndex] = useState(0);

  const charterSections = [
    {
      title: 'Rights of the Investors',
      content: 'Receive fair treatment and high professional standards. You are entitled to receive research reports and recommendations transparently. We ensure full privacy of your data and provide access to a structured grievance redressal mechanism.',
    },
    {
      title: 'Responsibilities of Investors',
      content: 'Engage only with SEBI-registered analysts. Ensure your contact details are updated. Understand risk disclosures and never share your demat login credentials. Always demand receipts for any payments made via official channels.',
    },
    {
      title: "Dos and Don'ts",
      content: "Do verify registration at sebi.gov.in. Do read reports thoroughly. Do NOT act on unverified tips or rumors. Do NOT pay fees to personal accounts of employees or associates.",
    },
    {
      title: 'Regulatory Protections',
      content: "You are protected under SEBI (Research Analysts) Regulations, 2014. We must disclose conflicts of interest and cannot promise 'assured returns'. You have the right to lodge complaints with SEBI SCORES at any time.",
    },
  ];

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen selection:bg-emerald-500/30 font-sans">
      
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-[#0f172a] to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-8">
            <ShieldCheck size={12} /> SEBI Compliance Mandate
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-8 italic uppercase">
            INVESTOR <span className="text-emerald-500 text-outline">CHARTER</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            In alignment with SEBI Circular SEBI/HO/IMD/IMD-II/P/CIR/2021/681, this charter outlines your rights and our institutional standards.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1e293b]/40 border border-white/5 rounded-2xl">
            <FileText size={16} className="text-emerald-500" />
            <span className="text-[11px] font-mono text-slate-300 font-bold uppercase tracking-wider">
              Ref: CIR/2021/681
            </span>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK SECTION ───────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500">
              <Scale size={28} />
            </div>
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tight">Operational Framework</h2>
          </div>
          
          <div className="space-y-2">
            {charterSections.map((s, i) => (
              <AccordionItem
                key={i} index={i}
                title={s.title} content={s.content}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOLUTION STATS ─────────────────────────── */}
      <section className="py-20 px-6 bg-[#0f172a]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-[#020617] rounded-[2.5rem] border border-white/5 text-center">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Max Resolution</div>
              <div className="text-5xl font-black text-emerald-500 italic uppercase tracking-tighter">30 Days</div>
              <p className="mt-4 text-xs text-slate-500">Standard SEBI TAT</p>
            </div>
            <div className="p-10 bg-[#020617] rounded-[2.5rem] border border-white/5 text-center">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Complaint Acknowledgment</div>
              <div className="text-5xl font-black text-white italic uppercase tracking-tighter">24 Hours</div>
              <p className="mt-4 text-xs text-slate-500">Direct Desk Response</p>
            </div>
            <div className="p-10 bg-[#020617] rounded-[2.5rem] border border-white/5 text-center">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Audit Frequency</div>
              <div className="text-5xl font-black text-emerald-500 italic uppercase tracking-tighter">Monthly</div>
              <p className="mt-4 text-xs text-slate-500">Internal Compliance Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT DIRECTORY ────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-black text-white text-center italic uppercase tracking-tight mb-16">
            Compliance <span className="text-emerald-500 underline underline-offset-8">Directory</span>
          </h3>
          
          <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-[#0f172a]/30 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/5 border-b border-white/5">
                    {['Position', 'Officer', 'Official Email', 'Contact'].map(h => (
                      <th key={h} className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] italic">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { role: 'Research Analyst', name: 'Pavan Choubey', email: 'info@investaxresearch.com', phone: '+91 6269202505' },
                    { role: 'Compliance Officer', name: 'Pavan Choubey', email: 'compliance@investaxresearch.com', phone: '+91 6269202505' },
                    { role: 'Grievance Head', name: 'Pavan Choubey', email: 'info@investaxresearch.com', phone: '+91 6269202505' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="px-8 py-6 text-emerald-500 font-black text-xs uppercase italic tracking-wider">{row.role}</td>
                      <td className="px-8 py-6 text-white font-bold text-sm">{row.name}</td>
                      <td className="px-8 py-6 text-slate-400 font-mono text-xs">{row.email}</td>
                      <td className="px-8 py-6 text-slate-400 font-bold text-sm">{row.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between p-8 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 gap-6">
            <div className="flex items-center gap-4 text-emerald-500">
              <Info size={20} />
              <p className="text-xs font-bold uppercase tracking-widest italic">Escalate to SEBI Scores if unresolved after 30 days</p>
            </div>
            <a href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer" className="px-8 py-3 bg-emerald-500 text-black font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all flex items-center gap-2">
              SEBI SCORES <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}